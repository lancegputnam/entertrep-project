"use strict";

SignUpView = Parse.View.extend({

	className: 'home-view',

	signUpTemplate: _.template($('.home-template').text()),

	events: {
		"click .signup-button" : "signupPage"
	}
	
	initialize: function(){
		$('.top-container').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.append(this.signUpTemplate());
		// var renderedTemplate = this.imageTemplate(this.model.attributes);
  //   	this.$el.html(renderedTemplate);
	}

	signupPage: function (){
		
	}
});