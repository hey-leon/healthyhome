# Angular app template
// TODO --- Before using the template, make sure to fill in the package.json and bower.json, then run `npm i && gulp build:tasks`.

## About
 This template is designed to be angular boiler plate for creating web apps. The template's goal is to eliminate the need to set up any common build automation, directory structure, and a testing suite. The packages installed include:

  - npm, bower, angular
  - gulp + various plugins
  - karma + jasmine + phantomjs + browsersync

Note: to list node packages try `npm ls la -depth=0`, and for bower `bower ls la -depth=0`.

## Build automation
By running `gulp` (the default task) in terminal, on file changes build tasks will run and browser will be reloaded.

#### SASS
  - Compiled to css
  - Vendor prefixed '> 5%'
  - CSS is then minified

#### JS
  - JS is concatenated
  - Transpiled to ES5
  - JS is uglified

#### Image resources
  - Images are optimized

#### Static resources
  - Copied to \_build

#### Templates
  - Compiled to JS
  - JS is uglified

#### Bower frameworks
  - Compiled same as CSS, and JS and added to \_build

## Unit testing
On file changes unit tests are ran

## Want to contribute...
If your an open source beast, or have any ideas on how to improve the template please submit a PR!!!
