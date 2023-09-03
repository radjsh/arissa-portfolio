#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
cd dist && cp index.html 404.html && cd ..
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:radjsh/arissa-portfolio.git main:gh-pages
cd -