$(document).ready(function() {



/********Add a click handler for your img.
When users click on your photo on your profile page, a previously-hidden blurb should be revealed with a jQuery animation.
*********/

$('img').on('click', function() {
  $('img').hide();
  $('#myBlurb').show();
});

/*
<li><a href="github.com/SimoneGonzalez"></a>Github</li>
<li><a href="linkedin.com/in/SimoneGonzalez"></a>Linkedin</li>
*/
var contactArray = ["<li>thing to append</li>", "<li>thing to append2</li>", "<li>thing to append3</li>"];

takesArgs(contactArray);

var appendStrings = function(someArray) {
//put this inside function appendStrings -->
//takes one argument that is an array
  var i = 0;

  while(i < someArray.length) {
    //insert your own code to append each list item to your ul
    $('#contact-list').append(someArray[i]);
    // console.log(turkeyDoodle[i]);
    i++;
  }

}
// <--
for(var i=0; i < someArray.length; i++) {
  console.log(someArray[i]);
}

// var someFunction(argument1, argument2) {
//   console.log(argument1, argument2)
// }
// $('li').on('mouseover', function() {
//   $('li').addClass('highlighted');
// });
//
// $('li').on('mouseleave', function() {
//   $('li').removeClass('highlighted');
// });
//
// $('li').on('mouseover', function(event){
//   var target = event.target;
//   $(target).addClass('highlighted');
// });
//
// $('li').on('mouseleave', function(event){
//   var target = event.target;
//   $(target).removeClass('highlighted')
// });

// $('li').on('mouseover', function(){
//   $(this).addClass('highlighted');
// });
//
// $('li').on('mouseleave', function() {
//   $(this).removeClass('highlighted');
// });
});
