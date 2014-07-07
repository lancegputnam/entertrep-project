"use strict";
 
var AppRouter = Parse.Router.extend

	routes: {
		""			: "home", 
		"signup"	: "showSignup"
	}, 

	initialize: function () {
		console.log ('welcome home')
	}

	showSignup: function () {
		$('.main-container')
	}