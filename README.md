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

- Requiere instalar el modulo requests y el modulo beatifulsoup

``` sh
python -m pip install requests
python -m pip install beautifulsoup4
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

- El script hacepta un tercer argumento adicional para buscar secretos en los repositorios de un usuario

 ``` sh
cd ..
python gitHubApiCaller.py <inputFile> <outputFile> <secretsFile>
echo Por ejemplo: 
python gitHubApiCaller.py ./my_git_hub_spider/github.csv ./githubWithCommits.csv ./afdezfragaSecrets.csv
```

## Actualizar la visualizacion 

### Requerimientos

- Requiere instalar jinja2 para usar templates

### Correr el script

- Tras obtener los commits de cada repositorio ejecutaremos esto para actualizar el js

 ``` sh
python generateChart.py
```

## GitHub Actions

- Se ha definido una Action que cada día a las 0:00 actualice los datos de repositorios más populares y la visualización a través de GitHub Pages.
- Además se ha definido en la Action el disparador *workflow_dispatch* para poder hacer tests manuales.
- Toda la lógica necesaria para llevar a cabo la acción se ha hecho desde dentro de Docker.

## Docker

- La Action que hemos definido crea un contenedor Docker.
- El contenedor hace **git pull** y ejecuta un script (*dockerScript.sh*) que se encuentra en la raíz del repositorio para conseguir los datos necesarios. Finalmente, con **git push** publica los cambios.

## CircleCI

- Hacemos uso de CircleCI para que cada vez que se haga push en el repositorio, obtenemos los secretos encontrados en el propio repositorio.
- También se hace uso de Docker para ejecutar la herramienta **Gittyleaks**.
