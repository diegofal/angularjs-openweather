AngularJS - OpenWeatherAPI
=====================================
[![Build Status](https://travis-ci.org/jakemmarsh/angularjs-gulp-browserify-boilerplate.svg)](https://travis-ci.org/jakemmarsh/angularjs-gulp-browserify-boilerplate) [![dependencies Status](https://david-dm.org/jakemmarsh/angularjs-gulp-browserify-boilerplate/status.svg)](https://david-dm.org/jakemmarsh/angularjs-gulp-browserify-boilerplate) [![devDependency Status](https://david-dm.org/jakemmarsh/angularjs-gulp-browserify-boilerplate/dev-status.svg)](https://david-dm.org/jakemmarsh/angularjs-gulp-browserify-boilerplate#info=devDependencies)

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

