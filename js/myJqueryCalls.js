
// Immediately Invoked JQuery Events
$(() => { 
  // Makes items with the "draggable" class draggable
  $(".draggable").draggable( { handle: ".handle" })
  
  // Sets the click event for the settings button to toggle the input box font settings
  $(".draggable").click( () => { 
    if (event.target.className.includes("settings")) {
      $(event.currentTarget).children(".button-container").toggleClass("remove-view");
      $(event.currentTarget).children(".inputter").toggleClass("select-object");
    } else if (event.target.className.includes("delete")) {
      $(event.currentTarget).remove();
    };
  });
});

Checkserver.insertElement(Checkserver.makeDragDivElement('payor'));
Checkserver.insertElement(Checkserver.makeDragDivElement('drawee'));
