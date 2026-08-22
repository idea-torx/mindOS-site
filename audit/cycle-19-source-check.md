# Cycle 19 source check (supervised cycle 7)
Server: http://127.0.0.1:8899 (curl 200 50236 bytes, 36 MindOS hits)
Sections: 12 distinct archetypes (hero/rail/walk/window/machine/terminal/branch/compare/seam/layered/security/launch)
Hints: 12 (each section 1)
Hex: 19 tokens (#7fb3e0 7 code-only, #1a1a1d lift, #08080a security wash) strict monochrome
Spacing scale: --s-4..88 14 vars, 40 usages (was 36, now covers hero-grid, header, section, footer, docs-layout)
Motion: per-section distinct cadence canonical (fail 120/340/560/780/1000@420, sm 90/180/270+620/850@320, security 80/240/400/560@360, arch 120/320/520/720@460 cubic, seam 200/380/560@360, hero 100/260/420/580@480) — duplicate fail block removed, @keyframes fs-dash deduped
SVG: stroke html 1.5/2/3 only, css focus ring 1.8/2 intentional thicker, fonts 11/12/13.5
Focus-visible: 48 selectors (was 59 but after dedup + header var), reduced-motion 4 blocks expanded to cover hero-cred/walk/launch/footer
Links: 248 internal OK via tools/check-site.py
Secrets: no sk/ghp/AKIA/BEGIN PRIVATE, "password" only prose "Never touches your passwords"
Console: no console.log
Jargon: 0 in landing
Overflow: html/body clip, pane/term/table-wrap thin scrollbar #34343a, 900/820/680/390 present
