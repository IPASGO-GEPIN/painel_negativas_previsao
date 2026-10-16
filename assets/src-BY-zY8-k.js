var e=`:root {\r
  /* Guia de Marca IPASGO Saúde (2026) — alinhado ao painel PEONA */\r
  --verde-cerrado: #007940;\r
  --verde-escuro: #006533;\r
  --lima-goia: #c5e838;\r
  --areia-caldas: #f3eee4;\r
\r
  --verde-araguaia: #6eb02e;\r
  --amarelo-ipe: #e7c221;\r
  --luz-planalto: #efe98c;\r
  --chumbo-serra: #2f302a;\r
\r
  --bg: var(--areia-caldas);\r
  --bg-deep: #ebe6dc;\r
  --ink: var(--chumbo-serra);\r
  --ink-muted: #5a625c;\r
  --accent: var(--verde-cerrado);\r
  --accent-soft: #e8f2ec;\r
  --accent-bright: var(--lima-goia);\r
  --warn: #8a6a00;\r
  --line: #d8d3c8;\r
  --line-soft: rgba(0, 121, 64, 0.08);\r
  --card: #ffffff;\r
  --card-wash: #f8faf9;\r
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.02);\r
  --shadow-hover: 0 2px 6px rgba(0, 0, 0, 0.05), 0 6px 16px rgba(0, 0, 0, 0.03);\r
  --radius: 12px;\r
  --gap: 12px;\r
  --font-display: 'General Sans', 'Segoe UI', system-ui, sans-serif;\r
  --font-body: 'General Sans', 'Segoe UI', system-ui, sans-serif;\r
  color: var(--ink);\r
  background: var(--bg);\r
  font-family: var(--font-body);\r
  font-size: 14px;\r
  font-weight: 400;\r
  line-height: 1.45;\r
  font-synthesis: none;\r
  font-variant-numeric: tabular-nums;\r
  text-rendering: optimizeLegibility;\r
  -webkit-font-smoothing: antialiased;\r
  -moz-osx-font-smoothing: grayscale;\r
}\r
\r
/* Um único scroll: a página inteira dentro do canvas (sem scroll interno no ranking). */\r
.dashboard-content:has(> .apresentacao-page),\r
.dashboard-content:has(> .confronto-page),\r
.dashboard-content:has(> .metodologia-page) {\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
.metodologia-page {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  width: 100%;\r
  max-width: 1360px;\r
  margin: 0 auto;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
  overscroll-behavior: contain;\r
  padding: 1rem 1.25rem 2.5rem;\r
  -webkit-overflow-scrolling: touch;\r
}\r
.confronto-page {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  width: 100%;\r
  max-width: 1360px;\r
  margin: 0 auto;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
  overscroll-behavior: contain;\r
  padding: 1rem 1.25rem 2.5rem;\r
}\r
.confronto-escopo { color: var(--ink-muted); margin: .25rem 0 1rem; }\r
.confronto-alerta { padding: .75rem 1rem; border-left: 3px solid var(--warn); background: var(--card); margin: 1rem 0; }\r
.confronto-busca { width: 100%; margin: .4rem 0 .7rem; border: 1px solid var(--line); border-radius: 8px; padding: .45rem .65rem; background: var(--card); color: var(--ink); font: inherit; }\r
.confronto-ranking { max-height: min(55vh, 500px); overflow: auto; }\r
.confronto-ranking td small { display: block; color: var(--ink-muted); }\r
.confronto-ranking tr.confronto-selecionado { background: var(--accent-soft); }\r
.confronto-perfil-topo { display: flex; align-items: flex-start; justify-content: space-between; gap: .75rem; flex-wrap: wrap; }\r
.confronto-exemplos { display: flex; flex-wrap: wrap; gap: .45rem; }\r
.confronto-exemplos a { color: var(--accent); font-weight: 700; }\r
.confronto-metodo > summary { color: var(--verde-escuro); font-weight: 700; cursor: pointer; }\r
.apresentacao-page {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  width: 100%;\r
  max-width: 1360px;\r
  margin: 0 auto;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
  overscroll-behavior: contain;\r
  padding: 1rem 1.25rem 2.5rem;\r
  -webkit-overflow-scrolling: touch;\r
}\r
.apresentacao-scope { display: flex; align-items: center; gap: .65rem; flex-wrap: wrap; margin: 0 0 1rem; }\r
.apresentacao-scope label { font-weight: 700; }\r
.apresentacao-scope select, .apresentacao-search { border: 1px solid var(--line); border-radius: 8px; padding: .45rem .65rem; background: var(--card); color: var(--ink); font: inherit; }\r
.apresentacao-scope span { color: var(--ink-muted); }\r
.apresentacao-caution { padding: .75rem 1rem; border-left: 3px solid var(--warn); background: var(--card); margin: 1rem 0; }\r
.apresentacao-search { width: 100%; margin-bottom: .65rem; }\r
.apresentacao-lista {\r
  max-height: min(52vh, 480px);\r
  overflow: auto;\r
  overscroll-behavior: contain;\r
}\r
.apresentacao-lista th { position: sticky; top: 0; z-index: 1; background: var(--card); }\r
.apresentacao-lista td small { display: block; color: var(--ink-muted); }\r
.apresentacao-lista tr.apresentacao-selected { background: var(--accent-soft); }\r
.apresentacao-indice { color: var(--verde-escuro); white-space: nowrap; }\r
.apresentacao-metodo-indice { margin-bottom: var(--gap); }\r
.apresentacao-metodo-indice p { margin: .5rem 0; }\r
.apresentacao-metodo-indice > summary, .apresentacao-detalhes > summary { cursor: pointer; font-weight: 700; color: var(--verde-escuro); }\r
.apresentacao-resumo { padding: .75rem .9rem; background: var(--accent-soft); border-radius: 8px; }\r
.apresentacao-perfil-topo { display: flex; align-items: flex-start; justify-content: space-between; gap: .75rem; flex-wrap: wrap; }\r
.apresentacao-perfil-topo .panel-title { margin-bottom: 0; }\r
.apresentacao-graficos { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: var(--gap); margin: 1rem 0; }\r
.apresentacao-graficos > div { min-width: 0; }\r
.apresentacao-graficos .panel-title { margin-bottom: .4rem; }\r
.apresentacao-graficos-omitidos { margin: .3rem 0 .8rem; padding: .65rem .8rem; border-left: 3px solid var(--line); background: var(--card-wash); color: var(--ink-muted); font-size: .88rem; }\r
.apresentacao-graficos-omitidos strong { color: var(--ink); }\r
.apresentacao-graficos-omitidos p { margin: .2rem 0 0; }\r
.apresentacao-detalhes { border-top: 1px solid var(--line); padding-top: 1rem; margin-top: 1rem; }\r
.apresentacao-detalhes .apresentacao-subtable { margin-top: .8rem; }\r
.apresentacao-decomposicao { display: flex; flex-wrap: wrap; gap: .5rem; margin: .75rem 0 1rem; }\r
.apresentacao-decomposicao span { padding: .45rem .65rem; border: 1px solid var(--line); border-radius: 8px; background: var(--card-wash); }\r
.apresentacao-decomposicao strong { color: var(--verde-escuro); }\r
.apresentacao-pick { border: 0; background: transparent; padding: 0; color: var(--accent); text-align: left; font: inherit; font-weight: 700; cursor: pointer; }\r
.apresentacao-subtable { margin-top: 1.5rem; }\r
.apresentacao-casos { margin-top: 1.5rem; padding: 1rem; border: 1px solid var(--line); border-radius: 10px; background: var(--card-wash); }\r
.apresentacao-loading {\r
  display: flex; gap: .85rem; align-items: flex-start;\r
  margin: .85rem 0; padding: .85rem 1rem;\r
  border: 1px solid var(--accent); border-radius: 10px;\r
  background: color-mix(in srgb, var(--accent-soft, #e8f5ee) 80%, white);\r
}\r
.apresentacao-loading strong { display: block; color: var(--verde-escuro); margin-bottom: .2rem; }\r
.apresentacao-loading p { margin: .15rem 0; }\r
.apresentacao-loading-spinner {\r
  flex: 0 0 auto; width: 1.35rem; height: 1.35rem; margin-top: .15rem;\r
  border: 2.5px solid color-mix(in srgb, var(--verde-escuro) 25%, transparent);\r
  border-top-color: var(--verde-escuro);\r
  border-radius: 50%;\r
  animation: apresentacao-spin .7s linear infinite;\r
}\r
@keyframes apresentacao-spin { to { transform: rotate(360deg); } }\r
.apresentacao-casos-lista { display: flex; flex-direction: column; gap: .65rem; margin-top: .75rem; }\r
.apresentacao-caso { border: 1px solid var(--line); border-radius: 8px; background: var(--card); }\r
.apresentacao-caso > summary {\r
  display: flex; flex-wrap: wrap; gap: .65rem 1rem; align-items: center;\r
  cursor: pointer; padding: .7rem .85rem; list-style: none; font-size: .92rem;\r
}\r
.apresentacao-caso > summary::-webkit-details-marker { display: none; }\r
.apresentacao-caso > summary strong { color: var(--verde-escuro); }\r
.apresentacao-caso > summary span { color: var(--ink-muted); }\r
.apresentacao-caso[open] > summary { border-bottom: 1px solid var(--line); }\r
.apresentacao-caso .table-wrap { padding: .5rem .65rem .75rem; overflow-x: auto; }\r
.apresentacao-proc { display: flex; flex-direction: column; gap: .15rem; min-width: 12rem; max-width: 32rem; }\r
.apresentacao-proc code { font-size: .85em; }\r
.apresentacao-proc-desc { display: block; color: var(--ink-muted); font-size: .82rem; line-height: 1.3; white-space: normal; }\r
.apresentacao-ver-mais { padding: .5rem .7rem; border: 1px solid var(--verde-escuro); border-radius: 8px; color: var(--verde-escuro); background: var(--card); font: inherit; font-weight: 700; cursor: pointer; }\r
.apresentacao-ver-mais:hover, .apresentacao-ver-mais:focus-visible { background: var(--accent-soft); }\r
\r
* {\r
  box-sizing: border-box;\r
}\r
\r
html,\r
body,\r
#root {\r
  margin: 0;\r
  min-height: 100%;\r
}\r
\r
body {\r
  /* Fundo limpo estilo PEONA — sem blur/overlays que embassam SVG */\r
  background: var(--areia-caldas);\r
}\r
\r
a {\r
  color: var(--accent);\r
  text-decoration: none;\r
}\r
\r
a:hover {\r
  text-decoration: underline;\r
}\r
\r
:focus-visible {\r
  outline: 3px solid var(--amarelo-ipe);\r
  outline-offset: 3px;\r
}\r
\r
h1,\r
h2,\r
h3 {\r
  font-family: var(--font-display);\r
  font-weight: 600;\r
  letter-spacing: -0.01em;\r
  margin: 0 0 0.4em;\r
  color: var(--verde-escuro);\r
}\r
\r
p {\r
  margin: 0 0 1rem;\r
  color: var(--ink-muted);\r
}\r
\r
.shell {\r
  max-width: 1360px;\r
  margin: 0 auto;\r
  padding: 0 1.25rem 3rem;\r
}\r
\r
/* ===== Layout BI: sidebar + canvas viewport ===== */\r
html,\r
body,\r
#root {\r
  height: 100%;\r
  overflow: hidden;\r
}\r
\r
.app-shell {\r
  --sidebar-w: 280px;\r
  --sidebar-w-collapsed: 56px;\r
  display: flex;\r
  align-items: stretch;\r
  flex-direction: row;\r
  height: 100vh;\r
  max-height: 100vh;\r
  overflow: hidden;\r
}\r
\r
.app-shell.sidebar-collapsed {\r
  --sidebar-w: var(--sidebar-w-collapsed);\r
}\r
\r
.app-main {\r
  flex: 1 1 auto;\r
  min-width: 0;\r
  min-height: 0;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 0 14px 10px;\r
  width: 100%;\r
  max-width: none;\r
  margin: 0;\r
  overflow: hidden;\r
}\r
\r
.main-topbar {\r
  display: flex;\r
  align-items: center;\r
  gap: 0.75rem;\r
  padding: 0.45rem 0;\r
  flex: 0 0 auto;\r
}\r
\r
.main-topbar-context {\r
  flex: 1 1 auto;\r
  display: flex;\r
  align-items: center;\r
  gap: 0.5rem;\r
  min-width: 0;\r
  flex-wrap: wrap;\r
}\r
\r
.topbar-pill {\r
  display: inline-flex;\r
  flex-direction: column;\r
  gap: 0.05rem;\r
  padding: 0.28rem 0.7rem;\r
  border-radius: 10px;\r
  border: 1px solid var(--line-soft, #e6e2d8);\r
  background: var(--card, #fff);\r
  line-height: 1.15;\r
}\r
\r
.topbar-pill-lbl {\r
  font-size: 0.62rem;\r
  font-weight: 700;\r
  letter-spacing: 0.06em;\r
  text-transform: uppercase;\r
  color: var(--ink-muted);\r
}\r
\r
.topbar-pill strong {\r
  font-size: 0.84rem;\r
  font-weight: 700;\r
  color: var(--ink);\r
}\r
\r
.topbar-pill-extract strong {\r
  color: var(--verde-cerrado, #007940);\r
}\r
\r
.topbar-plan-filter {\r
  border: 1px solid #91c8a2;\r
  background: #eaf6ed;\r
  color: #075b34;\r
  border-radius: 9px;\r
  padding: 0.35rem 0.55rem;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  cursor: pointer;\r
}\r
\r
.topbar-plan-filter:hover { background: #d9efdf; }\r
.topbar-plan-filter span { margin-left: 0.35rem; font-size: 1rem; }\r
.topbar-month-filter { border-color: #e5b596; background: #fff1e7; color: #9c491f; }\r
.topbar-month-filter:hover { background: #ffe3d1; }\r
\r
.main-topbar-filters {\r
  margin: 0;\r
  font-size: 0.78rem;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
.main-topbar-actions {\r
  display: flex;\r
  align-items: center;\r
  gap: 0.55rem;\r
  flex: 0 0 auto;\r
}\r
\r
.topbar-download {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.65rem;\r
  min-height: 42px;\r
  border: 1px solid var(--verde-cerrado, #007940);\r
  background: var(--verde-cerrado, #007940);\r
  color: #fff;\r
  border-radius: 11px;\r
  padding: 0.35rem 0.8rem 0.35rem 0.45rem;\r
  box-shadow: 0 2px 7px rgba(0, 93, 49, 0.17);\r
  cursor: pointer;\r
  white-space: nowrap;\r
  transition: background-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease;\r
}\r
\r
.topbar-download:hover:not(:disabled) {\r
  background: var(--verde-escuro, #006533);\r
  box-shadow: 0 4px 11px rgba(0, 93, 49, 0.22);\r
  transform: translateY(-1px);\r
}\r
\r
.topbar-download-icon {\r
  display: grid;\r
  place-items: center;\r
  width: 30px;\r
  height: 30px;\r
  flex: 0 0 30px;\r
  border-radius: 8px;\r
  background: rgba(255, 255, 255, 0.17);\r
}\r
\r
.topbar-download-icon svg {\r
  width: 17px;\r
  height: 17px;\r
}\r
\r
.topbar-download-copy {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  line-height: 1.12;\r
}\r
\r
.topbar-download-copy strong {\r
  font-size: 0.78rem;\r
  font-weight: 750;\r
}\r
\r
.topbar-download-copy small {\r
  margin-top: 0.17rem;\r
  font-size: 0.64rem;\r
  font-weight: 500;\r
  color: rgba(255, 255, 255, 0.84);\r
}\r
\r
.topbar-download:disabled {\r
  opacity: 0.65;\r
  cursor: wait;\r
}\r
\r
@media (max-width: 600px) {\r
  .topbar-download {\r
    min-height: 36px;\r
    padding: 0.2rem;\r
  }\r
\r
  .topbar-download-copy {\r
    display: none;\r
  }\r
}\r
\r
.topbar-download-err {\r
  font-size: 0.72rem;\r
  color: #c62828;\r
  font-weight: 600;\r
}\r
\r
.sidebar-toggle {\r
  display: none;\r
  border: 1px solid var(--line);\r
  background: var(--card);\r
  color: var(--ink);\r
  border-radius: 8px;\r
  padding: 0.35rem 0.65rem;\r
  font-weight: 600;\r
  cursor: pointer;\r
}\r
\r
.sidebar-toggle-desktop {\r
  display: inline-flex;\r
}\r
\r
.dashboard-content {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.sidebar-backdrop {\r
  display: none;\r
}\r
\r
.sidebar {\r
  position: relative;\r
  flex: 0 0 var(--sidebar-w);\r
  width: var(--sidebar-w);\r
  min-width: var(--sidebar-w);\r
  max-width: var(--sidebar-w);\r
  height: 100vh;\r
  overflow: hidden;\r
  background: var(--chumbo-serra);\r
  color: var(--areia-caldas);\r
  display: flex;\r
  flex-direction: column;\r
  padding: 10px 10px 12px;\r
  box-sizing: border-box;\r
  z-index: 50;\r
  transition: width 0.2s ease, min-width 0.2s ease, max-width 0.2s ease;\r
  -webkit-font-smoothing: auto;\r
  -moz-osx-font-smoothing: auto;\r
  text-rendering: geometricPrecision;\r
}\r
\r
.sidebar-top {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 0.35rem;\r
  margin-bottom: 8px;\r
  flex: 0 0 auto;\r
}\r
\r
.sidebar-top .brand-lockup {\r
  flex: 1 1 auto;\r
  min-width: 0;\r
}\r
\r
.sidebar-collapse-btn {\r
  flex: 0 0 auto;\r
  border: 1px solid rgba(255, 255, 255, 0.18);\r
  background: rgba(255, 255, 255, 0.06);\r
  color: var(--areia-caldas);\r
  border-radius: 8px;\r
  width: 2rem;\r
  height: 2rem;\r
  font-size: 0.95rem;\r
  cursor: pointer;\r
  line-height: 1;\r
}\r
\r
.sidebar-collapse-btn:hover {\r
  background: rgba(255, 255, 255, 0.12);\r
}\r
\r
.sidebar-scroll {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
  scrollbar-width: thin;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.35rem;\r
}\r
\r
.app-shell.sidebar-collapsed .hub-titles,\r
.app-shell.sidebar-collapsed .sidebar-group-label,\r
.app-shell.sidebar-collapsed .sidebar-link-text,\r
.app-shell.sidebar-collapsed .sidebar-filters,\r
.app-shell.sidebar-collapsed .sidebar-actions,\r
.app-shell.sidebar-collapsed .sidebar-credit,\r
.app-shell.sidebar-collapsed .sidebar-caret,\r
.app-shell.sidebar-collapsed .brand-logo-slot {\r
  display: none;\r
}\r
\r
.app-shell.sidebar-collapsed .sidebar {\r
  padding: 8px 6px;\r
}\r
\r
.app-shell.sidebar-collapsed .sidebar-link {\r
  justify-content: center;\r
  padding: 0.55rem 0.25rem;\r
}\r
\r
.app-shell.sidebar-collapsed .sidebar-link::before {\r
  content: none;\r
}\r
\r
.app-shell.sidebar-collapsed .sidebar-link-icon {\r
  display: inline-flex;\r
}\r
\r
.app-shell.sidebar-collapsed .sidebar-group-toggle {\r
  justify-content: center;\r
  padding: 0.45rem 0.25rem;\r
  gap: 0;\r
}\r
\r
.app-shell.sidebar-collapsed .sidebar-group-toggle .sidebar-link-icon {\r
  display: inline-flex;\r
}\r
\r
.app-shell.sidebar-collapsed .sidebar-collapse-btn {\r
  width: 100%;\r
  margin-top: 0.25rem;\r
}\r
\r
\r
.brand-lockup {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: stretch;\r
  gap: 8px;\r
  text-decoration: none;\r
  color: inherit;\r
  min-width: 0;\r
}\r
\r
.brand-lockup:hover {\r
  text-decoration: none;\r
}\r
\r
/* Slot baixo: SVG com viewBox na marca (nítido em qualquer DPI) */\r
.brand-logo-slot {\r
  display: block;\r
  width: 100%;\r
  max-width: 180px;\r
  height: 36px;\r
  overflow: hidden;\r
  line-height: 0;\r
}\r
\r
.logo-img--sidebar {\r
  display: block;\r
  width: 100%;\r
  height: 100%;\r
  max-width: none;\r
  max-height: none;\r
  object-fit: contain;\r
  object-position: left center;\r
  background: transparent;\r
}\r
\r
.logo-img--footer {\r
  display: block;\r
  height: 40px;\r
  width: auto;\r
  max-width: 180px;\r
  object-fit: contain;\r
  border-radius: 8px;\r
}\r
\r
.hub-titles {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.05rem;\r
  padding: 0 0.1rem;\r
  min-width: 0;\r
}\r
\r
.hub-titles .header-title {\r
  margin: 0;\r
  font-family: var(--font-display);\r
  font-size: 0.82rem;\r
  font-weight: 600;\r
  line-height: 1.2;\r
  letter-spacing: 0;\r
  color: #f3eee4;\r
}\r
\r
.hub-titles .header-subtitle {\r
  margin: 0;\r
  font-size: 0.7rem;\r
  font-weight: 600;\r
  line-height: 1.25;\r
  letter-spacing: 0.01em;\r
  color: var(--lima-goia);\r
}\r
\r
.brand-accent {\r
  margin-top: 8px;\r
  height: 2px;\r
  border-radius: 999px;\r
  background: linear-gradient(\r
    90deg,\r
    var(--lima-goia) 0%,\r
    var(--verde-araguaia) 55%,\r
    transparent 100%\r
  );\r
}\r
\r
.sidebar-nav {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.85rem;\r
  flex: 1 1 auto;\r
}\r
\r
.sidebar-group-label {\r
  margin: 0 0 0.25rem;\r
  padding: 0 0.35rem;\r
  font-size: 0.6875rem;\r
  font-weight: 600;\r
  letter-spacing: 0.04em;\r
  text-transform: uppercase;\r
  color: #b8b4a8;\r
}\r
\r
.sidebar-group-toggle {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  width: 100%;\r
  margin: 0.35rem 0 0.15rem;\r
  padding: 0.2rem 0.15rem;\r
  border: 0;\r
  background: transparent;\r
  cursor: pointer;\r
  color: inherit;\r
}\r
\r
.sidebar-group-toggle .sidebar-group-label {\r
  margin: 0;\r
}\r
\r
.sidebar-group-toggle .sidebar-caret {\r
  width: auto;\r
  padding: 0 0.35rem;\r
  opacity: 0.75;\r
  background: transparent;\r
  color: inherit;\r
}\r
\r
.sidebar-link-row {\r
  display: flex;\r
  align-items: stretch;\r
  gap: 0.15rem;\r
}\r
\r
.sidebar-link-row .sidebar-link {\r
  flex: 1 1 auto;\r
  min-width: 0;\r
}\r
\r
.sidebar-caret {\r
  flex: 0 0 auto;\r
  width: 1.75rem;\r
  border: 0;\r
  border-radius: 8px;\r
  background: transparent;\r
  color: #c4c0b4;\r
  cursor: pointer;\r
  font-size: 0.7rem;\r
  line-height: 1;\r
}\r
\r
.sidebar-caret:hover {\r
  background: rgba(243, 238, 228, 0.08);\r
  color: #fff;\r
}\r
\r
.sidebar-subnav {\r
  display: grid;\r
  gap: 0.15rem;\r
  margin: 0.15rem 0 0.35rem;\r
  padding: 0.15rem 0 0.15rem 0.55rem;\r
  border-left: 2px solid rgba(197, 232, 56, 0.35);\r
  margin-left: 0.65rem;\r
}\r
\r
.sidebar-sublink {\r
  display: block;\r
  padding: 0.35rem 0.55rem;\r
  border-radius: 8px;\r
  color: #d4cfc4;\r
  font-size: 0.78rem;\r
  font-weight: 500;\r
  text-decoration: none;\r
  line-height: 1.3;\r
}\r
\r
.sidebar-sublink:hover {\r
  background: rgba(243, 238, 228, 0.08);\r
  color: #fff;\r
  text-decoration: none;\r
}\r
\r
.sidebar-sublink.active {\r
  background: rgba(197, 232, 56, 0.22);\r
  color: var(--lima-goia);\r
  font-weight: 600;\r
  text-decoration: none;\r
}\r
\r
.section-flash {\r
  animation: section-flash 1.2s ease;\r
}\r
\r
@keyframes section-flash {\r
  0% {\r
    box-shadow: 0 0 0 0 rgba(197, 232, 56, 0.55);\r
  }\r
  40% {\r
    box-shadow: 0 0 0 4px rgba(197, 232, 56, 0.35);\r
  }\r
  100% {\r
    box-shadow: 0 0 0 0 transparent;\r
  }\r
}\r
\r
.panel[id] {\r
  scroll-margin-top: 1rem;\r
}\r
\r
.sidebar-link {\r
  display: flex;\r
  align-items: center;\r
  gap: 0.55rem;\r
  width: 100%;\r
  padding: 0.5rem 0.65rem;\r
  border-radius: 10px;\r
  color: #ebe6da;\r
  font-size: 0.84rem;\r
  font-weight: 500;\r
  text-decoration: none;\r
  line-height: 1.3;\r
  letter-spacing: 0;\r
}\r
\r
.sidebar-link-icon {\r
  display: inline-flex;\r
  flex: 0 0 auto;\r
  width: 1.25rem;\r
  height: 1.25rem;\r
  align-items: center;\r
  justify-content: center;\r
  opacity: 0.95;\r
}\r
\r
.sidebar-link-icon svg {\r
  display: block;\r
}\r
\r
.sidebar-group-toggle .sidebar-link-icon {\r
  display: inline-flex;\r
  flex: 0 0 auto;\r
  width: 1.25rem;\r
  height: 1.25rem;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.sidebar-link:hover {\r
  background: rgba(243, 238, 228, 0.08);\r
  color: #fff;\r
  text-decoration: none;\r
}\r
\r
.sidebar-link.active {\r
  background: var(--lima-goia);\r
  color: var(--chumbo-serra);\r
  font-weight: 600;\r
  text-decoration: none;\r
}\r
\r
.sidebar-actions {\r
  margin-top: 1rem;\r
  padding-top: 0.85rem;\r
  border-top: 1px solid rgba(243, 238, 228, 0.18);\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.55rem;\r
}\r
\r
.sidebar-check {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 0.4rem;\r
  font-size: 0.75rem;\r
  color: #d4cfc4;\r
  cursor: pointer;\r
}\r
\r
.sidebar-refresh {\r
  width: 100%;\r
  border: none;\r
  border-radius: 10px;\r
  padding: 0.7rem 0.85rem;\r
  font-weight: 600;\r
  font-size: 0.875rem;\r
  cursor: pointer;\r
  background: var(--lima-goia);\r
  color: var(--chumbo-serra);\r
}\r
\r
.sidebar-refresh:hover:not(:disabled) {\r
  filter: brightness(1.05);\r
}\r
\r
.sidebar-refresh:disabled {\r
  opacity: 0.65;\r
  cursor: wait;\r
}\r
\r
.sidebar-refresh-msg {\r
  margin: 0;\r
  font-size: 0.7rem;\r
  line-height: 1.35;\r
  color: rgba(243, 238, 228, 0.7);\r
  word-break: break-word;\r
  max-height: 4.5rem;\r
  overflow: hidden;\r
}\r
\r
.sidebar-refresh-msg.status-ok {\r
  color: var(--lima-goia);\r
}\r
\r
.sidebar-refresh-msg.status-error {\r
  color: #f0a8a8;\r
}\r
\r
.sidebar-credit {\r
  margin-top: auto;\r
  padding: 16px 8px 6px;\r
  text-align: center;\r
  border-top: 1px solid rgba(243, 238, 228, 0.18);\r
}\r
\r
.sidebar-credit-title {\r
  margin: 0;\r
  font-size: 0.8125rem;\r
  font-weight: 600;\r
  color: #f3eee4;\r
}\r
\r
.sidebar-credit-org {\r
  margin: 4px 0 0;\r
  font-size: 0.75rem;\r
  letter-spacing: 0.02em;\r
  color: #c4c0b4;\r
}\r
\r
.sidebar-credit-dot {\r
  display: inline-block;\r
  width: 3px;\r
  height: 3px;\r
  margin: 0 5px;\r
  border-radius: 50%;\r
  background: rgba(243, 238, 228, 0.55);\r
  vertical-align: middle;\r
}\r
\r
@media (max-width: 960px) {\r
  .sidebar-toggle {\r
    display: inline-flex;\r
  }\r
\r
  .sidebar-toggle-desktop {\r
    display: none;\r
  }\r
\r
  .sidebar-collapse-btn {\r
    display: none;\r
  }\r
\r
  .app-shell.sidebar-collapsed {\r
    --sidebar-w: 280px;\r
  }\r
\r
  .app-shell.sidebar-collapsed .hub-titles,\r
  .app-shell.sidebar-collapsed .sidebar-group-label,\r
  .app-shell.sidebar-collapsed .sidebar-link-text,\r
  .app-shell.sidebar-collapsed .sidebar-filters,\r
  .app-shell.sidebar-collapsed .sidebar-actions,\r
  .app-shell.sidebar-collapsed .sidebar-credit,\r
  .app-shell.sidebar-collapsed .brand-logo-slot {\r
    display: revert;\r
  }\r
\r
  .app-shell.sidebar-collapsed .sidebar-link::before {\r
    content: none;\r
  }\r
\r
  .sidebar {\r
    position: fixed;\r
    top: 0;\r
    left: 0;\r
    right: auto;\r
    transform: translateX(-105%);\r
    transition: transform 0.22s ease;\r
    box-shadow: 12px 0 36px rgba(0, 0, 0, 0.35);\r
    width: min(300px, 88vw);\r
    min-width: min(300px, 88vw);\r
    max-width: min(300px, 88vw);\r
  }\r
\r
  .app-shell.sidebar-open .sidebar {\r
    transform: translateX(0);\r
  }\r
\r
  .sidebar-backdrop {\r
    display: block;\r
    position: fixed;\r
    inset: 0;\r
    border: none;\r
    padding: 0;\r
    margin: 0;\r
    background: rgba(47, 48, 42, 0.45);\r
    z-index: 40;\r
    cursor: pointer;\r
  }\r
\r
  .sidebar-backdrop[hidden] {\r
    display: none;\r
  }\r
\r
  html,\r
  body,\r
  #root {\r
    overflow: auto;\r
    height: auto;\r
  }\r
\r
  .app-shell {\r
    height: auto;\r
    max-height: none;\r
    overflow: visible;\r
  }\r
\r
  .dashboard-content {\r
    overflow: visible;\r
  }\r
}\r
\r
.skip-link {\r
  position: fixed;\r
  z-index: 10;\r
  top: 0.75rem;\r
  left: 0.75rem;\r
  padding: 0.55rem 0.8rem;\r
  border-radius: 8px;\r
  background: var(--chumbo-serra);\r
  color: #fff;\r
  transform: translateY(-160%);\r
}\r
\r
.skip-link:focus {\r
  transform: translateY(0);\r
}\r
\r
.topbar {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.75rem 1.5rem;\r
  align-items: center;\r
  justify-content: space-between;\r
  margin: 0 -1.25rem 2rem;\r
  padding: 0.85rem 1.25rem;\r
  background: var(--verde-cerrado);\r
  border-bottom: 3px solid var(--lima-goia);\r
  box-shadow: 0 8px 28px rgba(0, 121, 64, 0.25);\r
}\r
\r
.brand {\r
  display: flex;\r
  align-items: center;\r
  gap: 0.85rem;\r
  text-decoration: none;\r
  color: var(--areia-caldas);\r
}\r
\r
.brand:hover {\r
  text-decoration: none;\r
  opacity: 0.95;\r
}\r
\r
.brand-logo {\r
  height: 44px;\r
  width: auto;\r
  display: block;\r
}\r
\r
.brand-text {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.05rem;\r
  line-height: 1.15;\r
}\r
\r
.brand-text strong {\r
  font-family: var(--font-display);\r
  font-weight: 600;\r
  font-size: 0.95rem;\r
  color: var(--areia-caldas);\r
}\r
\r
.brand-text span {\r
  font-size: 0.72rem;\r
  color: var(--lima-goia);\r
  font-weight: 500;\r
  letter-spacing: 0.02em;\r
}\r
\r
.nav {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.3rem;\r
  align-items: center;\r
}\r
\r
.nav a {\r
  color: rgba(243, 238, 228, 0.88);\r
  text-decoration: none;\r
  padding: 0.35rem 0.7rem;\r
  border-radius: 999px;\r
  font-size: 0.88rem;\r
  font-weight: 500;\r
}\r
\r
.nav a:hover,\r
.nav a.active {\r
  background: rgba(197, 232, 56, 0.22);\r
  color: var(--areia-caldas);\r
  text-decoration: none;\r
}\r
\r
.nav-toggle {\r
  display: none;\r
  border: 1px solid rgba(243, 238, 228, 0.55);\r
  border-radius: 999px;\r
  padding: 0.4rem 0.75rem;\r
  background: transparent;\r
  color: var(--areia-caldas);\r
  font: inherit;\r
  cursor: pointer;\r
}\r
\r
.nav-more {\r
  position: relative;\r
}\r
\r
.nav-more summary {\r
  list-style: none;\r
  cursor: pointer;\r
  color: rgba(243, 238, 228, 0.88);\r
  padding: 0.35rem 0.7rem;\r
  border-radius: 999px;\r
  font-size: 0.88rem;\r
  font-weight: 500;\r
}\r
\r
.nav-more summary::-webkit-details-marker {\r
  display: none;\r
}\r
\r
.nav-more summary::after {\r
  content: '⌄';\r
  margin-left: 0.35rem;\r
}\r
\r
.nav-more[open] summary,\r
.nav-more.active summary {\r
  background: rgba(197, 232, 56, 0.22);\r
}\r
\r
.nav-more-list {\r
  position: absolute;\r
  z-index: 5;\r
  top: calc(100% + 0.4rem);\r
  right: 0;\r
  display: grid;\r
  min-width: 9.5rem;\r
  padding: 0.35rem;\r
  border: 1px solid rgba(197, 232, 56, 0.4);\r
  border-radius: 10px;\r
  background: var(--verde-cerrado);\r
  box-shadow: var(--shadow);\r
}\r
\r
.nav-more-list a {\r
  border-radius: 7px;\r
}\r
\r
.filter-bar {\r
  display: grid;\r
  gap: 0.65rem;\r
  margin: -0.25rem 0 1.15rem;\r
  padding: 14px 16px;\r
  background: #ffffff;\r
  border: 1px solid var(--line-soft);\r
  border-radius: var(--radius);\r
  box-shadow: var(--shadow);\r
}\r
\r
.filter-bar.is-collapsed {\r
  gap: 0;\r
}\r
\r
.filter-head {\r
  display: flex;\r
  align-items: start;\r
  justify-content: space-between;\r
  gap: 1rem;\r
}\r
\r
.filter-head-main {\r
  min-width: 0;\r
  flex: 1;\r
}\r
\r
.filter-head-actions {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.4rem;\r
  align-items: center;\r
  flex-shrink: 0;\r
}\r
\r
.filter-toggle {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.4rem;\r
  padding: 0;\r
  border: 0;\r
  background: transparent;\r
  color: inherit;\r
  cursor: pointer;\r
  text-align: left;\r
}\r
\r
.filter-toggle:hover .stat-label {\r
  color: var(--verde-cerrado);\r
}\r
\r
.filter-toggle-icon {\r
  font-size: 0.75rem;\r
  color: var(--ink-muted);\r
  line-height: 1;\r
}\r
\r
.filter-body {\r
  display: grid;\r
  gap: 0.65rem;\r
}\r
\r
.filter-body[hidden] {\r
  display: none;\r
}\r
\r
.filter-description {\r
  margin: 0.1rem 0 0;\r
  font-size: 0.82rem;\r
}\r
\r
.filter-resumo {\r
  color: var(--ink-muted);\r
}\r
\r
.filter-controls {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.75rem 1.5rem;\r
  align-items: end;\r
}\r
\r
.filter-group {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.75rem 1rem;\r
}\r
\r
.filter-group label {\r
  display: grid;\r
  gap: 0.25rem;\r
  font-size: 0.75rem;\r
  text-transform: uppercase;\r
  letter-spacing: 0.04em;\r
  color: var(--ink-muted);\r
}\r
\r
.filter-group select {\r
  min-width: 8rem;\r
  padding: 0.4rem 0.55rem;\r
  border: 1px solid var(--line);\r
  border-radius: 8px;\r
  background: #fff;\r
  color: var(--ink);\r
  font: inherit;\r
}\r
\r
.filter-presets,\r
.filter-toggles {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.45rem;\r
  align-items: center;\r
}\r
\r
.filter-label {\r
  color: var(--ink-muted);\r
  font-size: 0.75rem;\r
  font-weight: 600;\r
  letter-spacing: 0.04em;\r
  text-transform: uppercase;\r
}\r
\r
.chip {\r
  border: 1px solid var(--line);\r
  background: #ffffff;\r
  color: var(--ink);\r
  border-radius: 10px;\r
  padding: 0.4rem 0.8rem;\r
  font: inherit;\r
  font-size: 0.85rem;\r
  font-weight: 500;\r
  cursor: pointer;\r
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;\r
}\r
\r
.chip:hover,\r
.chip.active {\r
  background: var(--verde-cerrado);\r
  border-color: var(--verde-cerrado);\r
  color: #ffffff;\r
}\r
\r
.toggle {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.4rem;\r
  font-size: 0.85rem;\r
  color: var(--ink-muted);\r
}\r
\r
.filter-hint {\r
  margin: 0;\r
  font-size: 0.82rem;\r
}\r
\r
.filter-hint strong {\r
  color: var(--verde-cerrado);\r
}\r
\r
.nav a.active {\r
  background: var(--lima-goia);\r
  color: var(--chumbo-serra);\r
  font-weight: 600;\r
}\r
\r
.hero {\r
  margin: 1.1rem 0 1.35rem;\r
}\r
\r
.hero h1 {\r
  font-size: clamp(1.65rem, 2.5vw, 2rem);\r
  max-width: none;\r
  color: var(--verde-escuro);\r
}\r
\r
.hero .lede {\r
  font-size: 0.95rem;\r
  max-width: 56ch;\r
}\r
\r
.grid {\r
  display: grid;\r
  gap: var(--gap);\r
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r
}\r
\r
.card {\r
  position: relative;\r
  z-index: 0;\r
  background: linear-gradient(180deg, #ffffff 0%, var(--card-wash) 100%);\r
  border: 1px solid var(--line-soft);\r
  border-radius: var(--radius);\r
  padding: 16px 18px;\r
  box-shadow: var(--shadow);\r
  /* Sem backdrop-filter / transform de entrada: evita SVG e texto embassados */\r
  transition: box-shadow 0.2s ease, border-color 0.2s ease;\r
  overflow: visible;\r
}\r
\r
.card:has(.hint-tip:hover),\r
.card:has(.hint-tip:focus-visible),\r
.card:hover,\r
.card:focus-within {\r
  z-index: 40;\r
}\r
\r
.card:hover {\r
  box-shadow: var(--shadow-hover);\r
}\r
\r
a.card:hover {\r
  text-decoration: none;\r
  border-color: color-mix(in srgb, var(--verde-cerrado) 28%, var(--line));\r
}\r
\r
.card h3 {\r
  font-size: 1rem;\r
  margin-bottom: 0.25rem;\r
}\r
\r
.stat {\r
  font-family: var(--font-display);\r
  font-size: 1.75rem;\r
  font-weight: 700;\r
  color: var(--chumbo-serra);\r
  line-height: 1.2;\r
}\r
\r
.stat-label {\r
  font-size: 0.875rem;\r
  text-transform: none;\r
  letter-spacing: 0;\r
  color: var(--ink-muted);\r
  font-weight: 500;\r
  line-height: 1.4;\r
}\r
\r
.panel {\r
  position: relative;\r
  z-index: 0;\r
  margin-top: 14px;\r
  background: linear-gradient(180deg, #ffffff 85%, #f0f6f2 100%);\r
  border: 1px solid var(--line-soft);\r
  border-radius: var(--radius);\r
  padding: 18px;\r
  box-shadow: var(--shadow);\r
  overflow: visible;\r
  transition: box-shadow 0.2s ease;\r
}\r
\r
.panel:hover {\r
  box-shadow: var(--shadow-hover);\r
}\r
\r
.panel:has(.hint-tip:hover),\r
.panel:has(.hint-tip:focus-visible),\r
.panel:focus-within {\r
  z-index: 40;\r
}\r
\r
.panel h2,\r
.panel .panel-title {\r
  font-size: 1.15rem;\r
  font-weight: 600;\r
  margin-bottom: 0.75rem;\r
  color: #1e293b;\r
}\r
\r
.panel-title {\r
  display: block;\r
  max-width: 100%;\r
}\r
\r
.panel h3.panel-title {\r
  font-size: 0.95rem;\r
  margin: 0.85rem 0 0.4rem;\r
  color: var(--chumbo-serra);\r
}\r
\r
/* Tooltip compartilhado: títulos, legendas, KPIs */\r
.hint-tip {\r
  position: relative;\r
  z-index: 1;\r
  display: inline;\r
  max-width: 100%;\r
  cursor: help;\r
  outline: none;\r
}\r
\r
.hint-tip:hover,\r
.hint-tip:focus-visible {\r
  z-index: 60;\r
}\r
\r
.hint-tip-text {\r
  border-bottom: 1px dotted color-mix(in srgb, var(--ink-muted) 55%, transparent);\r
}\r
\r
.hint-tip-bubble {\r
  position: absolute;\r
  left: 0;\r
  top: calc(100% + 8px);\r
  z-index: 70;\r
  width: min(28rem, calc(100vw - 2.5rem));\r
  padding: 0.7rem 0.85rem;\r
  border-radius: 10px;\r
  border: 1px solid var(--line);\r
  background: var(--chumbo-serra);\r
  color: #f5f2ea;\r
  font-size: 0.82rem;\r
  font-weight: 450;\r
  line-height: 1.45;\r
  letter-spacing: 0.01em;\r
  text-transform: none;\r
  box-shadow: 0 10px 28px rgba(20, 22, 18, 0.28);\r
  opacity: 0;\r
  visibility: hidden;\r
  transform: translateY(-4px);\r
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;\r
  pointer-events: none;\r
}\r
\r
.hint-tip-bubble::before {\r
  content: '';\r
  position: absolute;\r
  left: 1.1rem;\r
  top: -6px;\r
  width: 10px;\r
  height: 10px;\r
  background: inherit;\r
  border-left: 1px solid var(--line);\r
  border-top: 1px solid var(--line);\r
  transform: rotate(45deg);\r
}\r
\r
.hint-tip:hover .hint-tip-bubble,\r
.hint-tip:focus-visible .hint-tip-bubble {\r
  opacity: 1;\r
  visibility: visible;\r
  transform: translateY(0);\r
}\r
\r
/* Em legendas horizontais, evita balão cortado à direita */\r
.series-legend .hint-tip-bubble,\r
.chart-legend .hint-tip-bubble {\r
  left: 50%;\r
  transform: translate(-50%, -4px);\r
  width: min(22rem, calc(100vw - 2.5rem));\r
}\r
\r
.series-legend .hint-tip-bubble::before,\r
.chart-legend .hint-tip-bubble::before {\r
  left: 50%;\r
  margin-left: -5px;\r
}\r
\r
.series-legend .hint-tip:hover .hint-tip-bubble,\r
.series-legend .hint-tip:focus-visible .hint-tip-bubble,\r
.chart-legend .hint-tip:hover .hint-tip-bubble,\r
.chart-legend .hint-tip:focus-visible .hint-tip-bubble {\r
  transform: translate(-50%, 0);\r
}\r
\r
.stat-label .hint-tip {\r
  display: inline;\r
}\r
\r
table {\r
  width: 100%;\r
  border-collapse: collapse;\r
  font-size: 0.92rem;\r
}\r
\r
th,\r
td {\r
  text-align: left;\r
  padding: 0.55rem 0.4rem;\r
  border-bottom: 1px solid var(--line);\r
  vertical-align: top;\r
}\r
\r
th {\r
  font-size: 0.75rem;\r
  text-transform: uppercase;\r
  letter-spacing: 0.05em;\r
  color: var(--ink-muted);\r
  font-weight: 600;\r
}\r
\r
caption {\r
  padding: 0 0 0.5rem;\r
  text-align: left;\r
  color: var(--ink-muted);\r
  font-size: 0.82rem;\r
}\r
\r
.table-wrap {\r
  overflow-x: auto;\r
  -webkit-overflow-scrolling: touch;\r
}\r
\r
.bar-list {\r
  display: grid;\r
  gap: 0.65rem;\r
}\r
\r
.bar-row {\r
  display: grid;\r
  grid-template-columns: minmax(8rem, 1fr) 3fr auto;\r
  gap: 0.6rem;\r
  align-items: center;\r
}\r
\r
.bar-row span:first-child {\r
  font-size: 0.85rem;\r
  color: var(--ink);\r
}\r
\r
.bar-track {\r
  height: 0.55rem;\r
  background: var(--bg-deep);\r
  border-radius: 999px;\r
  overflow: hidden;\r
}\r
\r
.bar-fill {\r
  height: 100%;\r
  background: linear-gradient(90deg, var(--verde-cerrado), var(--verde-araguaia));\r
  border-radius: 999px;\r
  transform-origin: left;\r
  animation: grow 0.8s ease-out both;\r
}\r
\r
.bar-row .n {\r
  font-variant-numeric: tabular-nums;\r
  font-size: 0.85rem;\r
  color: var(--ink-muted);\r
  white-space: nowrap;\r
}\r
\r
.pareto-list {\r
  display: grid;\r
  gap: 0.65rem;\r
}\r
\r
.pareto-row {\r
  display: grid;\r
  grid-template-columns: minmax(11rem, 1.4fr) 3fr auto minmax(5.5rem, auto);\r
  gap: 0.55rem;\r
  align-items: center;\r
  font-size: 0.84rem;\r
}\r
\r
.pareto-row > span:first-child {\r
  color: var(--ink);\r
}\r
\r
.pareto-track {\r
  height: 0.6rem;\r
  overflow: hidden;\r
  border-radius: 999px;\r
  background: var(--bg-deep);\r
}\r
\r
.pareto-fill {\r
  height: 100%;\r
  border-radius: inherit;\r
  background: var(--verde-araguaia);\r
}\r
\r
.pareto-cumulative {\r
  color: var(--ink-muted);\r
  font-size: 0.78rem;\r
  text-align: right;\r
}\r
\r
.pareto-cumulative.hit {\r
  color: var(--verde-cerrado);\r
  font-weight: 700;\r
}\r
\r
.donut-layout {\r
  display: grid;\r
  grid-template-columns: minmax(180px, 240px) 1fr;\r
  gap: 1.5rem;\r
  align-items: center;\r
}\r
\r
.donut {\r
  position: relative;\r
  aspect-ratio: 1;\r
  max-width: 240px;\r
  margin: auto;\r
}\r
\r
.donut svg {\r
  width: 100%;\r
  height: 100%;\r
  transform: rotate(-90deg);\r
  shape-rendering: geometricPrecision;\r
}\r
\r
.donut-bg,\r
.donut-segment {\r
  fill: none;\r
  stroke-width: 16;\r
}\r
\r
.donut-bg {\r
  stroke: var(--bg-deep);\r
}\r
\r
.donut-segment {\r
  transition: stroke-width 0.2s ease;\r
}\r
\r
.donut-segment:hover {\r
  stroke-width: 20;\r
}\r
\r
.donut-center {\r
  position: absolute;\r
  inset: 28%;\r
  display: grid;\r
  place-content: center;\r
  text-align: center;\r
}\r
\r
.donut-center strong {\r
  color: var(--verde-cerrado);\r
  font-size: 1.25rem;\r
}\r
\r
.donut-center span {\r
  color: var(--ink-muted);\r
  font-size: 0.72rem;\r
}\r
\r
.chart-legend {\r
  display: grid;\r
  gap: 0.55rem;\r
}\r
\r
.chart-legend > div {\r
  display: grid;\r
  grid-template-columns: 10px 1fr auto;\r
  gap: 0.55rem;\r
  align-items: center;\r
  font-size: 0.85rem;\r
}\r
\r
.chart-legend i,\r
.series-legend i {\r
  display: inline-block;\r
  width: 10px;\r
  height: 10px;\r
  border-radius: 50%;\r
}\r
\r
.line-chart-wrap {\r
  overflow: hidden;\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: flex;\r
  flex-direction: column;\r
  transform: translateZ(0);\r
}\r
\r
.line-chart {\r
  width: 100%;\r
  height: auto;\r
  max-height: 100%;\r
  min-width: 0;\r
  overflow: visible;\r
  shape-rendering: geometricPrecision;\r
  text-rendering: geometricPrecision;\r
}\r
\r
.chart-gridline {\r
  stroke: #e5e1d8;\r
  stroke-width: 1;\r
  vector-effect: non-scaling-stroke;\r
}\r
\r
.chart-axis {\r
  fill: var(--ink-muted);\r
  font-size: 11px;\r
  font-family: var(--font-body);\r
  font-weight: 500;\r
}\r
\r
.series-legend {\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: center;\r
  gap: 1rem;\r
  font-size: 0.82rem;\r
  color: var(--ink-muted);\r
}\r
\r
.series-legend span {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.35rem;\r
}\r
\r
.column-chart {\r
  height: 270px;\r
  display: flex;\r
  gap: 0.75rem;\r
  align-items: stretch;\r
  padding-top: 1.5rem;\r
  overflow-x: auto;\r
}\r
\r
.column-item {\r
  flex: 1 0 70px;\r
  min-width: 60px;\r
  display: grid;\r
  grid-template-rows: 1.25rem 1fr 2rem;\r
  gap: 0.35rem;\r
  text-align: center;\r
}\r
\r
.column-value,\r
.column-label {\r
  font-size: 0.75rem;\r
  color: var(--ink-muted);\r
}\r
\r
.column-track {\r
  display: flex;\r
  align-items: end;\r
  justify-content: center;\r
  min-height: 170px;\r
  border-bottom: 1px solid var(--line);\r
}\r
\r
.column-fill {\r
  width: min(65%, 58px);\r
  min-height: 0;\r
  border-radius: 8px 8px 0 0;\r
  background: linear-gradient(180deg, var(--verde-araguaia), var(--verde-cerrado));\r
}\r
\r
.priority-matrix-wrap {\r
  overflow-x: auto;\r
}\r
\r
.priority-matrix {\r
  display: block;\r
  width: 100%;\r
  min-width: 620px;\r
}\r
\r
.matrix-label {\r
  fill: var(--ink-muted);\r
  font-size: 10px;\r
}\r
\r
.matrix-note {\r
  margin: 0.25rem 0 0;\r
  text-align: center;\r
}\r
\r
.value-bridge {\r
  display: grid;\r
  gap: 0.65rem;\r
}\r
\r
.value-bridge-row {\r
  display: grid;\r
  grid-template-columns: minmax(9rem, 1.25fr) 3fr minmax(7rem, auto);\r
  gap: 0.7rem;\r
  align-items: center;\r
  font-size: 0.88rem;\r
}\r
\r
.value-bridge-row > span {\r
  color: var(--ink);\r
}\r
\r
.value-bridge-row strong {\r
  color: var(--ink);\r
  text-align: right;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.value-bridge-track {\r
  height: 0.8rem;\r
  overflow: hidden;\r
  border-radius: 999px;\r
  background: var(--bg-deep);\r
}\r
\r
.value-bridge-fill {\r
  height: 100%;\r
  border-radius: inherit;\r
  background: var(--verde-cerrado);\r
}\r
\r
.value-bridge-row.deduction .value-bridge-fill {\r
  background: var(--amarelo-ipe);\r
}\r
\r
.value-bridge-row.net .value-bridge-fill {\r
  background: var(--verde-araguaia);\r
}\r
\r
.value-bridge-row.paid .value-bridge-fill {\r
  background: var(--verde-cerrado);\r
}\r
\r
.value-bridge-row.open .value-bridge-fill {\r
  background: #8a6a12;\r
}\r
\r
.funnel-chart {\r
  display: grid;\r
  gap: 0.8rem;\r
}\r
\r
.funnel-row {\r
  display: grid;\r
  grid-template-columns: minmax(9rem, 1fr) 3fr;\r
  gap: 0.75rem;\r
  align-items: center;\r
}\r
\r
.funnel-row > span {\r
  font-size: 0.85rem;\r
  text-align: right;\r
}\r
\r
.funnel-step {\r
  min-height: 2.4rem;\r
  border-radius: 0 8px 8px 0;\r
  color: var(--chumbo-serra);\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 0.5rem;\r
  padding: 0.45rem 0.7rem;\r
  animation: grow 0.8s ease-out both;\r
  transform-origin: left;\r
}\r
\r
.funnel-step:first-child {\r
  color: white;\r
}\r
\r
.funnel-step small {\r
  white-space: nowrap;\r
}\r
\r
/* —— BI: processo, insights, gauges —— */\r
.process-guide {\r
  margin: 0 0 1.25rem;\r
  display: grid;\r
  gap: 0.85rem;\r
}\r
\r
.process-strip {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.35rem;\r
}\r
\r
.process-step {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.4rem;\r
  padding: 0.4rem 0.7rem;\r
  border-radius: 10px;\r
  border: 1px solid var(--line);\r
  background: var(--card);\r
  color: var(--ink-muted);\r
  text-decoration: none;\r
  font-size: 0.82rem;\r
  font-weight: 500;\r
  transition: border-color 0.15s ease, background 0.15s ease;\r
}\r
\r
.process-step:hover {\r
  text-decoration: none;\r
  border-color: var(--verde-araguaia);\r
}\r
\r
.process-step.past {\r
  background: rgba(0, 121, 64, 0.08);\r
  color: var(--verde-cerrado);\r
}\r
\r
.process-step.active {\r
  background: var(--verde-cerrado);\r
  border-color: var(--verde-cerrado);\r
  color: var(--areia-caldas);\r
}\r
\r
.process-n {\r
  display: inline-grid;\r
  place-items: center;\r
  width: 1.35rem;\r
  height: 1.35rem;\r
  border-radius: 50%;\r
  font-size: 0.72rem;\r
  font-weight: 700;\r
  background: rgba(47, 48, 42, 0.08);\r
}\r
\r
.process-step.active .process-n {\r
  background: var(--lima-goia);\r
  color: var(--chumbo-serra);\r
}\r
\r
.process-insight {\r
  display: grid;\r
  gap: 0.75rem;\r
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r
  padding: 0.85rem 1rem;\r
  background: var(--card);\r
  border: 1px solid var(--line);\r
  border-radius: var(--radius);\r
}\r
\r
.process-insight-item {\r
  display: grid;\r
  align-content: start;\r
  gap: 0.25rem;\r
}\r
\r
.process-current {\r
  padding-left: 0.7rem;\r
  border-left: 3px solid var(--verde-araguaia);\r
}\r
\r
.process-insight p {\r
  margin: 0;\r
  font-size: 0.9rem;\r
  color: var(--ink);\r
}\r
\r
.process-insight strong {\r
  color: var(--verde-cerrado);\r
  font-size: 1.05rem;\r
  line-height: 1.25;\r
}\r
\r
.insight-callout {\r
  display: grid;\r
  gap: 0.85rem;\r
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\r
  margin: 0 0 1rem;\r
  padding: 14px 16px;\r
  border-radius: var(--radius);\r
  border: 1px solid var(--line-soft);\r
  background: #ffffff;\r
  border-left: 4px solid var(--verde-araguaia);\r
  box-shadow: var(--shadow);\r
}\r
\r
.insight-callout.insight-callout-split {\r
  padding: 0;\r
  border: none;\r
  border-left: none;\r
  background: transparent;\r
  box-shadow: none;\r
  gap: 0.55rem;\r
}\r
\r
.insight-card {\r
  display: grid;\r
  grid-template-columns: auto 1fr;\r
  gap: 0.55rem;\r
  align-items: start;\r
  padding: 0.55rem 0.75rem;\r
  border-radius: 12px;\r
  border: 1px solid var(--line-soft);\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 5px 14px rgba(20, 22, 18, 0.045);\r
}\r
\r
.insight-card .insight-icon {\r
  display: grid;\r
  place-items: center;\r
  width: 1.7rem;\r
  height: 1.7rem;\r
  border-radius: 999px;\r
  color: var(--verde-cerrado);\r
  background: color-mix(in srgb, var(--verde-cerrado) 12%, white);\r
  flex-shrink: 0;\r
}\r
\r
.insight-card .stat-label {\r
  margin: 0;\r
  font-size: 0.68rem;\r
  letter-spacing: 0.02em;\r
}\r
\r
.insight-card p {\r
  margin: 0.15rem 0 0;\r
  color: var(--ink);\r
  font-size: 0.86rem;\r
  line-height: 1.35;\r
}\r
\r
.insight-mostra {\r
  background: #fff8e8;\r
  border-color: color-mix(in srgb, var(--amarelo-ipe) 45%, var(--line-soft));\r
}\r
\r
.insight-mostra .insight-icon {\r
  color: #8a6a00;\r
  background: color-mix(in srgb, var(--amarelo-ipe) 28%, white);\r
}\r
\r
.insight-acao {\r
  background: color-mix(in srgb, var(--verde-cerrado) 8%, white);\r
  border-color: color-mix(in srgb, var(--verde-cerrado) 28%, var(--line-soft));\r
}\r
\r
.insight-callout.tom-alerta {\r
  border-left-color: var(--amarelo-ipe);\r
  background: #fffdf5;\r
}\r
\r
.insight-callout.tom-ok {\r
  border-left-color: var(--verde-cerrado);\r
  background: var(--accent-soft);\r
}\r
\r
.insight-callout.insight-callout-split.tom-alerta,\r
.insight-callout.insight-callout-split.tom-ok {\r
  background: transparent;\r
  border-left: none;\r
}\r
\r
.insight-callout p {\r
  margin: 0.2rem 0 0;\r
  color: var(--ink);\r
  font-size: 0.95rem;\r
}\r
\r
.kpi-card-top {\r
  display: flex;\r
  align-items: flex-start;\r
  justify-content: space-between;\r
  gap: 0.35rem;\r
}\r
\r
.kpi-spark {\r
  flex: 0 0 auto;\r
  opacity: 0.9;\r
}\r
\r
.kpi-inline-hint {\r
  font-size: 0.72rem;\r
  font-weight: 500;\r
  color: var(--ink-muted);\r
}\r
\r
.kpi-card.tone-good .stat {\r
  color: #1f6b3a;\r
}\r
\r
.kpi-card.tone-warn .stat {\r
  color: var(--warn);\r
}\r
\r
.kpi-card.tone-bad .stat {\r
  color: #b42318;\r
}\r
\r
.kpi-delta {\r
  margin: 0.35rem 0 0;\r
  font-size: 0.82rem;\r
  font-weight: 600;\r
  color: var(--ink-muted);\r
}\r
\r
.kpi-delta.good {\r
  color: #1f6b3a;\r
}\r
\r
.kpi-delta.warn {\r
  color: var(--warn);\r
}\r
\r
.kpi-delta.bad {\r
  color: #b42318;\r
}\r
\r
.kpi-delta span {\r
  font-weight: 400;\r
  color: var(--ink-muted);\r
}\r
\r
.exec-mini-kpi .kpi-trend {\r
  display: block;\r
  margin-top: 0.15rem;\r
  font-size: 0.72rem;\r
  font-weight: 600;\r
  color: var(--ink-muted);\r
}\r
\r
.exec-mini-kpi .kpi-trend.good {\r
  color: #1f6b3a;\r
}\r
\r
.exec-mini-kpi .kpi-trend.warn {\r
  color: var(--warn);\r
}\r
\r
.exec-mini-kpi .kpi-trend.bad {\r
  color: #b42318;\r
}\r
\r
.plan-membros {\r
  margin: 0.15rem 0 0.5rem;\r
  font-size: 0.82rem;\r
}\r
\r
.gauge-row {\r
  display: grid;\r
  gap: 0.85rem;\r
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r
  margin: 1rem 0 0.25rem;\r
}\r
\r
.decision-panel {\r
  padding-bottom: 0.85rem;\r
}\r
\r
.decision-panel-head {\r
  display: flex;\r
  align-items: start;\r
  justify-content: space-between;\r
  gap: 1rem;\r
}\r
\r
.decision-panel-head p {\r
  margin-bottom: 0.8rem;\r
}\r
\r
.decision-list {\r
  display: grid;\r
  gap: 0.55rem;\r
}\r
\r
.decision-item {\r
  display: grid;\r
  grid-template-columns: 5.5rem minmax(10rem, 1.15fr) auto minmax(14rem, 1.5fr);\r
  gap: 0.8rem;\r
  align-items: center;\r
  padding: 0.7rem 0.8rem;\r
  border: 1px solid var(--line);\r
  border-left: 4px solid var(--verde-cerrado);\r
  border-radius: 10px;\r
  background: rgba(255, 252, 246, 0.72);\r
  color: inherit;\r
}\r
\r
.decision-item:hover {\r
  text-decoration: none;\r
  background: rgba(0, 121, 64, 0.05);\r
}\r
\r
.decision-item.tone-warn {\r
  border-left-color: var(--amarelo-ipe);\r
}\r
\r
.decision-item.tone-bad {\r
  border-left-color: #8b1e1e;\r
}\r
\r
.decision-status {\r
  color: var(--verde-cerrado);\r
  font-size: 0.72rem;\r
  font-weight: 700;\r
  letter-spacing: 0.04em;\r
  text-transform: uppercase;\r
}\r
\r
.decision-item.tone-warn .decision-status {\r
  color: #8a6a12;\r
}\r
\r
.decision-item.tone-bad .decision-status {\r
  color: #8b1e1e;\r
}\r
\r
.decision-item strong,\r
.decision-item b {\r
  color: var(--verde-cerrado);\r
}\r
\r
.decision-item b {\r
  font-size: 1.05rem;\r
  white-space: nowrap;\r
}\r
\r
.decision-item p {\r
  margin: 0.1rem 0 0;\r
  font-size: 0.82rem;\r
}\r
\r
.decision-action {\r
  color: var(--ink-muted);\r
  font-size: 0.82rem;\r
}\r
\r
.anomaly-list {\r
  display: grid;\r
  gap: 0.65rem;\r
}\r
\r
.anomaly-item {\r
  display: grid;\r
  grid-template-columns: 5.5rem minmax(13rem, 1.4fr) minmax(7rem, auto) minmax(8rem, auto);\r
  gap: 0.8rem;\r
  align-items: center;\r
  padding: 0.8rem 0.9rem;\r
  border: 1px solid var(--line);\r
  border-left: 4px solid var(--amarelo-ipe);\r
  border-radius: 10px;\r
  background: rgba(255, 252, 246, 0.72);\r
  color: inherit;\r
}\r
\r
.anomaly-item.critica {\r
  border-left-color: #8b1e1e;\r
}\r
\r
.anomaly-item:hover {\r
  text-decoration: none;\r
  background: rgba(0, 121, 64, 0.05);\r
}\r
\r
.anomaly-severity {\r
  color: #8a6a12;\r
  font-size: 0.72rem;\r
  font-weight: 700;\r
  letter-spacing: 0.04em;\r
  text-transform: uppercase;\r
}\r
\r
.anomaly-item.critica .anomaly-severity,\r
.anomaly-reference b {\r
  color: #8b1e1e;\r
}\r
\r
.anomaly-item p {\r
  margin: 0.15rem 0 0;\r
  font-size: 0.82rem;\r
}\r
\r
.anomaly-value,\r
.anomaly-reference {\r
  display: grid;\r
  gap: 0.1rem;\r
  text-align: right;\r
}\r
\r
.anomaly-value span,\r
.anomaly-reference span {\r
  color: var(--ink-muted);\r
  font-size: 0.75rem;\r
}\r
\r
.anomaly-value strong {\r
  color: var(--verde-cerrado);\r
}\r
\r
.anomaly-empty {\r
  margin: 0;\r
  padding: 1rem;\r
  border-radius: 10px;\r
  background: rgba(0, 121, 64, 0.06);\r
  color: var(--ink);\r
}\r
\r
.gauge-bar {\r
  padding: 14px 16px;\r
  background: linear-gradient(180deg, #ffffff 0%, var(--card-wash) 100%);\r
  border: 1px solid var(--line-soft);\r
  border-radius: var(--radius);\r
  box-shadow: var(--shadow);\r
}\r
\r
.gauge-head {\r
  display: flex;\r
  justify-content: space-between;\r
  gap: 0.75rem;\r
  font-size: 0.85rem;\r
  margin-bottom: 0.45rem;\r
}\r
\r
.gauge-head strong {\r
  color: var(--verde-cerrado);\r
}\r
\r
.gauge-bar.tone-warn .gauge-head strong {\r
  color: #8a6a12;\r
}\r
\r
.gauge-bar.tone-bad .gauge-head strong {\r
  color: #8b1e1e;\r
}\r
\r
.gauge-track {\r
  position: relative;\r
  height: 0.65rem;\r
  background: var(--bg-deep);\r
  border-radius: 999px;\r
  overflow: hidden;\r
}\r
\r
.gauge-fill {\r
  height: 100%;\r
  border-radius: 999px;\r
  background: linear-gradient(90deg, var(--verde-cerrado), var(--verde-araguaia));\r
  transition: width 0.5s ease;\r
}\r
\r
.gauge-bar.tone-warn .gauge-fill {\r
  background: linear-gradient(90deg, #c9a21a, var(--amarelo-ipe));\r
}\r
\r
.gauge-bar.tone-bad .gauge-fill {\r
  background: linear-gradient(90deg, #a33, #c45);\r
}\r
\r
.gauge-mark {\r
  position: absolute;\r
  top: -2px;\r
  bottom: -2px;\r
  width: 2px;\r
  background: var(--chumbo-serra);\r
  opacity: 0.45;\r
}\r
\r
.exec-process {\r
  display: grid;\r
  gap: 0.65rem;\r
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\r
}\r
\r
.exec-stage {\r
  display: grid;\r
  gap: 0.35rem;\r
  padding: 0.85rem 0.9rem;\r
  border-radius: 12px;\r
  border: 1px solid var(--line);\r
  background: rgba(255, 252, 246, 0.75);\r
  color: inherit;\r
  text-decoration: none;\r
  transition: border-color 0.15s ease, transform 0.15s ease;\r
}\r
\r
.exec-stage:hover {\r
  text-decoration: none;\r
  border-color: var(--verde-araguaia);\r
  transform: translateY(-2px);\r
}\r
\r
.exec-stage strong {\r
  color: var(--verde-cerrado);\r
  font-size: 0.95rem;\r
}\r
\r
.exec-stage span:last-child {\r
  font-size: 0.78rem;\r
  color: var(--ink-muted);\r
  line-height: 1.35;\r
}\r
\r
.hero-exec h1 {\r
  max-width: 22ch;\r
}\r
\r
.hero-auth-fat h1 {\r
  max-width: none;\r
  white-space: nowrap;\r
}\r
\r
.forecast-band {\r
  fill: rgba(231, 194, 33, 0.12);\r
}\r
\r
.forecast-label {\r
  fill: #8a6a12;\r
  font-size: 10px;\r
  font-weight: 600;\r
}\r
\r
.waterfall {\r
  display: grid;\r
  gap: 0.55rem;\r
}\r
\r
.waterfall-row {\r
  display: grid;\r
  grid-template-columns: minmax(9rem, 1.4fr) 2.5fr auto auto;\r
  gap: 0.55rem;\r
  align-items: center;\r
  font-size: 0.85rem;\r
}\r
\r
.waterfall-track {\r
  height: 0.7rem;\r
  background: var(--bg-deep);\r
  border-radius: 999px;\r
  overflow: hidden;\r
}\r
\r
.waterfall-fill {\r
  height: 100%;\r
  border-radius: 999px;\r
}\r
\r
.waterfall-row.total {\r
  margin-top: 0.35rem;\r
  padding-top: 0.55rem;\r
  border-top: 1px solid var(--line);\r
  font-weight: 600;\r
}\r
\r
.row-highlight td {\r
  background: rgba(197, 232, 56, 0.18);\r
  font-weight: 600;\r
}\r
\r
.progress-list {\r
  display: grid;\r
  gap: 0.9rem;\r
}\r
\r
.progress-item > div {\r
  display: flex;\r
  justify-content: space-between;\r
  gap: 1rem;\r
  font-size: 0.85rem;\r
}\r
\r
.progress-item progress {\r
  width: 100%;\r
  height: 0.75rem;\r
  accent-color: var(--verde-cerrado);\r
}\r
\r
.note {\r
  font-size: 0.9rem;\r
  padding: 0.75rem 1rem;\r
  border-left: 3px solid var(--amarelo-ipe);\r
  background: rgba(231, 194, 33, 0.12);\r
  border-radius: 0 8px 8px 0;\r
  color: var(--ink);\r
}\r
\r
.muted {\r
  color: var(--ink-muted);\r
  font-size: 0.9rem;\r
}\r
\r
.site-footer {\r
  margin-top: 2.5rem;\r
  padding-top: 1.25rem;\r
  border-top: 1px solid var(--line);\r
}\r
\r
.footer-brand {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.85rem 1.25rem;\r
  align-items: center;\r
}\r
\r
.footer-brand .muted {\r
  margin: 0;\r
  font-size: 0.8rem;\r
  max-width: 28rem;\r
}\r
\r
.site-footer img {\r
  height: auto;\r
  width: auto;\r
}\r
\r
.site-footer p {\r
  margin: 0;\r
  font-size: 0.8rem;\r
}\r
\r
.plan-subpanels .plan-tabs {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.45rem;\r
  margin: 0.75rem 0 1rem;\r
  max-height: 11.5rem;\r
  overflow-y: auto;\r
  padding-right: 0.15rem;\r
}\r
\r
.plan-tabs .chip {\r
  display: inline-flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: 0.1rem;\r
  max-width: 11.5rem;\r
  text-align: left;\r
  border-radius: 12px;\r
  padding: 0.45rem 0.7rem;\r
}\r
\r
.plan-tabs .chip.is-empty {\r
  opacity: 0.55;\r
  border-style: dashed;\r
}\r
\r
.plan-tab-name {\r
  font-size: 0.72rem;\r
  font-weight: 600;\r
  line-height: 1.25;\r
  white-space: normal;\r
}\r
\r
.plan-tab-badge {\r
  font-size: 0.7rem;\r
  opacity: 0.85;\r
}\r
\r
.plan-detail {\r
  padding: 0.85rem 1rem;\r
  border: 1px solid var(--line);\r
  border-radius: 12px;\r
  background: color-mix(in srgb, var(--card) 70%, var(--lima-goia) 8%);\r
}\r
\r
.plan-detail-title {\r
  margin: 0 0 0.35rem;\r
  font-size: 1rem;\r
  color: var(--verde-cerrado);\r
}\r
\r
.plan-detail-grid {\r
  display: grid;\r
  gap: 1rem;\r
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\r
  margin-top: 0.75rem;\r
}\r
\r
.plan-demand-list,\r
.plan-motivo-list {\r
  margin: 0.35rem 0 0;\r
  padding: 0;\r
  list-style: none;\r
  display: grid;\r
  gap: 0.45rem;\r
}\r
\r
.plan-demand-list li {\r
  display: grid;\r
  grid-template-columns: 6.5rem 1fr auto auto;\r
  gap: 0.45rem;\r
  align-items: center;\r
  font-size: 0.82rem;\r
}\r
\r
.plan-demand-bar {\r
  height: 0.45rem;\r
  background: var(--bg-deep);\r
  border-radius: 999px;\r
  overflow: hidden;\r
}\r
\r
.plan-demand-bar i {\r
  display: block;\r
  height: 100%;\r
  background: var(--verde-cerrado);\r
  border-radius: 999px;\r
}\r
\r
.plan-demand-list em {\r
  font-style: normal;\r
  color: var(--ink-muted);\r
  font-size: 0.75rem;\r
}\r
\r
.plan-motivo-list {\r
  list-style: decimal;\r
  padding-left: 1.2rem;\r
}\r
\r
.plan-motivo-list li {\r
  display: grid;\r
  gap: 0.1rem;\r
  font-size: 0.82rem;\r
}\r
\r
.plan-motivo-list span {\r
  color: var(--ink-muted);\r
}\r
\r
.schema-layers {\r
  display: grid;\r
  gap: 0.85rem;\r
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r
  margin: 0.75rem 0 1rem;\r
}\r
\r
.schema-layers-details,\r
.schema-rels-details {\r
  margin-top: 1rem;\r
  border: 1px solid var(--line);\r
  border-radius: 12px;\r
  padding: 0.55rem 0.85rem 0.75rem;\r
  background: color-mix(in srgb, var(--card) 92%, var(--bg-deep));\r
}\r
\r
.schema-layers-details summary,\r
.schema-rels-details summary {\r
  cursor: pointer;\r
  font-weight: 600;\r
  color: var(--verde-cerrado);\r
  font-size: 0.9rem;\r
}\r
\r
.schema-diagram {\r
  display: grid;\r
  gap: 1.15rem;\r
  margin: 0.85rem 0 0.25rem;\r
}\r
\r
.schema-diagram-block {\r
  border: 1px solid var(--line);\r
  border-radius: 14px;\r
  padding: 0.9rem 1rem 1rem;\r
  background:\r
    linear-gradient(135deg, color-mix(in srgb, var(--lima-goia) 12%, transparent), transparent 42%),\r
    color-mix(in srgb, var(--card) 94%, white);\r
}\r
\r
.schema-diagram-kicker {\r
  margin: 0 0 0.45rem;\r
  font-size: 0.72rem;\r
  text-transform: uppercase;\r
  letter-spacing: 0.07em;\r
  font-weight: 600;\r
  color: var(--ink-muted);\r
}\r
\r
.schema-diagram-note {\r
  margin: 0 0 0.75rem;\r
  font-size: 0.84rem;\r
  color: var(--ink-muted);\r
}\r
\r
.schema-pipeline {\r
  display: grid;\r
  gap: 0.55rem;\r
  grid-template-columns: minmax(0, 1.15fr) auto minmax(0, 1.25fr) auto minmax(0, 1fr);\r
  align-items: stretch;\r
}\r
\r
.schema-pipe-col {\r
  display: grid;\r
  gap: 0.4rem;\r
  align-content: start;\r
  min-width: 0;\r
}\r
\r
.schema-pipe-col h4 {\r
  margin: 0 0 0.15rem;\r
  font-size: 0.82rem;\r
  color: var(--chumbo-serra);\r
}\r
\r
.schema-node {\r
  display: grid;\r
  gap: 0.1rem;\r
  text-align: left;\r
  padding: 0.45rem 0.6rem;\r
  border-radius: 10px;\r
  border: 1px solid var(--line);\r
  background: var(--bg);\r
  color: var(--ink);\r
  font: inherit;\r
  line-height: 1.25;\r
}\r
\r
.schema-node.clickable {\r
  cursor: pointer;\r
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;\r
}\r
\r
.schema-node.clickable:hover {\r
  border-color: var(--verde-araguaia);\r
  transform: translateY(-1px);\r
  box-shadow: 0 6px 16px rgba(47, 48, 42, 0.08);\r
}\r
\r
.schema-node.selected {\r
  border-color: var(--verde-cerrado);\r
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--lima-goia) 70%, transparent);\r
}\r
\r
.schema-node-name {\r
  font-size: 0.78rem;\r
  font-weight: 650;\r
  font-family: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace;\r
  word-break: break-word;\r
}\r
\r
.schema-node-hint {\r
  font-size: 0.7rem;\r
  color: var(--ink-muted);\r
  font-weight: 450;\r
}\r
\r
.schema-node.tone-origem {\r
  background: color-mix(in srgb, var(--amarelo-ipe) 16%, var(--bg));\r
  border-color: color-mix(in srgb, var(--amarelo-ipe) 45%, var(--line));\r
}\r
\r
.schema-node.tone-dim {\r
  background: color-mix(in srgb, var(--verde-araguaia) 14%, var(--bg));\r
  border-color: color-mix(in srgb, var(--verde-araguaia) 40%, var(--line));\r
}\r
\r
.schema-node.tone-cubo {\r
  background: color-mix(in srgb, var(--verde-cerrado) 12%, var(--bg));\r
  border-color: color-mix(in srgb, var(--verde-cerrado) 35%, var(--line));\r
}\r
\r
.schema-node.tone-inv {\r
  background: color-mix(in srgb, #3d5a80 12%, var(--bg));\r
  border-color: color-mix(in srgb, #3d5a80 35%, var(--line));\r
}\r
\r
.schema-node.tone-meta {\r
  background: color-mix(in srgb, var(--chumbo-serra) 8%, var(--bg));\r
}\r
\r
.schema-node.tone-ui {\r
  background: color-mix(in srgb, var(--lima-goia) 22%, var(--bg));\r
  border-color: color-mix(in srgb, var(--lima-goia) 50%, var(--line));\r
}\r
\r
.schema-arrow {\r
  display: grid;\r
  align-content: center;\r
  justify-items: center;\r
  gap: 0.2rem;\r
  min-width: 2.4rem;\r
  color: var(--ink-muted);\r
  font-size: 0.68rem;\r
  font-weight: 600;\r
  text-transform: uppercase;\r
  letter-spacing: 0.04em;\r
}\r
\r
.schema-arrow-line {\r
  width: 100%;\r
  max-width: 3.2rem;\r
  height: 2px;\r
  background: linear-gradient(90deg, transparent, var(--verde-cerrado), transparent);\r
  position: relative;\r
}\r
\r
.schema-arrow-line::after {\r
  content: '';\r
  position: absolute;\r
  right: -1px;\r
  top: 50%;\r
  width: 7px;\r
  height: 7px;\r
  border-right: 2px solid var(--verde-cerrado);\r
  border-top: 2px solid var(--verde-cerrado);\r
  transform: translateY(-50%) rotate(45deg);\r
}\r
\r
.schema-arrow-label {\r
  white-space: nowrap;\r
}\r
\r
.schema-er {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: center;\r
  gap: 0.55rem 0.75rem;\r
}\r
\r
.schema-er-group {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.4rem;\r
  flex: 1 1 12rem;\r
}\r
\r
.schema-er-inv {\r
  align-items: flex-start;\r
}\r
\r
.schema-er-spokes {\r
  display: grid;\r
  gap: 0.45rem;\r
  flex: 1 1 14rem;\r
}\r
\r
.schema-spoke {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: center;\r
  gap: 0.4rem;\r
}\r
\r
@media (max-width: 900px) {\r
  .schema-pipeline {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  .schema-pipeline > .schema-arrow {\r
    transform: rotate(90deg);\r
    min-height: 2rem;\r
    margin: 0.15rem 0;\r
  }\r
}\r
\r
.schema-layer {\r
  border: 1px solid var(--line);\r
  border-radius: 12px;\r
  padding: 0.85rem 1rem;\r
  background: color-mix(in srgb, var(--card) 88%, var(--verde-cerrado) 6%);\r
}\r
\r
.schema-layer h3 {\r
  margin: 0 0 0.35rem;\r
  font-size: 0.95rem;\r
}\r
\r
.schema-layer p {\r
  margin: 0 0 0.65rem;\r
  font-size: 0.8rem;\r
}\r
\r
.schema-layer ul {\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.35rem;\r
}\r
\r
.schema-layer .chip {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.35rem;\r
  max-width: 100%;\r
}\r
\r
.schema-n {\r
  font-size: 0.68rem;\r
  opacity: 0.8;\r
}\r
\r
.schema-flow {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: center;\r
  gap: 0.45rem 0.55rem;\r
  margin: 0.5rem 0 1rem;\r
  font-size: 0.82rem;\r
  color: var(--ink-muted);\r
}\r
\r
.schema-flow-box {\r
  padding: 0.4rem 0.7rem;\r
  border-radius: 10px;\r
  border: 1px solid var(--line);\r
  background: var(--bg);\r
  color: var(--ink);\r
  font-weight: 600;\r
  font-size: 0.78rem;\r
}\r
\r
.schema-flow-break {\r
  flex-basis: 100%;\r
  height: 0;\r
}\r
\r
.schema-table-picker {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.4rem;\r
  margin-bottom: 0.85rem;\r
}\r
\r
.schema-table-card h3 {\r
  margin: 0 0 0.25rem;\r
}\r
\r
.schema-keys {\r
  margin: 0.5rem 0 0;\r
  padding-left: 1.1rem;\r
  display: grid;\r
  gap: 0.45rem;\r
  color: var(--ink-muted);\r
}\r
\r
.schema-keys strong {\r
  color: var(--ink);\r
}\r
\r
.loading,\r
.error {\r
  padding: 2rem;\r
  text-align: center;\r
}\r
\r
.error {\r
  color: #8b1e1e;\r
}\r
\r
@keyframes rise {\r
  from {\r
    opacity: 0;\r
    transform: translateY(10px);\r
  }\r
  to {\r
    opacity: 1;\r
    transform: translateY(0);\r
  }\r
}\r
\r
@keyframes grow {\r
  from {\r
    transform: scaleX(0);\r
  }\r
  to {\r
    transform: scaleX(1);\r
  }\r
}\r
\r
@keyframes rise-column {\r
  from {\r
    transform: scaleY(0);\r
    transform-origin: bottom;\r
  }\r
  to {\r
    transform: scaleY(1);\r
    transform-origin: bottom;\r
  }\r
}\r
\r
@media (max-width: 640px) {\r
  .topbar {\r
    align-items: center;\r
  }\r
\r
  .brand-text {\r
    display: none;\r
  }\r
\r
  .brand-logo {\r
    height: 38px;\r
  }\r
\r
  .nav-toggle {\r
    display: inline-flex;\r
  }\r
\r
  .nav {\r
    display: none;\r
    width: 100%;\r
    padding-top: 0.25rem;\r
  }\r
\r
  .nav.open {\r
    display: flex;\r
  }\r
\r
  .nav a,\r
  .nav-more {\r
    flex: 1 0 auto;\r
  }\r
\r
  .nav a,\r
  .nav-more summary {\r
    display: block;\r
    text-align: center;\r
  }\r
\r
  .nav-more-list {\r
    position: static;\r
    min-width: unset;\r
    margin-top: 0.3rem;\r
    box-shadow: none;\r
  }\r
\r
  .filter-head {\r
    align-items: center;\r
  }\r
\r
  .filter-reset {\r
    white-space: nowrap;\r
  }\r
\r
  .value-bridge-row {\r
    grid-template-columns: 1fr auto;\r
    gap: 0.25rem 0.6rem;\r
  }\r
\r
  .value-bridge-track {\r
    grid-column: 1 / -1;\r
  }\r
\r
  .decision-item {\r
    grid-template-columns: 1fr auto;\r
    gap: 0.35rem 0.6rem;\r
  }\r
\r
  .decision-status {\r
    grid-column: 1 / -1;\r
  }\r
\r
  .decision-action {\r
    grid-column: 1 / -1;\r
  }\r
\r
  .anomaly-item {\r
    grid-template-columns: 1fr auto;\r
    gap: 0.35rem 0.6rem;\r
  }\r
\r
  .anomaly-severity,\r
  .anomaly-reference {\r
    grid-column: 1 / -1;\r
  }\r
\r
  .anomaly-reference {\r
    text-align: left;\r
  }\r
\r
  .hero-auth-fat h1 {\r
    font-size: clamp(1.5rem, 6.4vw, 2rem);\r
  }\r
\r
  .bar-row {\r
    grid-template-columns: 1fr;\r
    gap: 0.25rem;\r
  }\r
\r
  .pareto-row {\r
    grid-template-columns: 1fr auto;\r
  }\r
\r
  .pareto-track {\r
    grid-column: 1 / -1;\r
  }\r
\r
  .pareto-cumulative {\r
    text-align: right;\r
  }\r
\r
  .donut-layout {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  .funnel-row {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  .funnel-row > span {\r
    text-align: left;\r
  }\r
}\r
\r
/* Fixed-view dashboards: fit the selected page inside the application viewport. */\r
.dashboard-content {\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
  padding: 0.25rem 0.15rem 0.25rem 0;\r
  scrollbar-gutter: auto;\r
}\r
\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: grid;\r
  grid-template-columns: repeat(2, minmax(0, 1fr));\r
  grid-auto-rows: minmax(0, 1fr);\r
  align-content: stretch;\r
  gap: 0.45rem;\r
}\r
\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .hero,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .grid,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .insight-callout,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .note,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .muted,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > details {\r
  grid-column: 1 / -1;\r
}\r
\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .hero {\r
  margin: 0;\r
  padding: 0.55rem 0.8rem;\r
}\r
\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .grid {\r
  margin: 0;\r
}\r
\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel {\r
  min-height: 0;\r
  margin: 0;\r
  padding: 0.55rem 0.7rem;\r
}\r
\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .invest-form {\r
  grid-column: 1 / -1;\r
}\r
\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .line-chart {\r
  height: clamp(95px, 15vh, 170px);\r
}\r
\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .donut {\r
  max-width: 145px;\r
}\r
\r
.validation-more {\r
  min-height: 0;\r
  overflow: auto;\r
}\r
\r
.validation-more[open] {\r
  grid-column: 1 / -1;\r
}\r
\r
.validation-more > summary {\r
  cursor: pointer;\r
  padding: 0.35rem 0.55rem;\r
  color: var(--verde-escuro);\r
  font-weight: 650;\r
  font-size: 0.8rem;\r
}\r
\r
.validation-more-grid {\r
  display: grid;\r
  grid-template-columns: repeat(2, minmax(0, 1fr));\r
  grid-auto-rows: minmax(150px, auto);\r
  gap: 0.45rem;\r
  padding-top: 0.4rem;\r
}\r
\r
.validation-more-grid > .panel {\r
  min-height: 0;\r
  margin: 0;\r
  padding: 0.55rem 0.7rem;\r
}\r
\r
.validation-more-grid .line-chart { height: 150px; }\r
\r
.validation-more-grid > .panel:last-child {\r
  grid-column: 1 / -1;\r
}\r
\r
.dashboard-content > .hero {\r
  flex: 0 0 auto;\r
  margin: 0 0 0.45rem;\r
  padding: 0.7rem 0.95rem;\r
}\r
\r
.dashboard-content > .hero h1 {\r
  font-size: clamp(1.25rem, 1.8vw, 1.75rem);\r
}\r
\r
.dashboard-content > .hero .lede {\r
  font-size: 0.82rem;\r
}\r
\r
.dashboard-content > .grid {\r
  flex: 0 0 auto;\r
  margin: 0.35rem 0 0.5rem;\r
  gap: 0.5rem;\r
}\r
\r
.dashboard-content > .grid > .card,\r
.dashboard-content > .grid > .kpi-card {\r
  min-height: 76px;\r
  padding: 0.55rem 0.75rem;\r
}\r
\r
.dashboard-content > .grid > .card .stat,\r
.dashboard-content > .grid > .kpi-card .stat {\r
  font-size: clamp(1.15rem, 1.6vw, 1.55rem);\r
}\r
\r
.dashboard-content > .panel {\r
  flex: 1 1 0;\r
  min-height: 0;\r
  margin: 0 0 0.5rem;\r
  padding: 0.65rem 0.8rem;\r
  overflow: hidden;\r
}\r
\r
.dashboard-content > .panel > .panel-title,\r
.dashboard-content > .panel > h2 {\r
  margin-bottom: 0.45rem;\r
  padding-bottom: 0.35rem;\r
  font-size: 0.92rem;\r
}\r
\r
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .hero,\r
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .grid,\r
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .insight-callout,\r
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .note,\r
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .filter-scope-note,\r
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .loading,\r
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .error {\r
  flex: 0 0 auto;\r
}\r
\r
.dashboard-content:not(:has(.bi-page)):not(:has(.bi-home)) > .panel {\r
  flex: 1 1 0;\r
}\r
\r
.bi-page {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  gap: 0.45rem;\r
  padding: 0.2rem 0 0;\r
}\r
\r
.bi-page-head {\r
  grid-template-columns: minmax(0, 1fr) auto;\r
  align-items: center;\r
  gap: 0.4rem;\r
}\r
\r
.bi-page .process-guide {\r
  max-width: 27rem;\r
}\r
\r
.bi-page .insight-callout {\r
  padding: 0.38rem 0.65rem;\r
}\r
\r
.bi-page .exec-kpi-grid {\r
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));\r
  gap: 0.45rem;\r
}\r
\r
.bi-page .kpi-card {\r
  min-height: 70px;\r
  padding: 0.45rem 0.65rem;\r
}\r
\r
.bi-page .kpi-card .stat {\r
  font-size: clamp(1.05rem, 1.55vw, 1.45rem);\r
  -webkit-line-clamp: 1;\r
}\r
\r
.bi-canvas {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  gap: 0.45rem;\r
}\r
\r
.bi-canvas > .panel {\r
  min-height: 0;\r
  padding: 0.65rem 0.8rem;\r
}\r
\r
.bi-split,\r
.bi-neg-grid {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  gap: 0.45rem;\r
}\r
\r
.bi-split > .panel,\r
.bi-split > .plan-subpanels,\r
.bi-neg-grid > .panel {\r
  min-height: 0;\r
  overflow: hidden;\r
  padding: 0.65rem 0.8rem;\r
}\r
\r
.bi-neg-grid {\r
  grid-template-rows: minmax(0, 1.15fr) minmax(0, 0.85fr);\r
}\r
\r
.line-chart-wrap {\r
  min-height: 0;\r
  overflow: hidden;\r
}\r
\r
.line-chart {\r
  min-width: 0;\r
  height: clamp(105px, 17vh, 190px);\r
  max-height: 100%;\r
}\r
\r
.bi-neg-trend .line-chart {\r
  height: clamp(100px, 15vh, 170px);\r
}\r
\r
.series-legend {\r
  padding-top: 0.2rem;\r
  font-size: 0.68rem;\r
}\r
\r
.bi-details {\r
  flex: 0 0 auto;\r
  max-height: 18vh;\r
  overflow: auto;\r
}\r
\r
.bi-home {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  gap: 0.45rem;\r
  padding-top: 0.2rem;\r
}\r
\r
.bi-home .exec-corridor {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  grid-template-columns: repeat(3, minmax(0, 1fr));\r
  grid-template-rows: repeat(2, minmax(0, 1fr));\r
  gap: 0.5rem;\r
}\r
\r
.bi-home .exec-stage-card {\r
  min-height: 0;\r
  padding: 0.55rem 0.7rem;\r
}\r
\r
.bi-home .exec-stage-resumo {\r
  -webkit-line-clamp: 2;\r
  font-size: 0.74rem;\r
  margin-bottom: 0.4rem;\r
}\r
\r
@media (max-width: 1100px) {\r
  .bi-home .exec-corridor {\r
    grid-template-columns: repeat(2, minmax(0, 1fr));\r
    grid-template-rows: repeat(3, minmax(0, 1fr));\r
  }\r
}\r
\r
@media (max-width: 960px) {\r
  .dashboard-content > .hero { padding: 0.5rem 0.7rem; }\r
  .bi-page-head { grid-template-columns: 1fr; }\r
  .bi-page .process-guide { display: none; }\r
  .bi-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }\r
  .bi-split { grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr); }\r
  .bi-neg-grid { grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr); }\r
}\r
\r
@media (max-width: 640px) {\r
  .dashboard-content > .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .dashboard-content > .panel { padding: 0.4rem; }\r
  .bi-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .bi-page .kpi-card { min-height: 58px; padding: 0.3rem 0.45rem; }\r
  .bi-page .kpi-card .stat { font-size: 0.95rem; }\r
  .bi-home .exec-corridor { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); }\r
  .bi-home .exec-stage-head h2 { font-size: 0.8rem; }\r
  .bi-home .exec-mini-kpis { display: none; }\r
  .bi-split { grid-template-columns: 1fr; }\r
  .bi-neg-grid { grid-template-columns: 1fr; grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.8fr); }\r
  .line-chart { height: clamp(78px, 12vh, 120px); }\r
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) {\r
    grid-template-columns: repeat(2, minmax(0, 1fr));\r
    gap: 0.25rem;\r
  }\r
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel {\r
    padding: 0.35rem;\r
  }\r
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .line-chart {\r
    height: clamp(65px, 10vh, 95px);\r
  }\r
}\r
\r
button.linkish {\r
  background: none;\r
  border: none;\r
  padding: 0;\r
  color: var(--verde-mata, #0b3d2e);\r
  text-decoration: underline;\r
  cursor: pointer;\r
  font: inherit;\r
}\r
\r
.invest-form input {\r
  display: block;\r
  margin-top: 0.25rem;\r
  min-width: 10rem;\r
  padding: 0.35rem 0.5rem;\r
}\r
\r
.invest-form .chip {\r
  margin-top: 0.75rem;\r
}\r
\r
/* ===== Visão executiva ===== */\r
.exec-corridor {\r
  display: grid;\r
  gap: 1rem;\r
  margin-top: 1.25rem;\r
}\r
\r
.exec-stage-card {\r
  border: 1px solid rgba(11, 61, 46, 0.12);\r
  border-radius: 10px;\r
  padding: 1rem 1.15rem;\r
  background: #fff;\r
  border-left: 4px solid #2a9d8f;\r
}\r
\r
.exec-stage-card.status-alerta {\r
  border-left-color: #c45c26;\r
}\r
\r
.exec-stage-card.status-ok {\r
  border-left-color: #007940;\r
}\r
\r
.exec-stage-head {\r
  display: flex;\r
  gap: 0.75rem;\r
  align-items: flex-start;\r
}\r
\r
.exec-stage-head h2 {\r
  margin: 0;\r
  font-size: 1.1rem;\r
}\r
\r
.exec-stage-n {\r
  flex: 0 0 auto;\r
  width: 1.75rem;\r
  height: 1.75rem;\r
  border-radius: 999px;\r
  display: grid;\r
  place-items: center;\r
  background: #0b3d2e;\r
  color: #f3eee4;\r
  font-size: 0.85rem;\r
  font-weight: 700;\r
}\r
\r
.exec-stage-q {\r
  margin: 0.2rem 0 0;\r
  color: #5c5a52;\r
  font-size: 0.95rem;\r
}\r
\r
.exec-stage-resumo {\r
  margin: 0.65rem 0 0.5rem;\r
}\r
\r
.exec-mini-kpis {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));\r
  gap: 0.65rem;\r
  margin: 0.5rem 0 0.85rem;\r
}\r
\r
.exec-mini-kpi {\r
  background: #f7f4ee;\r
  border-radius: 8px;\r
  padding: 0.55rem 0.65rem;\r
}\r
\r
.exec-mini-kpi strong {\r
  display: block;\r
  margin-top: 0.15rem;\r
  font-size: 1.05rem;\r
}\r
\r
.exec-stage-link {\r
  font-weight: 600;\r
  color: #0b3d2e;\r
  text-decoration: none;\r
}\r
\r
.exec-stage-link:hover {\r
  text-decoration: underline;\r
}\r
\r
.exec-details {\r
  margin-top: 1.25rem;\r
  border: 1px solid rgba(11, 61, 46, 0.12);\r
  border-radius: 10px;\r
  padding: 0.65rem 1rem 1rem;\r
  background: #faf8f4;\r
}\r
\r
.exec-details > summary {\r
  cursor: pointer;\r
  font-weight: 600;\r
  color: #0b3d2e;\r
  padding: 0.35rem 0;\r
}\r
\r
.bi-details > summary {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.45rem;\r
  padding: 0.35rem 0.55rem;\r
  border-radius: 8px;\r
  border: 1px solid var(--line-soft);\r
  background: color-mix(in srgb, var(--verde-cerrado) 6%, white);\r
  font-size: 0.78rem;\r
  list-style: none;\r
}\r
\r
.bi-details > summary::-webkit-details-marker { display: none; }\r
\r
.bi-details > summary::before {\r
  content: '›';\r
  font-size: 1rem;\r
  line-height: 1;\r
  color: var(--verde-cerrado);\r
}\r
\r
.bi-details[open] > summary::before {\r
  content: '‹';\r
}\r
\r
.exec-details-body {\r
  margin-top: 0.85rem;\r
}\r
\r
.forecast-details {\r
  display: grid;\r
  gap: 1rem;\r
}\r
\r
.forecast-detail-section {\r
  min-width: 0;\r
}\r
\r
.forecast-detail-section + .forecast-detail-section {\r
  border-top: 1px solid var(--line-soft);\r
  padding-top: 0.85rem;\r
}\r
\r
.forecast-detail-section h3 {\r
  margin: 0 0 0.55rem;\r
  font-size: 0.95rem;\r
  color: var(--chumbo-serra);\r
}\r
\r
.forecast-detail-section .muted {\r
  margin: 0.5rem 0;\r
}\r
\r
.exec-kpi-grid {\r
  margin-bottom: 1rem;\r
}\r
\r
@media (min-width: 900px) {\r
  .exec-corridor {\r
    grid-template-columns: repeat(2, minmax(0, 1fr));\r
  }\r
}\r
\r
.fat-lag-panel {\r
  margin-top: 0.5rem;\r
}\r
\r
.fat-lag-lede {\r
  margin: 0.35rem 0 1rem;\r
  max-width: 42rem;\r
}\r
\r
.fat-lag-hero,\r
.fat-lag-media,\r
.fat-lag-history {\r
  margin-bottom: 1.25rem;\r
}\r
\r
.fat-lag-hero-head,\r
.fat-lag-media-head {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: baseline;\r
  justify-content: space-between;\r
  gap: 0.5rem 1rem;\r
  margin-bottom: 0.45rem;\r
}\r
\r
.fat-lag-hero-sum {\r
  font-size: 0.95rem;\r
  color: var(--verde-cerrado);\r
}\r
\r
.fat-lag-bar {\r
  display: flex;\r
  width: 100%;\r
  height: 2.4rem;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: color-mix(in srgb, var(--line) 40%, transparent);\r
}\r
\r
.fat-lag-bar.compact {\r
  height: 0.85rem;\r
  border-radius: 5px;\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.fat-lag-seg {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  min-width: 0;\r
  height: 100%;\r
}\r
\r
.fat-lag-seg em {\r
  font-style: normal;\r
  font-size: 0.72rem;\r
  font-weight: 700;\r
  color: #fff;\r
  text-shadow: 0 1px 1px rgb(0 0 0 / 25%);\r
}\r
\r
.fat-lag-chips {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));\r
  gap: 0.55rem;\r
  margin-top: 0.75rem;\r
}\r
\r
.fat-lag-chip {\r
  display: grid;\r
  grid-template-columns: auto 1fr;\r
  grid-template-rows: auto auto;\r
  column-gap: 0.4rem;\r
  row-gap: 0.05rem;\r
  padding: 0.45rem 0.55rem;\r
  border-bottom: 1px dotted color-mix(in srgb, var(--line) 80%, transparent);\r
}\r
\r
.fat-lag-chip .stat-label {\r
  grid-column: 2;\r
}\r
\r
.fat-lag-chip i {\r
  grid-row: 1 / span 2;\r
  width: 0.45rem;\r
  border-radius: 2px;\r
  align-self: stretch;\r
}\r
\r
.fat-lag-chip strong {\r
  grid-column: 2;\r
  font-size: 1.05rem;\r
  color: var(--verde-cerrado);\r
  line-height: 1.15;\r
}\r
\r
.fat-lag-chip em {\r
  grid-column: 2;\r
  font-style: normal;\r
  font-size: 0.72rem;\r
  color: var(--ink-muted);\r
}\r
\r
.fat-lag-avg-grid {\r
  display: grid;\r
  grid-template-columns: repeat(6, minmax(0, 1fr));\r
  gap: 0.35rem;\r
  margin-top: 0.65rem;\r
}\r
\r
.fat-lag-avg-cell {\r
  text-align: left;\r
}\r
\r
.fat-lag-avg-cell strong {\r
  display: block;\r
  font-size: 0.95rem;\r
  margin-top: 0.1rem;\r
}\r
\r
.fat-lag-avg-cell em {\r
  display: block;\r
  font-style: normal;\r
  font-size: 0.72rem;\r
  color: var(--ink-muted);\r
  margin-top: 0.05rem;\r
}\r
\r
.fat-lag-rows {\r
  display: grid;\r
  gap: 0.4rem;\r
  margin-top: 0.5rem;\r
}\r
\r
.fat-lag-row {\r
  display: grid;\r
  grid-template-columns: 4.5rem 1fr 7.5rem;\r
  gap: 0.55rem;\r
  align-items: center;\r
}\r
\r
.fat-lag-row-mes {\r
  font-size: 0.8rem;\r
  font-weight: 600;\r
  color: var(--ink-muted);\r
}\r
\r
.fat-lag-row-dom {\r
  font-size: 0.72rem;\r
  color: var(--ink-muted);\r
  text-align: right;\r
  line-height: 1.25;\r
}\r
\r
@media (max-width: 720px) {\r
  .fat-lag-avg-grid {\r
    grid-template-columns: repeat(3, minmax(0, 1fr));\r
  }\r
\r
  .fat-lag-row {\r
    grid-template-columns: 4rem 1fr;\r
  }\r
\r
  .fat-lag-row-dom {\r
    display: none;\r
  }\r
}\r
\r
/* ===== Filtros no lateral + pagina BI sem scroll ===== */\r
.sidebar-filters {\r
  margin-top: 0.4rem;\r
  padding-top: 0.55rem;\r
  border-top: 1px solid rgba(255, 255, 255, 0.1);\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.4rem;\r
}\r
\r
.sidebar-filter-presets {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 0.25rem;\r
}\r
\r
.sidebar-filter-presets .chip {\r
  font-size: 0.68rem;\r
  padding: 0.2rem 0.4rem;\r
  border-radius: 6px;\r
  background: rgba(255, 255, 255, 0.06);\r
  border: 1px solid rgba(255, 255, 255, 0.14);\r
  color: var(--areia-caldas);\r
}\r
\r
.sidebar-filter-presets .chip.active {\r
  background: var(--lima-goia);\r
  color: var(--chumbo-serra);\r
  border-color: transparent;\r
}\r
\r
.sidebar-filter-field {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.15rem;\r
  font-size: 0.68rem;\r
  font-weight: 600;\r
  color: rgba(243, 238, 228, 0.72);\r
}\r
\r
.sidebar-filter-field select {\r
  width: 100%;\r
  border-radius: 7px;\r
  border: 1px solid rgba(255, 255, 255, 0.16);\r
  background: rgba(0, 0, 0, 0.22);\r
  color: #f3eee4;\r
  padding: 0.3rem 0.4rem;\r
  font-size: 0.78rem;\r
}\r
\r
.sidebar-filter-reset {\r
  margin-top: 0.15rem;\r
  border: 1px solid rgba(255, 255, 255, 0.18);\r
  background: transparent;\r
  color: var(--areia-caldas);\r
  border-radius: 7px;\r
  padding: 0.35rem 0.5rem;\r
  font-size: 0.75rem;\r
  cursor: pointer;\r
}\r
\r
.sidebar-filter-reset:hover {\r
  background: rgba(255, 255, 255, 0.08);\r
}\r
\r
.bi-page {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.45rem;\r
  overflow: hidden;\r
}\r
\r
.bi-page-head {\r
  flex: 0 0 auto;\r
  display: grid;\r
  gap: 0.35rem;\r
}\r
\r
.bi-page-titles h1 {\r
  margin: 0;\r
  font-size: clamp(1.15rem, 1.6vw, 1.55rem);\r
  line-height: 1.15;\r
  color: var(--verde-cerrado);\r
}\r
\r
.bi-page-titles .lede {\r
  margin: 0.15rem 0 0;\r
  font-size: 0.82rem;\r
}\r
\r
.bi-page .process-guide {\r
  margin: 0;\r
  padding: 0.35rem 0 0;\r
}\r
\r
.bi-page .process-insight {\r
  display: none;\r
}\r
\r
.bi-page .process-strip {\r
  gap: 0.25rem;\r
}\r
\r
.bi-page .process-step {\r
  padding: 0.25rem 0.4rem;\r
  font-size: 0.72rem;\r
}\r
\r
.bi-page .insight-callout {\r
  flex: 0 0 auto;\r
  margin: 0;\r
  padding: 0.45rem 0.7rem;\r
}\r
\r
.bi-page .insight-callout.insight-callout-split {\r
  padding: 0;\r
  gap: 0.5rem;\r
}\r
\r
.bi-page .insight-card {\r
  padding: 0.5rem 0.7rem;\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 5px 14px rgba(20, 22, 18, 0.045);\r
}\r
\r
.bi-page .insight-card p {\r
  font-size: 0.78rem;\r
  line-height: 1.32;\r
}\r
\r
.bi-page .insight-callout p {\r
  font-size: 0.85rem;\r
}\r
\r
.bi-page .exec-kpi-grid {\r
  flex: 0 0 auto;\r
  margin: 0;\r
  gap: 0.5rem;\r
  grid-template-columns: repeat(4, minmax(0, 1fr));\r
}\r
\r
.bi-page .kpi-card {\r
  padding: 0.5rem 0.7rem;\r
  min-height: 76px;\r
  border-top: none;\r
  border: 1px solid color-mix(in srgb, var(--line) 65%, transparent);\r
  border-radius: 12px;\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 16px rgba(20, 22, 18, 0.05);\r
}\r
\r
.bi-page .kpi-card:hover {\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 16px rgba(20, 22, 18, 0.05);\r
}\r
\r
.bi-page .kpi-card .stat {\r
  font-size: clamp(1.2rem, 1.7vw, 1.55rem);\r
  font-weight: 700;\r
  letter-spacing: -0.02em;\r
}\r
\r
.bi-canvas {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.45rem;\r
}\r
\r
.bi-canvas > .panel {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  margin: 0;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.bi-details {\r
  flex: 0 0 auto;\r
  margin: 0;\r
  max-height: 28vh;\r
  overflow: auto;\r
}\r
\r
.bi-page .fat-lag-panel {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.35rem;\r
  margin: 0;\r
  padding: 0.65rem 0.8rem;\r
}\r
\r
.bi-page .fat-lag-lede,\r
.bi-page .fat-lag-hero,\r
.bi-page .fat-lag-media,\r
.bi-page .fat-lag-history {\r
  margin: 0;\r
}\r
\r
.bi-page .fat-lag-bar {\r
  height: 1.7rem;\r
}\r
\r
.bi-page .fat-lag-chips {\r
  margin-top: 0.4rem;\r
  gap: 0.3rem;\r
}\r
\r
.bi-page .fat-lag-chip {\r
  padding: 0.25rem 0.35rem;\r
}\r
\r
.bi-page .fat-lag-chip strong {\r
  font-size: 0.92rem;\r
}\r
\r
.bi-home {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.45rem;\r
  overflow: hidden;\r
}\r
\r
.bi-home .hero {\r
  flex: 0 0 auto;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.bi-home .hero h1 {\r
  margin: 0;\r
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);\r
}\r
\r
.bi-home .hero .lede {\r
  margin: 0.2rem 0 0;\r
  font-size: 0.85rem;\r
}\r
\r
.bi-home .insight-callout {\r
  flex: 0 0 auto;\r
  margin: 0;\r
  padding: 0.45rem 0.7rem;\r
}\r
\r
.bi-home .exec-corridor {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
  grid-template-columns: repeat(3, minmax(0, 1fr));\r
  gap: 0.55rem;\r
}\r
\r
.bi-home .exec-stage-card {\r
  min-height: 0;\r
  overflow: hidden;\r
  padding: 0.65rem 0.75rem;\r
}\r
\r
.bi-home .exec-stage-resumo {\r
  display: -webkit-box;\r
  -webkit-line-clamp: 2;\r
  -webkit-box-orient: vertical;\r
  overflow: hidden;\r
  font-size: 0.78rem;\r
}\r
\r
@media (max-width: 1100px) {\r
  .bi-home .exec-corridor {\r
    grid-template-columns: repeat(2, minmax(0, 1fr));\r
  }\r
}\r
\r
@media (max-width: 960px) {\r
  .bi-home,\r
  .bi-page {\r
    overflow: visible;\r
    height: auto;\r
  }\r
\r
  .bi-home .exec-corridor {\r
    overflow: visible;\r
  }\r
}\r
.bi-split {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: grid;\r
  grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.9fr);\r
  gap: 0.55rem;\r
  overflow: hidden;\r
}\r
.bi-split > .panel,\r
.bi-split > .plan-subpanels {\r
  min-height: 0;\r
  margin: 0;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
.bi-split-main .line-chart-wrap { flex: 1 1 auto; }\r
.bi-split .series-legend {\r
  flex: 0 0 auto;\r
  margin-top: 0.25rem;\r
  font-size: 0.75rem;\r
}\r
.plan-subpanels.is-compact .plan-tabs { margin: 0.35rem 0 0.45rem; }\r
.plan-compact-resumo {\r
  margin: 0;\r
  font-size: 0.82rem;\r
  color: var(--ink);\r
}\r
.bi-page .kpi-card .stat {\r
  overflow: hidden;\r
  display: -webkit-box;\r
  -webkit-line-clamp: 2;\r
  -webkit-box-orient: vertical;\r
  word-break: break-word;\r
  line-height: 1.15;\r
}\r
.bi-page-head {\r
  grid-template-columns: minmax(0, 1fr) auto;\r
  align-items: start;\r
}\r
.bi-page .process-guide { max-width: 28rem; }\r
.bi-details { max-height: 22vh; }\r
.app-shell { --sidebar-w-collapsed: 64px; }\r
@media (max-width: 1100px) {\r
  .bi-split { grid-template-columns: 1fr; }\r
}\r
.brand-mark {\r
  display: none;\r
  width: 2rem;\r
  height: 2rem;\r
  align-items: center;\r
  justify-content: center;\r
  color: var(--lima-goia);\r
}\r
.app-shell.sidebar-collapsed .brand-mark {\r
  display: inline-flex;\r
}\r
.app-shell.sidebar-collapsed .sidebar-top {\r
  flex-direction: column;\r
  align-items: center;\r
}\r
.app-shell.sidebar-collapsed .brand-lockup {\r
  align-items: center;\r
}\r
\r
\r
/* ===== Negativas: canvas executivo de motivos ===== */\r
.bi-neg-grid {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: grid;\r
  grid-template-columns: minmax(0, 1.4fr) minmax(250px, 0.9fr);\r
  grid-template-rows: minmax(0, 1.25fr) minmax(0, 0.7fr);\r
  gap: 0.55rem;\r
  overflow: hidden;\r
}\r
.bi-neg-motivos { grid-row: 1 / 2; grid-column: 1 / 2; }\r
.bi-neg-side { grid-row: 1 / 2; grid-column: 2 / 3; }\r
.bi-neg-trend { grid-row: 2 / 3; grid-column: 1 / -1; }\r
.bi-neg-grid > .panel {\r
  margin: 0;\r
  min-height: 0;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 0.65rem 0.8rem;\r
  border: 1px solid color-mix(in srgb, var(--line) 70%, transparent);\r
  border-radius: 12px;\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 18px rgba(20, 22, 18, 0.05);\r
  background: #fff;\r
}\r
.bi-neg-grid > .panel:hover {\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 18px rgba(20, 22, 18, 0.05);\r
}\r
\r
.motivo-table {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0;\r
  overflow: hidden;\r
  justify-content: space-evenly;\r
}\r
.motivo-table-head,\r
.motivo-table-row {\r
  display: grid;\r
  grid-template-columns: 1.15rem minmax(0, 1.55fr) minmax(5rem, 1.1fr) 2.9rem 2.9rem;\r
  gap: 0.45rem;\r
  align-items: center;\r
}\r
.motivo-table-head {\r
  font-size: 0.6rem;\r
  font-weight: 650;\r
  letter-spacing: 0.04em;\r
  text-transform: uppercase;\r
  color: var(--ink-muted);\r
  padding-bottom: 0.2rem;\r
  border-bottom: 1px solid var(--line-soft);\r
  flex: 0 0 auto;\r
}\r
.motivo-table-row {\r
  padding: 0.22rem 0;\r
  border-bottom: 1px solid color-mix(in srgb, var(--line-soft) 65%, transparent);\r
  flex: 1 1 auto;\r
  min-height: 0;\r
}\r
.motivo-table-row:last-child { border-bottom: none; }\r
.motivo-table-row.is-top .motivo-exec-rank,\r
.motivo-table-row.is-top .motivo-table-name strong,\r
.motivo-table-row.is-top .motivo-exec-pct {\r
  color: var(--verde-cerrado);\r
}\r
.motivo-exec-rank {\r
  font-size: 0.7rem;\r
  font-weight: 700;\r
  color: var(--ink-muted);\r
  text-align: center;\r
}\r
.motivo-table-name {\r
  min-width: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.02rem;\r
}\r
.motivo-table-name strong {\r
  font-size: 0.74rem;\r
  font-weight: 600;\r
  line-height: 1.2;\r
  color: var(--ink);\r
  overflow: hidden;\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
}\r
.motivo-table-name em {\r
  font-style: normal;\r
  font-size: 0.64rem;\r
  color: var(--ink-muted);\r
}\r
.motivo-exec-pct {\r
  text-align: right;\r
  font-size: 0.92rem;\r
  font-weight: 700;\r
  color: var(--verde-cerrado);\r
  letter-spacing: -0.01em;\r
}\r
.motivo-acum {\r
  text-align: right;\r
  font-size: 0.76rem;\r
  font-weight: 600;\r
  color: var(--ink-muted);\r
}\r
.motivo-acum.hit {\r
  color: #8a6a00;\r
  font-weight: 700;\r
}\r
.motivo-exec-track {\r
  height: 0.58rem;\r
  border-radius: 999px;\r
  background: #eceae4;\r
  overflow: hidden;\r
  margin: 0;\r
}\r
.motivo-exec-track i {\r
  display: block;\r
  height: 100%;\r
  border-radius: inherit;\r
  background: linear-gradient(90deg, #007940, #2f9e4f);\r
}\r
\r
.motivo-mix { margin-top: 0.1rem; flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }\r
.motivo-mix + .motivo-mix { margin-top: 0.5rem; padding-top: 0.4rem; border-top: 1px solid var(--line-soft); }\r
.motivo-mix .stat-label { margin: 0 0 0.3rem; font-size: 0.65rem; }\r
.motivo-mix-bars {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.42rem;\r
  flex: 1 1 auto;\r
  justify-content: space-evenly;\r
}\r
.motivo-mix-planos .motivo-mix-bars {\r
  gap: 0.28rem;\r
  justify-content: flex-start;\r
  max-height: 18rem;\r
  overflow-y: auto;\r
  padding-right: 0.15rem;\r
}\r
.motivo-mix-planos .motivo-mix-row {\r
  grid-template-columns: 7.2rem 1fr 2.6rem;\r
}\r
.motivo-mix-planos .motivo-mix-row.is-empty {\r
  opacity: 0.5;\r
}\r
.motivo-mix-planos .motivo-mix-row.is-empty i {\r
  width: 0 !important;\r
}\r
.motivo-mix-row {\r
  display: grid;\r
  grid-template-columns: 5.4rem 1fr 2.6rem;\r
  gap: 0.4rem;\r
  align-items: center;\r
  font-size: 0.72rem;\r
}\r
.motivo-mix-row span {\r
  overflow: hidden;\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
  color: var(--ink-muted);\r
  font-weight: 500;\r
}\r
.motivo-mix-row strong {\r
  text-align: right;\r
  font-size: 0.8rem;\r
  font-weight: 700;\r
  color: var(--verde-cerrado);\r
}\r
.motivo-mix-row.is-alert strong { color: #c45c26; }\r
.motivo-mix-row .motivo-exec-track { height: 0.62rem; }\r
.motivo-mix-row.is-alert .motivo-exec-track i {\r
  background: linear-gradient(90deg, #b4531a, #c45c26);\r
}\r
\r
.bi-neg-side {\r
  gap: 0.1rem;\r
}\r
.bi-neg-trend .line-chart-wrap {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
}\r
.bi-neg-trend .line-chart {\r
  height: 100%;\r
  min-height: 110px;\r
  max-height: 180px;\r
}\r
.bi-neg-trend .series-legend { display: none; }\r
\r
@media (max-width: 1100px) {\r
  .bi-neg-grid {\r
    grid-template-columns: 1fr;\r
    grid-template-rows: auto;\r
    overflow: auto;\r
  }\r
  .bi-neg-motivos, .bi-neg-side, .bi-neg-trend {\r
    grid-row: auto;\r
    grid-column: auto;\r
  }\r
}\r
\r
/* ===== Disposição das páginas no canvas ===== */\r
.dashboard-content {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.55rem;\r
  overflow: hidden;\r
  padding: 0.35rem 0.15rem 0.35rem 0;\r
}\r
\r
.dashboard-content > .hero {\r
  flex: 0 0 auto;\r
  margin: 0;\r
  padding: 0.75rem 1rem;\r
  border: 1px solid color-mix(in srgb, var(--verde-cerrado) 12%, var(--line));\r
  border-radius: calc(var(--radius) + 3px);\r
  background: linear-gradient(110deg, #fff 0%, #f4f8f4 72%, #eef5df 100%);\r
}\r
.dashboard-content > .hero h1 { margin: 0 0 0.2rem; font-size: clamp(1.25rem, 1.8vw, 1.75rem); line-height: 1.12; }\r
.dashboard-content > .hero .lede { margin: 0; max-width: 72ch; font-size: 0.82rem; }\r
.dashboard-content > .grid { flex: 0 0 auto; margin: 0; gap: 0.5rem; align-items: stretch; }\r
.dashboard-content > .grid > .card,\r
.dashboard-content > .grid > .kpi-card {\r
  min-width: 0;\r
  min-height: 74px;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
  gap: 0.1rem;\r
  padding: 0.5rem 0.7rem;\r
  border-top: 3px solid color-mix(in srgb, var(--verde-cerrado) 60%, white);\r
}\r
.dashboard-content > .grid > .card .stat,\r
.dashboard-content > .grid > .kpi-card .stat { font-size: clamp(1.1rem, 1.55vw, 1.55rem); line-height: 1.12; overflow-wrap: anywhere; }\r
.dashboard-content .panel { border-color: color-mix(in srgb, var(--verde-cerrado) 12%, var(--line)); box-shadow: 0 2px 8px rgba(33, 53, 39, 0.05); }\r
.dashboard-content .panel > h2,\r
.dashboard-content .panel > .panel-title {\r
  display: block;\r
  margin: 0 0 0.45rem;\r
  padding-bottom: 0.38rem;\r
  border-bottom: 1px solid var(--line-soft);\r
  color: var(--verde-escuro);\r
  font-size: 0.95rem;\r
  line-height: 1.25;\r
}\r
.dashboard-content .panel > .panel-title .hint-tip-text { border: 0; }\r
.dashboard-content .table-wrap { border: 1px solid var(--line-soft); border-radius: 8px; }\r
.dashboard-content table tbody tr:nth-child(even) { background: rgba(0, 121, 64, 0.025); }\r
.dashboard-content table tbody tr:hover { background: var(--accent-soft); }\r
\r
/* Data catalog and validation pages show related panels side by side. */\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) {\r
  display: grid;\r
  grid-template-columns: repeat(2, minmax(0, 1fr));\r
  grid-template-rows: max-content max-content max-content;\r
  grid-auto-rows: minmax(0, 1fr);\r
  align-content: stretch;\r
  gap: 0.5rem;\r
}\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .hero,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .grid,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .insight-callout,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .note,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .muted,\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > details { grid-column: 1 / -1; }\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .hero { padding: 0.55rem 0.8rem; }\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .grid { margin: 0; }\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel {\r
  min-height: 0;\r
  margin: 0;\r
  padding: 0.65rem 0.8rem;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
.dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .invest-form { grid-column: 1 / -1; }\r
.dashboard-content > .panel:has(.line-chart-wrap) .line-chart-wrap,\r
.dashboard-content > .panel:has(.donut-layout) .donut-layout { flex: 1 1 auto; min-height: 0; }\r
.dashboard-content > .panel .line-chart { height: clamp(145px, 23vh, 270px); }\r
.dashboard-content > .panel .donut { max-width: 175px; }\r
.dashboard-content > .insight-callout { flex: 0 0 auto; margin: 0; padding: 0.5rem 0.75rem; }\r
.dashboard-content > .note { flex: 0 0 auto; margin: 0; font-size: 0.75rem; }\r
\r
.bi-page {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.55rem;\r
  overflow: hidden;\r
  padding: 0.15rem 0 0;\r
}\r
.bi-page-head { flex: 0 0 auto; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 0.5rem; }\r
.bi-page-titles h1 { font-size: clamp(1.25rem, 1.8vw, 1.75rem); }\r
.bi-page-titles .lede { font-size: 0.8rem; }\r
.bi-page .process-guide { max-width: 25rem; margin: 0; }\r
.bi-page .process-insight { display: none; }\r
.bi-page .process-step { padding: 0.2rem 0.35rem; font-size: 0.68rem; }\r
.bi-page .insight-callout { flex: 0 0 auto; margin: 0; padding: 0.4rem 0.7rem; }\r
.bi-page .insight-callout.insight-callout-split { padding: 0; gap: 0.5rem; }\r
.bi-page .insight-callout p { font-size: 0.79rem; }\r
.bi-page .insight-card {\r
  padding: 0.5rem 0.7rem;\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 5px 14px rgba(20, 22, 18, 0.045);\r
}\r
.bi-page .insight-card p { font-size: 0.78rem; line-height: 1.32; }\r
.bi-page .exec-kpi-grid {\r
  flex: 0 0 auto;\r
  grid-template-columns: repeat(4, minmax(0, 1fr));\r
  gap: 0.5rem;\r
  margin: 0;\r
}\r
.bi-page .kpi-card {\r
  min-height: 76px;\r
  padding: 0.5rem 0.7rem;\r
  border-top: none;\r
  border: 1px solid color-mix(in srgb, var(--line) 65%, transparent);\r
  border-radius: 12px;\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 16px rgba(20, 22, 18, 0.05);\r
  background: #fff;\r
}\r
.bi-page .kpi-card:hover {\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 16px rgba(20, 22, 18, 0.05);\r
}\r
.bi-page .kpi-card .stat {\r
  font-size: clamp(1.2rem, 1.7vw, 1.55rem);\r
  -webkit-line-clamp: 1;\r
  font-weight: 700;\r
  letter-spacing: -0.02em;\r
  margin-top: 0.1rem;\r
}\r
.bi-page .kpi-card .stat-label { font-size: 0.68rem; }\r
.bi-page .kpi-card .muted,\r
.bi-page .kpi-card .kpi-delta { margin: 0.1rem 0 0; font-size: 0.68rem; }\r
.bi-page .kpi-spark { width: 64px; height: 26px; }\r
.bi-canvas { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 0.5rem; overflow: hidden; }\r
.bi-canvas > .panel { flex: 1 1 auto; min-height: 0; margin: 0; padding: 0.75rem 0.9rem; overflow: hidden; display: flex; flex-direction: column; }\r
.bi-canvas > .panel .line-chart-wrap { flex: 1 1 auto; min-height: 0; }\r
.bi-canvas > .panel .line-chart { height: clamp(190px, 30vh, 340px); }\r
.bi-split,\r
.bi-neg-grid { flex: 1 1 auto; min-height: 0; gap: 0.55rem; overflow: hidden; }\r
.bi-split > .panel,\r
.bi-split > .plan-subpanels,\r
.bi-neg-grid > .panel {\r
  min-height: 0;\r
  margin: 0;\r
  padding: 0.7rem 0.85rem;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
  border: 1px solid color-mix(in srgb, var(--line) 70%, transparent);\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 18px rgba(20, 22, 18, 0.05);\r
}\r
.bi-split-main .line-chart-wrap,\r
.bi-neg-trend .line-chart-wrap { flex: 1 1 auto; min-height: 0; }\r
.bi-split .line-chart,\r
.bi-neg-trend .line-chart { height: clamp(140px, 20vh, 200px); }\r
.bi-neg-grid { grid-template-rows: minmax(0, 1.3fr) minmax(0, 0.72fr); }\r
.bi-neg-grid .motivo-table { gap: 0; }\r
.bi-neg-grid .motivo-table-row { padding: 0.15rem 0; gap: 0.4rem; }\r
.bi-neg-side .motivo-mix { margin-top: 0.35rem !important; }\r
.bi-details { flex: 0 0 auto; margin: 0; max-height: 17vh; overflow: auto; }\r
\r
.bi-home { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 0.55rem; overflow: hidden; padding-top: 0.15rem; }\r
.bi-home .hero { flex: 0 0 auto; margin: 0; padding: 0; }\r
.bi-home .hero h1 { margin: 0; font-size: clamp(1.25rem, 1.8vw, 1.7rem); }\r
.bi-home .hero .lede { margin: 0.15rem 0 0; font-size: 0.82rem; }\r
.bi-home .insight-callout { flex: 0 0 auto; margin: 0; padding: 0.4rem 0.7rem; }\r
.bi-home .exec-corridor { flex: 1 1 auto; min-height: 0; overflow: hidden; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 0.55rem; }\r
.bi-home .exec-stage-card { min-height: 0; overflow: hidden; padding: 0.65rem 0.8rem; }\r
.bi-home .exec-stage-resumo { -webkit-line-clamp: 2; font-size: 0.76rem; }\r
\r
.validation-more { min-height: 0; overflow: auto; }\r
.validation-more[open] { grid-column: 1 / -1; }\r
.validation-more > summary { cursor: pointer; padding: 0.35rem 0.55rem; color: var(--verde-escuro); font-weight: 650; font-size: 0.8rem; }\r
.validation-more-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: minmax(145px, auto); gap: 0.45rem; padding-top: 0.4rem; }\r
.validation-more-grid > .panel { min-height: 0; margin: 0; padding: 0.55rem 0.7rem; }\r
.validation-more-grid .line-chart { height: 145px; }\r
.validation-more-grid > .panel:last-child { grid-column: 1 / -1; }\r
\r
@media (max-width: 1100px) {\r
  .bi-page .process-guide { display: none; }\r
  .bi-home .exec-corridor { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); }\r
  .bi-split { grid-template-columns: minmax(0, 1.15fr) minmax(210px, 0.85fr); }\r
  .bi-neg-grid { grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr); grid-template-rows: minmax(0, 1fr) minmax(0, 0.75fr); overflow: hidden; }\r
}\r
@media (max-width: 760px) {\r
  .dashboard-content { gap: 0.3rem; padding: 0.2rem; }\r
  .dashboard-content > .hero { padding: 0.45rem 0.6rem; }\r
  .dashboard-content > .hero h1 { font-size: 1.1rem; }\r
  .dashboard-content > .hero .lede { font-size: 0.7rem; }\r
  .dashboard-content > .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.3rem; }\r
  .dashboard-content > .grid > .card,\r
  .dashboard-content > .grid > .kpi-card { min-height: 54px; padding: 0.3rem 0.45rem; }\r
  .dashboard-content > .grid > .card .stat,\r
  .dashboard-content > .grid > .kpi-card .stat { font-size: 0.95rem; }\r
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.3rem; }\r
  .dashboard-content:has(> .hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel { padding: 0.35rem; }\r
  .dashboard-content > .panel .line-chart { height: 105px; }\r
  .bi-page { gap: 0.3rem; }\r
  .bi-page-head { display: block; }\r
  .bi-page-titles h1 { font-size: 1.08rem; }\r
  .bi-page-titles .lede { display: none; }\r
  .bi-page .exec-kpi-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem; }\r
  .bi-page .kpi-card { min-height: 52px; padding: 0.25rem 0.35rem; }\r
  .bi-page .kpi-card .stat { font-size: 0.9rem; }\r
  .bi-page .kpi-card .muted,\r
  .bi-page .kpi-card .kpi-delta { display: none; }\r
  .bi-page .insight-callout { padding: 0.25rem 0.4rem; }\r
  .bi-page .insight-callout p { font-size: 0.68rem; }\r
  .bi-canvas > .panel,\r
  .bi-split > .panel,\r
  .bi-neg-grid > .panel { padding: 0.4rem; }\r
  .bi-canvas > .panel .line-chart,\r
  .bi-split .line-chart,\r
  .bi-neg-trend .line-chart { height: 145px; }\r
  .bi-split { grid-template-columns: 1fr; }\r
  .bi-neg-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); grid-template-rows: minmax(0, 1fr) minmax(0, 0.7fr); }\r
  .bi-home .exec-corridor { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); gap: 0.3rem; }\r
  .bi-home .exec-stage-card { padding: 0.35rem; }\r
  .bi-home .exec-mini-kpis { display: none; }\r
  .bi-home .exec-stage-head h2 { font-size: 0.76rem; }\r
}\r
\r
/* Fila: taxa, volume e grupos de plano no mesmo campo de visão. */\r
.fila-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }\r
.fila-page .kpi-card:nth-child(2) .stat { color: #a64d21; }\r
.fila-page { overflow-y: auto; }\r
.fila-page .bi-canvas { flex: 0 0 auto; overflow: visible; }\r
.fila-page .fila-split {\r
  flex: 0 0 auto;\r
  grid-template-columns: minmax(0, 1.4fr) minmax(270px, 0.85fr);\r
  align-items: start;\r
  overflow: visible;\r
}\r
.fila-page .fila-trend-panel { gap: 0.25rem; }\r
.fila-panel-heading,\r
.fila-volume-heading {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 0.5rem;\r
}\r
.fila-panel-heading .panel-title { margin-bottom: 0; }\r
.fila-period-tag {\r
  padding: 0.22rem 0.5rem;\r
  border-radius: 999px;\r
  background: #eef5e8;\r
  color: var(--verde-escuro);\r
  white-space: nowrap;\r
  font-size: 0.7rem;\r
  font-weight: 700;\r
}\r
.fila-chart-caption,\r
.fila-volume-heading {\r
  margin: 0.15rem 0 0;\r
  color: var(--ink-muted);\r
  font-size: 0.72rem;\r
  font-weight: 650;\r
}\r
.fila-page .fila-trend-panel .line-chart-wrap { flex: 0 0 auto; min-height: 0; }\r
.fila-page .fila-trend-panel .line-chart { height: clamp(125px, 21vh, 210px); }\r
.fila-page .fila-trend-panel .series-legend { display: none; }\r
.fila-volume-legend { display: inline-flex; align-items: center; gap: 0.3rem; font-weight: 500; }\r
.fila-volume-legend i { display: inline-block; width: 0.58rem; height: 0.58rem; border-radius: 2px; }\r
.fila-legend-on { background: #79ae77; }\r
.fila-legend-late { background: #d47c4a; margin-left: 0.35rem; }\r
.fila-volume-chart {\r
  display: flex;\r
  align-items: stretch;\r
  gap: 0.35rem;\r
  flex: 0 0 auto;\r
  height: clamp(74px, 12vh, 112px);\r
  padding: 0.2rem 0 0;\r
  border-top: 1px solid var(--line-soft);\r
  overflow-x: auto;\r
  overflow-y: hidden;\r
}\r
.fila-volume-col {\r
  display: flex;\r
  flex: 1 0 21px;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: flex-end;\r
  height: 100%;\r
  min-width: 21px;\r
  max-width: 80px;\r
}\r
.fila-volume-track {\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: flex-end;\r
  width: min(100%, 34px);\r
  min-height: 2px;\r
  overflow: hidden;\r
  border-radius: 4px 4px 0 0;\r
}\r
.fila-volume-track > span { display: block; width: 100%; }\r
.fila-volume-late { background: #d47c4a; }\r
.fila-volume-on { background: #79ae77; }\r
.fila-volume-month { margin-top: 0.2rem; font-size: 0.62rem; color: var(--ink-muted); }\r
.fila-page .plan-subpanels.is-compact { gap: 0.4rem; }\r
.fila-plan-context { margin: 0; font-size: 0.72rem; color: var(--ink-muted); }\r
.fila-plan-ranking { display: grid; gap: 0.25rem; flex: 1 1 auto; min-height: 0; overflow-y: auto; }\r
.fila-plan-row {\r
  display: grid;\r
  gap: 0.2rem;\r
  width: 100%;\r
  min-height: 0;\r
  padding: 0.4rem 0.55rem;\r
  border: 1px solid transparent;\r
  border-radius: 9px;\r
  background: #f7f9f5;\r
  text-align: left;\r
  cursor: pointer;\r
}\r
.fila-plan-row:hover,\r
.fila-plan-row.is-selected { border-color: #b6d7bb; background: #eff7ef; }\r
.fila-plan-row.is-empty { opacity: 0.55; border-style: dashed; }\r
.fila-plan-row.is-empty .fila-plan-row-top strong { color: var(--ink-muted); }\r
.fila-plan-row:focus-visible { outline: 2px solid var(--verde-cerrado); outline-offset: 1px; }\r
.fila-plan-row-top { display: flex; justify-content: space-between; gap: 0.5rem; font-size: 0.76rem; color: var(--ink); }\r
.fila-plan-row-top > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r
.fila-plan-row-top strong { flex: 0 0 auto; color: #a64d21; }\r
.fila-plan-meter { display: block; height: 0.35rem; border-radius: 999px; background: #dcebdc; overflow: hidden; }\r
.fila-plan-meter i { display: block; height: 100%; border-radius: inherit; background: #d47c4a; }\r
.fila-plan-row-bottom { font-size: 0.68rem; color: var(--ink-muted); }\r
.fila-page .plan-compact-resumo { padding-top: 0.35rem; border-top: 1px solid var(--line-soft); font-size: 0.75rem; }\r
\r
@media (max-width: 1100px) {\r
  .fila-page .fila-split { grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr); }\r
}\r
@media (max-width: 760px) {\r
  .fila-page,\r
  .fila-page .bi-canvas,\r
  .fila-page .fila-split { height: auto; overflow: visible; }\r
  .fila-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .fila-page .fila-split { grid-template-columns: 1fr; }\r
  .fila-page .fila-split > .panel { min-height: 285px; }\r
  .fila-page .fila-trend-panel .line-chart { height: 150px; }\r
  .fila-page .fila-trend-panel .line-chart-wrap { overflow-x: auto; }\r
  .fila-page .fila-trend-panel .line-chart { min-width: 560px; }\r
  .fila-page .fila-split > .plan-subpanels { min-height: 320px; }\r
  .fila-page .fila-plan-ranking { overflow: visible; }\r
}\r
\r
/* Prazo (SLA): mantém taxa e volume juntos, sem esticar o cartão. */\r
.sla-page { overflow-y: auto; }\r
.sla-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }\r
.sla-page .kpi-card:nth-child(2) .stat { color: #a64d21; }\r
.sla-page .bi-canvas { flex: 0 0 auto; overflow: visible; }\r
.sla-page .sla-split {\r
  flex: 0 0 auto;\r
  grid-template-columns: minmax(0, 1.4fr) minmax(270px, 0.85fr);\r
  align-items: start;\r
  overflow: visible;\r
}\r
.sla-page .sla-trend-panel { gap: 0.25rem; }\r
.sla-page .sla-trend-panel .line-chart-wrap { flex: 0 0 auto; min-height: 0; }\r
.sla-page .sla-trend-panel .line-chart { height: clamp(125px, 21vh, 210px); }\r
.sla-page .sla-trend-panel .series-legend { display: none; }\r
.sla-page .plan-subpanels.is-compact { gap: 0.4rem; }\r
.sla-page .plan-compact-resumo { padding-top: 0.35rem; border-top: 1px solid var(--line-soft); font-size: 0.75rem; }\r
\r
@media (max-width: 1100px) {\r
  .sla-page .sla-split { grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr); }\r
}\r
@media (max-width: 760px) {\r
  .sla-page,\r
  .sla-page .bi-canvas,\r
  .sla-page .sla-split { height: auto; overflow: visible; }\r
  .sla-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .sla-page .sla-split { grid-template-columns: 1fr; }\r
  .sla-page .sla-split > .panel { min-height: 285px; }\r
  .sla-page .sla-trend-panel .line-chart { height: 150px; }\r
  .sla-page .sla-trend-panel .line-chart-wrap { overflow-x: auto; }\r
  .sla-page .sla-trend-panel .line-chart { min-width: 560px; }\r
  .sla-page .sla-split > .plan-subpanels { min-height: 320px; }\r
  .sla-page .fila-plan-ranking { overflow: visible; }\r
}\r
\r
/* Fatura: conversão mensal e composição das autorizações no filtro. */\r
.fatura-page { overflow-y: auto; }\r
.fatura-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }\r
.fatura-page .kpi-card:nth-child(3) .stat { color: #a64d21; }\r
.fatura-page .bi-canvas { flex: 0 0 auto; overflow: visible; }\r
.fatura-page .fatura-split {\r
  flex: 0 0 auto;\r
  grid-template-columns: minmax(0, 1.4fr) minmax(270px, 0.85fr);\r
  align-items: start;\r
  overflow: visible;\r
}\r
.fatura-page .fatura-trend-panel { gap: 0.25rem; }\r
.fatura-page .fatura-trend-panel .line-chart-wrap { flex: 0 0 auto; min-height: 0; }\r
.fatura-page .fatura-trend-panel .line-chart { height: clamp(125px, 21vh, 210px); }\r
.fatura-page .fatura-trend-panel .series-legend { display: none; }\r
.fatura-legend-matched,\r
.fatura-volume-matched { background: #65aa76; }\r
.fatura-legend-pending,\r
.fatura-volume-pending { background: #dfad5a; }\r
.fatura-page .fatura-summary-panel {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.5rem;\r
  min-height: 0;\r
}\r
.fatura-summary-panel .panel-title { margin-bottom: 0.15rem; }\r
.fatura-summary-lede { margin: 0; color: var(--ink-muted); font-size: 0.78rem; }\r
.fatura-summary-rate {\r
  display: flex;\r
  align-items: baseline;\r
  gap: 0.45rem;\r
  color: var(--verde-cerrado);\r
  font-size: clamp(1.6rem, 2.5vw, 2.25rem);\r
  font-weight: 750;\r
  letter-spacing: -0.035em;\r
  line-height: 1.05;\r
}\r
.fatura-summary-rate span { color: var(--ink-muted); font-size: 0.76rem; font-weight: 600; letter-spacing: 0; }\r
.fatura-pair-bar { display: flex; width: 100%; height: 1.2rem; overflow: hidden; border-radius: 999px; background: var(--line-soft); }\r
.fatura-pair-bar span { display: block; height: 100%; }\r
.fatura-pair-labels { display: grid; gap: 0.45rem; padding: 0.25rem 0 0.4rem; }\r
.fatura-pair-labels > div { display: grid; grid-template-columns: 0.6rem minmax(0, 1fr) auto; align-items: center; gap: 0.4rem; font-size: 0.76rem; }\r
.fatura-pair-labels i { width: 0.55rem; height: 0.55rem; border-radius: 2px; }\r
.fatura-pair-labels strong { color: var(--ink); font-size: 0.82rem; }\r
.fatura-matched-value {\r
  display: grid;\r
  gap: 0.15rem;\r
  margin-top: 0.1rem;\r
  padding: 0.7rem 0.8rem;\r
  border: 1px solid #d2e7d6;\r
  border-radius: 10px;\r
  background: #f1f8f2;\r
}\r
.fatura-matched-value span { color: var(--ink-muted); font-size: 0.72rem; font-weight: 650; }\r
.fatura-matched-value strong { color: var(--verde-cerrado); font-size: clamp(1.25rem, 1.9vw, 1.7rem); line-height: 1.1; }\r
.fatura-matched-value small { color: var(--ink-muted); font-size: 0.68rem; }\r
\r
@media (max-width: 1100px) {\r
  .fatura-page .fatura-split { grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr); }\r
}\r
@media (max-width: 760px) {\r
  .fatura-page,\r
  .fatura-page .bi-canvas,\r
  .fatura-page .fatura-split { height: auto; overflow: visible; }\r
  .fatura-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .fatura-page .fatura-split { grid-template-columns: 1fr; }\r
  .fatura-page .fatura-split > .panel { min-height: 0; }\r
  .fatura-page .fatura-trend-panel .line-chart { height: 150px; }\r
  .fatura-page .fatura-trend-panel .line-chart-wrap { overflow-x: auto; }\r
  .fatura-page .fatura-trend-panel .line-chart { min-width: 560px; }\r
}\r
\r
/* Pagamento: diferença entre despesa reconhecida, pago e saldo. */\r
.pagamento-page { overflow-y: auto; }\r
.pagamento-page .exec-kpi-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }\r
.pagamento-page .bi-canvas { flex: 0 0 auto; overflow: visible; }\r
.pagamento-page .pagamento-split {\r
  flex: 0 0 auto;\r
  grid-template-columns: minmax(0, 1.4fr) minmax(270px, 0.85fr);\r
  align-items: start;\r
  overflow: visible;\r
}\r
.pagamento-page .pagamento-trend-panel { gap: 0.25rem; }\r
.pagamento-page .pagamento-trend-panel .line-chart-wrap { flex: 0 0 auto; min-height: 0; }\r
.pagamento-page .pagamento-trend-panel .line-chart { height: clamp(170px, 26vh, 240px); }\r
.pagamento-page .pagamento-trend-panel .series-legend { margin-top: 0; }\r
.pagamento-page .pagamento-summary-panel { display: flex; flex-direction: column; gap: 0.5rem; }\r
.pagamento-summary-panel .panel-title { margin-bottom: 0.1rem; }\r
.pagamento-summary-base { margin: 0; color: var(--ink-muted); font-size: 0.76rem; }\r
.pagamento-summary-base strong { color: var(--ink); }\r
.pagamento-summary-rate {\r
  display: flex;\r
  align-items: baseline;\r
  gap: 0.5rem;\r
  color: var(--verde-cerrado);\r
  font-size: clamp(1.65rem, 2.6vw, 2.3rem);\r
  font-weight: 750;\r
  letter-spacing: -0.035em;\r
  line-height: 1.05;\r
}\r
.pagamento-summary-rate span { color: var(--ink-muted); font-size: 0.78rem; font-weight: 600; letter-spacing: 0; }\r
.pagamento-split-bar { display: flex; width: 100%; height: 1.2rem; overflow: hidden; border-radius: 999px; background: var(--line-soft); }\r
.pagamento-split-bar span { display: block; height: 100%; }\r
.pagamento-bar-paid,\r
.pagamento-key-paid { background: #65aa76; }\r
.pagamento-bar-open,\r
.pagamento-key-open { background: #dfad5a; }\r
.pagamento-summary-rows { display: grid; gap: 0.45rem; padding: 0.25rem 0 0.45rem; }\r
.pagamento-summary-rows > div { display: grid; grid-template-columns: 0.6rem minmax(0, 1fr) auto; align-items: center; gap: 0.4rem; font-size: 0.76rem; }\r
.pagamento-summary-rows i { width: 0.55rem; height: 0.55rem; border-radius: 2px; }\r
.pagamento-summary-rows strong { color: var(--ink); font-size: 0.82rem; }\r
.pagamento-traceability {\r
  display: grid;\r
  gap: 0.35rem;\r
  margin-top: 0.1rem;\r
  padding: 0.7rem 0.8rem;\r
  border: 1px solid #d2e7d6;\r
  border-radius: 10px;\r
  background: #f1f8f2;\r
}\r
.pagamento-traceability .stat-label { color: var(--ink-muted); }\r
.pagamento-trace-bar { height: 0.65rem; overflow: hidden; border-radius: 999px; background: #dfad5a; }\r
.pagamento-trace-bar span { display: block; height: 100%; background: #65aa76; }\r
.pagamento-traceability p { margin: 0; color: var(--ink-muted); font-size: 0.75rem; }\r
.pagamento-traceability p strong { color: #a64d21; }\r
.pagamento-details-content { display: grid; gap: 0.6rem; }\r
.pagamento-details-content > .muted { margin: 0; }\r
.pagamento-page .bi-details[open] { max-height: min(68vh, 700px); }\r
.pagamento-page .pagamento-details-content .fat-lag-panel { display: block; overflow: visible; min-height: 0; }\r
\r
@media (max-width: 1100px) {\r
  .pagamento-page .pagamento-split { grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr); }\r
}\r
@media (max-width: 760px) {\r
  .pagamento-page,\r
  .pagamento-page .bi-canvas,\r
  .pagamento-page .pagamento-split { height: auto; overflow: visible; }\r
  .pagamento-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .pagamento-page .pagamento-split { grid-template-columns: 1fr; }\r
  .pagamento-page .pagamento-split > .panel { min-height: 0; }\r
  .pagamento-page .pagamento-trend-panel .line-chart-wrap { overflow-x: auto; }\r
  .pagamento-page .pagamento-trend-panel .line-chart { height: 170px; min-width: 560px; }\r
}\r
\r
/* Pagamento: valor bruto e perfil médio de defasagem como leitura principal. */\r
.pagamento-page .pagamento-gross-layout {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1.45fr) minmax(310px, 0.85fr);\r
  align-items: start;\r
  gap: 0.55rem;\r
}\r
.pagamento-page .pagamento-gross-layout > .panel {\r
  min-width: 0;\r
  min-height: 0;\r
  margin: 0;\r
  padding: 0.7rem 0.85rem;\r
  border: 1px solid color-mix(in srgb, var(--line) 70%, transparent);\r
  border-radius: 12px;\r
  background: #fff;\r
  box-shadow: 0 1px 2px rgba(20, 22, 18, 0.04), 0 6px 18px rgba(20, 22, 18, 0.05);\r
}\r
.pagamento-page .pagamento-gross-layout .fat-lag-panel {\r
  display: flex;\r
  flex: 0 0 auto;\r
  flex-direction: column;\r
  gap: 0.6rem;\r
  overflow: visible;\r
}\r
.pagamento-page .fat-lag-lede,\r
.pagamento-page .fat-lag-media,\r
.pagamento-page .fat-lag-hero,\r
.pagamento-page .fat-lag-history { margin: 0; }\r
.pagamento-page .fat-lag-lede { max-width: none; font-size: 0.75rem; }\r
.pagamento-page .fat-lag-media,\r
.pagamento-page .fat-lag-hero { display: grid; gap: 0.4rem; }\r
.pagamento-page .fat-lag-media-head,\r
.pagamento-page .fat-lag-hero-head { margin: 0; }\r
.pagamento-page .fat-lag-bar { height: 1.65rem; }\r
.pagamento-page .fat-lag-avg-grid { grid-template-columns: repeat(7, minmax(0, 1fr)); margin-top: 0.15rem; }\r
.pagamento-page .fat-lag-avg-cell {\r
  min-width: 0;\r
  padding: 0.35rem 0.3rem;\r
  border-radius: 7px;\r
  background: #f5f8f2;\r
}\r
.pagamento-page .fat-lag-avg-cell .stat-label { display: block; font-size: 0.63rem; line-height: 1.2; }\r
.pagamento-page .fat-lag-avg-cell strong { font-size: 0.8rem; white-space: nowrap; }\r
.pagamento-page .fat-lag-avg-cell em { font-size: 0.67rem; }\r
.pagamento-page .fat-lag-chips { margin-top: 0; grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr)); }\r
.pagamento-page .fat-lag-chip { padding: 0.2rem 0.3rem; }\r
.pagamento-page .fat-lag-chip strong { font-size: 0.8rem; }\r
.pagamento-page .fat-lag-history > summary {\r
  cursor: pointer;\r
  color: var(--verde-escuro);\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
}\r
.pagamento-page .fat-lag-history[open] > summary { margin-bottom: 0.45rem; }\r
.pagamento-page .pagamento-bridge-panel { display: grid; gap: 0.65rem; }\r
.pagamento-bridge-panel .panel-title { margin-bottom: 0; }\r
.pagamento-bridge-panel > .muted { margin: 0; font-size: 0.73rem; }\r
.pagamento-bridge-panel .value-bridge { gap: 0.7rem; }\r
.pagamento-bridge-panel .value-bridge-row {\r
  grid-template-columns: minmax(6.8rem, 1.15fr) minmax(2rem, 0.85fr) auto;\r
  gap: 0.35rem;\r
  font-size: 0.73rem;\r
}\r
.pagamento-bridge-panel .value-bridge-row strong { font-size: 0.73rem; white-space: nowrap; }\r
.pagamento-bridge-panel .value-bridge-track { height: 0.55rem; }\r
.pagamento-bridge-note {\r
  margin: 0.15rem 0 0;\r
  padding: 0.65rem 0.75rem;\r
  border-radius: 9px;\r
  background: #f1f8f2;\r
  color: var(--verde-escuro);\r
  font-size: 0.75rem;\r
  font-weight: 650;\r
}\r
.pagamento-page .pagamento-details-content .line-chart-wrap { flex: 0 0 auto; }\r
.pagamento-page .pagamento-details-content .line-chart { height: 170px; }\r
\r
@media (max-width: 1050px) {\r
  .pagamento-page .pagamento-gross-layout { grid-template-columns: 1fr; }\r
}\r
@media (max-width: 760px) {\r
  .pagamento-page .pagamento-gross-layout { gap: 0.4rem; }\r
  .pagamento-page .fat-lag-avg-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
  .pagamento-page .fat-lag-chip { min-width: 0; }\r
}\r
\r
/* Os painéis principais acompanham a altura disponível da página. */\r
:is(.fila-page, .sla-page, .fatura-page, .pagamento-page) .bi-canvas {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow: hidden;\r
}\r
:is(.fila-page .fila-split, .sla-page .sla-split, .fatura-page .fatura-split, .pagamento-page .pagamento-gross-layout) {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  height: 100%;\r
  align-items: stretch;\r
  overflow: hidden;\r
}\r
:is(.fila-page .fila-split, .sla-page .sla-split, .fatura-page .fatura-split) > :is(.panel, .plan-subpanels) {\r
  height: 100%;\r
}\r
:is(.fila-page, .sla-page, .fatura-page) :is(.fila-trend-panel, .sla-trend-panel, .fatura-trend-panel) .line-chart-wrap {\r
  flex: 1 1 auto;\r
  min-height: 90px;\r
}\r
:is(.fila-page, .sla-page, .fatura-page) :is(.fila-trend-panel, .sla-trend-panel, .fatura-trend-panel) .line-chart {\r
  height: 100%;\r
  max-height: none;\r
}\r
:is(.fila-page, .sla-page, .fatura-page) .fila-volume-chart {\r
  flex: 0 0 clamp(84px, 14vh, 150px);\r
  height: auto;\r
}\r
:is(.fila-page, .sla-page) .fila-plan-ranking {\r
  grid-auto-rows: minmax(0, 1fr);\r
}\r
.fatura-page .fatura-summary-panel {\r
  justify-content: space-between;\r
}\r
.fatura-pair-matched { background: #65aa76; }\r
.fatura-pair-pending { background: #dfad5a; }\r
.pagamento-page .pagamento-gross-layout > .panel {\r
  height: 100%;\r
}\r
.pagamento-page .pagamento-bridge-panel {\r
  grid-template-rows: auto auto minmax(0, 1fr) auto;\r
}\r
.pagamento-page .pagamento-bridge-panel .value-bridge {\r
  grid-auto-rows: minmax(0, 1fr);\r
}\r
.previsao-page .exec-kpi-grid {\r
  grid-template-columns: repeat(6, minmax(0, 1fr));\r
}\r
.previsao-page .previsao-charts { flex: 1 1 auto; min-height: 0; display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 0.55rem; }\r
.previsao-page .previsao-charts > .panel { min-width: 0; min-height: 0; margin: 0; padding: 0.7rem 0.85rem; display: flex; flex-direction: column; overflow: hidden; }\r
.previsao-page .previsao-charts .line-chart-wrap { flex: 1 1 auto; min-height: 0; }\r
.previsao-page .previsao-charts .line-chart { height: 100%; max-height: none; min-height: 0; }\r
.previsao-gross-panel > .muted { margin: 0.15rem 0 0.25rem; font-size: 0.68rem; }\r
.previsao-page .bi-canvas { min-height: 0; }\r
@media (max-width: 1100px) {\r
  .previsao-page .exec-kpi-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
  .previsao-page { overflow-y: auto; }\r
  .previsao-page .bi-canvas { flex: 0 0 auto; overflow: visible; }\r
  .previsao-page .previsao-charts { grid-template-columns: 1fr; }\r
  .previsao-page .previsao-charts > .panel { min-height: 250px; }\r
}\r
@media (max-width: 600px) {\r
  .previsao-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
}\r
.previsao-page .bi-canvas > .panel .line-chart {\r
  flex: 1 1 auto;\r
  height: 100%;\r
  max-height: none;\r
  min-height: 0;\r
}\r
.bi-neg-trend .line-chart {\r
  flex: 1 1 auto;\r
  height: 100%;\r
  max-height: none;\r
  min-height: 0;\r
}\r
.bi-home .exec-stage-card {\r
  display: flex;\r
  flex-direction: column;\r
}\r
.bi-home .exec-stage-resumo { margin: 0.4rem 0 0.2rem; }\r
.bi-home .exec-mini-kpis {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  grid-auto-rows: minmax(0, 1fr);\r
  margin: 0.25rem 0 0.45rem;\r
}\r
.bi-home .exec-mini-kpi { display: flex; flex-direction: column; justify-content: center; min-width: 0; min-height: 0; padding: 0.4rem 0.5rem; overflow: hidden; }\r
.bi-home .exec-mini-kpi strong { font-size: 0.9rem; line-height: 1.18; overflow-wrap: anywhere; }\r
.bi-home .exec-stage-link { flex: 0 0 auto; margin-top: auto; }\r
.bi-page:has(> .bi-details[open]) {\r
  overflow-y: auto;\r
}\r
.bi-page:has(> .bi-details[open]) .bi-canvas {\r
  flex: 0 0 auto;\r
  min-height: clamp(340px, 50vh, 600px);\r
  overflow: visible;\r
}\r
.dashboard-content:has(> .hero.validation-hero):not(:has(.bi-page)):not(:has(.bi-home)) {\r
  grid-template-rows: max-content max-content max-content minmax(185px, 1fr) minmax(315px, 1fr) max-content;\r
  grid-auto-rows: auto;\r
  overflow-y: auto;\r
}\r
.dashboard-content:has(> .hero.validation-hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .line-chart {\r
  flex: 1 1 auto;\r
  height: 100%;\r
  min-height: 0;\r
  max-height: none;\r
}\r
.dashboard-content:has(> .hero.validation-hero) > .validation-more {\r
  align-self: start;\r
}\r
.dashboard-content:has(> .validation-hero) > .panel .column-chart {\r
  flex: 0 0 135px;\r
  height: 135px;\r
  padding-top: 0.45rem;\r
}\r
.dashboard-content:has(> .validation-hero) > .panel .column-track { min-height: 75px; }\r
.dashboard-content:has(> .hero.anomaly-hero):not(:has(.bi-page)):not(:has(.bi-home)) {\r
  grid-template-rows: max-content max-content max-content minmax(260px, 1fr) max-content;\r
  grid-auto-rows: auto;\r
  overflow-y: auto;\r
}\r
.dashboard-content:has(> .hero.anomaly-hero):not(:has(.bi-page)):not(:has(.bi-home)) > .panel .line-chart {\r
  flex: 1 1 auto;\r
  height: 100%;\r
  min-height: 0;\r
  max-height: none;\r
}\r
.dashboard-content:has(> .anomaly-hero) > .anomaly-panel .anomaly-list {\r
  overflow-y: auto;\r
  min-height: 0;\r
}\r
.dashboard-content:has(> .anomaly-hero) > .note {\r
  align-self: start;\r
}\r
\r
@media (max-width: 1050px) {\r
  .pagamento-page .pagamento-gross-layout {\r
    height: auto;\r
    align-items: start;\r
    overflow: visible;\r
  }\r
  .pagamento-page .pagamento-gross-layout > .panel { height: auto; }\r
  .previsao-page .exec-kpi-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
}\r
\r
@media (max-width: 760px) {\r
  :is(.fila-page, .sla-page, .fatura-page, .pagamento-page) .bi-canvas,\r
  :is(.fila-page .fila-split, .sla-page .sla-split, .fatura-page .fatura-split, .pagamento-page .pagamento-gross-layout) {\r
    flex: 0 0 auto;\r
    height: auto;\r
    overflow: visible;\r
  }\r
  :is(.fila-page .fila-split, .sla-page .sla-split, .fatura-page .fatura-split) > :is(.panel, .plan-subpanels) {\r
    height: auto;\r
  }\r
  :is(.fila-page, .sla-page, .fatura-page) :is(.fila-trend-panel, .sla-trend-panel, .fatura-trend-panel) .line-chart {\r
    height: 150px;\r
  }\r
  :is(.fila-page, .sla-page, .fatura-page) .fila-volume-chart { flex: 0 0 90px; }\r
  :is(.fila-page, .sla-page) .fila-plan-ranking { grid-auto-rows: auto; }\r
  .previsao-page .exec-kpi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .dashboard-content:has(> .hero.validation-hero):not(:has(.bi-page)):not(:has(.bi-home)),\r
  .dashboard-content:has(> .hero.anomaly-hero):not(:has(.bi-page)):not(:has(.bi-home)) {\r
    grid-template-columns: minmax(0, 1fr);\r
    grid-template-rows: none;\r
    grid-auto-rows: auto;\r
  }\r
  .dashboard-content:has(> .validation-hero) > .panel,\r
  .dashboard-content:has(> .anomaly-hero) > .panel { min-height: 250px; }\r
}\r
\r
/* Ranking por plano: linhas legíveis mesmo com o catálogo COINI completo. */\r
:is(.fila-page, .sla-page) .plan-subpanels.is-compact { gap: 0.35rem; }\r
.fila-plan-context { line-height: 1.3; }\r
.fila-plan-toolbar {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 0.4rem;\r
  color: var(--ink-muted);\r
  font-size: 0.68rem;\r
}\r
.fila-plan-sort { display: inline-flex; flex: 0 0 auto; gap: 0.15rem; padding: 0.15rem; border-radius: 8px; background: #eef3eb; }\r
.fila-plan-sort button {\r
  border: 0;\r
  border-radius: 6px;\r
  padding: 0.25rem 0.4rem;\r
  background: transparent;\r
  color: var(--ink-muted);\r
  font: inherit;\r
  font-weight: 700;\r
  cursor: pointer;\r
}\r
.fila-plan-sort button.active { background: #fff; color: var(--verde-escuro); box-shadow: 0 1px 4px rgba(20, 22, 18, 0.1); }\r
.fila-plan-sort button:focus-visible { outline: 2px solid var(--verde-cerrado); }\r
:is(.fila-page, .sla-page) .fila-plan-ranking {\r
  align-content: start;\r
  grid-auto-rows: max-content;\r
  gap: 0.3rem;\r
  padding-right: 0.2rem;\r
  scrollbar-width: thin;\r
}\r
.fila-plan-row {\r
  min-height: 65px;\r
  gap: 0.25rem;\r
  padding: 0.45rem 0.55rem;\r
  border-color: #e3e9df;\r
  background: #fff;\r
}\r
.fila-plan-row-top { align-items: center; font-size: 0.76rem; font-weight: 700; }\r
.fila-plan-row-top > span { display: flex; align-items: center; gap: 0.45rem; min-width: 0; }\r
.fila-plan-row-top small {\r
  display: inline-grid;\r
  flex: 0 0 1.2rem;\r
  place-items: center;\r
  height: 1.2rem;\r
  border-radius: 5px;\r
  background: #edf4eb;\r
  color: var(--verde-escuro);\r
  font-size: 0.61rem;\r
}\r
.fila-plan-row-top strong { padding: 0.16rem 0.38rem; border-radius: 6px; background: #eef5ec; color: var(--verde-escuro); font-size: 0.75rem; }\r
.fila-plan-row-top strong.above-average { background: #fff0e6; color: #a64d21; }\r
.fila-plan-meter { height: 0.4rem; }\r
.fila-plan-meter i { background: #69ad78; }\r
.fila-plan-row-bottom { display: flex; justify-content: space-between; gap: 0.4rem; font-size: 0.67rem; }\r
.fila-plan-row-bottom span:last-child { color: #a64d21; font-weight: 700; }\r
.fila-plan-empty { padding: 0.4rem 0.5rem; border: 1px dashed #cddccc; border-radius: 8px; color: var(--ink-muted); font-size: 0.71rem; }\r
.fila-plan-empty summary { cursor: pointer; color: var(--verde-escuro); font-weight: 700; }\r
.fila-plan-empty > div { display: flex; flex-wrap: wrap; gap: 0.25rem; padding-top: 0.4rem; }\r
.fila-plan-empty > div span { padding: 0.16rem 0.3rem; border-radius: 5px; background: #f3f6f0; }\r
:is(.fila-page, .sla-page) .plan-compact-resumo {\r
  flex: 0 0 auto;\r
  margin: 0;\r
  padding-top: 0.4rem;\r
  border-top: 1px solid var(--line-soft);\r
  line-height: 1.3;\r
}\r
.plan-select {\r
  display: grid;\r
  gap: 0.3rem;\r
  max-width: 28rem;\r
  margin: 0.6rem 0;\r
  color: var(--ink-muted);\r
  font-size: 0.74rem;\r
  font-weight: 700;\r
}\r
.plan-select select {\r
  width: 100%;\r
  padding: 0.5rem 0.65rem;\r
  border: 1px solid var(--line);\r
  border-radius: 8px;\r
  background: #fff;\r
  color: var(--ink);\r
  font: inherit;\r
  font-size: 0.82rem;\r
}\r
.plan-select select:focus-visible { outline: 2px solid var(--verde-cerrado); outline-offset: 2px; }\r
\r
@media (max-width: 760px) {\r
  :is(.fila-page, .sla-page) .fila-plan-ranking { overflow: visible; }\r
  .fila-plan-toolbar { align-items: flex-start; }\r
}\r
\r
/* Negativas: todos os grupos de plano ficam visíveis na página. */\r
.negativas-page { overflow-y: auto; }\r
.negativas-page .bi-canvas { flex: 0 0 auto; overflow: visible; }\r
.negativas-page .bi-neg-grid {\r
  flex: 0 0 auto;\r
  grid-template-rows: minmax(250px, auto) auto minmax(170px, auto);\r
  overflow: visible;\r
}\r
.negativas-page .bi-neg-grid > .panel { overflow: visible; }\r
.negativas-page .bi-neg-planos { grid-column: 1 / -1; grid-row: 2; }\r
.negativas-page .bi-neg-trend { grid-row: 3; }\r
.negativas-page .bi-neg-side { gap: 0.35rem; }\r
.negativas-page .bi-neg-side > .motivo-mix {\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  margin: 0;\r
}\r
.negativas-page .bi-neg-side .motivo-mix-bars {\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: space-evenly;\r
  flex: 1 1 auto;\r
  gap: 0.4rem;\r
}\r
.negativas-page .bi-neg-side .motivo-mix-row {\r
  grid-template-columns: 5rem minmax(0, 1fr) 2.4rem;\r
  gap: 0.45rem;\r
  padding: 0.45rem 0.55rem;\r
  border-radius: 8px;\r
  background: #f7f9f5;\r
  font-size: 0.72rem;\r
}\r
.negativas-page .bi-neg-side .motivo-mix-row .motivo-exec-track { height: 0.5rem; }\r
.neg-plan-scope { margin: 0.15rem 0 0.6rem; color: var(--ink-muted); font-size: 0.7rem; }\r
.neg-plan-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }\r
.neg-plan-card {\r
  display: grid;\r
  gap: 0.42rem;\r
  min-width: 0;\r
  padding: 0.65rem 0.7rem;\r
  border: 1px solid #e3e9df;\r
  border-radius: 9px;\r
  background: #f8faf7;\r
  text-align: left;\r
  cursor: pointer;\r
}\r
.neg-plan-card:hover { border-color: #7dbd91; background: #eef7ef; }\r
.neg-plan-card-head, .neg-plan-card-foot { display: flex; align-items: baseline; justify-content: space-between; gap: 0.5rem; min-width: 0; }\r
.neg-plan-card-head strong { min-width: 0; color: var(--ink); font-size: 0.77rem; line-height: 1.2; overflow-wrap: anywhere; }\r
.neg-plan-card-head > span { flex: 0 0 auto; color: var(--verde-escuro); font-size: 0.8rem; font-weight: 750; }\r
.neg-plan-card-head > span.is-alert { color: #a64d21; }\r
.neg-plan-card .motivo-exec-track { height: 0.45rem; }\r
.neg-plan-card-foot { color: var(--ink-muted); font-size: 0.65rem; }\r
.neg-plan-card-foot span:first-child { color: var(--ink); font-weight: 650; }\r
.neg-plan-card.is-empty { background: #fbfcfa; }\r
.neg-plan-card.is-empty .motivo-exec-track { opacity: 0.45; }\r
\r
.plan-focus-content { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 0.55rem; }\r
.plan-focus-content > .panel { margin: 0; }\r
.plan-focus-selector { flex: 0 0 auto; padding: 0.65rem 0.8rem; }\r
.plan-focus-picker { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.45rem; }\r
.plan-focus-picker button { border: 1px solid #d9e5da; background: #f7faf6; color: #285740; border-radius: 7px; padding: 0.26rem 0.52rem; font-size: 0.7rem; cursor: pointer; }\r
.plan-focus-picker button:hover, .plan-focus-picker button.active { border-color: #007940; background: #e8f3e9; color: #006533; }\r
.plan-focus-picker button.active { font-weight: 750; }\r
.plan-focus-panels { flex: 1 1 auto; min-height: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.55rem; }\r
.plan-focus-panels > .panel { min-height: 0; margin: 0; padding: 0.8rem; overflow: hidden; display: flex; flex-direction: column; justify-content: space-around; }\r
.plan-focus-overview .plan-focus-panels { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
.plan-focus-page .bi-canvas { min-height: 0; overflow: hidden; }\r
.plan-focus-page .plan-focus-chart { justify-content: flex-start; }\r
.plan-focus-page .plan-focus-chart .line-chart-wrap { flex: 1 1 auto; min-height: 0; }\r
.plan-focus-page .plan-focus-chart .line-chart { height: 100%; min-height: 90px; max-height: none; }\r
.plan-focus-partial { color: #a4521f; font-size: 0.69rem; font-weight: 700; }\r
.sidebar-filter-note { margin: 0.4rem 0; color: #d7e3d5; font-size: 0.7rem; line-height: 1.35; }\r
.fila-volume-chart button.fila-volume-col { appearance: none; border: 0; background: transparent; padding: 0; font: inherit; color: inherit; cursor: pointer; }\r
.fila-volume-chart button.fila-volume-col:hover .fila-volume-track { filter: brightness(0.91); }\r
.plan-focus-forecast strong { color: var(--verde-escuro); font-size: clamp(1.5rem, 3vw, 2.4rem); }\r
.plan-focus-forecast p { margin: 0.3rem 0; }\r
.plan-focus-bar { margin-top: 0.8rem; }\r
.plan-focus-bar > div { display: flex; align-items: baseline; justify-content: space-between; gap: 0.75rem; font-size: 0.8rem; }\r
.plan-focus-bar > div span { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\r
.plan-focus-bar strong { color: #065b32; }\r
.plan-focus-track { display: block; height: 0.65rem; margin-top: 0.22rem; border-radius: 99px; overflow: hidden; background: #e8ece6; }\r
.plan-focus-track i { display: block; height: 100%; border-radius: inherit; background: #42a365; }\r
.plan-focus-track i.orange { background: #c45c26; }\r
.plan-focus-unavailable { flex: 1 1 auto; padding: 1rem; }\r
.plan-focus-unavailable p { max-width: 65ch; }\r
.plan-focus-available { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.6rem; margin-top: 1rem; }\r
.plan-focus-available > div { display: flex; flex-direction: column; gap: 0.25rem; padding: 0.8rem; border: 1px solid #dde7dc; border-radius: 10px; background: #f8faf7; }\r
.plan-focus-available span { color: #075b34; font-weight: 700; }\r
.plan-focus-available strong { font-size: 1.5rem; color: #2f302a; }\r
.plan-focus-available small { color: #5a625c; }\r
@media (max-width: 900px) { .plan-focus-overview .plan-focus-panels { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\r
@media (max-width: 720px) { .plan-focus-panels, .plan-focus-overview .plan-focus-panels { grid-template-columns: 1fr; overflow: auto; } .plan-focus-picker { max-height: 100px; overflow: auto; } }\r
\r
@media (max-width: 1100px) {\r
  .neg-plan-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
}\r
\r
@media (max-width: 760px) {\r
  .negativas-page .bi-neg-grid { grid-template-columns: 1fr; grid-template-rows: auto; }\r
  .negativas-page .bi-neg-motivos,\r
  .negativas-page .bi-neg-side,\r
  .negativas-page .bi-neg-planos,\r
  .negativas-page .bi-neg-trend { grid-column: 1; grid-row: auto; }\r
  .negativas-page .bi-neg-side { min-height: 220px; }\r
  .neg-plan-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
}\r
@media (max-width: 480px) {\r
  .neg-plan-grid { grid-template-columns: 1fr; }\r
}\r
\r
@media (min-width: 1101px) and (min-height: 640px) {\r
  .negativas-page { overflow: hidden; gap: 0.35rem; }\r
  .negativas-page .insight-card { padding: 0.3rem 0.5rem; }\r
  .negativas-page .insight-card p { font-size: 0.7rem; line-height: 1.2; }\r
  .negativas-page .kpi-card { min-height: 62px; padding: 0.32rem 0.55rem; }\r
  .negativas-page .kpi-card .stat { font-size: 1.2rem; }\r
  .negativas-page .bi-canvas { flex: 1 1 auto; min-height: 0; overflow: hidden; }\r
  .negativas-page .bi-neg-grid {\r
    flex: 1 1 auto;\r
    min-height: 0;\r
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.18fr);\r
    grid-template-rows: minmax(155px, 1.15fr) minmax(100px, 0.75fr) minmax(125px, 1fr);\r
    gap: 0.4rem;\r
    overflow: hidden;\r
  }\r
  .negativas-page .bi-neg-grid > .panel { min-height: 0; overflow: hidden; padding: 0.45rem 0.6rem; }\r
  .negativas-page .bi-neg-motivos { grid-column: 1; grid-row: 1; }\r
  .negativas-page .bi-neg-side { grid-column: 1; grid-row: 2; }\r
  .negativas-page .bi-neg-planos { grid-column: 2; grid-row: 1 / 3; }\r
  .negativas-page .bi-neg-trend { grid-column: 1 / -1; grid-row: 3; }\r
  .negativas-page .bi-neg-motivos .motivo-table-row { padding: 0.11rem 0; }\r
  .negativas-page .motivo-table-name { flex-direction: row; align-items: baseline; gap: 0.2rem; }\r
  .negativas-page .motivo-table-name strong { flex: 1 1 auto; min-width: 0; }\r
  .negativas-page .motivo-table-name em { flex: 0 0 auto; font-size: 0.57rem; }\r
  .negativas-page .bi-neg-side .motivo-mix { margin-top: 0.1rem !important; }\r
  .negativas-page .bi-neg-side .motivo-mix-bars { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.2rem 0.35rem; }\r
  .negativas-page .bi-neg-side .motivo-mix-row { grid-template-columns: 3.3rem minmax(0, 1fr) 1.8rem; gap: 0.2rem; padding: 0.2rem 0.3rem; font-size: 0.64rem; }\r
  .neg-plan-scope { margin: 0.05rem 0 0.25rem; font-size: 0.62rem; }\r
  .neg-plan-grid {\r
    flex: 1 1 auto;\r
    min-height: 0;\r
    grid-template-columns: repeat(4, minmax(0, 1fr));\r
    grid-auto-rows: minmax(0, 1fr);\r
    gap: 0.22rem;\r
  }\r
  .neg-plan-card { min-height: 0; align-content: space-between; gap: 0.12rem; padding: 0.22rem 0.32rem; border-radius: 7px; }\r
  .neg-plan-card-head strong { font-size: 0.67rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r
  .neg-plan-card-head > span { font-size: 0.69rem; }\r
  .neg-plan-card .motivo-exec-track { height: 0.24rem; }\r
  .neg-plan-card-foot { font-size: 0.54rem; white-space: nowrap; gap: 0.2rem; }\r
  .negativas-page .bi-neg-trend .line-chart { height: 100%; min-height: 80px; max-height: none; }\r
  .negativas-page .bi-details:not([open]) { max-height: none; overflow: hidden; }\r
}\r
\r
@media (min-width: 1101px) and (min-height: 900px) {\r
  .negativas-page .neg-plan-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
  .negativas-page .neg-plan-card { padding: 0.35rem 0.5rem; gap: 0.2rem; }\r
  .negativas-page .neg-plan-card-head strong { font-size: 0.74rem; }\r
  .negativas-page .neg-plan-card-head > span { font-size: 0.76rem; }\r
  .negativas-page .neg-plan-card .motivo-exec-track { height: 0.38rem; }\r
  .negativas-page .neg-plan-card-foot { font-size: 0.62rem; }\r
}\r
\r
/* A investigação é uma página de leitura longa: tabelas e histórico usam toda a largura. */\r
.dashboard-content:has(> .investigacao-page) {\r
  display: flex;\r
  overflow: hidden;\r
  padding: 0;\r
}\r
.investigacao-page {\r
  width: 100%;\r
  flex: 1 1 auto;\r
  min-height: 0;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
  overscroll-behavior: contain;\r
  padding: 1rem clamp(0.75rem, 2vw, 2rem) 3rem;\r
}\r
.investigacao-page > .hero { margin: 0 0 0.8rem; }\r
.investigacao-page > .insight-callout { margin-bottom: 0.8rem; }\r
.investigacao-page > .panel { margin-top: 0.9rem; }\r
.investigacao-historico { width: 100%; padding: clamp(1rem, 2vw, 1.6rem); }\r
.investigacao-historico > .panel-title { font-size: clamp(1.25rem, 1.6vw, 1.6rem); }\r
.investigacao-resumo { grid-template-columns: repeat(4, minmax(0, 1fr)); margin: 1rem 0 1.25rem; }\r
.investigacao-resumo .stat-card { min-width: 0; }\r
.investigacao-percurso { margin: 0 0 1.25rem; padding: 1rem; border: 1px solid var(--line-soft); border-radius: 10px; background: var(--card-wash); }\r
.investigacao-percurso > .panel-title { margin: 0 0 0.35rem; font-size: 1.08rem; }\r
.investigacao-percurso-nota { margin: 0 0 0.85rem; font-size: 0.78rem; }\r
.investigacao-percurso-itens { display: grid; gap: 0.8rem; }\r
.investigacao-percurso-item { min-width: 0; padding: 0.8rem; border: 1px solid var(--line-soft); border-radius: 9px; background: var(--card); }\r
.investigacao-percurso-item h4 { margin: 0 0 0.65rem; font-size: 0.92rem; }\r
.investigacao-percurso-meses { display: flex; gap: 0.65rem; overflow-x: auto; padding-bottom: 0.25rem; }\r
.investigacao-percurso-mes { flex: 0 0 min(300px, 80vw); min-width: 0; padding-left: 0.7rem; border-left: 2px solid var(--line-soft); }\r
.investigacao-percurso-data { display: block; margin-bottom: 0.45rem; color: var(--ink-muted); font-size: 0.76rem; font-weight: 700; }\r
.investigacao-percurso-passagens { display: grid; gap: 0.4rem; }\r
.investigacao-passagem { display: grid; gap: 0.15rem; padding: 0.6rem 0.7rem; border: 1px solid var(--line-soft); border-radius: 8px; background: var(--card-wash); font-size: 0.78rem; }\r
.investigacao-passagem-fora { border-color: #e7b6a5; background: #fff2ed; }\r
.investigacao-passagem strong { font-size: 0.85rem; }\r
.investigacao-passagem-fluxo, .investigacao-passagem-meta { color: var(--ink-muted); }\r
.investigacao-passagem-prazo { font-weight: 650; }\r
.investigacao-etapas { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.85rem; }\r
.investigacao-etapa { min-width: 0; padding: 1rem; border: 1px solid var(--line-soft); border-radius: 10px; background: var(--card-wash); }\r
.investigacao-etapa-larga { grid-column: 1 / -1; }\r
.investigacao-etapa > .panel-title { margin: 0 0 0.7rem; font-size: 1.05rem; }\r
.investigacao-etapa .table-wrap { width: 100%; max-height: min(65vh, 780px); overflow: auto; background: var(--card); }\r
.investigacao-etapa table { font-size: 0.95rem; }\r
.investigacao-etapa th { position: sticky; top: 0; z-index: 1; background: var(--card); font-size: 0.78rem; }\r
.investigacao-etapa th, .investigacao-etapa td { padding: 0.65rem 0.75rem; white-space: nowrap; }\r
.investigacao-etapa .muted { margin: 0; }\r
\r
@media (max-width: 900px) {\r
  .investigacao-resumo { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .investigacao-etapas { grid-template-columns: minmax(0, 1fr); }\r
}\r
@media (max-width: 540px) {\r
  .investigacao-page { padding: 0.65rem 0.55rem 2rem; }\r
  .investigacao-historico { padding: 0.75rem; }\r
  .investigacao-etapa { padding: 0.65rem; }\r
  .investigacao-resumo { gap: 0.5rem; }\r
}\r
\r
/* REG09: reconciliação financeira em primeiro plano; lags em dois painéis abaixo. */\r
.pagamento-page { overflow-x: hidden; overflow-y: auto; }\r
.pagamento-page .bi-canvas { flex: 0 0 auto; height: auto; min-height: 0; overflow: visible; gap: 0.85rem; }\r
.pagamento-page .bi-canvas > .pagamento-flow-panel { flex: 0 0 auto; display: block; height: auto; overflow: visible; padding: 1rem 1.15rem; }\r
.pagamento-flow-panel > .panel-title { margin: 0; font-size: 1.2rem; }\r
.pagamento-flow-intro { margin: 0.15rem 0 0.9rem; color: var(--ink-muted); font-size: 0.8rem; }\r
.pagamento-flow-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 0.55rem; }\r
.pagamento-flow-step {\r
  min-width: 0; min-height: 116px; display: grid; grid-template-columns: 2.5rem minmax(0, 1fr);\r
  grid-template-rows: auto auto 1fr; align-content: start; gap: 0.12rem 0.55rem;\r
  padding: 0.8rem 0.65rem; border-radius: 11px; background: #edf7f1; color: #074d35;\r
}\r
.pagamento-flow-step.deduction, .pagamento-flow-step.open { background: #fff6df; color: #795900; }\r
.pagamento-flow-step.net { background: #ebf4f0; color: #0a6041; }\r
.pagamento-flow-step.paid { background: #e6f3ec; color: #006c3d; }\r
.pagamento-flow-icon { grid-row: 1 / 4; display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background: rgb(255 255 255 / 68%); }\r
.pagamento-flow-icon svg { width: 1.45rem; height: 1.45rem; }\r
.pagamento-flow-label { grid-column: 2; font-size: 0.78rem; color: var(--ink); line-height: 1.22; }\r
.pagamento-flow-step strong { grid-column: 2; min-width: 0; white-space: nowrap; font-size: clamp(1.05rem, 1.45vw, 1.55rem); line-height: 1.2; color: #07383a; letter-spacing: -0.025em; }\r
.pagamento-flow-step small { grid-column: 2; align-self: end; font-size: 0.72rem; font-weight: 650; line-height: 1.2; }\r
.pagamento-paid-row { display: grid; grid-template-columns: minmax(0, 1fr) minmax(145px, 0.21fr); gap: 0.65rem; align-items: stretch; margin-top: 0.65rem; }\r
.pagamento-paid-stack { display: flex; width: 100%; min-width: 0; min-height: 3.25rem; overflow: hidden; border-radius: 9px; background: var(--line-soft); }\r
.pagamento-paid-stack span { display: flex; align-items: center; justify-content: center; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding: 0 0.35rem; color: white; font-size: 0.82rem; font-weight: 700; }\r
.pagamento-paid-part { background: #00844a; }\r
.pagamento-open-part { background: #ae8500; }\r
.pagamento-paid-badge { display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 9px; background: #edf7f1; color: #007940; }\r
.pagamento-paid-badge strong { font-size: 1.45rem; line-height: 1.1; }\r
.pagamento-paid-badge span { font-size: 0.72rem; color: var(--ink); }\r
.pagamento-lag-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.85rem; align-items: start; }\r
.pagamento-page .pagamento-lag-grid > .fat-lag-panel { min-width: 0; min-height: 0; height: auto; margin: 0; padding: 0.95rem 1.05rem; }\r
.pagamento-page .fat-lag-panel-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.6rem; min-height: 4.2rem; }\r
.pagamento-page .fat-lag-panel-heading > div:first-child { min-width: 0; }\r
.pagamento-page .fat-lag-panel-heading .panel-title { margin: 0; font-size: 1rem; }\r
.pagamento-page .fat-lag-lede { margin: 0.2rem 0 0; font-size: 0.72rem; }\r
.pagamento-page .fat-lag-key-stat { flex: 0 0 auto; display: grid; align-content: center; max-width: 36%; min-width: 8rem; padding: 0.42rem 0.6rem; border-radius: 9px; background: #edf7f1; }\r
.pagamento-page .fat-lag-key-stat strong { font-size: 1.2rem; color: #007940; line-height: 1.05; }\r
.pagamento-page .fat-lag-key-stat span { font-size: 0.68rem; line-height: 1.2; color: var(--ink-muted); }\r
.pagamento-page .fat-lag-media-head, .pagamento-page .fat-lag-hero-head { display: none; }\r
.pagamento-page .fat-lag-bar { height: 3rem; margin-top: 0.35rem; }\r
.pagamento-page .fat-lag-bar.compact { height: 0.8rem; margin: 0; }\r
.pagamento-page .fat-lag-seg em { display: grid; gap: 0.05rem; text-align: center; font-size: 0.74rem; line-height: 1.12; }\r
.pagamento-page .fat-lag-seg em small { font-size: 0.65rem; }\r
.pagamento-page .fat-lag-avg-grid { grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.25rem; margin-top: 0.4rem; }\r
.pagamento-page .fat-lag-avg-cell { padding: 0.4rem 0.3rem; background: #f6f8f4; }\r
.pagamento-page .fat-lag-avg-cell strong { font-size: 0.82rem; }\r
.pagamento-page .fat-lag-chips { grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.25rem; margin-top: 0.4rem; }\r
.pagamento-page .fat-lag-chip { display: grid; grid-template-columns: 0.35rem minmax(0, 1fr); padding: 0.4rem 0.25rem; border: 0; border-radius: 7px; background: #f6f8f4; }\r
.pagamento-page .fat-lag-chip strong { font-size: 0.82rem; }\r
.pagamento-page .fat-lag-chip .stat-label, .pagamento-page .fat-lag-avg-cell .stat-label { font-size: 0.62rem; }\r
.pagamento-page .fat-lag-history { margin: 0.35rem 0 0; }\r
\r
@media (min-width: 1321px) and (min-height: 760px) {\r
  .pagamento-page:not(:has(> .bi-details[open])):not(:has(.fat-lag-history[open])) .bi-canvas { flex: 1 1 auto; }\r
  .pagamento-page:not(:has(> .bi-details[open])):not(:has(.fat-lag-history[open])) .pagamento-lag-grid {\r
    flex: 1 1 auto;\r
    min-height: 0;\r
    align-items: stretch;\r
  }\r
  .pagamento-page:not(:has(> .bi-details[open])):not(:has(.fat-lag-history[open])) .pagamento-lag-grid > .fat-lag-panel {\r
    height: 100%;\r
    display: grid;\r
    grid-template-rows: minmax(4.2rem, auto) auto 1fr;\r
    row-gap: 0.7rem;\r
  }\r
  .pagamento-page:not(:has(> .bi-details[open])):not(:has(.fat-lag-history[open])) .fat-lag-history { align-self: end; }\r
}\r
\r
@media (max-width: 1320px) {\r
  .pagamento-lag-grid { grid-template-columns: 1fr; }\r
}\r
@media (max-width: 1050px) {\r
  .pagamento-flow-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
}\r
@media (max-width: 700px) {\r
  .pagamento-flow-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
  .pagamento-paid-row { grid-template-columns: 1fr; }\r
  .pagamento-paid-badge { min-height: 3rem; }\r
  .pagamento-page .fat-lag-avg-grid, .pagamento-page .fat-lag-chips { grid-template-columns: repeat(4, minmax(0, 1fr)); }\r
}\r
@media (max-width: 450px) {\r
  .pagamento-flow-grid { grid-template-columns: 1fr 1fr; gap: 0.35rem; }\r
  .pagamento-flow-step { grid-template-columns: 1fr; min-height: 105px; padding: 0.55rem; }\r
  .pagamento-flow-icon { display: none; }\r
  .pagamento-flow-label, .pagamento-flow-step strong, .pagamento-flow-step small { grid-column: 1; }\r
  .pagamento-page .fat-lag-key-stat { min-width: 6.4rem; }\r
  .pagamento-page .fat-lag-avg-grid, .pagamento-page .fat-lag-chips { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
}\r
`;export{e as default};