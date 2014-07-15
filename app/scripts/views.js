 "use strict";

////// MARKETING PAGE VIEW /////////                           
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

//////// SIGN UP PAGE VIEW /////////
var SignUpView = Parse.View.extend({

	className: 'signup-view', 

	signupTemplate: _.template($('.sign-up-template').text()),

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
		router.navigate('#/user', {trigger: true});

		var username = $(".add-user-name").val();
		var password = $(".add-password").val();
		var email = $(".add-email").val();
		var firstName = $(".add-first-name").val();
		var lastName = $(".add-last-name").val();
		var zipCode = $(".add-zip-code").val();
		var userProfile = $(".add-user-profile").val();
		var businessProfile = $(".add-business-profile").val();

		var user = new Parse.User();
			user.set("username", username);
			user.set("password", password);
			user.set("email", email);
			user.set("firstName", firstName);
			user.set("lastName", lastName);
			user.set("zipcode", zipCode);
			user.set("userProfile", userProfile);
			user.set("businessProfile", businessProfile)
			 
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

 //////// Vendor SIGN UP PAGE VIEW /////////
var VendorSignUpView = Parse.View.extend({

	className: 'vendor-signup-view', 

	vendorSignupTemplate: _.template($('.vendor-sign-up-template').text()),

	events: {
		"click .register-button" : "register",
	},

	initialize: function() {
		$('.main-container').append(this.el);
		this.render();
	},

	render: function () {
		var renderedTemplate = this.vendorSignupTemplate;
		this.$el.html(renderedTemplate);
		return this;
	},

	register: function() {
		router.navigate('#/user', {trigger: true});

		var username = $(".add-user-name").val();
		var password = $(".add-password").val();
		var email = $(".add-email").val();
		var firstName = $(".add-first-name").val();
		var lastName = $(".add-last-name").val();
		var zipCode = $(".add-zip-code").val();
		var userProfile = $(".add-user-profile").val();
		var businessProfile = $(".add-business-profile").val();

		var user = new Parse.User();
			user.set("username", username);
			user.set("password", password);
			user.set("email", email);
			user.set("firstName", firstName);
			user.set("lastName", lastName);
			user.set("zipcode", zipCode);
			user.set("userProfile", userProfile);
			user.set("businessProfile", businessProfile)
			 
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

 //////// SETTINGS PAGE VIEW /////////
var SettingsView = Parse.View.extend({

	className: 'settings-view', 

	settingsTemplate: _.template($('.settings-template').text()),

	events: {
		"click .create-button" : "addSettings",
		"click .upload-button" : "uploadPhoto",
	},

	initialize: function() {
		$('.main-container').append(this.el);
		this.render();
	},

	render: function () {
		var renderedTemplate = this.settingsTemplate;
		this.$el.html(renderedTemplate);
		return this;
	},

	addSettings: function() {
		router.navigate('#/settings', {trigger: true});

		
		var email = $(".add-email").val();
		var firstName = $(".add-first-name").val();
		var lastName = $(".add-last-name").val();
		var cityState = $(".add-city-state").val();
		var occupation = $(".add-occupation").val();
		var company = $(".add-company").val();
		var website = $(".add-website").val();
		var objectURL = $(".add-profile-photo").val();

		var user = Parse.User.current();
			
			user.save("email", email);
			user.save("firstName", firstName);
			user.save("lastName", lastName);
			user.save("occupation", occupation);
			user.save("company", company);
			user.save("website", website);
			user.save("objectURL", objectURL);

			 
			user.save(null, {
			  success: function(user) {
			    // Hooray! Let them use the app now.
			  },
			  error: function(user, error) {
			    // Show the error message somewhere and let the user try again.
			    alert("Error: " + error.code + "Please ensure login information is correct" + error.message);
	  		  }
	});
	},

		uploadPhoto: function() {

		var fileUploadControl = $(".file-uploader")[0];
		if (fileUploadControl.files.length > 0) {

		  var file = fileUploadControl.files[0];
		  var name = "photo.jpg";

	  	var parseFile = new Parse.File(name, file);
		}

		parseFile.save().then(function(){
			var uploadedPhoto = new Parse.Object('User');
			uploadedPhoto.set('ProfilePicture', parseFile);
			uploadedPhoto.save().done(function() {
			console.log('The uploaded file has been saved to Parse.');
		});

		}, function(error) {
  			console.log('The file either could not be read, or could not be saved to Parse.');
		});
	
	}
});

/////// LOGIN VIEW ////////// 
var LoginView = Parse.View.extend({

	className: 'login-view',

	loginTemplate: _.template($('.login-template').text()),

	events: {
		"click .submit-button"		 : "login",
		"click .signup-login-button" : "signUp"
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

		    router.navigate('#/user');
		  },
		  error: function(user, error) {
		    router.navigate('#/login');
		  }

		});
		event.preventDefault();
	},

	signUp: function() {
		router.navigate('#/signup', {trigger:true});
	},

	logout: function() {
		console.log('logging out')
		$(".logout-button").click(function(){
		Parse.User.logout();
		var currentUser = Parse.User.current();
		});

		router.navigate('#/');
	},
});

///////// USER VIEW ///////////
var UserView = Parse.View.extend({

	className: 'user-view',

	userTemplate: _.template($(".user-template").text()),

	events: {
		// "click .go-left-button" : "search"
	},

	initialize: function() {
		$('.main-container').append(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.userTemplate;
		this.$el.html(renderedTemplate);
		return this;
	},
});

///////// VENDOR VIEW ///////////
// 	className: 'vendor-view',

// 	vendorTemplate: _.template($(".vendor-template").text()),

// 	events: {
// 		// "click .go-left-button" : "search"
// 	},

// 	initialize: function() {
// 		$('.main-container').append(this.el);
// 		this.render();
// 	},

// 	render: function() {
// 		var renderedTemplate = this.vendorTemplate;
// 		this.$el.html(renderedTemplate);
// 		return this;
// 	},
// });

//////// PRICING VIEW //////////
var PricingView = Parse.View.extend({

	className: 'pricing-view',

	pricingTemplate: _.template($(".pricing-template").text()),

	events: {
		// "click .signup-button" : "signUp"
	},

	initialize: function() {
		$('.main-container').append(this.el);
		this.render();
	},

	render: function() {
		var renderedTemplate = this.pricingTemplate;
		this.$el.html(renderedTemplate);
		return this;
	},
});




/////////// UPLOAD PHOTO/MODAL VIEW ////////////



// 	var fileUploadControl = $(".file-uploader button")[0];
// 	if (fileUploadControl.files.length > 0) {
// 	  var file = fileUploadControl.files[0];
// 	  var name = "photo.jpg";

// 	  var parseFile = new Parse.File(name, file);
// 	}

// 	var uploadPromise = parseFile.save()



