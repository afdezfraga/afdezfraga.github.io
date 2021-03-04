# retoDevOps
Reto DevOps integrando Scrapy, GitHub API, GitHub Actions y más para obtener información de los repositorios más populares.

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

## GitHub API

### Requerimientos

- Requiere instalar el modulo requests 

``` sh
python -m pip install requests
```

### Correr el script

- Tras ejecutar el spider se necesita volver a la carpeta raiz del proyecto
- Desde ahí llamar al script pasando como parámetros archivo de entrada y archivo de salida

``` sh
cd ..
python gitHubApiCaller.py <inputFile> <outputFile>
echo Por ejemplo: 
python gitHubApiCaller.py ./my_git_hub_spider/github.csv ./githubWithCommits.csv
```