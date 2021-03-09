cd /home/afdezfraga.github.io

git pull

rm ./githubWithCommits.csv ./my_git_hub_spider/github.csv

cd my_git_hub_spider
scrapy crawl GitHubSpider -o github.csv -t csv

echo 'CRAWLER ACABO'

cd .. 
python gitHubApiCaller.py ./my_git_hub_spider/github.csv ./githubWithCommits.csv

echo 'API ACABO'

git add ./githubWithCommits.csv

echo 'ADD COMPLETO, SE MOSTRARA EL ESTADO'

git status

echo 'STATUS FINALIZADO'

git config --global user.email "PE-2021q1gi@torusware.com"
git config --global user.name "Becarios Torus"

echo 'CONFIG TERMINADA'

git commit -m "actualizacion periodica con fecha $(date)"

echo 'COMIIT TERMINADO'

git push https://$BOTNAME:$BOTPASSWD@github.com/afdezfraga/afdezfraga.github.io.git --all

echo 'PUSH TERMINADO'
