 // __      ___                   
 // \ \    / (_)                  
 //  \ \  / / _  _____      _____ 
 //   \ \/ / | |/ _ \ \ /\ / / __|
 //    \  /  | |  __/\ V  V /\__ \
 //     \/   |_|\___| \_/\_/ |___/

////// Home View /////////                           
var HomeView = Parse.View.extend ({

	className: 'home-view'

	homeTemplate: _.template($".home-template"().text)

	events: {
		"click .signup-button" : "signUp"
	}

	initialize: function () {
		$('.main-container').append(this.el);
		this.render
	}

	render: function () {
		var renderedTemplate = this.homeTemplate
		this.$el.html((renderedTemplate))
		return this;
	}

	signUp: function() {
		router.navigate('#/signup', {trigger:true})
	}

	login: function() {
		router.navigate('#/login', {trigger: true})
	}
})

//////// Sign Up View /////////
var SignUpView = Parse.View.extend ({

	className: 'signup-view', 

	signupTemplate: _.template($('.signup-template').text())

	events: {
		"click .register-button" : "register"
	}

	initialize: function() {
		$('.main-container').append(this.el);
		this.render
	}

	register: function() {
		router.navigate('#/register', )
	}
})