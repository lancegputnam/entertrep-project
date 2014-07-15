"use strict";
 
var AppRouter = Parse.Router.extend({

	routes: {
		""				: "home", 
		"signup"		: "showSignup",
		"login"			: "showLogin",
		"user"			: "submitUser",
		"pricing"		: "showPricing",
		"settings"		: "showSettings",
		"vendor"		: "showVendor", 
		"signup-vendor"	: "showSignupForVendor"

	}, 

	initialize: function () {
		console.log ('welcome home');
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

	submitUser: function() {
		$('.main-container').html('');
		new UserView(Parse.User.current().attributes);
	},

	showPricing: function() {
		$('.main-container').html('');
		new PricingView;
	},

	showSettings: function() {
		$('.main-container').html('');
		new SettingsView(Parse.User.current().attributes);
	},

	showSignupForVendor: function() {
		$('.main-container').html('');
		new VendorSignUpView();
	}

});

var router = new AppRouter();
Parse.history.start();