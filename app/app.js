// Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Now we get the routes
var routes = require('./config/routes');

/* Contents of route page will be rendered */
/* The contents of div app on index.html will be displayed here */
ReactDOM.render(routes, document.getElementById("app"));
