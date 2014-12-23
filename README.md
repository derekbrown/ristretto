#Ristretto

##What is Ristretto?
Ristretto is the front-end component to Knotis, an asynchronous messaging platform. Built in Ember (with Ember-CLI) and using SASS/Bourbon/Neat/Bitters, Ristretto is the epitome of the front-end workflow. Directions for getting Ristretto up and running are below.

##How do I get Ristretto running locally?
1. Be sure you have [NPM](http://www.npmjs.com) installed.
2. Clone this repository.
3. Run `npm install` from the command line, in the top level of the cloned repository. This will read from `package.json` and install the necessary dependencies, including ember-cli. As a side note, you may want to install ember-cli globally using `npm install -g ember-cli`.
4. From the repository in the command line, run `ember serve`. This will download any missing dependencies (namely via Bower, found in `bower.json`) and then execute the Broccoli build script (found in `Brocfile.js`).
5. Upon completion of the build step, you'll find the app running at the specified URL & port. This should be `localhost:4200` during development.

##How do I develop within Ristretto?
1. Follow the above directions for cloning this repository and getting Ristretto running locally.
2. Be sure that your repository is up to date using `git pull`.
3. Make the appropriate changes, and submit a pull request to this repository via your favorite Git client or via command line. If you're unfamiliar with Git, use this for a great tutorial and introduction to the Git workflow: [Git School](https://try.github.io/).
4. Upon review, discussion, and approval from a repository administrator, your pull request will be merged into `master`.
5. Congratulations! And thanks for the commit.
