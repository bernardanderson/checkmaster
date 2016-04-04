// Immediately Invoked JQuery Events
$(() => { 
  // Makes items with the "draggable" class draggable
  $(".draggable").draggable( { handle: ".handle" }  );
  
  // Sets a click event on any .draggable item. Checks for clicks on the settings icon (toggles
  //  the settings menu visibility) and the delete icon (deletes the .draggable container)
  $(".draggable").click( (event) => { 
    event.stopPropagation();
    if (event.target.className.includes("settings")) {
      $(event.currentTarget).children(".button-container").toggleClass("make-view-perm");
      $(event.currentTarget).children(".title-container").toggleClass("make-view-perm");
      $(event.currentTarget).toggleClass("select-object").toggleClass("make-darker-perm");
    } else if (event.target.className.includes("delete")) {
      $(event.currentTarget).remove();
    };
  });

  // Sets an event on any .draggable element that shows the title & settings icons
  $(".draggable").bind("mouseover", (event) => {
    event.stopPropagation();
    $(event.currentTarget).children(".title-container").addClass("show-view");
    $(event.currentTarget).addClass("make-darker");
  });

  // Sets an event on any .draggable element that hides the title & settings icons
  $(".draggable").bind("mouseout", (event) => {
    event.stopPropagation();
    $(event.currentTarget).children(".title-container").removeClass("show-view");
    $(event.currentTarget).removeClass("make-darker");
  });

  // This binds a right click event to items in the body and disables the browser context menu
  //  on body element right clicks
  $("body").bind('contextmenu', (event) => {
    Checkserver.getTextSelection();
    event.preventDefault();
  });
});
