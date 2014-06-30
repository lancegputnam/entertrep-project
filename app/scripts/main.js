console.log('\'Allo \'Allo!');

Parse.initialize("wbnxBmyVZJGalQ3RY1jZ9le08eo2rm3qze8Luyvv", "qICIy4EMU4sV6aiWQ1z559RrZNTmzfPbwNHp6QVB");

var imgArray = [
   "https://farm4.staticflickr.com/3854/14559445463_cd9ac22c5a_o.jpg",
   "https://farm4.staticflickr.com/3881/14352877129_7f1c24de47_o.jpg", 
   "https://farm4.staticflickr.com/3918/14538518742_86324a6711_o.jpg",
];

window.onload = function() {
    var image=document.getElementById('spainImages');
    var index=0;
    var interval = 3000;
    var fadeOut = 2000;
    function slide() {
        image.src = imgArray[index++%imgArray.length];
    }
    setInterval(slide, interval);
};

