touch f.txt

git add f.txt

echo add bien

git commit -m "actualizacion periodica con fecha $(date)"

echo commit bien

echo $BOTNAME
echo $BOTPASSWD

git push https://$BOTNAME:$BOTPASSWD@github.com/afdezfraga/afdezfraga.github.io.git --all
