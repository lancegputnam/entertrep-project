"use strict";
 
var AppRouter = Parse.Router.extend({

	routes: {
		""			: "home", 
		"signup"	: "showSignup",
		"login"		: "showLogin",
		"register"	: "submitUser",

	}, 

	initialize: function () {
		console.log ('welcome home')
	},

	home: function() {
		$('.main-container').html('');
		new HomeView();
		console.log ('home at last.');
	},

	showSignup: function () {
		$('.main-container').html('');
		new SignUpView();
	},

	showLogin: function() {
		$('.main-container').html('');
		new LoginView();
	},

});

var router = new AppRouter();
Parse.history.start();