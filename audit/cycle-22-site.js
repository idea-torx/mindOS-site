/**
 * MindOS site — client entry
 * Search (⌘K / /), mobile menu, docs nav highlight, scroll reveals,
 * diagram draw-in, parallax, scroll-spy, copy buttons.
 * Vanilla JS, no deps, ~314 lines. Strict monochrome, reduced-motion safe.
 * Code-quality: grouped by feature with JSDoc + debounce + fetch guard.
 */
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
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== toggle) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
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
  var diagrams = document.querySelectorAll('.hero-art, .flow-pane, .fail-pane, .mem-pane, .sm-pane, .rec-pane, .arch-pane, .security-pane, .seam-pane');
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

  // ---------- scroll-spy: highlight active section in header nav ----------
  var navLinks = document.querySelectorAll('.site-nav a[data-nav]');
  var sectionIds = Array.prototype.map.call(navLinks, function (a) { return a.getAttribute('data-nav'); });
  var sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (navLinks.length && sections.length && typeof IntersectionObserver !== 'undefined' && !reduced) {
    var activeId = null;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) activeId = en.target.id;
      });
      navLinks.forEach(function (a) {
        var on = a.getAttribute('data-nav') === activeId;
        a.classList.toggle('is-active', on);
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    }, { threshold: 0.35, rootMargin: '-80px 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  } else if (navLinks.length && 'onscroll' in window) {
    // fallback: simple scroll handler without IntersectionObserver (e.g. reduced-motion)
    var sectionsTop = sections.map(function (s) { return { id: s.id, el: s }; });
    var onScroll = function () {
      var y = window.scrollY + 100;
      var cur = sectionsTop[0] ? sectionsTop[0].id : null;
      sectionsTop.forEach(function (s) {
        if (s.el.offsetTop <= y) cur = s.id;
      });
      navLinks.forEach(function (a) {
        var on = a.getAttribute('data-nav') === cur;
        a.classList.toggle('is-active', on);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- copy buttons for terminal / code blocks ----------
  function setCopied(btn) {
    var prev = btn.textContent;
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    var live = document.getElementById('copy-live');
    if (live) { live.textContent = 'Copied to clipboard'; setTimeout(function(){ live.textContent=''; }, 1600); }
    setTimeout(function () { btn.textContent = prev; btn.classList.remove('copied'); }, 1600);
  }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }
  document.querySelectorAll('[data-copyable], pre.block[data-copyable]').forEach(function (wrap) {
    var btn = wrap.querySelector('.copy-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var body = wrap.querySelector('.term-body');
      var text;
      if (body) {
        // terminal: body holds the code, button is in term-bar outside body — safe to read directly
        text = body.textContent.trim();
      } else {
        // generic: clone wrapper, strip any copy button(s) so “Copy” isn’t copied, then read text
        var clone = wrap.cloneNode(true);
        clone.querySelectorAll('.copy-btn').forEach(function (b) { b.remove(); });
        text = clone.textContent.trim();
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { setCopied(btn); }, function () { fallbackCopy(text); setCopied(btn); });
      } else {
        fallbackCopy(text);
        setCopied(btn);
      }
    });
  });

  // ---------- diagram keyboard focus ring helper (adds subtle hint on first Tab) ----------
  var firstTab = false;
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' && !firstTab) {
      firstTab = true;
      document.body.classList.add('user-tabbing');
    }
  });

  // ---------- search ----------
  var overlay = document.querySelector('.search-overlay');
  if (!overlay) return;
  var input = overlay.querySelector('input');
  var results = overlay.querySelector('.search-results');
  var INDEX = [];
  var selected = -1;

  /** load and cache search index with fetch guard (network or parse fail → empty) */
  function loadIndex() {
    if (INDEX.length) return Promise.resolve(INDEX);
    var base = document.body.getAttribute('data-site-root') || '';
    return fetch(base + 'assets/search-index.json')
      .then(function (r) {
        if (!r.ok) throw new Error('index ' + r.status);
        return r.json();
      })
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

  var opener = null;
  function open() {
    opener = document.activeElement;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    loadIndex().then(function () { input.focus(); render(input.value); });
  }
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
    if (opener && typeof opener.focus === 'function') { try { opener.focus(); } catch (e) {} opener = null; }
  }

  document.querySelectorAll('[data-search-open]').forEach(function (el) {
    el.addEventListener('click', open);
  });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

  // focus trap inside overlay when open — Tab cycles input ↔ results
  overlay.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open') || e.key !== 'Tab') return;
    var focusables = overlay.querySelectorAll('input, a.hit');
    if (!focusables.length) { e.preventDefault(); input.focus(); return; }
    var first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); return; }
    if (e.key === '/' && !overlay.classList.contains('open')) {
      var tag = (document.activeElement && document.activeElement.tagName) || '';
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') { e.preventDefault(); open(); }
      return;
    }
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
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

  // debounced input → search (90ms, code-quality: single timer)
  var deb;
  input.addEventListener('input', function () {
    clearTimeout(deb);
    deb = setTimeout(function () { render(input.value); }, 90);
  });
})();
