'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'React.js Starter Kit',
      layout: DefaultLayout
    };
  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>Runtime Components</h3>
            <dl>
              <dt><a href="https://facebook.github.io/react/">React</a></dt>
              <dd>A JavaScript library for building user interfaces, developed by Facebook</dd>
              <dt><a href="https://github.com/flatiron/director">Director</a></dt>
              <dd>A tiny and isomorphic URL router for JavaScript</dd>
              <dt><a href="http://getbootstrap.com/">Bootstrap</a></dt>
              <dd>CSS framework for developing responsive, mobile first interfaces</dd>
            </dl>
          </div>
          <div className="col-sm-4">
            <h3>Development Tools</h3>
            <dl>
              <dt><a href="http://gulpjs.com">Gulp</a></dt>
              <dd>JavaScript streaming build system and task automation</dd>
              <dt><a href="http://webpack.github.io/">Webpack</a></dt>
              <dd>Compiles front-end source code into modules / bundles</dd>
              <dt><a href="http://www.browsersync.io/">BrowserSync</a></dt>
              <dd>A lightweight HTTP server for development</dd>
            </dl>
          </div>
          <div className="col-sm-4">
            <h3>Fork me on GitHub</h3>
            <p><a href="https://github.com/linmic/react-starter-kit">github.com/linmic/react-starter-kit</a></p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
