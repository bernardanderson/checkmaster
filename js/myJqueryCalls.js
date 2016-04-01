// Immediately Invoked JQuery Events
$(() => { 
  // Makes items with the "draggable" class draggable
  $(".draggable").draggable( { handle: ".handle" });
  
  // Sets a click event on any .draggable item. Checks for clicks on the settings icon (toggles
  //  the settings menu visibility) and the delete icon (deletes the .draggable container)
  $(".draggable").click( (event) => { 
    if (event.target.className.includes("settings")) {
      $(event.currentTarget).children(".button-container").toggleClass("remove-view");
      $(event.currentTarget).children(".inputter").toggleClass("select-object");
    } else if (event.target.className.includes("delete")) {
      $(event.currentTarget).remove();
    };
  });

  // This binds a right click event to items in the body and disables the browser context menu
  //  on body element right clicks
  $("body").bind('contextmenu', (event) => {
    Checkserver.getTextSelection();
    event.preventDefault();
  });

});


Checkserver.insertElement(Checkserver.makeDragDivElement('payor'));
Checkserver.insertElement(Checkserver.makeDragDivElement('drawee'));
