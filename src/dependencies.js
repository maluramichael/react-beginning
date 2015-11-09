// create another bundle to reduce build time

var React = require('react'),
ReactDOM = require('react-dom');

window.React = window.React || React;
window.ReactDOM = window.ReactDOM || ReactDOM;