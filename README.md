# Assets for Bootstrap SASS with Bower & Gulp

> My SASS assets for a new project using Bootstrap, Bower & Gulp

### Techs used
This boilerplate uses a number of open source projects to work properly:

  * NodeJs
  * Bower
  * Gulp
  * Bootstrap
  * jQuery
  * SASS

## Getting Started

### Install dependencies

#### First, get the git repository

In order to start a project with `Bootstrap SASS` & `jQuery`, first you'll better get the repo

```sh
git clone git@github.com:zakaziko99/assets-bootstrap-sass-bower-gulp.git
```

#### Customizing your project

Then customize your project by changing the name and delete the .git folder

```sh
mv assets-bootstrap-sass-bower-gulp <project-folder>
cd <project-folder>/
rm -rf .git
```
#### Prerequisites

To use `Bootstrap SASS` & `jQuery`, your project requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- bower, a fast package manager for the web frameworks, libraries, assets, and utilities.
- gulp, a Node.js-based build tool.

**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

2)  If you don't have `Node.js` installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3)  Install `bower` and `gulp`.

```sh
npm install -g bower gulp
```

This lets you run `bower` and `gulp` from the command line. (the working directory must be the root of your project)

4) Install the `Bootstrap SASS` & `jQuery` dependencies.

```sh
bower install && npm install
```

This installs Automate Tasks for better workflow.

### Development workflow

#### Serve / watch (for Development)

Run the dev gulp task

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

This will be also reload the page in real time in case of changes on HTML pages or Js scripts located on '/assets/scripts/dev' folder.

In case of SASS changes on '/assets/sass/' folder, the page will update the css in real time without reloading.

The `serve` gulp task is also the default task.

<!-- #### Build & Vulcanize for distribution -->
