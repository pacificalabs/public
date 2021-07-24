RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color
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
printf "I ${RED}love${NC} Stack Overflow\n"
hugo server --disableFastRender | read message
printf "${BLUE}$message${NC}"