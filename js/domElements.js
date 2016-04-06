"use strict"

var Checkserver = (() => {

// This is the list of elements to be built.  They should be in the form:
//  key: inputtype: ["Title of Container", "ID", "size in the form "left: #unit; top: #unit;", "Special Text Inside container", "Special Class"]
  let remoteElementParams;

  return {

    xhrElementPullAndParse: () => {
      let checkElements = new XMLHttpRequest();
      checkElements.addEventListener("load", Checkserver.parseJsonElements);
      checkElements.open("GET", "json/elements.json");
      checkElements.send();
    },

    parseJsonElements: (event) => {
      remoteElementParams = JSON.parse( event.target.responseText ).domElements;
      Checkserver.buildChecks();
    },

    buildChecks: () => {
      for (let keys in Checkserver.getElementParams()) {
        
        let currentElementObject = Checkserver.getElementParams()[keys];
        
        if (currentElementObject.inputType === "blankInput") {
            Checkserver.addDraggableBlankInputToDom(currentElementObject);
        } else if (currentElementObject.inputType === "contentInput") {
            Checkserver.addDraggableContentInputToDom(currentElementObject);
        };
      };
    },

    // Allows access to the private array/object "draggableDivType"
    // getElementParams: () => elementParams,
    getElementParams: () => remoteElementParams,

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