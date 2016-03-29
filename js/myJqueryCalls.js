
// Immediately Invoked JQuery Events
$(() => { 
          // Sets the click event for the settings button to toggle the input box font settings
          $(".draggable").draggable(); 
          
          // Sets the click event for the settings button to toggle the input box font settings
          $("#settings").click( () => { $("#btn-container").toggleClass("remove-view") });
        }
);


Checkserver.insertElement(Checkserver.makeDragDiv());
Checkserver.insertElement(Checkserver.makeDragDiv());