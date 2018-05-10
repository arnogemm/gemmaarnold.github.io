$(document).ready(function() {
// Add jQuery here

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
var row = document.getElementById("row-images");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    row.classList.add("row-sticky");
  } else {
    header.classList.remove("sticky");
    row.classList.remove("row-sticky");
  }
}






(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));



$('.menu').clickToggle(function() {
  $('.nav').addClass('active');
},
function() {
  $('.nav').removeClass('active');
});

$('.b-creepycrawlies').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.creepycrawlies').addClass('show');
  $('.pic.creepycrawlies').removeClass('hide');
});

$('.b-householditems').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.householditems').addClass('show');
  $('.pic.householditems').removeClass('hide');
});

$('.b-foodanddrinks').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.foodanddrinks').addClass('show');
  $('.pic.foodanddrinks').removeClass('hide');
});

$('.b-humanbody').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.humanbody').addClass('show');
  $('.pic.humanbody').removeClass('hide');
});

$('.b-animals').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.animals').addClass('show');
  $('.pic.animals').removeClass('hide');
});

$('.b-nature').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.nature').addClass('show');
  $('.pic.nature').removeClass('hide');
});

$('.b-drugs').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.drugs').addClass('show');
  $('.pic.drugs').removeClass('hide');
});

$('.b-blackwhite').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.blackwhite').addClass('show');
  $('.pic.blackwhite').removeClass('hide');
});

$('.b-colour').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.colour').addClass('show');
  $('.pic.colour').removeClass('hide');
});

$('.b-all').click(function() {
  $('.pic').addClass('hide');
  $('.pic').removeClass('show');

  $('.pic.all').addClass('show');
  $('.pic.all').removeClass('hide');
});


// BEM Block Element Modifier - three levels BLOCK then ELEMENT then thing that MODIFIES the script

// .i-red is an element and 'show' is an class. the $ sign is the selector















// dont remove this line
  });
