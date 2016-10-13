AngularJS - OpenWeatherAPI
=====================================
[![Build Status](https://travis-ci.org/diegofalciola/angularjs-openweather.svg?branch=master)](https://travis-ci.org/diegofalciola/angularjs-openweather) [![dependencies Status](https://david-dm.org/diegofalciola/angularjs-openweather/status.svg)](https://david-dm.org/diegofalciola/angularjs-openweather) [![devDependencies Status](https://david-dm.org/diegofalciola/angularjs-openweather/dev-status.svg)](https://david-dm.org/diegofalciola/angularjs-openweather?type=dev) 

A sample application using [these best AngularJS practices](https://github.com/toddmotto/angularjs-styleguide)  and Gulp best practices from [this resource](https://github.com/greypants/gulp-starter), demostrating an implementation of OpenWeatherAPI.

[View contributors](https://github.com/diegofalciola/angularjs-openweather/graphs/contributors)

---

### Getting up and running

1. Clone this repo from `https://github.com/diegofalciola/angularjs-openweather.git`
2. Run `npm install` from the root directory
3. Run `npm run dev`
4. Your browser will automatically be opened and directed to the browser-sync proxy address

Now that `npm run dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---

This boilerplate uses the latest versions of the following libraries:

- [AngularJS](http://angularjs.org/)
- [SASS](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)

Along with many Gulp libraries (these can be seen in either `package.json`, or at the top of each task in `/gulp/tasks/`).

---

### Testing

##### Unit Tests

Unit tests are used to test a single module (or "unit") at a time in order to ensure that each module performs as intended individually. In AngularJS this could be thought of as a single controller, directive, filter, service, etc. That is how the unit tests are organized in this boilerplate.

All unit tests are run with `npm run unit`. When running unit tests, code coverage is simultaneously calculated and output as an HTML file to the `/coverage` directory.

##### On this repository

The tests included in this sample play from simple value testing, to advance nested promises inside the calling methods. Dive into the code to find more details! 
