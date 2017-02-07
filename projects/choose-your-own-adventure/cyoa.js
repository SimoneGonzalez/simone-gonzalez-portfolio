var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze out the window and sigh");

if (response === "sit") {
  response = prompt("New prompt, new options");

}
else if (response === "gaze") {
  response = prompt("Different prompt, different options");

  if (resonse === "read") {
    response = prompt("Do you read book a, b, or c?");
    if(response === "a" || response === "c") {
      response = prompt();
    }
    else if (response === "b") {
      response = alert("You've chosen the wrong book. Your adventure ends here. Refresh to play again.");
    }
    else {
      response = alert("You haven't chosen what to read. Your story ends here. Refresh to play again.")
    }
  }
  else {
    response = prompt();
  }
}
else {
  alert("Please type in a valid input! Refresh the page to try agan.");
}
