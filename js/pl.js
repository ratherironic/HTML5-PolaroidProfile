//= require <jquery>
//= require "plugins/jquery.easing.1.3"
//= require "plugins/jquery.metadata"
//= require "em/utilities"

// setup namespace
var PL = PL || {};

// Functions applied on page load and on the inserted DOM in any XHR request,
// don't forget to scope the Selectors.
PL.onload = function() {
	PL.insta.pageLoad();
};

// global OnDOMReady()
$(document).ready(function() {
	PL.onload();
});
