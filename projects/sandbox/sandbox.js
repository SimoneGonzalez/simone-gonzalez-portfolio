//div id=everything
$("body").prepend('<div id="everything"></div>');
  //h1
  $("#everything").append("<h1>Hello There!</h1>");
  $("#everything").append("<h2>Hello Again!</h2>")
  //p
  //p
  //div class=holder
  $("#everything").append('<div class="holder"></div>');
  $("#everything").append('<div class="holder"></div>');
  $(".holder").append('<ol><li>List Item</li></ol>');

    //ul
      //li
      //li
      //li
  //div class=holder
    //ol
      //li
      //li
      //li
  //div id=change-me
  //div id=secret


//.append()
//.prepend()
//.html()
//.text()

// $("div.toggle-stuff").hide(); // invisible
// $("div.toggle-stuff").show(); // visible

//add style with .css()
//$("#secret").css("display", "none");
// inlined
// $("#change-me").css({
//     "width": "80%",
//     "margin-left": "auto",
//     "margin-right": "auto"
// });
//
// // separated
// var options = {
//     "width": "80%",
//     "margin-left": "auto",
//     "margin-right": "auto"
// };
//
// $("#change-me").css( options );

//.animate() examples:
// $('ol li').fadeIn() // fade in a set of matched elements over time
// $('p .comments').fadeOut() // fade out as set of matched elements over time
// $('div#thing').slideDown() // animate an element sliding down over time
// $('#message').slideUp() // animate an element sliding up over time
// $('.alert').slideToggle() // toggle between an element sliding up or down over time depending on whether it's visible or not
// $('#change-me').animate("font-size", "200%") // animate a CSS property of your choosing!
// inlined
// $("#change-me").animate({
//     "font-size": "300%",
//     "margin-left": "200px",
//     "padding": "50px"
// });
