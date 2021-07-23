echo "******DEPLOY HUGO******"
echo "enter your commit message"
read commit
echo "you have entered $commit"
hugo
cd public
git admit $commit
git push
cd ../
git admit $commit
git push
echo -e echo "******DEPLOYED******"