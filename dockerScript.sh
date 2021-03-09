cd /home/afdezfraga.github.io

rm ./githubWithCommits.csv ./my_git_hub_spider/github.csv

cd my_git_hub_spider
scrapy crawl GitHubSpider -o github.csv -t csv

cd .. 
python gitHubApiCaller.py ./my_git_hub_spider/github.csv ./githubWithCommits.csv

git add ./githubWithCommits.csv

git config --global user.email "PE-2021q1gi@torusware.com"
git config --global user.name "Becarios Torus"

git commit -m "actualizacion periodica con fecha $(date)"

git push https://$BOTNAME:$BOTPASSWD@github.com/afdezfraga/afdezfraga.github.io.git --all
