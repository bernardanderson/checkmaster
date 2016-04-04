// Immediately Invoked JQuery Events
$(() => { 
  // Makes items with the "draggable" class draggable
  $(".draggable").draggable( { handle: ".handle" }  );
  
  // Sets a click event on any .draggable item. Checks for clicks on the settings icon (toggles
  //  the settings menu visibility) and the delete icon (deletes the .draggable container)
  $(".draggable").click( (event) => { 
    event.stopPropagation();
    if (event.target.className.includes("settings")) {
      $(event.currentTarget).children(".button-container").toggleClass("remove-view");
      $(event.currentTarget).children(".inputter").toggleClass("select-object");
    } else if (event.target.className.includes("delete")) {
      $(event.currentTarget).remove();
    };
  });

  // Sets an event on any .draggable element that shows the title & settings icons
  $(".draggable").bind("mouseover", (event) => {
      event.stopPropagation();
      $(event.currentTarget).children(".title-container").toggleClass("remove-view");
  });

  // Sets an event on any .draggable element that hides the title & settings icons
  $(".draggable").bind("mouseout", (event) => {
      event.stopPropagation();
      $(event.currentTarget).children(".title-container").toggleClass("remove-view");
  });

  // This binds a right click event to items in the body and disables the browser context menu
  //  on body element right clicks
  $("body").bind('contextmenu', (event) => {
    Checkserver.getTextSelection();
    event.preventDefault();
  });

});


// Adds the Input Box Areas to the DOM
let mirc = Checkserver.getElementParams().mirc;
Checkserver.addDraggableInputLowerTitleToDom(mirc[0], mirc[1], mirc[2], mirc[3], mirc[4]);

let payor = Checkserver.getElementParams().payor;
Checkserver.addDraggableInputLowerTitleToDom(payor[0], payor[1], payor[2], payor[3], payor[4]);
