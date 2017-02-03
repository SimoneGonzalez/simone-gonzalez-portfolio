
var firstName = prompt("Hi there! What's your first name?") || "Visitor";
var lastName = prompt("What's your last name?") || "McDefaultson";

var output = document.querySelector('#greeting');

output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
//
// if(firstName && lastName) {
//   output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
// } else {
//   output.innerHTML = "<p>Please tell us your name!</p>";
// }


//user clicks element x
var btn = document.querySelector('#userButton');
btn.addEventListener('click', function(event) {
  alert("Hey, don't do that.")
});

var richardFood = "sushi";
var simoneFood = "Pho";
var genaFood = "pasta";

var myFoodArray = ["Tacos", "Burriotos", richardFood, "curry", simoneFood, genaFood];

var classCity =
{
  "gena": "Ashland", "rebecca": "Memphis", "wayne": "Manchester", "richard": "Galveston", "simone": "Louisville"
}
