# Versioned post-deployment commands
# To run this, use `bash post_deployment_staging.sh`
# Atomic commands are marked using (A)
# TODO: document extra commands or project-specific needs

# Install nvm, or try to update if already installed
echo "Installing or updating nvm ..."
curl -o- -s https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# This loads nvm, .bash_profile is owned by root, so we have to call this manually
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install node version according to .nvmrc, this implies "nvm use"
echo "Installing node version according to .nvmrc ..."
nvm install

# Install npm dependencies, ignoring scripts as we're rebuilding next
echo "Installing npm dependencies..."
npm install --ignore-scripts  --silent

# Rebuild in case we switched npm versions
echo "Rebuilding npm dependencies..."
npm rebuild --silent > /dev/null

# Npm production build, suppress all output (it's A LOT)
echo "Building assets..."
npm run --quiet prod > /dev/null 2>&1

# If npm returned a non-zero exit code, fail the whole deploy. $? contains the exit code of the last command executed.
([ $? -eq 0 ] && echo "Npm build successful") || \
{ echo "Something went wrong during npm run prod. Check deploy/npm-debug.log for more details."; exit 1; }

echo "Your changes are now live."
