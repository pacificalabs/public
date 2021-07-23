#!/bin/zsh

echo -e "enter your commit message"

read commit

echo "you have entered $commit"

hugo

cd public

git admit $commit

git push

cd ../

git admit $commit

push

echo -e "DONE!"
