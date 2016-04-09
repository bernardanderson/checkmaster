"use strict"

var Checkserver = (() => {

// This is the list of check elements to be built.  They should be in the form:
//  key: inputtype: ["Title of Container", "ID", "size in the form "left: #unit; top: #unit;", "Special Text Inside container", "Special Class"]
  let remoteElementParams;

// This holds the number of checks in the template
  let numberOfChecks;

// This holds the starting check number of checks in the template
  let startingCheckNumber;

  return {

    // Grabs the inital json data AND PARSES IT!  Upon completion it calls the check building function
    xhrElementPullAndParse: () => {
      $.ajax({
        method: "GET",
        url: "json/elements.json",
        success: Checkserver.buildChecks
      });
    },

    // The main function which builds the master check divs, builds the master check, copies the master to the other
    //  checks in the template, and assigns the event listeners. 
    buildChecks: (sentCheckElements) => {

      Checkserver.buildCheckDivs(Checkserver.getNumberOfChecks());

      remoteElementParams = sentCheckElements.domElements;

      for (let keys in Checkserver.getElementParams()) {
        
        let currentElementObject = Checkserver.getElementParams()[keys];
        
        if (currentElementObject.inputType === "blankInput") {
            Checkserver.addDraggableBlankInputToDom(currentElementObject);
        } else if (currentElementObject.inputType === "contentInput") {
            Checkserver.addDraggableContentInputToDom(currentElementObject);
        };
      };


      Checkserver.copyChecksToDivs(numberOfChecks);

      Checkserver.updateCheckNumbers();

      Checkserver.updateElementIDsClasses();

      Checkserver.addAllClickEvents();

    },

    // This changes the check number for the current list of checks and updates both the check number
    //  in the upper right but also the MICR check number.
    updateCheckNumbers: () => {
        
      $("#check-num .inputter").each( function() {
        let thisCheckNumber = Checkserver.getCurrentCheckNumber()
        $(this).html("No. " + thisCheckNumber);

        let newMICRCheckNumber = "O" + "0".repeat(6-thisCheckNumber.toString().length)+thisCheckNumber+"O";

        let newMICRString = newMICRCheckNumber + $(".ttfont").html().slice(8);

        $(this).parent().siblings("[id*='routing-number']").children(".ttfont").html(newMICRString);
      });
    },

    // Once a check element is added to the DOM, the func goes into each check and adds to each top
    //  level child and check container ID as a class and appends the digit of the check container
    //  to the ID of the first child.
    updateElementIDsClasses: () => {

      $("#check-area").children().children().each( function() {

        let parentID = $(this).parent().attr("id");
        let parentIDNumber = "-" + parentID.slice(-1);
        $(this).attr("id", $(this).attr("id")+parentIDNumber);
        $(this).addClass(parentID);

      });
    },

    // Allows access to the private array/object "draggableDivType"
    // getElementParams: () => elementParams,
    getElementParams: () => remoteElementParams,

    // Sets the number of checks in the current template
    setNumberOfChecks: (sentNumberOfChecks) => numberOfChecks = sentNumberOfChecks,

    // Returns the number of checks that are in the current template
    getNumberOfChecks: () => numberOfChecks,

    setCurrentCheckNumber: (sentCurrentCheckNumber) => startingCheckNumber = sentCurrentCheckNumber,

    // Returns the currently counted check number from the check number and increments it by one
    getCurrentCheckNumber: () => startingCheckNumber++,

    // Isolates and returns selected text
    getTextSelection: () => {
      let selectedText = "";
      if (document.getSelection) {
        selectedText = document.getSelection().toString();
      };

      return selectedText;
    }
  };

})();