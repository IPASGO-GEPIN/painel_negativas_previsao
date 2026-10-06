var e=`:root {
  /* Guia de Marca IPASGO Saúde (2026) — alinhado ao painel PEONA */
  --verde-cerrado: #007940;
  --verde-escuro: #006533;
  --lima-goia: #c5e838;
  --areia-caldas: #f3eee4;

  --verde-araguaia: #6eb02e;
  --amarelo-ipe: #e7c221;
  --luz-planalto: #efe98c;
  --chumbo-serra: #2f302a;

  --bg: var(--areia-caldas);
  --bg-deep: #ebe6dc;
  --ink: var(--chumbo-serra);
  --ink-muted: #5a625c;
  --accent: var(--verde-cerrado);
  --accent-soft: #e8f2ec;
  --accent-bright: var(--lima-goia);
  --warn: #8a6a00;
  --line: #d8d3c8;
  --line-soft: rgba(0, 121, 64, 0.08);
  --card: #ffffff;
  --card-wash: #f8faf9;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.02);
  --shadow-hover: 0 2px 6px rgba(0, 0, 0, 0.05), 0 6px 16px rgba(0, 0, 0, 0.03);
  --radius: 12px;
  --gap: 12px;
  --font-display: 'General Sans', 'Segoe UI', system-ui, sans-serif;
  --font-body: 'General Sans', 'Segoe UI', system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
  font-synthesis: none;
  font-variant-numeric: tabular-nums;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.apresentacao-page { overflow-y: auto; padding-top: 1rem; }
.apresentacao-scope { display: flex; align-items: center; gap: .65rem; flex-wrap: wrap; margin: 0 0 1rem; }
.apresentacao-scope label { font-weight: 700; }
.apresentacao-scope select, .apresentacao-search { border: 1px solid var(--line); border-radius: 8px; padding: .45rem .65rem; background: var(--card); color: var(--ink); font: inherit; }
.apresentacao-scope span { color: var(--ink-muted); }
.apresentacao-caution { padding: .75rem 1rem; border-left: 3px solid var(--warn); background: var(--card); margin: 1rem 0; }
.apresentacao-columns { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr); gap: var(--gap); margin-bottom: var(--gap); }
.apresentacao-search { width: 100%; margin-bottom: .65rem; }
.apresentacao-lista { max-height: 420px; overflow: auto; }
.apresentacao-lista th { position: sticky; top: 0; z-index: 1; background: var(--card); }
.apresentacao-lista td small { display: block; color: var(--ink-muted); }
.apresentacao-lista tr.apresentacao-selected { background: var(--accent-soft); }
.apresentacao-indice { color: var(--verde-escuro); white-space: nowrap; }
.apresentacao-metodo-indice { margin-bottom: var(--gap); }
.apresentacao-metodo-indice p { margin: .5rem 0; }
.apresentacao-decomposicao { display: flex; flex-wrap: wrap; gap: .5rem; margin: .75rem 0 1rem; }
.apresentacao-decomposicao span { padding: .45rem .65rem; border: 1px solid var(--line); border-radius: 8px; background: var(--card-wash); }
.apresentacao-decomposicao strong { color: var(--verde-escuro); }
.apresentacao-pick { border: 0; background: transparent; padding: 0; color: var(--accent); text-align: left; font: inherit; font-weight: 700; cursor: pointer; }
.apresentacao-sinais { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .75rem; margin-bottom: 1rem; }
.apresentacao-sinais div { padding: .65rem .75rem; background: var(--card-wash); border: 1px solid var(--line); border-radius: 8px; }
.apresentacao-sinais strong { display: block; font-size: 1.25rem; color: var(--verde-escuro); }
.apresentacao-sinais span { display: block; color: var(--ink-muted); }
.apresentacao-subtable { margin-top: 1.5rem; }
.apresentacao-evidencias { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .65rem; margin: 1rem 0; }
.apresentacao-evidencias div { display: flex; flex-direction: column; padding: .7rem .8rem; background: var(--card-wash); border: 1px solid var(--line); border-radius: 8px; }
.apresentacao-evidencias span { color: var(--ink-muted); font-size: .75rem; }
.apresentacao-evidencias strong { color: var(--verde-escuro); }
.apresentacao-evidencias small { color: var(--ink-muted); }
@media (max-width: 950px) { .apresentacao-columns { grid-template-columns: 1fr; } }
@media (max-width: 650px) { .apresentacao-sinais { grid-template-columns: repeat(2, minmax(0, 1fr)); } .apresentacao-evidencias { grid-template-columns: 1fr; } }

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
}

body {
  /* Fundo limpo estilo PEONA — sem blur/overlays que embassam SVG */
  background: var(--areia-caldas);
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

:focus-visible {
  outline: 3px solid var(--amarelo-ipe);
  outline-offset: 3px;
}

h1,
h2,
h3 {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0 0 0.4em;
  color: var(--verde-escuro);
}

p {
  margin: 0 0 1rem;
  color: var(--ink-muted);
}

.shell {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 1.25rem 3rem;
}

/* ===== Layout BI: sidebar + canvas viewport ===== */
html,
body,
#root {
  height: 100%;
  overflow: hidden;
}

.app-shell {
  --sidebar-w: 280px;
  --sidebar-w-collapsed: 56px;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

.app-shell.sidebar-collapsed {
  --sidebar-w: var(--sidebar-w-collapsed);
}

.app-main {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 0 14px 10px;
  width: 100%;
  max-width: none;
  margin: 0;
  overflow: hidden;
}

.main-topbar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.45rem 0;
  flex: 0 0 auto;
}

.main-topbar-context {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  flex-wrap: wrap;
}

.topbar-pill {
  display: inline-flex;
  flex-direction: column;
  gap: 0.05rem;
  padding: 0.28rem 0.7rem;
  border-radius: 10px;
  border: 1px solid var(--line-soft, #e6e2d8);
  background: var(--card, #fff);
  line-height: 1.15;
}

.topbar-pill-lbl {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.topbar-pill strong {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--ink);
}

.topbar-pill-extract strong {
  color: var(--verde-cerrado, #007940);
}

.topbar-plan-filter {
  border: 1px solid #91c8a2;
  background: #eaf6ed;
  color: #075b34;
  border-radius: 9px;
  padding: 0.35rem 0.55rem;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}

.topbar-plan-filter:hover { background: #d9efdf; }
.topbar-plan-filter span { margin-left: 0.35rem; font-size: 1rem; }
.topbar-month-filter { border-color: #e5b596; background: #fff1e7; color: #9c491f; }
.topbar-month-filter:hover { background: #ffe3d1; }

.main-topbar-filters {
  margin: 0;
  font-size: 0.78rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main-topbar-actions {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex: 0 0 auto;
}

.topbar-download {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 42px;
  border: 1px solid var(--verde-cerrado, #007940);
  background: var(--verde-cerrado, #007940);
  color: #fff;
  border-radius: 11px;
  padding: 0.35rem 0.8rem 0.35rem 0.45rem;
  box-shadow: 0 2px 7px rgba(0, 93, 49, 0.17);
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease;
}

.topbar-download:hover:not(:disabled) {
  background: var(--verde-escuro, #006533);
  box-shadow: 0 4px 11px rgba(0, 93, 49, 0.22);
  transform: translateY(-1px);
}

.topbar-download-icon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.17);
}

.topbar-download-icon svg {
  width: 17px;
  height: 17px;
}

.topbar-download-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.12;
}

.topbar-download-copy strong {
  font-size: 0.78rem;
  font-weight: 750;
}

.topbar-download-copy small {
  margin-top: 0.17rem;
  font-size: 0.64rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.84);
}

.topbar-download:disabled {
  opacity: 0.65;
  cursor: wait;
}

@media (max-width: 600px) {
  .topbar-download {
    min-height: 36px;
    padding: 0.2rem;
  }

  .topbar-download-copy {
    display: none;
  }
}

.topbar-download-err {
  font-size: 0.72rem;
  color: #c62828;
  font-weight: 600;
}

.sidebar-toggle {
  display: none;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--ink);
  border-radius: 8px;
  padding: 0.35rem 0.65rem;
  font-weight: 600;
  cursor: pointer;
}

.sidebar-toggle-desktop {
  display: inline-flex;
}

.dashboard-content {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.sidebar-backdrop {
  display: none;
}

.sidebar {
  position: relative;
  flex: 0 0 var(--sidebar-w);
  width: var(--sidebar-w);
  min-width: var(--sidebar-w);
  max-width: var(--sidebar-w);
  height: 100vh;
  overflow: hidden;
  background: var(--chumbo-serra);
  color: var(--areia-caldas);
  display: flex;
  flex-direction: column;
  padding: 10px 10px 12px;
  box-sizing: border-box;
  z-index: 50;
  transition: width 0.2s ease, min-width 0.2s ease, max-width 0.2s ease;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  text-rendering: geometricPrecision;
}

.sidebar-top {
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
  margin-bottom: 8px;
  flex: 0 0 auto;
}

.sidebar-top .brand-lockup {
  flex: 1 1 auto;
  min-width: 0;
}

.sidebar-collapse-btn {
  flex: 0 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: var(--areia-caldas);
  border-radius: 8px;
  width: 2rem;
  height: 2rem;
  font-size: 0.95rem;
  cursor: pointer;
  line-height: 1;
}

.sidebar-collapse-btn:hover {
  background: rgba(255, 255, 255, 0.12);
}

.sidebar-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.app-shell.sidebar-collapsed .hub-titles,
.app-shell.sidebar-collapsed .sidebar-group-label,
.app-shell.sidebar-collapsed .sidebar-link-text,
.app-shell.sidebar-collapsed .sidebar-filters,
.app-shell.sidebar-collapsed .sidebar-actions,
.app-shell.sidebar-collapsed .sidebar-credit,
.app-shell.sidebar-collapsed .sidebar-caret,
.app-shell.sidebar-collapsed .brand-logo-slot {
  display: none;
}

.app-shell.sidebar-collapsed .sidebar {
  padding: 8px 6px;
}

.app-shell.sidebar-collapsed .sidebar-link {
  justify-content: center;
  padding: 0.55rem 0.25rem;
}

.app-shell.sidebar-collapsed .sidebar-link::before {
  content: none;
}

.app-shell.sidebar-collapsed .sidebar-link-icon {
  display: inline-flex;
}

.app-shell.sidebar-collapsed .sidebar-group-toggle {
  justify-content: center;
  padding: 0.45rem 0.25rem;
  gap: 0;
}

.app-shell.sidebar-collapsed .sidebar-group-toggle .sidebar-link-icon {
  display: inline-flex;
}

.app-shell.sidebar-collapsed .sidebar-collapse-btn {
  width: 100%;
  margin-top: 0.25rem;
}


.brand-lockup {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  min-width: 0;
}

.brand-lockup:hover {
  text-decoration: none;
}

/* Slot baixo: SVG com viewBox na marca (nítido em qualquer DPI) */
.brand-logo-slot {
  display: block;
  width: 100%;
  max-width: 180px;
  height: 36px;
  overflow: hidden;
  line-height: 0;
}

.logo-img--sidebar {
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  object-fit: contain;
  object-position: left center;
  background: transparent;
}

.logo-img--footer {
  display: block;
  height: 40px;
  width: auto;
  max-width: 180px;
  object-fit: contain;
  border-radius: 8px;
}

.hub-titles {
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
  padding: 0 0.1rem;
  min-width: 0;
}

.hub-titles .header-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0;
  color: #f3eee4;
}

.hub-titles .header-subtitle {
  margin: 0;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 0.01em;
  color: var(--lima-goia);
}

.brand-accent {
  margin-top: 8px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--lima-goia) 0%,
    var(--verde-araguaia) 55%,
    transparent 100%
  );
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex: 1 1 auto;
}

.sidebar-group-label {
  margin: 0 0 0.25rem;
  padding: 0 0.35rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #b8b4a8;
}

.sidebar-group-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0.35rem 0 0.15rem;
  padding: 0.2rem 0.15rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: inherit;
}

.sidebar-group-toggle .sidebar-group-label {
  margin: 0;
}

.sidebar-group-toggle .sidebar-caret {
  width: auto;
  padding: 0 0.35rem;
  opacity: 0.75;
  background: transparent;
  color: inherit;
}

.sidebar-link-row {
  display: flex;
  align-items: stretch;
  gap: 0.15rem;
}

.sidebar-link-row .sidebar-link {
  flex: 1 1 auto;
  min-width: 0;
}

.sidebar-caret {
  flex: 0 0 auto;
  width: 1.75rem;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #c4c0b4;
  cursor: pointer;
  font-size: 0.7rem;
  line-height: 1;
}

.sidebar-caret:hover {
  background: rgba(243, 238, 228, 0.08);
  color: #fff;
}

.sidebar-subnav {
  display: grid;
  gap: 0.15rem;
  margin: 0.15rem 0 0.35rem;
  padding: 0.15rem 0 0.15rem 0.55rem;
  border-left: 2px solid rgba(197, 232, 56, 0.35);
  margin-left: 0.65rem;
}

.sidebar-sublink {
  display: block;
  padding: 0.35rem 0.55rem;
  border-radius: 8px;
  color: #d4cfc4;
  font-size: 0.78rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.3;
}

.sidebar-sublink:hover {
  background: rgba(243, 238, 228, 0.08);
  color: #fff;
  text-decoration: none;
}

.sidebar-sublink.active {
  background: rgba(197, 232, 56, 0.22);
  color: var(--lima-goia);
  font-weight: 600;
  text-decoration: none;
}

.section-flash {
  animation: section-flash 1.2s ease;
}

@keyframes section-flash {
  0% {
    box-shadow: 0 0 0 0 rgba(197, 232, 56, 0.55);
  }
  40% {
    box-shadow: 0 0 0 4px rgba(197, 232, 56, 0.35);
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

.panel[id] {
  scroll-margin-top: 1rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: 100%;
  padding: 0.5rem 0.65rem;
  border-radius: 10px;
  color: #ebe6da;
  font-size: 0.84rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.3;
  letter-spacing: 0;
}

.sidebar-link-icon {
  display: inline-flex;
  flex: 0 0 auto;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
}

.sidebar-link-icon svg {
  display: block;
}

.sidebar-group-toggle .sidebar-link-icon {
  display: inline-flex;
  flex: 0 0 auto;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
}

.sidebar-link:hover {
  background: rgba(243, 238, 228, 0.08);
  color: #fff;
  text-decoration: none;
}

.sidebar-link.active {
  background: var(--lima-goia);
  color: var(--chumbo-serra);
  font-weight: 600;
  text-decoration: none;
}

.sidebar-actions {
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(243, 238, 228, 0.18);
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.sidebar-check {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: #d4cfc4;
  cursor: pointer;
}

.sidebar-refresh {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 0.7rem 0.85rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  background: var(--lima-goia);
  color: var(--chumbo-serra);
}

.sidebar-refresh:hover:not(:disabled) {
  filter: brightness(1.05);
}

.sidebar-refresh:disabled {
  opacity: 0.65;
  cursor: wait;
}

.sidebar-refresh-msg {
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.35;
  color: rgba(243, 238, 228, 0.7);
  word-break: break-word;
  max-height: 4.5rem;
  overflow: hidden;
}

.sidebar-refresh-msg.status-ok {
  color: var(--lima-goia);
}

.sidebar-refresh-msg.status-error {
  color: #f0a8a8;
}

.sidebar-credit {
  margin-top: auto;
  padding: 16px 8px 6px;
  text-align: center;
  border-top: 1px solid rgba(243, 238, 228, 0.18);
}

.sidebar-credit-title {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #f3eee4;
}

.sidebar-credit-org {
  margin: 4px 0 0;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: #c4c0b4;
}

.sidebar-credit-dot {
  display: inline-block;
  width: 3px;
  height: 3px;
  margin: 0 5px;
  border-radius: 50%;
  background: rgba(243, 238, 228, 0.55);
  vertical-align: middle;
}

@media (max-width: 960px) {
  .sidebar-toggle {
    display: inline-flex;
  }

  .sidebar-toggle-desktop {
    display: none;
  }

  .sidebar-collapse-btn {
    display: none;
  }

  .app-shell.sidebar-collapsed {
    --sidebar-w: 280px;
  }

  .app-shell.sidebar-collapsed .hub-titles,
  .app-shell.sidebar-collapsed .sidebar-group-label,
  .app-shell.sidebar-collapsed .sidebar-link-text,
  .app-shell.sidebar-collapsed .sidebar-filters,
  .app-shell.sidebar-collapsed .sidebar-actions,
  .app-shell.sidebar-collapsed .sidebar-credit,
  .app-shell.sidebar-collapsed .brand-logo-slot {
    display: revert;
  }

  .app-shell.sidebar-collapsed .sidebar-link::before {
    content: none;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    right: auto;
    transform: translateX(-105%);
    transition: transform 0.22s ease;
    box-shadow: 12px 0 36px rgba(0, 0, 0, 0.35);
    width: min(300px, 88vw);
    min-width: min(300px, 88vw);
    max-width: min(300px, 88vw);
  }

  .app-shell.sidebar-open .sidebar {
    transform: translateX(0);
  }

  .sidebar-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    border: none;
    padding: 0;
    margin: 0;
    background: rgba(47, 48, 42, 0.45);
    z-index: 40;
    cursor: pointer;
  }

  .sidebar-backdrop[hidden] {
    display: none;
  }

  html,
  body,
  #root {
    overflow: auto;
    height: auto;
  }

  .app-shell {
    height: auto;
    max-height: none;
    overflow: visible;
  }

  .dashboard-content {
    overflow: visible;
  }
}

.skip-link {
  position: fixed;
  z-index: 10;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.55rem 0.8rem;
  border-radius: 8px;
  background: var(--chumbo-serra);
  color: #fff;
  transform: translateY(-160%);
}

.skip-link:focus {
  transform: translateY(0);
}

.topbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 -1.25rem 2rem;
  padding: 0.85rem 1.25rem;
  background: var(--verde-cerrado);
  border-bottom: 3px solid var(--lima-goia);
  box-shadow: 0 8px 28px rgba(0, 121, 64, 0.25);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  color: var(--areia-caldas);
}

.brand:hover {
  text-decoration: none;
  opacity: 0.95;
}

.brand-logo {
  height: 44px;
  width: auto;
  display: block;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
  line-height: 1.15;
}

.brand-text strong {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--areia-caldas);
}

.brand-text span {
  font-size: 0.72rem;
  color: var(--lima-goia);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  align-items: center;
}

.nav a {
  color: rgba(243, 238, 228, 0.88);
  text-decoration: none;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 500;
}

.nav a:hover,
.nav a.active {
  background: rgba(197, 232, 56, 0.22);
  color: var(--areia-caldas);
  text-decoration: none;
}

.nav-toggle {
  display: none;
  border: 1px solid rgba(243, 238, 228, 0.55);
  border-radius: 999px;
  padding: 0.4rem 0.75rem;
  background: transparent;
  color: var(--areia-caldas);
  font: inherit;
  cursor: pointer;
}

.nav-more {
  position: relative;
}

.nav-more summary {
  list-style: none;
  cursor: pointer;
  color: rgba(243, 238, 228, 0.88);
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 500;
}

.nav-more summary::-webkit-details-marker {
  display: none;
}

.nav-more summary::after {
  content: '⌄';
  margin-left: 0.35rem;
}

.nav-more[open] summary,
.nav-more.active summary {
  background: rgba(197, 232, 56, 0.22);
}

.nav-more-list {
  position: absolute;
  z-index: 5;
  top: calc(100% + 0.4rem);
  right: 0;
  display: grid;
  min-width: 9.5rem;
  padding: 0.35rem;
  border: 1px solid rgba(197, 232, 56, 0.4);
  border-radius: 10px;
  background: var(--verde-cerrado);
  box-shadow: var(--shadow);
}

.nav-more-list a {
  border-radius: 7px;
}

.filter-bar {
  display: grid;
  gap: 0.65rem;
  margin: -0.25rem 0 1.15rem;
  padding: 14px 16px;
  background: #ffffff;
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.filter-bar.is-collapsed {
  gap: 0;
}

.filter-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.filter-head-main {
  min-width: 0;
  flex: 1;
}

.filter-head-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
  flex-shrink: 0;
}

.filter-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: left;
}

.filter-toggle:hover .stat-label {
  color: var(--verde-cerrado);
}

.filter-toggle-icon {
  font-size: 0.75rem;
  color: var(--ink-muted);
  line-height: 1;
}

.filter-body {
  display: grid;
  gap: 0.65rem;
}

.filter-body[hidden] {
  display: none;
}

.filter-description {
  margin: 0.1rem 0 0;
  font-size: 0.82rem;
}

.filter-resumo {
  color: var(--ink-muted);
}

.filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  align-items: end;
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
}

.filter-group label {
  display: grid;
  gap: 0.25rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ink-muted);
}

.filter-group select {
  min-width: 8rem;
  padding: 0.4rem 0.55rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  font: inherit;
}

.filter-presets,
.filter-toggles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  align-items: center;
}

.filter-label {
  color: var(--ink-muted);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.chip {
  border: 1px solid var(--line);
  background: #ffffff;
  color: var(--ink);
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.chip:hover,
.chip.active {
  background: var(--verde-cerrado);
  border-color: var(--verde-cerrado);
  color: #ffffff;
}

.toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--ink-muted);
}

.filter-hint {
  margin: 0;
  font-size: 0.82rem;
}

.filter-hint strong {
  color: var(--verde-cerrado);
}

.nav a.active {
  background: var(--lima-goia);
  color: var(--chumbo-serra);
  font-weight: 600;
}

.hero {
  margin: 1.1rem 0 1.35rem;
}

.hero h1 {
  font-size: clamp(1.65rem, 2.5vw, 2rem);
  max-width: none;
  color: var(--verde-escuro);
}

.hero .lede {
  font-size: 0.95rem;
  max-width: 56ch;
}

.grid {
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  position: relative;
  z-index: 0;
  background: linear-gradient(180deg, #ffffff 0%, var(--card-wash) 100%);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  padding: 16px 18px;
  box-shadow: var(--shadow);
  /* Sem backdrop-filter / transform de entrada: evita SVG e texto embassados */
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  overflow: visible;
}

.card:has(.hint-tip:hover),
.card:has(.hint-tip:focus-visible),
.card:hover,
.card:focus-within {
  z-index: 40;
}

.card:hover {
  box-shadow: var(--shadow-hover);
}

a.card:hover {
  text-decoration: none;
  border-color: color-mix(in srgb, var(--verde-cerrado) 28%, var(--line));
}

.card h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.stat {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--chumbo-serra);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.875rem;
  text-transform: none;
  letter-spacing: 0;
  color: var(--ink-muted);
  font-weight: 500;
  line-height: 1.4;
}

.panel {
  position: relative;
  z-index: 0;
  margin-top: 14px;
  background: linear-gradient(180deg, #ffffff 85%, #f0f6f2 100%);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: var(--shadow);
  overflow: visible;
  transition: box-shadow 0.2s ease;
}

.panel:hover {
  box-shadow: var(--shadow-hover);
}

.panel:has(.hint-tip:hover),
.panel:has(.hint-tip:focus-visible),
.panel:focus-within {
  z-index: 40;
}

.panel h2,
.panel .panel-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1e293b;
}

.panel-title {
  display: block;
  max-width: 100%;
}

.panel h3.panel-title {
  font-size: 0.95rem;
  margin: 0.85rem 0 0.4rem;
  color: var(--chumbo-serra);
}

/* Tooltip compartilhado: títulos, legendas, KPIs */
.hint-tip {
  position: relative;
  z-index: 1;
  display: inline;
  max-width: 100%;
  cursor: help;
  outline: none;
}

.hint-tip:hover,
.hint-tip:focus-visible {
  z-index: 60;
}

.hint-tip-text {
  border-bottom: 1px dotted color-mix(in srgb, var(--ink-muted) 55%, transparent);
}

.hint-tip-bubble {
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  z-index: 70;
  width: min(28rem, calc(100vw - 2.5rem));
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--chumbo-serra);
  color: #f5f2ea;
  font-size: 0.82rem;
  font-weight: 450;
  line-height: 1.45;
  letter-spacing: 0.01em;
  text-transform: none;
  box-shadow: 0 10px 28px rgba(20, 22, 18, 0.28);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
  pointer-events: none;
}

.hint-tip-bubble::before {
  content: '';
  position: absolute;
  left: 1.1rem;
  top: -6px;
  width: 10px;
  height: 10px;
  background: inherit;
  border-left: 1px solid var(--line);
  border-top: 1px solid var(--line);
  transform: rotate(45deg);
}

.hint-tip:hover .hint-tip-bubble,
.hint-tip:focus-visible .hint-tip-bubble {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Em legendas horizontais, evita balão cortado à direita */
.series-legend .hint-tip-bubble,
.chart-legend .hint-tip-bubble {
  left: 50%;
  transform: translate(-50%, -4px);
  width: min(22rem, calc(100vw - 2.5rem));
}

.series-legend .hint-tip-bubble::before,
.chart-legend .hint-tip-bubble::before {
  left: 50%;
  margin-left: -5px;
}

.series-legend .hint-tip:hover .hint-tip-bubble,
.series-legend .hint-tip:focus-visible .hint-tip-bubble,
.chart-legend .hint-tip:hover .hint-tip-bubble,
.chart-legend .hint-tip:focus-visible .hint-tip-bubble {
  transform: translate(-50%, 0);
}

.stat-label .hint-tip {
  display: inline;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}

th,
td {
  text-align: left;
  padding: 0.55rem 0.4rem;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}

th {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ink-muted);
  font-weight: 600;
}

caption {
  padding: 0 0 0.5rem;
  text-align: left;
  color: var(--ink-muted);
  font-size: 0.82rem;
}

.table-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.bar-list {
  display: grid;
  gap: 0.65rem;
}

.bar-row {
  display: grid;
  grid-template-columns: minmax(8rem, 1fr) 3fr auto;
  gap: 0.6rem;
  align-items: center;
}

.bar-row span:first-child {
  font-size: 0.85rem;
  color: var(--ink);
}

.bar-track {
  height: 0.55rem;
  background: var(--bg-deep);
  border-radius: 999px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--verde-cerrado), var(--verde-araguaia));
  border-radius: 999px;
  transform-origin: left;
  animation: grow 0.8s ease-out both;
}

.bar-row .n {
  font-variant-numeric: tabular-nums;
  font-size: 0.85rem;
  color: var(--ink-muted);
  white-space: nowrap;
}

.pareto-list {
  display: grid;
  gap: 0.65rem;
}

.pareto-row {
  display: grid;
  grid-template-columns: minmax(11rem, 1.4fr) 3fr auto minmax(5.5rem, auto);
  gap: 0.55rem;
  align-items: center;
  font-size: 0.84rem;
}

.pareto-row > span:first-child {
  color: var(--ink);
}

.pareto-track {
  height: 0.6rem;
  overflow: hidden;
  border-radius: 999px;
  background: var(--bg-deep);
}

.pareto-fill {
  height: 100%;
  border-radius: inherit;
  background: var(--verde-araguaia);
}

.pareto-cumulative {
  color: var(--ink-muted);
  font-size: 0.78rem;
  text-align: right;
}

.pareto-cumulative.hit {
  color: var(--verde-cerrado);
  font-weight: 700;
}

.donut-layout {
  display: grid;
  grid-template-columns: minmax(180px, 240px) 1fr;
  gap: 1.5rem;
  align-items: center;
}

.donut {
  position: relative;
  aspect-ratio: 1;
  max-width: 240px;
  margin: auto;
}

.donut svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  shape-rendering: geometricPrecision;
}

.donut-bg,
.donut-segment {
  fill: none;
  stroke-width: 16;
}

.donut-bg {
  stroke: var(--bg-deep);
}

.donut-segment {
  transition: stroke-width 0.2s ease;
}

.donut-segment:hover {
  stroke-width: 20;
}

.donut-center {
  position: absolute;
  inset: 28%;
  display: grid;
  place-content: center;
  text-align: center;
}

.donut-center strong {
  color: var(--verde-cerrado);
  font-size: 1.25rem;
}

.donut-center span {
  color: var(--ink-muted);
  font-size: 0.72rem;
}

.chart-legend {
  display: grid;
  gap: 0.55rem;
}

.chart-legend > div {
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: 0.55rem;
  align-items: center;
  font-size: 0.85rem;
}

.chart-legend i,
.series-legend i {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.line-chart-wrap {
  overflow: hidden;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
}

.line-chart {
  width: 100%;
  height: auto;
  max-height: 100%;
  min-width: 0;
  overflow: visible;
  shape-rendering: geometricPrecision;
  text-rendering: geometricPrecision;
}

.chart-gridline {
  stroke: #e5e1d8;
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.chart-axis {
  fill: var(--ink-muted);
  font-size: 11px;
  font-family: var(--font-body);
  font-weight: 500;
}

.series-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-size: 0.82rem;
  color: var(--ink-muted);
}

.series-legend span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.column-chart {
  height: 270px;
  display: flex;
  gap: 0.75rem;
  align-items: stretch;
  padding-top: 1.5rem;
  overflow-x: auto;
}

.column-item {
  flex: 1 0 70px;
  min-width: 60px;
  display: grid;
  grid-template-rows: 1.25rem 1fr 2rem;
  gap: 0.35rem;
  text-align: center;
}

.column-value,
.column-label {
  font-size: 0.75rem;
  color: var(--ink-muted);
}

.column-track {
  display: flex;
  align-items: end;
  justify-content: center;
  min-height: 170px;
  border-bottom: 1px solid var(--line);
}

.column-fill {
  width: min(65%, 58px);
  min-height: 0;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(180deg, var(--verde-araguaia), var(--verde-cerrado));
}

.priority-matrix-wrap {
  overflow-x: auto;
}

.priority-matrix {
  display: block;
  width: 100%;
  min-width: 620px;
}

.matrix-label {
  fill: var(--ink-muted);
  font-size: 10px;
}

.matrix-note {
  margin: 0.25rem 0 0;
  text-align: center;
}

.value-bridge {
  display: grid;
  gap: 0.65rem;
}

.value-bridge-row {
  display: grid;
  grid-template-columns: minmax(9rem, 1.25fr) 3fr minmax(7rem, auto);
  gap: 0.7rem;
  align-items: center;
  font-size: 0.88rem;
}

.value-bridge-row > span {
  color: var(--ink);
}

.value-bridge-row strong {
  color: var(--ink);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.value-bridge-track {
  height: 0.8rem;
  overflow: hidden;
  border-radius: 999px;
  background: var(--bg-deep);
}

.value-bridge-fill {
  height: 100%;
  border-radius: inherit;
  background: var(--verde-cerrado);
}

.value-bridge-row.deduction .value-bridge-fill {
  background: var(--amarelo-ipe);
}

.value-bridge-row.net .value-bridge-fill {
  background: var(--verde-araguaia);
}

.value-bridge-row.paid .value-bridge-fill {
  background: var(--verde-cerrado);
}

.value-bridge-row.open .value-bridge-fill {
  background: #8a6a12;
}

.funnel-chart {
  display: grid;
  gap: 0.8rem;
}

.funnel-row {
  display: grid;
  grid-template-columns: minmax(9rem, 1fr) 3fr;
  gap: 0.75rem;
  align-items: center;
}

.funnel-row > span {
  font-size: 0.85rem;
  text-align: right;
}

.funnel-step {
  min-height: 2.4rem;
  border-radius: 0 8px 8px 0;
  color: var(--chumbo-serra);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.45rem 0.7rem;
  animation: grow 0.8s ease-out both;
  transform-origin: left;
}

.funnel-step:first-child {
  color: white;
}

.funnel-step small {
  white-space: nowrap;
}

/* —— BI: processo, insights, gauges —— */
.process-guide {
  margin: 0 0 1.25rem;
  display: grid;
  gap: 0.85rem;
}

.process-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.process-step {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.7rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--ink-muted);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.process-step:hover {
  text-decoration: none;
  border-color: var(--verde-araguaia);
}

.process-step.past {
  background: rgba(0, 121, 64, 0.08);
  color: var(--verde-cerrado);
}

.process-step.active {
  background: var(--verde-cerrado);
  border-color: var(--verde-cerrado);
  color: var(--areia-caldas);
}

.process-n {
  display: inline-grid;
  place-items: center;
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 50%;
  font-size: 0.72rem;
  font-weight: 700;
  background: rgba(47, 48, 42, 0.08);
}

.process-step.active .process-n {
  background: var(--lima-goia);
  color: var(--chumbo-serra);
}

.process-insight {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 0.85rem 1rem;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.process-insight-item {
  display: grid;
  align-content: start;
  gap: 0.25rem;
}

.process-current {
  padding-left: 0.7rem;
  border-left: 3px solid var(--verde-araguaia);
}

.process-insight p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--ink);
}

.process-insight strong {
  color: var(--verde-cerrado);
  font-size: 1.05rem;
  line-height: 1.25;
}

.insight-callout {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin: 0 0 1rem;
  padding: 14px 16px;
  border-radius: var(--radius);
  border: 1px solid var(--line-soft);
  background: #ffffff;
  border-left: 4px solid var(--verde-araguaia);
  box-shadow: var(--shadow);
}

.insight-callout.insight-callout-split {
  padding: 0;
  border: none;
  border-left: none;
  background: transparent;
  box-shadow: none;
  gap: 0.55rem;
}

.insight-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.55rem;
  align-items: start;
  padding: 0.55rem 0.75rem;
  border-radius: 12px;
  border: 1px solid var(--line-soft);
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 5px 14px rgba(20, 22, 18, 0.045);
}

.insight-card .insight-icon {
  display: grid;
  place-items: center;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 999px;
  color: var(--verde-cerrado);
  background: color-mix(in srgb, var(--verde-cerrado) 12%, white);
  flex-shrink: 0;
}

.insight-card .stat-label {
  margin: 0;
  font-size: 0.68rem;
  letter-spacing: 0.02em;
}

.insight-card p {
  margin: 0.15rem 0 0;
  color: var(--ink);
  font-size: 0.86rem;
  line-height: 1.35;
}

.insight-mostra {
  background: #fff8e8;
  border-color: color-mix(in srgb, var(--amarelo-ipe) 45%, var(--line-soft));
}

.insight-mostra .insight-icon {
  color: #8a6a00;
  background: color-mix(in srgb, var(--amarelo-ipe) 28%, white);
}

.insight-acao {
  background: color-mix(in srgb, var(--verde-cerrado) 8%, white);
  border-color: color-mix(in srgb, var(--verde-cerrado) 28%, var(--line-soft));
}

.insight-callout.tom-alerta {
  border-left-color: var(--amarelo-ipe);
  background: #fffdf5;
}

.insight-callout.tom-ok {
  border-left-color: var(--verde-cerrado);
  background: var(--accent-soft);
}

.insight-callout.insight-callout-split.tom-alerta,
.insight-callout.insight-callout-split.tom-ok {
  background: transparent;
  border-left: none;
}

.insight-callout p {
  margin: 0.2rem 0 0;
  color: var(--ink);
  font-size: 0.95rem;
}

.kpi-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.35rem;
}

.kpi-spark {
  flex: 0 0 auto;
  opacity: 0.9;
}

.kpi-inline-hint {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--ink-muted);
}

.kpi-card.tone-good .stat {
  color: #1f6b3a;
}

.kpi-card.tone-warn .stat {
  color: var(--warn);
}

.kpi-card.tone-bad .stat {
  color: #b42318;
}

.kpi-delta {
  margin: 0.35rem 0 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink-muted);
}

.kpi-delta.good {
  color: #1f6b3a;
}

.kpi-delta.warn {
  color: var(--warn);
}

.kpi-delta.bad {
  color: #b42318;
}

.kpi-delta span {
  font-weight: 400;
  color: var(--ink-muted);
}

.exec-mini-kpi .kpi-trend {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--ink-muted);
}

.exec-mini-kpi .kpi-trend.good {
  color: #1f6b3a;
}

.exec-mini-kpi .kpi-trend.warn {
  color: var(--warn);
}

.exec-mini-kpi .kpi-trend.bad {
  color: #b42318;
}

.plan-membros {
  margin: 0.15rem 0 0.5rem;
  font-size: 0.82rem;
}

.gauge-row {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin: 1rem 0 0.25rem;
}

.decision-panel {
  padding-bottom: 0.85rem;
}

.decision-panel-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.decision-panel-head p {
  margin-bottom: 0.8rem;
}

.decision-list {
  display: grid;
  gap: 0.55rem;
}

.decision-item {
  display: grid;
  grid-template-columns: 5.5rem minmax(10rem, 1.15fr) auto minmax(14rem, 1.5fr);
  gap: 0.8rem;
  align-items: center;
  padding: 0.7rem 0.8rem;
  border: 1px solid var(--line);
  border-left: 4px solid var(--verde-cerrado);
  border-radius: 10px;
  background: rgba(255, 252, 246, 0.72);
  color: inherit;
}

.decision-item:hover {
  text-decoration: none;
  background: rgba(0, 121, 64, 0.05);
}

.decision-item.tone-warn {
  border-left-color: var(--amarelo-ipe);
}

.decision-item.tone-bad {
  border-left-color: #8b1e1e;
}

.decision-status {
  color: var(--verde-cerrado);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.decision-item.tone-warn .decision-status {
  color: #8a6a12;
}

.decision-item.tone-bad .decision-status {
  color: #8b1e1e;
}

.decision-item strong,
.decision-item b {
  color: var(--verde-cerrado);
}

.decision-item b {
  font-size: 1.05rem;
  white-space: nowrap;
}

.decision-item p {
  margin: 0.1rem 0 0;
  font-size: 0.82rem;
}

.decision-action {
  color: var(--ink-muted);
  font-size: 0.82rem;
}

.anomaly-list {
  display: grid;
  gap: 0.65rem;
}

.anomaly-item {
  display: grid;
  grid-template-columns: 5.5rem minmax(13rem, 1.4fr) minmax(7rem, auto) minmax(8rem, auto);
  gap: 0.8rem;
  align-items: center;
  padding: 0.8rem 0.9rem;
  border: 1px solid var(--line);
  border-left: 4px solid var(--amarelo-ipe);
  border-radius: 10px;
  background: rgba(255, 252, 246, 0.72);
  color: inherit;
}

.anomaly-item.critica {
  border-left-color: #8b1e1e;
}

.anomaly-item:hover {
  text-decoration: none;
  background: rgba(0, 121, 64, 0.05);
}

.anomaly-severity {
  color: #8a6a12;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.anomaly-item.critica .anomaly-severity,
.anomaly-reference b {
  color: #8b1e1e;
}

.anomaly-item p {
  margin: 0.15rem 0 0;
  font-size: 0.82rem;
}

.anomaly-value,
.anomaly-reference {
  display: grid;
  gap: 0.1rem;
  text-align: right;
}

.anomaly-value span,
.anomaly-reference span {
  color: var(--ink-muted);
  font-size: 0.75rem;
}

.anomaly-value strong {
  color: var(--verde-cerrado);
}

.anomaly-empty {
  margin: 0;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(0, 121, 64, 0.06);
  color: var(--ink);
}

.gauge-bar {
  padding: 14px 16px;
  background: linear-gradient(180deg, #ffffff 0%, var(--card-wash) 100%);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.gauge-head {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.85rem;
  margin-bottom: 0.45rem;
}

.gauge-head strong {
  color: var(--verde-cerrado);
}

.gauge-bar.tone-warn .gauge-head strong {
  color: #8a6a12;
}

.gauge-bar.tone-bad .gauge-head strong {
  color: #8b1e1e;
}

.gauge-track {
  position: relative;
  height: 0.65rem;
  background: var(--bg-deep);
  border-radius: 999px;
  overflow: hidden;
}

.gauge-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--verde-cerrado), var(--verde-araguaia));
  transition: width 0.5s ease;
}

.gauge-bar.tone-warn .gauge-fill {
  background: linear-gradient(90deg, #c9a21a, var(--amarelo-ipe));
}

.gauge-bar.tone-bad .gauge-fill {
  background: linear-gradient(90deg, #a33, #c45);
}

.gauge-mark {
  position: absolute;
  top: -2px;
  bottom: -2px;
  width: 2px;
  background: var(--chumbo-serra);
  opacity: 0.45;
}

.exec-process {
  display: grid;
  gap: 0.65rem;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.exec-stage {
  display: grid;
  gap: 0.35rem;
  padding: 0.85rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 252, 246, 0.75);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.exec-stage:hover {
  text-decoration: none;
  border-color: var(--verde-araguaia);
  transform: translateY(-2px);
}

.exec-stage strong {
  color: var(--verde-cerrado);
  font-size: 0.95rem;
}

.exec-stage span:last-child {
  font-size: 0.78rem;
  color: var(--ink-muted);
  line-height: 1.35;
}

.hero-exec h1 {
  max-width: 22ch;
}

.hero-auth-fat h1 {
  max-width: none;
  white-space: nowrap;
}

.forecast-band {
  fill: rgba(231, 194, 33, 0.12);
}

.forecast-label {
  fill: #8a6a12;
  font-size: 10px;
  font-weight: 600;
}

.waterfall {
  display: grid;
  gap: 0.55rem;
}

.waterfall-row {
  display: grid;
  grid-template-columns: minmax(9rem, 1.4fr) 2.5fr auto auto;
  gap: 0.55rem;
  align-items: center;
  font-size: 0.85rem;
}

.waterfall-track {
  height: 0.7rem;
  background: var(--bg-deep);
  border-radius: 999px;
  overflow: hidden;
}

.waterfall-fill {
  height: 100%;
  border-radius: 999px;
}

.waterfall-row.total {
  margin-top: 0.35rem;
  padding-top: 0.55rem;
  border-top: 1px solid var(--line);
  font-weight: 600;
}

.row-highlight td {
  background: rgba(197, 232, 56, 0.18);
  font-weight: 600;
}

.progress-list {
  display: grid;
  gap: 0.9rem;
}

.progress-item > div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.85rem;
}

.progress-item progress {
  width: 100%;
  height: 0.75rem;
  accent-color: var(--verde-cerrado);
}

.note {
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  border-left: 3px solid var(--amarelo-ipe);
  background: rgba(231, 194, 33, 0.12);
  border-radius: 0 8px 8px 0;
  color: var(--ink);
}

.muted {
  color: var(--ink-muted);
  font-size: 0.9rem;
}

.site-footer {
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
}

.footer-brand {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem 1.25rem;
  align-items: center;
}

.footer-brand .muted {
  margin: 0;
  font-size: 0.8rem;
  max-width: 28rem;
}

.site-footer img {
  height: auto;
  width: auto;
}

.site-footer p {
  margin: 0;
  font-size: 0.8rem;
}

.plan-subpanels .plan-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0.75rem 0 1rem;
  max-height: 11.5rem;
  overflow-y: auto;
  padding-right: 0.15rem;
}

.plan-tabs .chip {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  max-width: 11.5rem;
  text-align: left;
  border-radius: 12px;
  padding: 0.45rem 0.7rem;
}

.plan-tabs .chip.is-empty {
  opacity: 0.55;
  border-style: dashed;
}

.plan-tab-name {
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.25;
  white-space: normal;
}

.plan-tab-badge {
  font-size: 0.7rem;
  opacity: 0.85;
}

.plan-detail {
  padding: 0.85rem 1rem;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: color-mix(in srgb, var(--card) 70%, var(--lima-goia) 8%);
}

.plan-detail-title {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  color: var(--verde-cerrado);
}

.plan-detail-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 0.75rem;
}

.plan-demand-list,
.plan-motivo-list {
  margin: 0.35rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

.plan-demand-list li {
  display: grid;
  grid-template-columns: 6.5rem 1fr auto auto;
  gap: 0.45rem;
  align-items: center;
  font-size: 0.82rem;
}

.plan-demand-bar {
  height: 0.45rem;
  background: var(--bg-deep);
  border-radius: 999px;
  overflow: hidden;
}

.plan-demand-bar i {
  display: block;
  height: 100%;
  background: var(--verde-cerrado);
  border-radius: 999px;
}

.plan-demand-list em {
  font-style: normal;
  color: var(--ink-muted);
  font-size: 0.75rem;
}

.plan-motivo-list {
  list-style: decimal;
  padding-left: 1.2rem;
}

.plan-motivo-list li {
  display: grid;
  gap: 0.1rem;
  font-size: 0.82rem;
}

.plan-motivo-list span {
  color: var(--ink-muted);
}

.schema-layers {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin: 0.75rem 0 1rem;
}

.schema-layers-details,
.schema-rels-details {
  margin-top: 1rem;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.55rem 0.85rem 0.75rem;
  background: color-mix(in srgb, var(--card) 92%, var(--bg-deep));
}

.schema-layers-details summary,
.schema-rels-details summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--verde-cerrado);
  font-size: 0.9rem;
}

.schema-diagram {
  display: grid;
  gap: 1.15rem;
  margin: 0.85rem 0 0.25rem;
}

.schema-diagram-block {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0.9rem 1rem 1rem;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--lima-goia) 12%, transparent), transparent 42%),
    color-mix(in srgb, var(--card) 94%, white);
}

.schema-diagram-kicker {
  margin: 0 0 0.45rem;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 600;
  color: var(--ink-muted);
}

.schema-diagram-note {
  margin: 0 0 0.75rem;
  font-size: 0.84rem;
  color: var(--ink-muted);
}

.schema-pipeline {
  display: grid;
  gap: 0.55rem;
  grid-template-columns: minmax(0, 1.15fr) auto minmax(0, 1.25fr) auto minmax(0, 1fr);
  align-items: stretch;
}

.schema-pipe-col {
  display: grid;
  gap: 0.4rem;
  align-content: start;
  min-width: 0;
}

.schema-pipe-col h4 {
  margin: 0 0 0.15rem;
  font-size: 0.82rem;
  color: var(--chumbo-serra);
}

.schema-node {
  display: grid;
  gap: 0.1rem;
  text-align: left;
  padding: 0.45rem 0.6rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  font: inherit;
  line-height: 1.25;
}

.schema-node.clickable {
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}

.schema-node.clickable:hover {
  border-color: var(--verde-araguaia);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(47, 48, 42, 0.08);
}

.schema-node.selected {
  border-color: var(--verde-cerrado);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--lima-goia) 70%, transparent);
}

.schema-node-name {
  font-size: 0.78rem;
  font-weight: 650;
  font-family: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace;
  word-break: break-word;
}

.schema-node-hint {
  font-size: 0.7rem;
  color: var(--ink-muted);
  font-weight: 450;
}

.schema-node.tone-origem {
  background: color-mix(in srgb, var(--amarelo-ipe) 16%, var(--bg));
  border-color: color-mix(in srgb, var(--amarelo-ipe) 45%, var(--line));
}

.schema-node.tone-dim {
  background: color-mix(in srgb, var(--verde-araguaia) 14%, var(--bg));
  border-color: color-mix(in srgb, var(--verde-araguaia) 40%, var(--line));
}

.schema-node.tone-cubo {
  background: color-mix(in srgb, var(--verde-cerrado) 12%, var(--bg));
  border-color: color-mix(in srgb, var(--verde-cerrado) 35%, var(--line));
}

.schema-node.tone-inv {
  background: color-mix(in srgb, #3d5a80 12%, var(--bg));
  border-color: color-mix(in srgb, #3d5a80 35%, var(--line));
}

.schema-node.tone-meta {
  background: color-mix(in srgb, var(--chumbo-serra) 8%, var(--bg));
}

.schema-node.tone-ui {
  background: color-mix(in srgb, var(--lima-goia) 22%, var(--bg));
  border-color: color-mix(in srgb, var(--lima-goia) 50%, var(--line));
}

.schema-arrow {
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 0.2rem;
  min-width: 2.4rem;
  color: var(--ink-muted);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.schema-arrow-line {
  width: 100%;
  max-width: 3.2rem;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--verde-cerrado), transparent);
  position: relative;
}

.schema-arrow-line::after {
  content: '';
  position: absolute;
  right: -1px;
  top: 50%;
  width: 7px;
  height: 7px;
  border-right: 2px solid var(--verde-cerrado);
  border-top: 2px solid var(--verde-cerrado);
  transform: translateY(-50%) rotate(45deg);
}

.schema-arrow-label {
  white-space: nowrap;
}

.schema-er {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem 0.75rem;
}

.schema-er-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  flex: 1 1 12rem;
}

.schema-er-inv {
  align-items: flex-start;
}

.schema-er-spokes {
  display: grid;
  gap: 0.45rem;
  flex: 1 1 14rem;
}

.schema-spoke {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
}

@media (max-width: 900px) {
  .schema-pipeline {
    grid-template-columns: 1fr;
  }

  .schema-pipeline > .schema-arrow {
    transform: rotate(90deg);
    min-height: 2rem;
    margin: 0.15rem 0;
  }
}

.schema-layer {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.85rem 1rem;
  background: color-mix(in srgb, var(--card) 88%, var(--verde-cerrado) 6%);
}

.schema-layer h3 {
  margin: 0 0 0.35rem;
  font-size: 0.95rem;
}

.schema-layer p {
  margin: 0 0 0.65rem;
  font-size: 0.8rem;
}

.schema-layer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.schema-layer .chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  max-width: 100%;
}

.schema-n {
  font-size: 0.68rem;
  opacity: 0.8;
}

.schema-flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem 0.55rem;
  margin: 0.5rem 0 1rem;
  font-size: 0.82rem;
  color: var(--ink-muted);
}

.schema-flow-box {
  padding: 0.4rem 0.7rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  font-weight: 600;
  font-size: 0.78rem;
}

.schema-flow-break {
  flex-basis: 100%;
  height: 0;
}

.schema-table-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.85rem;
}

.schema-table-card h3 {
  margin: 0 0 0.25rem;
}

.schema-keys {
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.45rem;
  color: var(--ink-muted);
}

.schema-keys strong {
  color: var(--ink);
}

.loading,
.error {
  padding: 2rem;
  text-align: center;
}

.error {
  color: #8b1e1e;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes rise-column {
  from {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  to {
    transform: scaleY(1);
    transform-origin: bottom;
  }
}

@media (max-width: 640px) {
  .topbar {
    align-items: center;
  }

  .brand-text {
    display: none;
  }

  .brand-logo {
    height: 38px;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .nav {
    display: none;
    width: 100%;
    padding-top: 0.25rem;
  }

  .nav.open {
    display: flex;
  }

  .nav a,
  .nav-more {
    flex: 1 0 auto;
  }

  .nav a,
  .nav-more summary {
    display: block;
    text-align: center;
  }

  .nav-more-list {
    position: static;
    min-width: unset;
    margin-top: 0.3rem;
    box-shadow: none;
  }

  .filter-head {
    align-items: center;
  }

  .filter-reset {
    white-space: nowrap;
  }

  .value-bridge-row {
    grid-template-columns: 1fr auto;
    gap: 0.25rem 0.6rem;
  }

  .value-bridge-track {
    grid-column: 1 / -1;
  }

  .decision-item {
    grid-template-columns: 1fr auto;
    gap: 0.35rem 0.6rem;
  }

  .decision-status {
    grid-column: 1 / -1;
  }

  .decision-action {
    grid-column: 1 / -1;
  }

  .anomaly-item {
    grid-template-columns: 1fr auto;
    gap: 0.35rem 0.6rem;
  }

  .anomaly-severity,
  .anomaly-reference {
    grid-column: 1 / -1;
  }

  .anomaly-reference {
    text-align: left;
  }

  .hero-auth-fat h1 {
    font-size: clamp(1.5rem, 6.4vw, 2rem);
  }

  .bar-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .pareto-row {
    grid-template-columns: 1fr auto;
  }

  .pareto-track {
    grid-column: 1 / -1;
  }

  .pareto-cumulative {
    text-align: right;
  }

  .donut-layout {
    grid-template-columns: 1fr;
  }

  .funnel-row {
    grid-template-columns: 1fr;
  }

  .funnel-row > span {
    text-align: left;
  }
}

/* Fixed-view dashboards: fit the selected page inside the application viewport. */
.dashboard-content {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.25rem 0.15rem 0.25rem 0;
  scrollbar-gutter: auto;
}

.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 1fr);
  align-content: stretch;
  gap: 0.45rem;
}

.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .hero,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .grid,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .insight-callout,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .note,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .muted,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > details {
  grid-column: 1 / -1;
}

.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .hero {
  margin: 0;
  padding: 0.55rem 0.8rem;
}

.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .grid {
  margin: 0;
}

.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel {
  min-height: 0;
  margin: 0;
  padding: 0.55rem 0.7rem;
}

.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .invest-form {
  grid-column: 1 / -1;
}

.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .line-chart {
  height: clamp(95px, 15vh, 170px);
}

.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .donut {
  max-width: 145px;
}

.validation-more {
  min-height: 0;
  overflow: auto;
}

.validation-more[open] {
  grid-column: 1 / -1;
}

.validation-more > summary {
  cursor: pointer;
  padding: 0.35rem 0.55rem;
  color: var(--verde-escuro);
  font-weight: 650;
  font-size: 0.8rem;
}

.validation-more-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 0.45rem;
  padding-top: 0.4rem;
}

.validation-more-grid > .panel {
  min-height: 0;
  margin: 0;
  padding: 0.55rem 0.7rem;
}

.validation-more-grid .line-chart { height: 150px; }

.validation-more-grid > .panel:last-child {
  grid-column: 1 / -1;
}

.dashboard-content > .hero {
  flex: 0 0 auto;
  margin: 0 0 0.45rem;
  padding: 0.7rem 0.95rem;
}

.dashboard-content > .hero h1 {
  font-size: clamp(1.25rem, 1.8vw, 1.75rem);
}

.dashboard-content > .hero .lede {
  font-size: 0.82rem;
}

.dashboard-content > .grid {
  flex: 0 0 auto;
  margin: 0.35rem 0 0.5rem;
  gap: 0.5rem;
}

.dashboard-content > .grid > .card,
.dashboard-content > .grid > .kpi-card {
  min-height: 76px;
  padding: 0.55rem 0.75rem;
}

.dashboard-content > .grid > .card .stat,
.dashboard-content > .grid > .kpi-card .stat {
  font-size: clamp(1.15rem, 1.6vw, 1.55rem);
}

.dashboard-content > .panel {
  flex: 1 1 0;
  min-height: 0;
  margin: 0 0 0.5rem;
  padding: 0.65rem 0.8rem;
  overflow: hidden;
}

.dashboard-content > .panel > .panel-title,
.dashboard-content > .panel > h2 {
  margin-bottom: 0.45rem;
  padding-bottom: 0.35rem;
  font-size: 0.92rem;
}

.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .hero,
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .grid,
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .insight-callout,
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .note,
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .filter-scope-note,
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .loading,
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .error {
  flex: 0 0 auto;
}

.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .panel {
  flex: 1 1 0;
}

.bi-page {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  gap: 0.45rem;
  padding: 0.2rem 0 0;
}

.bi-page-head {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.4rem;
}

.bi-page .process-guide {
  max-width: 27rem;
}

.bi-page .insight-callout {
  padding: 0.38rem 0.65rem;
}

.bi-page .exec-kpi-grid {
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 0.45rem;
}

.bi-page .kpi-card {
  min-height: 70px;
  padding: 0.45rem 0.65rem;
}

.bi-page .kpi-card .stat {
  font-size: clamp(1.05rem, 1.55vw, 1.45rem);
  -webkit-line-clamp: 1;
}

.bi-canvas {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  gap: 0.45rem;
}

.bi-canvas > .panel {
  min-height: 0;
  padding: 0.65rem 0.8rem;
}

.bi-split,
.bi-neg-grid {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  gap: 0.45rem;
}

.bi-split > .panel,
.bi-split > .plan-subpanels,
.bi-neg-grid > .panel {
  min-height: 0;
  overflow: hidden;
  padding: 0.65rem 0.8rem;
}

.bi-neg-grid {
  grid-template-rows: minmax(0, 1.15fr) minmax(0, 0.85fr);
}

.line-chart-wrap {
  min-height: 0;
  overflow: hidden;
}

.line-chart {
  min-width: 0;
  height: clamp(105px, 17vh, 190px);
  max-height: 100%;
}

.bi-neg-trend .line-chart {
  height: clamp(100px, 15vh, 170px);
}

.series-legend {
  padding-top: 0.2rem;
  font-size: 0.68rem;
}

.bi-details {
  flex: 0 0 auto;
  max-height: 18vh;
  overflow: auto;
}

.bi-home {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  gap: 0.45rem;
  padding-top: 0.2rem;
}

.bi-home .exec-corridor {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
}

.bi-home .exec-stage-card {
  min-height: 0;
  padding: 0.55rem 0.7rem;
}

.bi-home .exec-stage-resumo {
  -webkit-line-clamp: 2;
  font-size: 0.74rem;
  margin-bottom: 0.4rem;
}

@media (max-width: 1100px) {
  .bi-home .exec-corridor {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 960px) {
  .dashboard-content > .hero { padding: 0.5rem 0.7rem; }
  .bi-page-head { grid-template-columns: 1fr; }
  .bi-page .process-guide { display: none; }
  .bi-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .bi-split { grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr); }
  .bi-neg-grid { grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr); }
}

@media (max-width: 640px) {
  .dashboard-content > .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dashboard-content > .panel { padding: 0.4rem; }
  .bi-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-page .kpi-card { min-height: 58px; padding: 0.3rem 0.45rem; }
  .bi-page .kpi-card .stat { font-size: 0.95rem; }
  .bi-home .exec-corridor { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); }
  .bi-home .exec-stage-head h2 { font-size: 0.8rem; }
  .bi-home .exec-mini-kpis { display: none; }
  .bi-split { grid-template-columns: 1fr; }
  .bi-neg-grid { grid-template-columns: 1fr; grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.8fr); }
  .line-chart { height: clamp(78px, 12vh, 120px); }
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.25rem;
  }
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel {
    padding: 0.35rem;
  }
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .line-chart {
    height: clamp(65px, 10vh, 95px);
  }
}

button.linkish {
  background: none;
  border: none;
  padding: 0;
  color: var(--verde-mata, #0b3d2e);
  text-decoration: underline;
  cursor: pointer;
  font: inherit;
}

.invest-form input {
  display: block;
  margin-top: 0.25rem;
  min-width: 10rem;
  padding: 0.35rem 0.5rem;
}

.invest-form .chip {
  margin-top: 0.75rem;
}

/* ===== Visão executiva ===== */
.exec-corridor {
  display: grid;
  gap: 1rem;
  margin-top: 1.25rem;
}

.exec-stage-card {
  border: 1px solid rgba(11, 61, 46, 0.12);
  border-radius: 10px;
  padding: 1rem 1.15rem;
  background: #fff;
  border-left: 4px solid #2a9d8f;
}

.exec-stage-card.status-alerta {
  border-left-color: #c45c26;
}

.exec-stage-card.status-ok {
  border-left-color: #007940;
}

.exec-stage-head {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.exec-stage-head h2 {
  margin: 0;
  font-size: 1.1rem;
}

.exec-stage-n {
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #0b3d2e;
  color: #f3eee4;
  font-size: 0.85rem;
  font-weight: 700;
}

.exec-stage-q {
  margin: 0.2rem 0 0;
  color: #5c5a52;
  font-size: 0.95rem;
}

.exec-stage-resumo {
  margin: 0.65rem 0 0.5rem;
}

.exec-mini-kpis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
  gap: 0.65rem;
  margin: 0.5rem 0 0.85rem;
}

.exec-mini-kpi {
  background: #f7f4ee;
  border-radius: 8px;
  padding: 0.55rem 0.65rem;
}

.exec-mini-kpi strong {
  display: block;
  margin-top: 0.15rem;
  font-size: 1.05rem;
}

.exec-stage-link {
  font-weight: 600;
  color: #0b3d2e;
  text-decoration: none;
}

.exec-stage-link:hover {
  text-decoration: underline;
}

.exec-details {
  margin-top: 1.25rem;
  border: 1px solid rgba(11, 61, 46, 0.12);
  border-radius: 10px;
  padding: 0.65rem 1rem 1rem;
  background: #faf8f4;
}

.exec-details > summary {
  cursor: pointer;
  font-weight: 600;
  color: #0b3d2e;
  padding: 0.35rem 0;
}

.bi-details > summary {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.55rem;
  border-radius: 8px;
  border: 1px solid var(--line-soft);
  background: color-mix(in srgb, var(--verde-cerrado) 6%, white);
  font-size: 0.78rem;
  list-style: none;
}

.bi-details > summary::-webkit-details-marker { display: none; }

.bi-details > summary::before {
  content: '›';
  font-size: 1rem;
  line-height: 1;
  color: var(--verde-cerrado);
}

.bi-details[open] > summary::before {
  content: '‹';
}

.exec-details-body {
  margin-top: 0.85rem;
}

.exec-kpi-grid {
  margin-bottom: 1rem;
}

@media (min-width: 900px) {
  .exec-corridor {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.fat-lag-panel {
  margin-top: 0.5rem;
}

.fat-lag-lede {
  margin: 0.35rem 0 1rem;
  max-width: 42rem;
}

.fat-lag-hero,
.fat-lag-media,
.fat-lag-history {
  margin-bottom: 1.25rem;
}

.fat-lag-hero-head,
.fat-lag-media-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 0.45rem;
}

.fat-lag-hero-sum {
  font-size: 0.95rem;
  color: var(--verde-cerrado);
}

.fat-lag-bar {
  display: flex;
  width: 100%;
  height: 2.4rem;
  border-radius: 8px;
  overflow: hidden;
  background: color-mix(in srgb, var(--line) 40%, transparent);
}

.fat-lag-bar.compact {
  height: 0.85rem;
  border-radius: 5px;
  flex: 1;
  min-width: 0;
}

.fat-lag-seg {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 100%;
}

.fat-lag-seg em {
  font-style: normal;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 25%);
}

.fat-lag-chips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
  gap: 0.55rem;
  margin-top: 0.75rem;
}

.fat-lag-chip {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 0.4rem;
  row-gap: 0.05rem;
  padding: 0.45rem 0.55rem;
  border-bottom: 1px dotted color-mix(in srgb, var(--line) 80%, transparent);
}

.fat-lag-chip .stat-label {
  grid-column: 2;
}

.fat-lag-chip i {
  grid-row: 1 / span 2;
  width: 0.45rem;
  border-radius: 2px;
  align-self: stretch;
}

.fat-lag-chip strong {
  grid-column: 2;
  font-size: 1.05rem;
  color: var(--verde-cerrado);
  line-height: 1.15;
}

.fat-lag-chip em {
  grid-column: 2;
  font-style: normal;
  font-size: 0.72rem;
  color: var(--ink-muted);
}

.fat-lag-avg-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.35rem;
  margin-top: 0.65rem;
}

.fat-lag-avg-cell {
  text-align: left;
}

.fat-lag-avg-cell strong {
  display: block;
  font-size: 0.95rem;
  margin-top: 0.1rem;
}

.fat-lag-avg-cell em {
  display: block;
  font-style: normal;
  font-size: 0.72rem;
  color: var(--ink-muted);
  margin-top: 0.05rem;
}

.fat-lag-rows {
  display: grid;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.fat-lag-row {
  display: grid;
  grid-template-columns: 4.5rem 1fr 7.5rem;
  gap: 0.55rem;
  align-items: center;
}

.fat-lag-row-mes {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ink-muted);
}

.fat-lag-row-dom {
  font-size: 0.72rem;
  color: var(--ink-muted);
  text-align: right;
  line-height: 1.25;
}

@media (max-width: 720px) {
  .fat-lag-avg-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .fat-lag-row {
    grid-template-columns: 4rem 1fr;
  }

  .fat-lag-row-dom {
    display: none;
  }
}

/* ===== Filtros no lateral + pagina BI sem scroll ===== */
.sidebar-filters {
  margin-top: 0.4rem;
  padding-top: 0.55rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sidebar-filter-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.sidebar-filter-presets .chip {
  font-size: 0.68rem;
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: var(--areia-caldas);
}

.sidebar-filter-presets .chip.active {
  background: var(--lima-goia);
  color: var(--chumbo-serra);
  border-color: transparent;
}

.sidebar-filter-field {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.68rem;
  font-weight: 600;
  color: rgba(243, 238, 228, 0.72);
}

.sidebar-filter-field select {
  width: 100%;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(0, 0, 0, 0.22);
  color: #f3eee4;
  padding: 0.3rem 0.4rem;
  font-size: 0.78rem;
}

.sidebar-filter-reset {
  margin-top: 0.15rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: transparent;
  color: var(--areia-caldas);
  border-radius: 7px;
  padding: 0.35rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
}

.sidebar-filter-reset:hover {
  background: rgba(255, 255, 255, 0.08);
}

.bi-page {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  overflow: hidden;
}

.bi-page-head {
  flex: 0 0 auto;
  display: grid;
  gap: 0.35rem;
}

.bi-page-titles h1 {
  margin: 0;
  font-size: clamp(1.15rem, 1.6vw, 1.55rem);
  line-height: 1.15;
  color: var(--verde-cerrado);
}

.bi-page-titles .lede {
  margin: 0.15rem 0 0;
  font-size: 0.82rem;
}

.bi-page .process-guide {
  margin: 0;
  padding: 0.35rem 0 0;
}

.bi-page .process-insight {
  display: none;
}

.bi-page .process-strip {
  gap: 0.25rem;
}

.bi-page .process-step {
  padding: 0.25rem 0.4rem;
  font-size: 0.72rem;
}

.bi-page .insight-callout {
  flex: 0 0 auto;
  margin: 0;
  padding: 0.45rem 0.7rem;
}

.bi-page .insight-callout.insight-callout-split {
  padding: 0;
  gap: 0.5rem;
}

.bi-page .insight-card {
  padding: 0.5rem 0.7rem;
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 5px 14px rgba(20, 22, 18, 0.045);
}

.bi-page .insight-card p {
  font-size: 0.78rem;
  line-height: 1.32;
}

.bi-page .insight-callout p {
  font-size: 0.85rem;
}

.bi-page .exec-kpi-grid {
  flex: 0 0 auto;
  margin: 0;
  gap: 0.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.bi-page .kpi-card {
  padding: 0.5rem 0.7rem;
  min-height: 76px;
  border-top: none;
  border: 1px solid color-mix(in srgb, var(--line) 65%, transparent);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 16px rgba(20, 22, 18, 0.05);
}

.bi-page .kpi-card:hover {
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 16px rgba(20, 22, 18, 0.05);
}

.bi-page .kpi-card .stat {
  font-size: clamp(1.2rem, 1.7vw, 1.55rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.bi-canvas {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.bi-canvas > .panel {
  flex: 1 1 auto;
  min-height: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.bi-details {
  flex: 0 0 auto;
  margin: 0;
  max-height: 28vh;
  overflow: auto;
}

.bi-page .fat-lag-panel {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0;
  padding: 0.65rem 0.8rem;
}

.bi-page .fat-lag-lede,
.bi-page .fat-lag-hero,
.bi-page .fat-lag-media,
.bi-page .fat-lag-history {
  margin: 0;
}

.bi-page .fat-lag-bar {
  height: 1.7rem;
}

.bi-page .fat-lag-chips {
  margin-top: 0.4rem;
  gap: 0.3rem;
}

.bi-page .fat-lag-chip {
  padding: 0.25rem 0.35rem;
}

.bi-page .fat-lag-chip strong {
  font-size: 0.92rem;
}

.bi-home {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  overflow: hidden;
}

.bi-home .hero {
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
}

.bi-home .hero h1 {
  margin: 0;
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
}

.bi-home .hero .lede {
  margin: 0.2rem 0 0;
  font-size: 0.85rem;
}

.bi-home .insight-callout {
  flex: 0 0 auto;
  margin: 0;
  padding: 0.45rem 0.7rem;
}

.bi-home .exec-corridor {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.55rem;
}

.bi-home .exec-stage-card {
  min-height: 0;
  overflow: hidden;
  padding: 0.65rem 0.75rem;
}

.bi-home .exec-stage-resumo {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.78rem;
}

@media (max-width: 1100px) {
  .bi-home .exec-corridor {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 960px) {
  .bi-home,
  .bi-page {
    overflow: visible;
    height: auto;
  }

  .bi-home .exec-corridor {
    overflow: visible;
  }
}
.bi-split {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.9fr);
  gap: 0.55rem;
  overflow: hidden;
}
.bi-split > .panel,
.bi-split > .plan-subpanels {
  min-height: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.bi-split-main .line-chart-wrap { flex: 1 1 auto; }
.bi-split .series-legend {
  flex: 0 0 auto;
  margin-top: 0.25rem;
  font-size: 0.75rem;
}
.plan-subpanels.is-compact .plan-tabs { margin: 0.35rem 0 0.45rem; }
.plan-compact-resumo {
  margin: 0;
  font-size: 0.82rem;
  color: var(--ink);
}
.bi-page .kpi-card .stat {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  line-height: 1.15;
}
.bi-page-head {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
}
.bi-page .process-guide { max-width: 28rem; }
.bi-details { max-height: 22vh; }
.app-shell { --sidebar-w-collapsed: 64px; }
@media (max-width: 1100px) {
  .bi-split { grid-template-columns: 1fr; }
}
.brand-mark {
  display: none;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: var(--lima-goia);
}
.app-shell.sidebar-collapsed .brand-mark {
  display: inline-flex;
}
.app-shell.sidebar-collapsed .sidebar-top {
  flex-direction: column;
  align-items: center;
}
.app-shell.sidebar-collapsed .brand-lockup {
  align-items: center;
}


/* ===== Negativas: canvas executivo de motivos ===== */
.bi-neg-grid {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(250px, 0.9fr);
  grid-template-rows: minmax(0, 1.25fr) minmax(0, 0.7fr);
  gap: 0.55rem;
  overflow: hidden;
}
.bi-neg-motivos { grid-row: 1 / 2; grid-column: 1 / 2; }
.bi-neg-side { grid-row: 1 / 2; grid-column: 2 / 3; }
.bi-neg-trend { grid-row: 2 / 3; grid-column: 1 / -1; }
.bi-neg-grid > .panel {
  margin: 0;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.65rem 0.8rem;
  border: 1px solid color-mix(in srgb, var(--line) 70%, transparent);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 18px rgba(20, 22, 18, 0.05);
  background: #fff;
}
.bi-neg-grid > .panel:hover {
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 18px rgba(20, 22, 18, 0.05);
}

.motivo-table {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
  justify-content: space-evenly;
}
.motivo-table-head,
.motivo-table-row {
  display: grid;
  grid-template-columns: 1.15rem minmax(0, 1.55fr) minmax(5rem, 1.1fr) 2.9rem 2.9rem;
  gap: 0.45rem;
  align-items: center;
}
.motivo-table-head {
  font-size: 0.6rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-muted);
  padding-bottom: 0.2rem;
  border-bottom: 1px solid var(--line-soft);
  flex: 0 0 auto;
}
.motivo-table-row {
  padding: 0.22rem 0;
  border-bottom: 1px solid color-mix(in srgb, var(--line-soft) 65%, transparent);
  flex: 1 1 auto;
  min-height: 0;
}
.motivo-table-row:last-child { border-bottom: none; }
.motivo-table-row.is-top .motivo-exec-rank,
.motivo-table-row.is-top .motivo-table-name strong,
.motivo-table-row.is-top .motivo-exec-pct {
  color: var(--verde-cerrado);
}
.motivo-exec-rank {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--ink-muted);
  text-align: center;
}
.motivo-table-name {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.02rem;
}
.motivo-table-name strong {
  font-size: 0.74rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--ink);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.motivo-table-name em {
  font-style: normal;
  font-size: 0.64rem;
  color: var(--ink-muted);
}
.motivo-exec-pct {
  text-align: right;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--verde-cerrado);
  letter-spacing: -0.01em;
}
.motivo-acum {
  text-align: right;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--ink-muted);
}
.motivo-acum.hit {
  color: #8a6a00;
  font-weight: 700;
}
.motivo-exec-track {
  height: 0.58rem;
  border-radius: 999px;
  background: #eceae4;
  overflow: hidden;
  margin: 0;
}
.motivo-exec-track i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #007940, #2f9e4f);
}

.motivo-mix { margin-top: 0.1rem; flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }
.motivo-mix + .motivo-mix { margin-top: 0.5rem; padding-top: 0.4rem; border-top: 1px solid var(--line-soft); }
.motivo-mix .stat-label { margin: 0 0 0.3rem; font-size: 0.65rem; }
.motivo-mix-bars {
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
  flex: 1 1 auto;
  justify-content: space-evenly;
}
.motivo-mix-planos .motivo-mix-bars {
  gap: 0.28rem;
  justify-content: flex-start;
  max-height: 18rem;
  overflow-y: auto;
  padding-right: 0.15rem;
}
.motivo-mix-planos .motivo-mix-row {
  grid-template-columns: 7.2rem 1fr 2.6rem;
}
.motivo-mix-planos .motivo-mix-row.is-empty {
  opacity: 0.5;
}
.motivo-mix-planos .motivo-mix-row.is-empty i {
  width: 0 !important;
}
.motivo-mix-row {
  display: grid;
  grid-template-columns: 5.4rem 1fr 2.6rem;
  gap: 0.4rem;
  align-items: center;
  font-size: 0.72rem;
}
.motivo-mix-row span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--ink-muted);
  font-weight: 500;
}
.motivo-mix-row strong {
  text-align: right;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--verde-cerrado);
}
.motivo-mix-row.is-alert strong { color: #c45c26; }
.motivo-mix-row .motivo-exec-track { height: 0.62rem; }
.motivo-mix-row.is-alert .motivo-exec-track i {
  background: linear-gradient(90deg, #b4531a, #c45c26);
}

.bi-neg-side {
  gap: 0.1rem;
}
.bi-neg-trend .line-chart-wrap {
  flex: 1 1 auto;
  min-height: 0;
}
.bi-neg-trend .line-chart {
  height: 100%;
  min-height: 110px;
  max-height: 180px;
}
.bi-neg-trend .series-legend { display: none; }

@media (max-width: 1100px) {
  .bi-neg-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    overflow: auto;
  }
  .bi-neg-motivos, .bi-neg-side, .bi-neg-trend {
    grid-row: auto;
    grid-column: auto;
  }
}

/* ===== Disposição das páginas no canvas ===== */
.dashboard-content {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  overflow: hidden;
  padding: 0.35rem 0.15rem 0.35rem 0;
}

.dashboard-content > .hero {
  flex: 0 0 auto;
  margin: 0;
  padding: 0.75rem 1rem;
  border: 1px solid color-mix(in srgb, var(--verde-cerrado) 12%, var(--line));
  border-radius: calc(var(--radius) + 3px);
  background: linear-gradient(110deg, #fff 0%, #f4f8f4 72%, #eef5df 100%);
}
.dashboard-content > .hero h1 { margin: 0 0 0.2rem; font-size: clamp(1.25rem, 1.8vw, 1.75rem); line-height: 1.12; }
.dashboard-content > .hero .lede { margin: 0; max-width: 72ch; font-size: 0.82rem; }
.dashboard-content > .grid { flex: 0 0 auto; margin: 0; gap: 0.5rem; align-items: stretch; }
.dashboard-content > .grid > .card,
.dashboard-content > .grid > .kpi-card {
  min-width: 0;
  min-height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.1rem;
  padding: 0.5rem 0.7rem;
  border-top: 3px solid color-mix(in srgb, var(--verde-cerrado) 60%, white);
}
.dashboard-content > .grid > .card .stat,
.dashboard-content > .grid > .kpi-card .stat { font-size: clamp(1.1rem, 1.55vw, 1.55rem); line-height: 1.12; overflow-wrap: anywhere; }
.dashboard-content .panel { border-color: color-mix(in srgb, var(--verde-cerrado) 12%, var(--line)); box-shadow: 0 2px 8px rgba(33, 53, 39, 0.05); }
.dashboard-content .panel > h2,
.dashboard-content .panel > .panel-title {
  display: block;
  margin: 0 0 0.45rem;
  padding-bottom: 0.38rem;
  border-bottom: 1px solid var(--line-soft);
  color: var(--verde-escuro);
  font-size: 0.95rem;
  line-height: 1.25;
}
.dashboard-content .panel > .panel-title .hint-tip-text { border: 0; }
.dashboard-content .table-wrap { border: 1px solid var(--line-soft); border-radius: 8px; }
.dashboard-content table tbody tr:nth-child(even) { background: rgba(0, 121, 64, 0.025); }
.dashboard-content table tbody tr:hover { background: var(--accent-soft); }

/* Data catalog and validation pages show related panels side by side. */
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: max-content max-content max-content;
  grid-auto-rows: minmax(0, 1fr);
  align-content: stretch;
  gap: 0.5rem;
}
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .hero,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .grid,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .insight-callout,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .note,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .muted,
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > details { grid-column: 1 / -1; }
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .hero { padding: 0.55rem 0.8rem; }
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .grid { margin: 0; }
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel {
  min-height: 0;
  margin: 0;
  padding: 0.65rem 0.8rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .invest-form { grid-column: 1 / -1; }
.dashboard-content > .panel:has(.line-chart-wrap) .line-chart-wrap,
.dashboard-content > .panel:has(.donut-layout) .donut-layout { flex: 1 1 auto; min-height: 0; }
.dashboard-content > .panel .line-chart { height: clamp(145px, 23vh, 270px); }
.dashboard-content > .panel .donut { max-width: 175px; }
.dashboard-content > .insight-callout { flex: 0 0 auto; margin: 0; padding: 0.5rem 0.75rem; }
.dashboard-content > .note { flex: 0 0 auto; margin: 0; font-size: 0.75rem; }

.bi-page {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  overflow: hidden;
  padding: 0.15rem 0 0;
}
.bi-page-head { flex: 0 0 auto; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 0.5rem; }
.bi-page-titles h1 { font-size: clamp(1.25rem, 1.8vw, 1.75rem); }
.bi-page-titles .lede { font-size: 0.8rem; }
.bi-page .process-guide { max-width: 25rem; margin: 0; }
.bi-page .process-insight { display: none; }
.bi-page .process-step { padding: 0.2rem 0.35rem; font-size: 0.68rem; }
.bi-page .insight-callout { flex: 0 0 auto; margin: 0; padding: 0.4rem 0.7rem; }
.bi-page .insight-callout.insight-callout-split { padding: 0; gap: 0.5rem; }
.bi-page .insight-callout p { font-size: 0.79rem; }
.bi-page .insight-card {
  padding: 0.5rem 0.7rem;
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 5px 14px rgba(20, 22, 18, 0.045);
}
.bi-page .insight-card p { font-size: 0.78rem; line-height: 1.32; }
.bi-page .exec-kpi-grid {
  flex: 0 0 auto;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
  margin: 0;
}
.bi-page .kpi-card {
  min-height: 76px;
  padding: 0.5rem 0.7rem;
  border-top: none;
  border: 1px solid color-mix(in srgb, var(--line) 65%, transparent);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 16px rgba(20, 22, 18, 0.05);
  background: #fff;
}
.bi-page .kpi-card:hover {
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 16px rgba(20, 22, 18, 0.05);
}
.bi-page .kpi-card .stat {
  font-size: clamp(1.2rem, 1.7vw, 1.55rem);
  -webkit-line-clamp: 1;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 0.1rem;
}
.bi-page .kpi-card .stat-label { font-size: 0.68rem; }
.bi-page .kpi-card .muted,
.bi-page .kpi-card .kpi-delta { margin: 0.1rem 0 0; font-size: 0.68rem; }
.bi-page .kpi-spark { width: 64px; height: 26px; }
.bi-canvas { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 0.5rem; overflow: hidden; }
.bi-canvas > .panel { flex: 1 1 auto; min-height: 0; margin: 0; padding: 0.75rem 0.9rem; overflow: hidden; display: flex; flex-direction: column; }
.bi-canvas > .panel .line-chart-wrap { flex: 1 1 auto; min-height: 0; }
.bi-canvas > .panel .line-chart { height: clamp(190px, 30vh, 340px); }
.bi-split,
.bi-neg-grid { flex: 1 1 auto; min-height: 0; gap: 0.55rem; overflow: hidden; }
.bi-split > .panel,
.bi-split > .plan-subpanels,
.bi-neg-grid > .panel {
  min-height: 0;
  margin: 0;
  padding: 0.7rem 0.85rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid color-mix(in srgb, var(--line) 70%, transparent);
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 18px rgba(20, 22, 18, 0.05);
}
.bi-split-main .line-chart-wrap,
.bi-neg-trend .line-chart-wrap { flex: 1 1 auto; min-height: 0; }
.bi-split .line-chart,
.bi-neg-trend .line-chart { height: clamp(140px, 20vh, 200px); }
.bi-neg-grid { grid-template-rows: minmax(0, 1.3fr) minmax(0, 0.72fr); }
.bi-neg-grid .motivo-table { gap: 0; }
.bi-neg-grid .motivo-table-row { padding: 0.15rem 0; gap: 0.4rem; }
.bi-neg-side .motivo-mix { margin-top: 0.35rem !important; }
.bi-details { flex: 0 0 auto; margin: 0; max-height: 17vh; overflow: auto; }

.bi-home { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 0.55rem; overflow: hidden; padding-top: 0.15rem; }
.bi-home .hero { flex: 0 0 auto; margin: 0; padding: 0; }
.bi-home .hero h1 { margin: 0; font-size: clamp(1.25rem, 1.8vw, 1.7rem); }
.bi-home .hero .lede { margin: 0.15rem 0 0; font-size: 0.82rem; }
.bi-home .insight-callout { flex: 0 0 auto; margin: 0; padding: 0.4rem 0.7rem; }
.bi-home .exec-corridor { flex: 1 1 auto; min-height: 0; overflow: hidden; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 0.55rem; }
.bi-home .exec-stage-card { min-height: 0; overflow: hidden; padding: 0.65rem 0.8rem; }
.bi-home .exec-stage-resumo { -webkit-line-clamp: 2; font-size: 0.76rem; }

.validation-more { min-height: 0; overflow: auto; }
.validation-more[open] { grid-column: 1 / -1; }
.validation-more > summary { cursor: pointer; padding: 0.35rem 0.55rem; color: var(--verde-escuro); font-weight: 650; font-size: 0.8rem; }
.validation-more-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: minmax(145px, auto); gap: 0.45rem; padding-top: 0.4rem; }
.validation-more-grid > .panel { min-height: 0; margin: 0; padding: 0.55rem 0.7rem; }
.validation-more-grid .line-chart { height: 145px; }
.validation-more-grid > .panel:last-child { grid-column: 1 / -1; }

@media (max-width: 1100px) {
  .bi-page .process-guide { display: none; }
  .bi-home .exec-corridor { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); }
  .bi-split { grid-template-columns: minmax(0, 1.15fr) minmax(210px, 0.85fr); }
  .bi-neg-grid { grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr); grid-template-rows: minmax(0, 1fr) minmax(0, 0.75fr); overflow: hidden; }
}
@media (max-width: 760px) {
  .dashboard-content { gap: 0.3rem; padding: 0.2rem; }
  .dashboard-content > .hero { padding: 0.45rem 0.6rem; }
  .dashboard-content > .hero h1 { font-size: 1.1rem; }
  .dashboard-content > .hero .lede { font-size: 0.7rem; }
  .dashboard-content > .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.3rem; }
  .dashboard-content > .grid > .card,
  .dashboard-content > .grid > .kpi-card { min-height: 54px; padding: 0.3rem 0.45rem; }
  .dashboard-content > .grid > .card .stat,
  .dashboard-content > .grid > .kpi-card .stat { font-size: 0.95rem; }
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.3rem; }
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel { padding: 0.35rem; }
  .dashboard-content > .panel .line-chart { height: 105px; }
  .bi-page { gap: 0.3rem; }
  .bi-page-head { display: block; }
  .bi-page-titles h1 { font-size: 1.08rem; }
  .bi-page-titles .lede { display: none; }
  .bi-page .exec-kpi-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem; }
  .bi-page .kpi-card { min-height: 52px; padding: 0.25rem 0.35rem; }
  .bi-page .kpi-card .stat { font-size: 0.9rem; }
  .bi-page .kpi-card .muted,
  .bi-page .kpi-card .kpi-delta { display: none; }
  .bi-page .insight-callout { padding: 0.25rem 0.4rem; }
  .bi-page .insight-callout p { font-size: 0.68rem; }
  .bi-canvas > .panel,
  .bi-split > .panel,
  .bi-neg-grid > .panel { padding: 0.4rem; }
  .bi-canvas > .panel .line-chart,
  .bi-split .line-chart,
  .bi-neg-trend .line-chart { height: 145px; }
  .bi-split { grid-template-columns: 1fr; }
  .bi-neg-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); grid-template-rows: minmax(0, 1fr) minmax(0, 0.7fr); }
  .bi-home .exec-corridor { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); gap: 0.3rem; }
  .bi-home .exec-stage-card { padding: 0.35rem; }
  .bi-home .exec-mini-kpis { display: none; }
  .bi-home .exec-stage-head h2 { font-size: 0.76rem; }
}

/* Fila: taxa, volume e grupos de plano no mesmo campo de visão. */
.fila-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.fila-page .kpi-card:nth-child(2) .stat { color: #a64d21; }
.fila-page { overflow-y: auto; }
.fila-page .bi-canvas { flex: 0 0 auto; overflow: visible; }
.fila-page .fila-split {
  flex: 0 0 auto;
  grid-template-columns: minmax(0, 1.4fr) minmax(270px, 0.85fr);
  align-items: start;
  overflow: visible;
}
.fila-page .fila-trend-panel { gap: 0.25rem; }
.fila-panel-heading,
.fila-volume-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.fila-panel-heading .panel-title { margin-bottom: 0; }
.fila-period-tag {
  padding: 0.22rem 0.5rem;
  border-radius: 999px;
  background: #eef5e8;
  color: var(--verde-escuro);
  white-space: nowrap;
  font-size: 0.7rem;
  font-weight: 700;
}
.fila-chart-caption,
.fila-volume-heading {
  margin: 0.15rem 0 0;
  color: var(--ink-muted);
  font-size: 0.72rem;
  font-weight: 650;
}
.fila-page .fila-trend-panel .line-chart-wrap { flex: 0 0 auto; min-height: 0; }
.fila-page .fila-trend-panel .line-chart { height: clamp(125px, 21vh, 210px); }
.fila-page .fila-trend-panel .series-legend { display: none; }
.fila-volume-legend { display: inline-flex; align-items: center; gap: 0.3rem; font-weight: 500; }
.fila-volume-legend i { display: inline-block; width: 0.58rem; height: 0.58rem; border-radius: 2px; }
.fila-legend-on { background: #79ae77; }
.fila-legend-late { background: #d47c4a; margin-left: 0.35rem; }
.fila-volume-chart {
  display: flex;
  align-items: stretch;
  gap: 0.35rem;
  flex: 0 0 auto;
  height: clamp(74px, 12vh, 112px);
  padding: 0.2rem 0 0;
  border-top: 1px solid var(--line-soft);
  overflow-x: auto;
  overflow-y: hidden;
}
.fila-volume-col {
  display: flex;
  flex: 1 0 21px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  min-width: 21px;
  max-width: 80px;
}
.fila-volume-track {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: min(100%, 34px);
  min-height: 2px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}
.fila-volume-track > span { display: block; width: 100%; }
.fila-volume-late { background: #d47c4a; }
.fila-volume-on { background: #79ae77; }
.fila-volume-month { margin-top: 0.2rem; font-size: 0.62rem; color: var(--ink-muted); }
.fila-page .plan-subpanels.is-compact { gap: 0.4rem; }
.fila-plan-context { margin: 0; font-size: 0.72rem; color: var(--ink-muted); }
.fila-plan-ranking { display: grid; gap: 0.25rem; flex: 1 1 auto; min-height: 0; overflow-y: auto; }
.fila-plan-row {
  display: grid;
  gap: 0.2rem;
  width: 100%;
  min-height: 0;
  padding: 0.4rem 0.55rem;
  border: 1px solid transparent;
  border-radius: 9px;
  background: #f7f9f5;
  text-align: left;
  cursor: pointer;
}
.fila-plan-row:hover,
.fila-plan-row.is-selected { border-color: #b6d7bb; background: #eff7ef; }
.fila-plan-row.is-empty { opacity: 0.55; border-style: dashed; }
.fila-plan-row.is-empty .fila-plan-row-top strong { color: var(--ink-muted); }
.fila-plan-row:focus-visible { outline: 2px solid var(--verde-cerrado); outline-offset: 1px; }
.fila-plan-row-top { display: flex; justify-content: space-between; gap: 0.5rem; font-size: 0.76rem; color: var(--ink); }
.fila-plan-row-top > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fila-plan-row-top strong { flex: 0 0 auto; color: #a64d21; }
.fila-plan-meter { display: block; height: 0.35rem; border-radius: 999px; background: #dcebdc; overflow: hidden; }
.fila-plan-meter i { display: block; height: 100%; border-radius: inherit; background: #d47c4a; }
.fila-plan-row-bottom { font-size: 0.68rem; color: var(--ink-muted); }
.fila-page .plan-compact-resumo { padding-top: 0.35rem; border-top: 1px solid var(--line-soft); font-size: 0.75rem; }

@media (max-width: 1100px) {
  .fila-page .fila-split { grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr); }
}
@media (max-width: 760px) {
  .fila-page,
  .fila-page .bi-canvas,
  .fila-page .fila-split { height: auto; overflow: visible; }
  .fila-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .fila-page .fila-split { grid-template-columns: 1fr; }
  .fila-page .fila-split > .panel { min-height: 285px; }
  .fila-page .fila-trend-panel .line-chart { height: 150px; }
  .fila-page .fila-trend-panel .line-chart-wrap { overflow-x: auto; }
  .fila-page .fila-trend-panel .line-chart { min-width: 560px; }
  .fila-page .fila-split > .plan-subpanels { min-height: 320px; }
  .fila-page .fila-plan-ranking { overflow: visible; }
}

/* Prazo (SLA): mantém taxa e volume juntos, sem esticar o cartão. */
.sla-page { overflow-y: auto; }
.sla-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.sla-page .kpi-card:nth-child(2) .stat { color: #a64d21; }
.sla-page .bi-canvas { flex: 0 0 auto; overflow: visible; }
.sla-page .sla-split {
  flex: 0 0 auto;
  grid-template-columns: minmax(0, 1.4fr) minmax(270px, 0.85fr);
  align-items: start;
  overflow: visible;
}
.sla-page .sla-trend-panel { gap: 0.25rem; }
.sla-page .sla-trend-panel .line-chart-wrap { flex: 0 0 auto; min-height: 0; }
.sla-page .sla-trend-panel .line-chart { height: clamp(125px, 21vh, 210px); }
.sla-page .sla-trend-panel .series-legend { display: none; }
.sla-page .plan-subpanels.is-compact { gap: 0.4rem; }
.sla-page .plan-compact-resumo { padding-top: 0.35rem; border-top: 1px solid var(--line-soft); font-size: 0.75rem; }

@media (max-width: 1100px) {
  .sla-page .sla-split { grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr); }
}
@media (max-width: 760px) {
  .sla-page,
  .sla-page .bi-canvas,
  .sla-page .sla-split { height: auto; overflow: visible; }
  .sla-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sla-page .sla-split { grid-template-columns: 1fr; }
  .sla-page .sla-split > .panel { min-height: 285px; }
  .sla-page .sla-trend-panel .line-chart { height: 150px; }
  .sla-page .sla-trend-panel .line-chart-wrap { overflow-x: auto; }
  .sla-page .sla-trend-panel .line-chart { min-width: 560px; }
  .sla-page .sla-split > .plan-subpanels { min-height: 320px; }
  .sla-page .fila-plan-ranking { overflow: visible; }
}

/* Fatura: conversão mensal e composição das autorizações no filtro. */
.fatura-page { overflow-y: auto; }
.fatura-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.fatura-page .kpi-card:nth-child(3) .stat { color: #a64d21; }
.fatura-page .bi-canvas { flex: 0 0 auto; overflow: visible; }
.fatura-page .fatura-split {
  flex: 0 0 auto;
  grid-template-columns: minmax(0, 1.4fr) minmax(270px, 0.85fr);
  align-items: start;
  overflow: visible;
}
.fatura-page .fatura-trend-panel { gap: 0.25rem; }
.fatura-page .fatura-trend-panel .line-chart-wrap { flex: 0 0 auto; min-height: 0; }
.fatura-page .fatura-trend-panel .line-chart { height: clamp(125px, 21vh, 210px); }
.fatura-page .fatura-trend-panel .series-legend { display: none; }
.fatura-legend-matched,
.fatura-volume-matched { background: #65aa76; }
.fatura-legend-pending,
.fatura-volume-pending { background: #dfad5a; }
.fatura-page .fatura-summary-panel {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 0;
}
.fatura-summary-panel .panel-title { margin-bottom: 0.15rem; }
.fatura-summary-lede { margin: 0; color: var(--ink-muted); font-size: 0.78rem; }
.fatura-summary-rate {
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
  color: var(--verde-cerrado);
  font-size: clamp(1.6rem, 2.5vw, 2.25rem);
  font-weight: 750;
  letter-spacing: -0.035em;
  line-height: 1.05;
}
.fatura-summary-rate span { color: var(--ink-muted); font-size: 0.76rem; font-weight: 600; letter-spacing: 0; }
.fatura-pair-bar { display: flex; width: 100%; height: 1.2rem; overflow: hidden; border-radius: 999px; background: var(--line-soft); }
.fatura-pair-bar span { display: block; height: 100%; }
.fatura-pair-labels { display: grid; gap: 0.45rem; padding: 0.25rem 0 0.4rem; }
.fatura-pair-labels > div { display: grid; grid-template-columns: 0.6rem minmax(0, 1fr) auto; align-items: center; gap: 0.4rem; font-size: 0.76rem; }
.fatura-pair-labels i { width: 0.55rem; height: 0.55rem; border-radius: 2px; }
.fatura-pair-labels strong { color: var(--ink); font-size: 0.82rem; }
.fatura-matched-value {
  display: grid;
  gap: 0.15rem;
  margin-top: 0.1rem;
  padding: 0.7rem 0.8rem;
  border: 1px solid #d2e7d6;
  border-radius: 10px;
  background: #f1f8f2;
}
.fatura-matched-value span { color: var(--ink-muted); font-size: 0.72rem; font-weight: 650; }
.fatura-matched-value strong { color: var(--verde-cerrado); font-size: clamp(1.25rem, 1.9vw, 1.7rem); line-height: 1.1; }
.fatura-matched-value small { color: var(--ink-muted); font-size: 0.68rem; }

@media (max-width: 1100px) {
  .fatura-page .fatura-split { grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr); }
}
@media (max-width: 760px) {
  .fatura-page,
  .fatura-page .bi-canvas,
  .fatura-page .fatura-split { height: auto; overflow: visible; }
  .fatura-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .fatura-page .fatura-split { grid-template-columns: 1fr; }
  .fatura-page .fatura-split > .panel { min-height: 0; }
  .fatura-page .fatura-trend-panel .line-chart { height: 150px; }
  .fatura-page .fatura-trend-panel .line-chart-wrap { overflow-x: auto; }
  .fatura-page .fatura-trend-panel .line-chart { min-width: 560px; }
}

/* Pagamento: diferença entre despesa reconhecida, pago e saldo. */
.pagamento-page { overflow-y: auto; }
.pagamento-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.pagamento-page .bi-canvas { flex: 0 0 auto; overflow: visible; }
.pagamento-page .pagamento-split {
  flex: 0 0 auto;
  grid-template-columns: minmax(0, 1.4fr) minmax(270px, 0.85fr);
  align-items: start;
  overflow: visible;
}
.pagamento-page .pagamento-trend-panel { gap: 0.25rem; }
.pagamento-page .pagamento-trend-panel .line-chart-wrap { flex: 0 0 auto; min-height: 0; }
.pagamento-page .pagamento-trend-panel .line-chart { height: clamp(170px, 26vh, 240px); }
.pagamento-page .pagamento-trend-panel .series-legend { margin-top: 0; }
.pagamento-page .pagamento-summary-panel { display: flex; flex-direction: column; gap: 0.5rem; }
.pagamento-summary-panel .panel-title { margin-bottom: 0.1rem; }
.pagamento-summary-base { margin: 0; color: var(--ink-muted); font-size: 0.76rem; }
.pagamento-summary-base strong { color: var(--ink); }
.pagamento-summary-rate {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  color: var(--verde-cerrado);
  font-size: clamp(1.65rem, 2.6vw, 2.3rem);
  font-weight: 750;
  letter-spacing: -0.035em;
  line-height: 1.05;
}
.pagamento-summary-rate span { color: var(--ink-muted); font-size: 0.78rem; font-weight: 600; letter-spacing: 0; }
.pagamento-split-bar { display: flex; width: 100%; height: 1.2rem; overflow: hidden; border-radius: 999px; background: var(--line-soft); }
.pagamento-split-bar span { display: block; height: 100%; }
.pagamento-bar-paid,
.pagamento-key-paid { background: #65aa76; }
.pagamento-bar-open,
.pagamento-key-open { background: #dfad5a; }
.pagamento-summary-rows { display: grid; gap: 0.45rem; padding: 0.25rem 0 0.45rem; }
.pagamento-summary-rows > div { display: grid; grid-template-columns: 0.6rem minmax(0, 1fr) auto; align-items: center; gap: 0.4rem; font-size: 0.76rem; }
.pagamento-summary-rows i { width: 0.55rem; height: 0.55rem; border-radius: 2px; }
.pagamento-summary-rows strong { color: var(--ink); font-size: 0.82rem; }
.pagamento-traceability {
  display: grid;
  gap: 0.35rem;
  margin-top: 0.1rem;
  padding: 0.7rem 0.8rem;
  border: 1px solid #d2e7d6;
  border-radius: 10px;
  background: #f1f8f2;
}
.pagamento-traceability .stat-label { color: var(--ink-muted); }
.pagamento-trace-bar { height: 0.65rem; overflow: hidden; border-radius: 999px; background: #dfad5a; }
.pagamento-trace-bar span { display: block; height: 100%; background: #65aa76; }
.pagamento-traceability p { margin: 0; color: var(--ink-muted); font-size: 0.75rem; }
.pagamento-traceability p strong { color: #a64d21; }
.pagamento-details-content { display: grid; gap: 0.6rem; }
.pagamento-details-content > .muted { margin: 0; }
.pagamento-page .bi-details[open] { max-height: min(68vh, 700px); }
.pagamento-page .pagamento-details-content .fat-lag-panel { display: block; overflow: visible; min-height: 0; }

@media (max-width: 1100px) {
  .pagamento-page .pagamento-split { grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr); }
}
@media (max-width: 760px) {
  .pagamento-page,
  .pagamento-page .bi-canvas,
  .pagamento-page .pagamento-split { height: auto; overflow: visible; }
  .pagamento-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .pagamento-page .pagamento-split { grid-template-columns: 1fr; }
  .pagamento-page .pagamento-split > .panel { min-height: 0; }
  .pagamento-page .pagamento-trend-panel .line-chart-wrap { overflow-x: auto; }
  .pagamento-page .pagamento-trend-panel .line-chart { height: 170px; min-width: 560px; }
}

/* Pagamento: valor bruto e perfil médio de defasagem como leitura principal. */
.pagamento-page .pagamento-gross-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(310px, 0.85fr);
  align-items: start;
  gap: 0.55rem;
}
.pagamento-page .pagamento-gross-layout > .panel {
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 0.7rem 0.85rem;
  border: 1px solid color-mix(in srgb, var(--line) 70%, transparent);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 18px rgba(20, 22, 18, 0.05);
}
.pagamento-page .pagamento-gross-layout .fat-lag-panel {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 0.6rem;
  overflow: visible;
}
.pagamento-page .fat-lag-lede,
.pagamento-page .fat-lag-media,
.pagamento-page .fat-lag-hero,
.pagamento-page .fat-lag-history { margin: 0; }
.pagamento-page .fat-lag-lede { max-width: none; font-size: 0.75rem; }
.pagamento-page .fat-lag-media,
.pagamento-page .fat-lag-hero { display: grid; gap: 0.4rem; }
.pagamento-page .fat-lag-media-head,
.pagamento-page .fat-lag-hero-head { margin: 0; }
.pagamento-page .fat-lag-bar { height: 1.65rem; }
.pagamento-page .fat-lag-avg-grid { grid-template-columns: repeat(7, minmax(0, 1fr)); margin-top: 0.15rem; }
.pagamento-page .fat-lag-avg-cell {
  min-width: 0;
  padding: 0.35rem 0.3rem;
  border-radius: 7px;
  background: #f5f8f2;
}
.pagamento-page .fat-lag-avg-cell .stat-label { display: block; font-size: 0.63rem; line-height: 1.2; }
.pagamento-page .fat-lag-avg-cell strong { font-size: 0.8rem; white-space: nowrap; }
.pagamento-page .fat-lag-avg-cell em { font-size: 0.67rem; }
.pagamento-page .fat-lag-chips { margin-top: 0; grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr)); }
.pagamento-page .fat-lag-chip { padding: 0.2rem 0.3rem; }
.pagamento-page .fat-lag-chip strong { font-size: 0.8rem; }
.pagamento-page .fat-lag-history > summary {
  cursor: pointer;
  color: var(--verde-escuro);
  font-size: 0.75rem;
  font-weight: 700;
}
.pagamento-page .fat-lag-history[open] > summary { margin-bottom: 0.45rem; }
.pagamento-page .pagamento-bridge-panel { display: grid; gap: 0.65rem; }
.pagamento-bridge-panel .panel-title { margin-bottom: 0; }
.pagamento-bridge-panel > .muted { margin: 0; font-size: 0.73rem; }
.pagamento-bridge-panel .value-bridge { gap: 0.7rem; }
.pagamento-bridge-panel .value-bridge-row {
  grid-template-columns: minmax(6.8rem, 1.15fr) minmax(2rem, 0.85fr) auto;
  gap: 0.35rem;
  font-size: 0.73rem;
}
.pagamento-bridge-panel .value-bridge-row strong { font-size: 0.73rem; white-space: nowrap; }
.pagamento-bridge-panel .value-bridge-track { height: 0.55rem; }
.pagamento-bridge-note {
  margin: 0.15rem 0 0;
  padding: 0.65rem 0.75rem;
  border-radius: 9px;
  background: #f1f8f2;
  color: var(--verde-escuro);
  font-size: 0.75rem;
  font-weight: 650;
}
.pagamento-page .pagamento-details-content .line-chart-wrap { flex: 0 0 auto; }
.pagamento-page .pagamento-details-content .line-chart { height: 170px; }

@media (max-width: 1050px) {
  .pagamento-page .pagamento-gross-layout { grid-template-columns: 1fr; }
}
@media (max-width: 760px) {
  .pagamento-page .pagamento-gross-layout { gap: 0.4rem; }
  .pagamento-page .fat-lag-avg-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .pagamento-page .fat-lag-chip { min-width: 0; }
}

/* Os painéis principais acompanham a altura disponível da página. */
:is(.fila-page, .sla-page, .fatura-page, .pagamento-page) .bi-canvas {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
}
:is(.fila-page .fila-split, .sla-page .sla-split, .fatura-page .fatura-split, .pagamento-page .pagamento-gross-layout) {
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
  align-items: stretch;
  overflow: hidden;
}
:is(.fila-page .fila-split, .sla-page .sla-split, .fatura-page .fatura-split) > :is(.panel, .plan-subpanels) {
  height: 100%;
}
:is(.fila-page, .sla-page, .fatura-page) :is(.fila-trend-panel, .sla-trend-panel, .fatura-trend-panel) .line-chart-wrap {
  flex: 1 1 auto;
  min-height: 90px;
}
:is(.fila-page, .sla-page, .fatura-page) :is(.fila-trend-panel, .sla-trend-panel, .fatura-trend-panel) .line-chart {
  height: 100%;
  max-height: none;
}
:is(.fila-page, .sla-page, .fatura-page) .fila-volume-chart {
  flex: 0 0 clamp(84px, 14vh, 150px);
  height: auto;
}
:is(.fila-page, .sla-page) .fila-plan-ranking {
  grid-auto-rows: minmax(0, 1fr);
}
.fatura-page .fatura-summary-panel {
  justify-content: space-between;
}
.fatura-pair-matched { background: #65aa76; }
.fatura-pair-pending { background: #dfad5a; }
.pagamento-page .pagamento-gross-layout > .panel {
  height: 100%;
}
.pagamento-page .pagamento-bridge-panel {
  grid-template-rows: auto auto minmax(0, 1fr) auto;
}
.pagamento-page .pagamento-bridge-panel .value-bridge {
  grid-auto-rows: minmax(0, 1fr);
}
.previsao-page .exec-kpi-grid {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}
.previsao-page .previsao-charts { flex: 1 1 auto; min-height: 0; display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 0.55rem; }
.previsao-page .previsao-charts > .panel { min-width: 0; min-height: 0; margin: 0; padding: 0.7rem 0.85rem; display: flex; flex-direction: column; overflow: hidden; }
.previsao-page .previsao-charts .line-chart-wrap { flex: 1 1 auto; min-height: 0; }
.previsao-page .previsao-charts .line-chart { height: 100%; max-height: none; min-height: 0; }
.previsao-gross-panel > .muted { margin: 0.15rem 0 0.25rem; font-size: 0.68rem; }
.previsao-page .bi-canvas { min-height: 0; }
@media (max-width: 1100px) {
  .previsao-page .exec-kpi-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .previsao-page { overflow-y: auto; }
  .previsao-page .bi-canvas { flex: 0 0 auto; overflow: visible; }
  .previsao-page .previsao-charts { grid-template-columns: 1fr; }
  .previsao-page .previsao-charts > .panel { min-height: 250px; }
}
@media (max-width: 600px) {
  .previsao-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
.previsao-page .bi-canvas > .panel .line-chart {
  flex: 1 1 auto;
  height: 100%;
  max-height: none;
  min-height: 0;
}
.bi-neg-trend .line-chart {
  flex: 1 1 auto;
  height: 100%;
  max-height: none;
  min-height: 0;
}
.bi-home .exec-stage-card {
  display: flex;
  flex-direction: column;
}
.bi-home .exec-stage-resumo { margin: 0.4rem 0 0.2rem; }
.bi-home .exec-mini-kpis {
  flex: 1 1 auto;
  min-height: 0;
  grid-auto-rows: minmax(0, 1fr);
  margin: 0.25rem 0 0.45rem;
}
.bi-home .exec-mini-kpi { display: flex; flex-direction: column; justify-content: center; min-width: 0; min-height: 0; padding: 0.4rem 0.5rem; overflow: hidden; }
.bi-home .exec-mini-kpi strong { font-size: 0.9rem; line-height: 1.18; overflow-wrap: anywhere; }
.bi-home .exec-stage-link { flex: 0 0 auto; margin-top: auto; }
.bi-page:has(> .bi-details[open]) {
  overflow-y: auto;
}
.bi-page:has(> .bi-details[open]) .bi-canvas {
  flex: 0 0 auto;
  min-height: clamp(340px, 50vh, 600px);
  overflow: visible;
}
.dashboard-content:has(> .hero.validation-hero):not(:has(.bi-page)):not(:has(.bi-home)) {
  grid-template-rows: max-content max-content max-content minmax(185px, 1fr) minmax(315px, 1fr) max-content;
  grid-auto-rows: auto;
  overflow-y: auto;
}
.dashboard-content:has(> .hero.validation-hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .line-chart {
  flex: 1 1 auto;
  height: 100%;
  min-height: 0;
  max-height: none;
}
.dashboard-content:has(> .hero.validation-hero) > .validation-more {
  align-self: start;
}
.dashboard-content:has(> .validation-hero) > .panel .column-chart {
  flex: 0 0 135px;
  height: 135px;
  padding-top: 0.45rem;
}
.dashboard-content:has(> .validation-hero) > .panel .column-track { min-height: 75px; }
.dashboard-content:has(> .hero.anomaly-hero):not(:has(.bi-page)):not(:has(.bi-home)) {
  grid-template-rows: max-content max-content max-content minmax(260px, 1fr) max-content;
  grid-auto-rows: auto;
  overflow-y: auto;
}
.dashboard-content:has(> .hero.anomaly-hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .line-chart {
  flex: 1 1 auto;
  height: 100%;
  min-height: 0;
  max-height: none;
}
.dashboard-content:has(> .anomaly-hero) > .anomaly-panel .anomaly-list {
  overflow-y: auto;
  min-height: 0;
}
.dashboard-content:has(> .anomaly-hero) > .note {
  align-self: start;
}

@media (max-width: 1050px) {
  .pagamento-page .pagamento-gross-layout {
    height: auto;
    align-items: start;
    overflow: visible;
  }
  .pagamento-page .pagamento-gross-layout > .panel { height: auto; }
  .previsao-page .exec-kpi-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  :is(.fila-page, .sla-page, .fatura-page, .pagamento-page) .bi-canvas,
  :is(.fila-page .fila-split, .sla-page .sla-split, .fatura-page .fatura-split, .pagamento-page .pagamento-gross-layout) {
    flex: 0 0 auto;
    height: auto;
    overflow: visible;
  }
  :is(.fila-page .fila-split, .sla-page .sla-split, .fatura-page .fatura-split) > :is(.panel, .plan-subpanels) {
    height: auto;
  }
  :is(.fila-page, .sla-page, .fatura-page) :is(.fila-trend-panel, .sla-trend-panel, .fatura-trend-panel) .line-chart {
    height: 150px;
  }
  :is(.fila-page, .sla-page, .fatura-page) .fila-volume-chart { flex: 0 0 90px; }
  :is(.fila-page, .sla-page) .fila-plan-ranking { grid-auto-rows: auto; }
  .previsao-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dashboard-content:has(> .hero.validation-hero):not(:has(.bi-page)):not(:has(.bi-home)),
  .dashboard-content:has(> .hero.anomaly-hero):not(:has(.bi-page)):not(:has(.bi-home)) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: none;
    grid-auto-rows: auto;
  }
  .dashboard-content:has(> .validation-hero) > .panel,
  .dashboard-content:has(> .anomaly-hero) > .panel { min-height: 250px; }
}

/* Ranking por plano: linhas legíveis mesmo com o catálogo COINI completo. */
:is(.fila-page, .sla-page) .plan-subpanels.is-compact { gap: 0.35rem; }
.fila-plan-context { line-height: 1.3; }
.fila-plan-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  color: var(--ink-muted);
  font-size: 0.68rem;
}
.fila-plan-sort { display: inline-flex; flex: 0 0 auto; gap: 0.15rem; padding: 0.15rem; border-radius: 8px; background: #eef3eb; }
.fila-plan-sort button {
  border: 0;
  border-radius: 6px;
  padding: 0.25rem 0.4rem;
  background: transparent;
  color: var(--ink-muted);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
.fila-plan-sort button.active { background: #fff; color: var(--verde-escuro); box-shadow: 0 1px 4px rgba(20, 22, 18, 0.1); }
.fila-plan-sort button:focus-visible { outline: 2px solid var(--verde-cerrado); }
:is(.fila-page, .sla-page) .fila-plan-ranking {
  align-content: start;
  grid-auto-rows: max-content;
  gap: 0.3rem;
  padding-right: 0.2rem;
  scrollbar-width: thin;
}
.fila-plan-row {
  min-height: 65px;
  gap: 0.25rem;
  padding: 0.45rem 0.55rem;
  border-color: #e3e9df;
  background: #fff;
}
.fila-plan-row-top { align-items: center; font-size: 0.76rem; font-weight: 700; }
.fila-plan-row-top > span { display: flex; align-items: center; gap: 0.45rem; min-width: 0; }
.fila-plan-row-top small {
  display: inline-grid;
  flex: 0 0 1.2rem;
  place-items: center;
  height: 1.2rem;
  border-radius: 5px;
  background: #edf4eb;
  color: var(--verde-escuro);
  font-size: 0.61rem;
}
.fila-plan-row-top strong { padding: 0.16rem 0.38rem; border-radius: 6px; background: #eef5ec; color: var(--verde-escuro); font-size: 0.75rem; }
.fila-plan-row-top strong.above-average { background: #fff0e6; color: #a64d21; }
.fila-plan-meter { height: 0.4rem; }
.fila-plan-meter i { background: #69ad78; }
.fila-plan-row-bottom { display: flex; justify-content: space-between; gap: 0.4rem; font-size: 0.67rem; }
.fila-plan-row-bottom span:last-child { color: #a64d21; font-weight: 700; }
.fila-plan-empty { padding: 0.4rem 0.5rem; border: 1px dashed #cddccc; border-radius: 8px; color: var(--ink-muted); font-size: 0.71rem; }
.fila-plan-empty summary { cursor: pointer; color: var(--verde-escuro); font-weight: 700; }
.fila-plan-empty > div { display: flex; flex-wrap: wrap; gap: 0.25rem; padding-top: 0.4rem; }
.fila-plan-empty > div span { padding: 0.16rem 0.3rem; border-radius: 5px; background: #f3f6f0; }
:is(.fila-page, .sla-page) .plan-compact-resumo {
  flex: 0 0 auto;
  margin: 0;
  padding-top: 0.4rem;
  border-top: 1px solid var(--line-soft);
  line-height: 1.3;
}
.plan-select {
  display: grid;
  gap: 0.3rem;
  max-width: 28rem;
  margin: 0.6rem 0;
  color: var(--ink-muted);
  font-size: 0.74rem;
  font-weight: 700;
}
.plan-select select {
  width: 100%;
  padding: 0.5rem 0.65rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  font: inherit;
  font-size: 0.82rem;
}
.plan-select select:focus-visible { outline: 2px solid var(--verde-cerrado); outline-offset: 2px; }

@media (max-width: 760px) {
  :is(.fila-page, .sla-page) .fila-plan-ranking { overflow: visible; }
  .fila-plan-toolbar { align-items: flex-start; }
}

/* Negativas: todos os grupos de plano ficam visíveis na página. */
.negativas-page { overflow-y: auto; }
.negativas-page .bi-canvas { flex: 0 0 auto; overflow: visible; }
.negativas-page .bi-neg-grid {
  flex: 0 0 auto;
  grid-template-rows: minmax(250px, auto) auto minmax(170px, auto);
  overflow: visible;
}
.negativas-page .bi-neg-grid > .panel { overflow: visible; }
.negativas-page .bi-neg-planos { grid-column: 1 / -1; grid-row: 2; }
.negativas-page .bi-neg-trend { grid-row: 3; }
.negativas-page .bi-neg-side { gap: 0.35rem; }
.negativas-page .bi-neg-side > .motivo-mix {
  flex: 1 1 auto;
  min-height: 0;
  margin: 0;
}
.negativas-page .bi-neg-side .motivo-mix-bars {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1 1 auto;
  gap: 0.4rem;
}
.negativas-page .bi-neg-side .motivo-mix-row {
  grid-template-columns: 5rem minmax(0, 1fr) 2.4rem;
  gap: 0.45rem;
  padding: 0.45rem 0.55rem;
  border-radius: 8px;
  background: #f7f9f5;
  font-size: 0.72rem;
}
.negativas-page .bi-neg-side .motivo-mix-row .motivo-exec-track { height: 0.5rem; }
.neg-plan-scope { margin: 0.15rem 0 0.6rem; color: var(--ink-muted); font-size: 0.7rem; }
.neg-plan-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
.neg-plan-card {
  display: grid;
  gap: 0.42rem;
  min-width: 0;
  padding: 0.65rem 0.7rem;
  border: 1px solid #e3e9df;
  border-radius: 9px;
  background: #f8faf7;
  text-align: left;
  cursor: pointer;
}
.neg-plan-card:hover { border-color: #7dbd91; background: #eef7ef; }
.neg-plan-card-head, .neg-plan-card-foot { display: flex; align-items: baseline; justify-content: space-between; gap: 0.5rem; min-width: 0; }
.neg-plan-card-head strong { min-width: 0; color: var(--ink); font-size: 0.77rem; line-height: 1.2; overflow-wrap: anywhere; }
.neg-plan-card-head > span { flex: 0 0 auto; color: var(--verde-escuro); font-size: 0.8rem; font-weight: 750; }
.neg-plan-card-head > span.is-alert { color: #a64d21; }
.neg-plan-card .motivo-exec-track { height: 0.45rem; }
.neg-plan-card-foot { color: var(--ink-muted); font-size: 0.65rem; }
.neg-plan-card-foot span:first-child { color: var(--ink); font-weight: 650; }
.neg-plan-card.is-empty { background: #fbfcfa; }
.neg-plan-card.is-empty .motivo-exec-track { opacity: 0.45; }

.plan-focus-content { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 0.55rem; }
.plan-focus-content > .panel { margin: 0; }
.plan-focus-selector { flex: 0 0 auto; padding: 0.65rem 0.8rem; }
.plan-focus-picker { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.45rem; }
.plan-focus-picker button { border: 1px solid #d9e5da; background: #f7faf6; color: #285740; border-radius: 7px; padding: 0.26rem 0.52rem; font-size: 0.7rem; cursor: pointer; }
.plan-focus-picker button:hover, .plan-focus-picker button.active { border-color: #007940; background: #e8f3e9; color: #006533; }
.plan-focus-picker button.active { font-weight: 750; }
.plan-focus-panels { flex: 1 1 auto; min-height: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.55rem; }
.plan-focus-panels > .panel { min-height: 0; margin: 0; padding: 0.8rem; overflow: hidden; display: flex; flex-direction: column; justify-content: space-around; }
.plan-focus-overview .plan-focus-panels { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.plan-focus-page .bi-canvas { min-height: 0; overflow: hidden; }
.plan-focus-page .plan-focus-chart { justify-content: flex-start; }
.plan-focus-page .plan-focus-chart .line-chart-wrap { flex: 1 1 auto; min-height: 0; }
.plan-focus-page .plan-focus-chart .line-chart { height: 100%; min-height: 90px; max-height: none; }
.plan-focus-partial { color: #a4521f; font-size: 0.69rem; font-weight: 700; }
.sidebar-filter-note { margin: 0.4rem 0; color: #d7e3d5; font-size: 0.7rem; line-height: 1.35; }
.fila-volume-chart button.fila-volume-col { appearance: none; border: 0; background: transparent; padding: 0; font: inherit; color: inherit; cursor: pointer; }
.fila-volume-chart button.fila-volume-col:hover .fila-volume-track { filter: brightness(0.91); }
.plan-focus-forecast strong { color: var(--verde-escuro); font-size: clamp(1.5rem, 3vw, 2.4rem); }
.plan-focus-forecast p { margin: 0.3rem 0; }
.plan-focus-bar { margin-top: 0.8rem; }
.plan-focus-bar > div { display: flex; align-items: baseline; justify-content: space-between; gap: 0.75rem; font-size: 0.8rem; }
.plan-focus-bar > div span { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.plan-focus-bar strong { color: #065b32; }
.plan-focus-track { display: block; height: 0.65rem; margin-top: 0.22rem; border-radius: 99px; overflow: hidden; background: #e8ece6; }
.plan-focus-track i { display: block; height: 100%; border-radius: inherit; background: #42a365; }
.plan-focus-track i.orange { background: #c45c26; }
.plan-focus-unavailable { flex: 1 1 auto; padding: 1rem; }
.plan-focus-unavailable p { max-width: 65ch; }
.plan-focus-available { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.6rem; margin-top: 1rem; }
.plan-focus-available > div { display: flex; flex-direction: column; gap: 0.25rem; padding: 0.8rem; border: 1px solid #dde7dc; border-radius: 10px; background: #f8faf7; }
.plan-focus-available span { color: #075b34; font-weight: 700; }
.plan-focus-available strong { font-size: 1.5rem; color: #2f302a; }
.plan-focus-available small { color: #5a625c; }
@media (max-width: 900px) { .plan-focus-overview .plan-focus-panels { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .plan-focus-panels, .plan-focus-overview .plan-focus-panels { grid-template-columns: 1fr; overflow: auto; } .plan-focus-picker { max-height: 100px; overflow: auto; } }

@media (max-width: 1100px) {
  .neg-plan-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  .negativas-page .bi-neg-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
  .negativas-page .bi-neg-motivos,
  .negativas-page .bi-neg-side,
  .negativas-page .bi-neg-planos,
  .negativas-page .bi-neg-trend { grid-column: 1; grid-row: auto; }
  .negativas-page .bi-neg-side { min-height: 220px; }
  .neg-plan-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 480px) {
  .neg-plan-grid { grid-template-columns: 1fr; }
}

@media (min-width: 1101px) and (min-height: 640px) {
  .negativas-page { overflow: hidden; gap: 0.35rem; }
  .negativas-page .insight-card { padding: 0.3rem 0.5rem; }
  .negativas-page .insight-card p { font-size: 0.7rem; line-height: 1.2; }
  .negativas-page .kpi-card { min-height: 62px; padding: 0.32rem 0.55rem; }
  .negativas-page .kpi-card .stat { font-size: 1.2rem; }
  .negativas-page .bi-canvas { flex: 1 1 auto; min-height: 0; overflow: hidden; }
  .negativas-page .bi-neg-grid {
    flex: 1 1 auto;
    min-height: 0;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.18fr);
    grid-template-rows: minmax(155px, 1.15fr) minmax(100px, 0.75fr) minmax(125px, 1fr);
    gap: 0.4rem;
    overflow: hidden;
  }
  .negativas-page .bi-neg-grid > .panel { min-height: 0; overflow: hidden; padding: 0.45rem 0.6rem; }
  .negativas-page .bi-neg-motivos { grid-column: 1; grid-row: 1; }
  .negativas-page .bi-neg-side { grid-column: 1; grid-row: 2; }
  .negativas-page .bi-neg-planos { grid-column: 2; grid-row: 1 / 3; }
  .negativas-page .bi-neg-trend { grid-column: 1 / -1; grid-row: 3; }
  .negativas-page .bi-neg-motivos .motivo-table-row { padding: 0.11rem 0; }
  .negativas-page .motivo-table-name { flex-direction: row; align-items: baseline; gap: 0.2rem; }
  .negativas-page .motivo-table-name strong { flex: 1 1 auto; min-width: 0; }
  .negativas-page .motivo-table-name em { flex: 0 0 auto; font-size: 0.57rem; }
  .negativas-page .bi-neg-side .motivo-mix { margin-top: 0.1rem !important; }
  .negativas-page .bi-neg-side .motivo-mix-bars { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.2rem 0.35rem; }
  .negativas-page .bi-neg-side .motivo-mix-row { grid-template-columns: 3.3rem minmax(0, 1fr) 1.8rem; gap: 0.2rem; padding: 0.2rem 0.3rem; font-size: 0.64rem; }
  .neg-plan-scope { margin: 0.05rem 0 0.25rem; font-size: 0.62rem; }
  .neg-plan-grid {
    flex: 1 1 auto;
    min-height: 0;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 1fr);
    gap: 0.22rem;
  }
  .neg-plan-card { min-height: 0; align-content: space-between; gap: 0.12rem; padding: 0.22rem 0.32rem; border-radius: 7px; }
  .neg-plan-card-head strong { font-size: 0.67rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .neg-plan-card-head > span { font-size: 0.69rem; }
  .neg-plan-card .motivo-exec-track { height: 0.24rem; }
  .neg-plan-card-foot { font-size: 0.54rem; white-space: nowrap; gap: 0.2rem; }
  .negativas-page .bi-neg-trend .line-chart { height: 100%; min-height: 80px; max-height: none; }
  .negativas-page .bi-details:not([open]) { max-height: none; overflow: hidden; }
}

@media (min-width: 1101px) and (min-height: 900px) {
  .negativas-page .neg-plan-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .negativas-page .neg-plan-card { padding: 0.35rem 0.5rem; gap: 0.2rem; }
  .negativas-page .neg-plan-card-head strong { font-size: 0.74rem; }
  .negativas-page .neg-plan-card-head > span { font-size: 0.76rem; }
  .negativas-page .neg-plan-card .motivo-exec-track { height: 0.38rem; }
  .negativas-page .neg-plan-card-foot { font-size: 0.62rem; }
}
`;export{e as default};