
# MIGHT use this - don't know

#################  HEAD  ####################

# run this as `sudo -i`

# remember the directory of this file when executed
THISDIR="$(dirname ${BASH_SOURCE[0]})"
cd $THISDIR

#################  SETUP  ####################

ASSETSREPONAME=assets.josephgill.io
ASSETSREPOURL=https://github.com/atljoseph/$ASSETSREPONAME.git

cd ..
pwd
if ! [[ -d $ASSETSREPONAME ]]
then
    echo "Cloning assets repo"
    git clone $ASSETSREPOURL
else 
    echo "Assets repo already installed"
fi
sh $ASSETSREPONAME/scripts/assets-install.sh

cd $THISDIR
