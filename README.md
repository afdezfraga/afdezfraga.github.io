# retoDevOps
Reto DevOps integrando Scrapy, GitHub API, GitHub Actions y más para obtener informacion de los repositorios más populares.

## Scrapy

- Requiere python 3.6 o superior.

### Instalación con python 3 y pip

``` sh
python -m pip install scrapy
```

### Correr el spider

``` sh
cd my_git_hub_spider
scrapy crawl GitHubSpider -o github.csv -t csv
```