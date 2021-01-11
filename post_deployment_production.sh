# Versioned post-deployment commands
# To run this, use `bash post_deployment_production.sh`
# Atomic commands are marked using (A)
# We assume the project is being deployed to /deploy next to a /www document root
# TODO: document extra commands or project-specific needs

# Remove the "previous" codebase if it exists, the one that was live BEFORE the previous deploy
echo "Removing old codebase backup. This may take a minute..."
rm -rf ../previous

# Install nvm, or try to update if already installed
echo "Installing or updating nvm..."
curl -o- -s https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# This loads nvm, .bash_profile is owned by root, so we have to call this manually
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install node version according to .nvmrc, this implies "nvm use"
echo "Installing node version according to .nvmrc..."
nvm install

# Install npm dependencies
echo "Installing npm dependencies..."
npm install --no-optional --silent

# Rebuild in case we switched npm versions
echo "Rebuilding npm dependencies..."
npm rebuild --silent > /dev/null

# Npm production build, suppress all output (it's A LOT)
echo "Building assets..."
npm run --quiet prod > /dev/null 2>&1

# If npm returned a non-zero exit code, fail the whole deploy. $? contains the exit code of the last command executed.
([ $? -eq 0 ] && echo "Npm build successful") || \
{ echo "Something went wrong during npm run prod. Check deploy/npm-debug.log for more details."; exit 1; }

# Copy current folder to "new" in the root, exclude node_modules  & resources/assets to make it faster
echo "Copying codebase. This may take a minute..."
rsync -a . ../new --exclude node_modules --exclude resources/assets

# (A) Remove the default index.html file if it exists and it's in a real directory (no symlink)
if [ ! -L ../www ] && [ -d ../www ]
    then
        rm -f ../www/index.html
fi

# (A) Remove the www -> src symlink, or Combell's document root folder
rm -r ../www

# (A) Move the current codebase to /previous if there was a prior deploy
mv -n ../src ../previous 2>/dev/null; true

# (A) Move the new codebase to /src
mv -n ../new ../src

# (A) Link www -> src/static again
ln -fs ./src/static ../www

echo "Your changes are now live."
echo "Should you want to revert to the pre-deploy state, just symlink /www to /previous/static."
