# Assets for Bootstrap SASS with Bower & Gulp [![Build Status](https://travis-ci.org/zakaziko99/assets-bootstrap-sass-bower-gulp.svg?branch=master)](https://travis-ci.org/zakaziko99/assets-bootstrap-sass-bower-gulp)

> My SASS assets for a new project using Bootstrap, Bower & Gulp

### Techs used
This boilerplate uses a number of open source projects to work properly:

  * [NodeJs](https://nodejs.org/)
  * [Bower](http://bower.io/)
  * [Gulp](http://gulpjs.com/)
  * [Bootstrap 3](http://getbootstrap.com/)
  * [jQuery](https://jquery.com/)
  * [SASS](http://sass-lang.com/)

## Contents
* [Install dependencies](#install-dependencies)
* [Customizing gulpfile.js](#customizing-gulpfile)
* [Development workflow](#development-workflow)

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

### Customizing gulpfile

on the 'gulpfile.js' file, you can customize the dist folder of your project:

```js
var serverPath  = '<dist-folder>';
```

### Development workflow

#### sass

Run the sass gulp task

```sh
gulp sass
```

This will compile the SASS through the file 'assets/sass/main.scss' and outputs the compiling minified css file 'main.css' on the '&lt;dist-folder&gt;/css' folder including `Bootstrap SASS` files downlaoder with `bower`

You can customize the `Bootstrap SASS` included by editing the 'assets/sass/includes/_bootstrap-config.scss' such Alerts, Modals, Carousels, ...

#### jquery

Run the jquery gulp task

```sh
gulp jquery
```

This will copy the minified jquery library fron '/bower_components' folder to '&lt;dist-folder&gt;/js/libs' folder

#### Bootstrap scripts

Run the generating Bootstrap js gulp task

```sh
gulp bootstrap_js
```

This will generate a customized bootstrap js script through the file 'assets/scripts/bootstrap.js' and outputs the generated and minified js file 'bootstrap.js' on the '&lt;dist-folder&gt;/js/libs' folder

You can customize the `Bootstrap JS` plugins to include in the generated js file, by editing the 'assets/scripts/bootstrap.js' file & delete the calls of plugins files.

#### JS scripts

Run the generating js gulp task

```sh
gulp js
```

This will concatenate the files under the folder 'assets/scripts/dev/' and outputs the generated and minified js file 'main.js' on the '&lt;dist-folder&gt;/js' folder

#### Build

Run the build gulp task

```sh
gulp build
```

This will run the `sass`, `jquery`, `bootstrap_js` and `js` gulp tasks.

#### Serve / watch (for Development)

Run the dev gulp task

```sh
gulp serve
```

This will run first the `build` gulp task.

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

This will be also reload the page in real time in case of changes on HTML pages or Js scripts located on '/assets/scripts/dev' folder.

In case of SASS changes on '/assets/sass/' folder, the page will update the css in real time without reloading.

The `serve` gulp task is also the default task.
