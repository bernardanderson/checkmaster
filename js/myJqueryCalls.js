
// Immediately Invoked JQuery Events
$(() => { 
  // Makes items with the "draggable" class draggable
  $(".draggable").draggable(); 
  
  // Sets the click event for the settings button to toggle the input box font settings
  $(".draggable").click( () => { 
    if (event.target.className.includes("settings-icon")) {
      $(event.currentTarget).children(".button-container").toggleClass("remove-view");
      $(event.currentTarget).children(".inputter").toggleClass("select-object");
    };
  });
});

Checkserver.insertElement(Checkserver.makeDragDivElement('payor'));
Checkserver.insertElement(Checkserver.makeDragDivElement('drawee'));
