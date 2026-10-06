# Painel Negativas → Previsão (estático)

Snapshot HTML do painel regulatório (Negativas, Filas, SLA, Auth→Fat, Pagamento e Previsão),
no mesmo espírito do [PEONA](https://laricasaint.github.io/PEONA/).

**Site (após publicar):** [https://ipasgo-gepin.github.io/painel_negativas_previsao/](https://ipasgo-gepin.github.io/painel_negativas_previsao/)

> Este repositório versiona só a interface buildada e os JSONs em `data/`.
> Fontes Athena/DuckDB e o código React ficam em `painel_regulatorio`.

## Atualizar dados e republicar

No repositório `painel_regulatorio`:

```bat
atualizar_pages.cmd --refresh-data
```

Ou só rebuild com os JSON já gerados:

```bat
atualizar_pages.cmd
```

Depois, neste repo:

```bat
git add -A
git commit -m "atualiza snapshot"
git push
```

O Actions publica no GitHub Pages.

## Estrutura

| Item | Função |
|------|--------|
| `index.html` + `assets/` | App React (HashRouter) |
| `data/*.json` | Payload exibido no painel |
| `brand/` | Logos |
| `.github/workflows/pages.yml` | Deploy Pages |
