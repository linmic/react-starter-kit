'use strict';

var React = require('react');
var Link = require('./Link.jsx');

var Navbar = React.createClass({
  render() {
    return (
      <div className="navbar-top" role="navigation">
        <div className="container">
          <Link className="react-logo" to="http://facebook.github.io/react/">
            React.js Starter Kit
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
