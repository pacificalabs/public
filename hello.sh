RED='\033[0;31m'
NC='\033[0m' # No Color
printf "I ${RED}love${NC} Stack Overflow\n"
echo "${RED}******DEPLOY HUGO******${NC}"
echo "enter your commit message"
read commit
echo "${RED}you have entered $commit ${NC}"
hugo
cd public
git admit $commit
git push
cd ../
git admit $commit
git push
echo "${RED}******DEPLOYED******${NC}"