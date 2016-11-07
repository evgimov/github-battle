/**
 * Created by evgheniy on 11/3/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');


var sentryKey = 'b21f5642a8c440c1b5b30aa048800350';
var sentryApp = '112820';
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: '5',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
);


