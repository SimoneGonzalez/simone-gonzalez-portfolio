/********Add a click handler for your img.
When users click on your photo on your profile page, a previously-hidden blurb should be revealed with a jQuery animation.
*********/

$('img').on('click', function() {
  $('img').hide();
  $('#myBlurb').show();
})






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
