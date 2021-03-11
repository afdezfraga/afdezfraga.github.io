cd afdezfraga.github.io

echo "Mi pass es $2"

git pull

gittyleaks -u afdezfraga -r afdezfraga.github.io -d -o -a > gittyleaks/analisis.out

git add gittyleaks/analisis.out

git config --global user.email "PE-2021q1gi@torusware.com"
git config --global user.name "Becarios Torus"

git commit -m "[skip ci]"

git push https://$1:$2@github.com/afdezfraga/afdezfraga.github.io.git --all
