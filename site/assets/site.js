// MindOS site — client-side search (⌘K / /), mobile menu, docs nav highlight
(function () {
  'use strict';

  // ---------- mobile menu ----------
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---------- docs sidebar active link ----------
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.docs-side a').forEach(function (a) {
    if (a.getAttribute('href').split('/').pop() === here) a.classList.add('active');
  });

  // ---------- scroll reveals + diagram activation ----------
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var revealEls = document.querySelectorAll('.reveal, .reveal-late');
  if (reduced || typeof IntersectionObserver === 'undefined') {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { ro.observe(el); });
  }

  // hero art + flow pane get .in to trigger their internal draw-in sequences
  var diagrams = document.querySelectorAll('.hero-art, .flow-pane');
  if (reduced || typeof IntersectionObserver === 'undefined') {
    diagrams.forEach(function (d) { d.classList.add('in'); });
  } else if (diagrams.length) {
    var dio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); dio.unobserve(en.target); }
      });
    }, { threshold: 0.25 });
    diagrams.forEach(function (d) { dio.observe(d); });
  }

  // ---------- restrained parallax on the hero art ----------
  var heroArt = document.getElementById('heroArt');
  var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (heroArt && !reduced && finePointer) {
    var ticking = false;
    var applyParallax = function () {
      ticking = false;
      var y = window.scrollY || 0;
      if (y < window.innerHeight * 1.5) {
        heroArt.style.setProperty('--parallax', Math.min(y * 0.08, 48).toFixed(1) + 'px');
      }
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(applyParallax); }
    }, { passive: true });
  }

  // ---------- mark animation (seal-settle, >22px renders only) ----------
  // .mark-animated elements are 28px hero marks; ≤22px marks use .mark-static and never animate.
  // `reduced` was computed above for reveals/parallax.
  var animatedMarks = document.querySelectorAll('.mark-animated');
  if (!animatedMarks.length) { /* skip */ }
  else if (reduced || typeof IntersectionObserver === 'undefined') {
    animatedMarks.forEach(function (m) { m.classList.add('settled'); });
  } else {
    var mo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('settled');
          mo.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    animatedMarks.forEach(function (m) { mo.observe(m); });
  }

  // ---------- search ----------
  var overlay = document.querySelector('.search-overlay');
  if (!overlay) return;
  var input = overlay.querySelector('input');
  var results = overlay.querySelector('.search-results');
  var INDEX = [];
  var selected = -1;

  function loadIndex() {
    if (INDEX.length) return Promise.resolve(INDEX);
    var base = document.body.getAttribute('data-site-root') || '';
    return fetch(base + 'assets/search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (pages) {
        INDEX = pages.map(function (p) {
          return { title: p.title, url: p.url, section: p.section, text: p.text.toLowerCase(), hay: (p.title + ' ' + p.section + ' ' + p.text).toLowerCase() };
        });
        return INDEX;
      })
      .catch(function () { INDEX = []; return INDEX; });
  }

  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function search(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) return [];
    var terms = q.split(/\s+/).filter(Boolean);
    var scored = [];
    INDEX.forEach(function (p) {
      var score = 0, ok = true;
      terms.forEach(function (t) {
        var ti = p.title.toLowerCase().indexOf(t);
        if (ti >= 0) score += 30 - Math.min(ti, 20);
        else if (p.hay.indexOf(t) >= 0) score += 8;
        else ok = false;
      });
      if (ok) scored.push({ p: p, score: score });
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, 12).map(function (s) { return s.p; });
  }

  function snippet(p, q) {
    var terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var low = p.text.toLowerCase();
    for (var i = 0; i < terms.length; i++) {
      var idx = low.indexOf(terms[i]);
      if (idx >= 0) {
        var start = Math.max(0, idx - 40);
        return '…' + esc(p.text.slice(start, idx + 80)) + '…';
      }
    }
    return esc(p.text.slice(0, 110));
  }

  function render(q) {
    var hits = search(q);
    selected = -1;
    if (!hits.length) {
      results.innerHTML = q.trim().length >= 2
        ? '<div class="search-empty">No results for “' + esc(q) + '”.</div>'
        : '<div class="search-empty">Type at least two characters to search the docs.</div>';
      return;
    }
    results.innerHTML = hits.map(function (h, i) {
      var base = document.body.getAttribute('data-site-root') || '';
      var t = esc(h.title);
      var terms = q.trim().toLowerCase().split(/\s+/);
      terms.forEach(function (term) {
        if (term.length < 2) return;
        t = t.replace(new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
      });
      return '<a class="hit" href="' + base + h.url + '" data-i="' + i + '">' +
        '<span class="ht">' + t + '</span><span class="hs">' + esc(h.section) + ' — ' + snippet(h, q) + '</span></a>';
    }).join('');
    Array.prototype.forEach.call(results.querySelectorAll('.hit'), function (a) {
      a.addEventListener('click', close);
    });
  }

  function open() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    loadIndex().then(function () { input.focus(); render(input.value); });
  }
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
  }

  document.querySelectorAll('[data-search-open]').forEach(function (el) {
    el.addEventListener('click', open);
  });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); return; }
    if (e.key === '/' && !overlay.classList.contains('open')) {
      var tag = (document.activeElement && document.activeElement.tagName) || '';
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') { e.preventDefault(); open(); }
      return;
    }
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      var hits = results.querySelectorAll('.hit');
      if (!hits.length) return;
      selected += e.key === 'ArrowDown' ? 1 : -1;
      if (selected < 0) selected = hits.length - 1;
      if (selected >= hits.length) selected = 0;
      hits.forEach(function (h, i) { h.classList.toggle('selected', i === selected); });
      hits[selected].scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'Enter' && selected >= 0) {
      var a = results.querySelectorAll('.hit')[selected];
      if (a) { location.href = a.href; close(); }
    }
  });

  var deb;
  input.addEventListener('input', function () {
    clearTimeout(deb);
    deb = setTimeout(function () { render(input.value); }, 90);
  });
})();
