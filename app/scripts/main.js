"use strict";

Parse.initialize("wbnxBmyVZJGalQ3RY1jZ9le08eo2rm3qze8Luyvv", "qICIy4EMU4sV6aiWQ1z559RrZNTmzfPbwNHp6QVB");

// $("input:checkbox").click(function() {
//     if ($(this).is(":checked")) {
//         var group = "input:checkbox[name='" + $(this).attr("name") + "']";
//         $(this).prop("checked", true);
//     } else {
//         $(this).prop("checked", false);
//     }
// });

// $(".wrapper input:checkbox").change(function() {
//     $(".wrapper input:checkbox").attr("checked", false);
//     $(this).attr("checked", true);
// });

$('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
});

/////// For the image slider on the home page ///////////
// var imgArray = [
//    "https://farm4.staticflickr.com/3854/14559445463_cd9ac22c5a_o.jpg",
//    "https://farm4.staticflickr.com/3881/14352877129_7f1c24de47_o.jpg", 
//    "https://farm4.staticflickr.com/3918/14538518742_86324a6711_o.jpg",
// ];

// window.onload = function() {
//     var image=document.getElementById('spainImages');
//     var index=0;
//     var interval = 2000;
//     var fadeOut = 1000;
//     function slide() {
//         image.src = imgArray[index++%imgArray.length];
//     }
//     setInterval(slide, interval);
// };

$('.save-button').click(function(){
	var imgVal =$('.file-upload button').val();

	var myPost = posts.add({objectURL: imgVal}).last();

	myPost.save();

	$(".file-upload button").val("");
})


$(".home-page-sign-out-button").click(function() {
Parse.User.logOut();
var currentUser = Parse.User.current();
});
