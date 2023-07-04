# Ability Workshop Website

This repository contains all the code for Ability Workshop's new website. The current website is located at https://www.abilityworkshop.ca. This new website can currently be found at https://bthoom.github.io/ability-workshop-calgary/.

## Motivation

This website rewrite attempts to accomplish the following goals:
- Reduce points of friction for visitors
- Improve accessibility
- Modernize interface
- Migrate away from current SaaS solution

## Contributing

To set up a development environment for working on this website, you will need the following dependencies installed on your comptuer:
- git
- node + npm

Clone this repository, and then in terminal with the current directory set to the repository root, run the following command:
```bash
npm install
```
This will install all the libraries this website depends on into the node_modules directory. Then you can start up a web server to run the website with:
```bash
npm start
```

When the web server is set up, it should automatically bring you to the website which is hosted at http://localhost:3000 by default.

That is all there is to setting up the development environment for this. Most modifications you make to the source files should automatically cause the
page you are on to refresh with the latest updates.

### Deployment

This repository has an automated deployment process using GitHub Actions. This builds the code present in the main branch into a package that can
be run on GitHub Pages' static web hosting, and pushes it to the gh-pages branch. You should never need to modify the gh-pages branch or deploy manually.

If however you are on your own fork and wish to test a branch other than main on your own GitHub Pages instance, you can do this. First you must
make sure that the git remote `origin` is set to your fork, and not to the main repository. You can check this by running:
```bash
git remote -v
```
If you see a line starting with `origin` that contains your username in the url on the same line, then your repository is configured correctly for this.
If you do not see that, you will likely have to use some combination of `git remote rename` and `git remote set-url` to fix this.

When you are set up as described above, all you have to do is run:
```bash
npm run deploy
```
This will build the website, commit, and push it to your gh-pages branch. Once pushed, GitHub will automatically build and deploy your website to
https://<your_username>.github.io/ability-workshop-calgary/. This process may take a few minutes before you can see the updates online.
Unlike with a local webserver, you will need to refresh any currently loaded pages manually.