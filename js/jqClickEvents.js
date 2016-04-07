// All the DOM click events 
var Checkserver = ((domClickEvents) => {

  domClickEvents.addAllClickEvents = () => {

    // Makes items with the "draggable" class draggable
    $(".draggable").draggable( { handle: ".handle" }  );
    
    // Sets a click event on any .draggable item. Checks for clicks on the settings icon
    $(".draggable").click( (event) => { 
      event.stopPropagation();
      if (event.target.className.includes("settings")) {
        $("#nav-content").html(event.currentTarget.id);
      };
    });

    // Sets an event on any .draggable element that shows the title & settings icons
    $(".draggable").bind("mouseover", (event) => {
      event.stopPropagation();
      $(event.currentTarget).children(".title-container").addClass("show-view");
    });

    // Sets an event on any .draggable element that hides the title & settings icons
    $(".draggable").bind("mouseout", (event) => {
      event.stopPropagation();
      $(event.currentTarget).children(".title-container").removeClass("show-view");
    });

    // This binds a right click event to items in the body and disables the browser context menu
    //  on body element right clicks
    $("body").bind('contextmenu', (event) => {
      Checkserver.getTextSelection();
      event.preventDefault();
    });
  };

  return domClickEvents;

})(Checkserver || {});