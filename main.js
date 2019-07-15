//1. Get all the interactive elements from our HTML
var button = $("button");
var input = $("input");

//2. Listen for Events (user interactions) on the Site
button.on("click", appendInfo);

//3. Declare all functions needed for event listeners...
//   or more simply, just call 'em EVENT HANDLERS
function appendInfo(){
  var infoContainer = $(".to-do-container");
  infoContainer.append(`
    <div class="info-todo">
      <p>${input.val()}</p>
      <button class="delete"> Delete </button>
    </div>`);
  $(".info-todo").on("click", ".delete", deleteToDo);
  //when the .info-todo <div> exists and user clicks on the .delete <button>, call deleteToDo
}

function deleteToDo(event){
  event.target.parentNode.remove();
  //Where event was heard, target that element, find its parent, and delete THAT STUFF
}

  //DOM Traversal: allows us to manipulate DOM elements that have been added later
  //DOM (Browser) Elements are any elements that a user can see in the browser

  //need to get information from the user
  //will use .append function
  //must append TO a container...
