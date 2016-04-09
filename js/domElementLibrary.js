"use strict"

var Checkserver = ((domElementLibrary) => {

// This will build a new element. It accepts: (ElementType, ID, Classes, Attributes, TextLabel) 
//  Send the element-type and ID as strings, class(es) as a string (in the form "class1 class2")
//  and attributes as an object of key:value pairs {"key1": "value1", "key2": "value2"} followed
//  by a text label as a string.
  domElementLibrary.buildElement = (sentElementType, sentId, sentClasses, sentAttributes, sentTextLabel) => {

    let newElement = document.createElement(sentElementType);
    
    if (sentId !== "") newElement.id = sentId;
    if (sentClasses !== "") newElement.className = sentClasses;

    if (sentAttributes !== "") {
      for (var key in sentAttributes) {
        newElement.setAttribute(key, sentAttributes[key]);
      };
    };

    if (sentTextLabel !== "") {
      let textContent = document.createTextNode(sentTextLabel);
      newElement.appendChild(textContent);
    };

    return newElement;
  },

  domElementLibrary.buildCheckDivs = (sentNumberOfChecks) => {

    for (let i = 1; i <= sentNumberOfChecks; i++) {
      let newSingleCheckDiv = Checkserver.buildElement("div", `check-${i}`, "", "", "");
      $("#check-area").append(newSingleCheckDiv);
    }
  },

// This builds a complete movable, text entry box.  It accepts a Title, an ID a starting location (in the form "left: #unit; top: #unit;"
//  and what text you want insidefor where it is on the DOM.  A special class can be added for those items that have special font needs
  domElementLibrary.addDraggableContentInputToDom = (sentElementObj) => {

    let draggableInputContainer = Checkserver.buildElement("div", sentElementObj.id, "draggable", {"style": sentElementObj.position[0]}, "");
    let inputContainerTitleBar = Checkserver.buildInputTitleBar(sentElementObj.containerTitle);
    let editableTextArea = Checkserver.buildElement("div", "", "blank-inputter input-1", {"contenteditable":true, "style": sentElementObj.position[1]}, "");
    let textArea = Checkserver.buildElement("div", "", `inputter${sentElementObj.specialClass}`, {"style": sentElementObj.position[0]}, sentElementObj.internalText);
    
    if (sentElementObj.position.length === 3) {
      let editableTextArea2 = Checkserver.buildElement("div", "", "blank-inputter input-2", {"contenteditable":true, "style": sentElementObj.position[2]}, "");
      $(textArea).append(editableTextArea).append(editableTextArea2)
      $(draggableInputContainer).append(inputContainerTitleBar).append(textArea);
    } else {
      $(textArea).append(editableTextArea);
      $(draggableInputContainer).append(textArea).append(inputContainerTitleBar);
    };

    Checkserver.insertElementToCheckArea(draggableInputContainer);
  },

// This builds a complete movable, text entry box.  It accepts a Title, an ID a starting location (in the form "left: #unit; top: #unit;"
//  and what text you want insidefor where it is on the DOM.  A special class can be added for those items that have special font needs
  domElementLibrary.addDraggableBlankInputToDom = (sentElementObj) => {

    let draggableInputContainer = Checkserver.buildElement("div", sentElementObj.id, "draggable", {"style": sentElementObj.position}, "");
    let inputContainerTitleBar = Checkserver.buildInputTitleBar(sentElementObj.containerTitle);
    let textArea = Checkserver.buildElement("div", "", `inputter${sentElementObj.specialClass}`, {"contenteditable":true}, sentElementObj.internalText);

    if (sentElementObj.id === "check-num") {
      $(draggableInputContainer).append(inputContainerTitleBar).append(textArea);
    } else  {
      $(draggableInputContainer).append(textArea).append(inputContainerTitleBar);
    };

    Checkserver.insertElementToCheckArea(draggableInputContainer);
  },
  
// Builds a less intrusive title bar with icons found on most input field 
  domElementLibrary.buildInputTitleBar = (sentTitle) => {

    let inputContainerTitleBar = Checkserver.buildElement("div", "", "title-container", "", "");
    let inputContainerTitle = Checkserver.buildElement("p", "", "info-font handle print-remove", "", sentTitle);
    let infoIcon = Checkserver.buildElement("img", "", "window-icon settings print-remove", {"src":"img/settings.png", "alt":"Settings Button"}, "");

    $(inputContainerTitleBar).append(inputContainerTitle).append(infoIcon);

    return inputContainerTitleBar;
  },

// Inserts an element to the current master check div
  domElementLibrary.insertElementToCheckArea = (sentElementBody) => $("#check-1").append(sentElementBody),

// Makes multiple copies of the master "check-1" div depending on the number of checks in the template
  domElementLibrary.copyChecksToDivs = (sentNumberOfChecks) => {

    for (let i = 2; i <= sentNumberOfChecks; i++) {
      $(`#check-${i}`).html($("#check-1").html());
    };
  }

  return domElementLibrary;

})(Checkserver || {});