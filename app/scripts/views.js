 "use strict";

////// Home View /////////                           
var HomeView = Parse.View.extend({

	className: 'home-view',

	homeTemplate: _.template($(".home-template").text()),

	events: {
		"click .signup-button" : "signUp"
	},

	initialize: function() {
		$('.main-container').append(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.homeTemplate;
		this.$el.html(renderedTemplate);
		return this;
	},

	signUp: function() {
		router.navigate('#/signup', {trigger:true});
	},

	login: function() {
		router.navigate('#/login', {trigger: true});
	},
});

// var FooterView = Parse.View.extend({

// 	className: 'footer-view',

// 	footerTemplate: _.template($(".footer-template").text()),

// 	events: {
// 	},

// 	initialize: function() {
// 		$('.main-footer').html(this.el);
// 		this.render();
// 	},

// 	render: function() {
// 		var renderedTemplate = this.footerTemplate;
// 		this.$el.html(renderedTemplate);
// 		return this;
// 	},
// });

//////// Sign Up View /////////
var SignUpView = Parse.View.extend({

	className: 'signup-view', 

	signupTemplate: _.template($('.signup-template').text()),

	events: {
		"click .register-button" : "register",
	},

	initialize: function() {
		$('.main-container').append(this.el);
		this.render();
	},

	render: function () {
		var renderedTemplate = this.signupTemplate;
		this.$el.html(renderedTemplate);
		return this;
	},

	register: function() {
		router.navigate('#/register', {trigger: true});

		var user = new Parse.User();
			user.set("username", "my username" , $(".add-user-name"));
			user.set("password", "my pass", $(".add-password"));
			user.set("email", "email@example.com", $(".add-email"));
			user.set("first name", "my first name", $(".add-first-name"));
			user.set("last name", "my last name", $(".add-last-name"));
			user.set("zipcode", "digits", $(".add-zip-code"));
			 
			user.signUp(null, {
			  success: function(user) {
			    // Hooray! Let them use the app now.
			  },
			  error: function(user, error) {
			    // Show the error message somewhere and let the user try again.
			    alert("Error: " + error.code + "Please ensure login information is correct" + error.message);
	  		  }
	});
	}
});

/////// Login View.... NOT IN HTML YET! ////////// 
var LoginView = Parse.View.extend({

	className: 'login-view',

	loginTemplate: _.template($('.login-template').text()),

	events: {
		"click .login-button": "login"
	},

	initialize: function () {
		$('.main-container').prepend(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.loginTemplate;
	    this.$el.html(renderedTemplate);
	    return this;
	},

	login: function() {

		Parse.User.logIn($('.enter-username').val(), $('.enter-password').val(), {
		  success: function(user) {
		    console.log('Succesfully logged in!');
		    $(".enter-username").val('');
		    $(".enter-password").val('');

		    router.navigate('#/');
		  },
		  error: function(user, error) {
		    router.navigate('#/login');
		  }

		});
	}
});

///// still need user and and vendor views //////////
//////// what about a search view //////////

