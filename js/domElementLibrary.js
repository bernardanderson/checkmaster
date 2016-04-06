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

  domElementLibrary.buildAdditionalCheckDivs = (sentNumberOfChecks) => {

    for (let i = 2; i <= sentNumberOfChecks; i++) {
      let newSingleCheckDiv = Checkserver.buildElement("div", `check-${i}`, "", "", "");
      newSingleCheckDiv.innerHTML = $("#check-1").html();
      $("#check-area").append(newSingleCheckDiv);
    }
  },

// This builds a complete movable, text entry box.  It accepts a Title, an ID a starting location (in the form "left: #unit; top: #unit;"
//  and what text you want insidefor where it is on the DOM.  A special class can be added for those items that have special font needs
  domElementLibrary.addDraggableContentInputToDom = (sentElementObj) => {

    let draggableInputContainer = Checkserver.buildElement("div", sentElementObj.id, "draggable", {"style": sentElementObj.position[0]}, "");
    let inputContainerTitleBar = Checkserver.buildInputTitleBar(sentElementObj.containerTitle);
    let editableTextArea = Checkserver.buildElement("div", "", "blank-inputter", {"contenteditable":true, "style": sentElementObj.position[1]}, "");
    let textArea = Checkserver.buildElement("div", "", `inputter${sentElementObj.specialClass}`, {"style": sentElementObj.position[0]}, sentElementObj.internalText);
    
    if (sentElementObj.position.length === 3) {
      let editableTextArea2 = Checkserver.buildElement("div", "", "blank-inputter", {"contenteditable":true, "style": sentElementObj.position[2]}, "");
      textArea.appendChild(editableTextArea2);
      textArea.appendChild(editableTextArea);
      draggableInputContainer.appendChild(inputContainerTitleBar);
      draggableInputContainer.appendChild(textArea);
    } else {
      textArea.appendChild(editableTextArea);
      draggableInputContainer.appendChild(textArea);
      draggableInputContainer.appendChild(inputContainerTitleBar);
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
      draggableInputContainer.appendChild(inputContainerTitleBar);
      draggableInputContainer.appendChild(textArea);
    } else  {
      draggableInputContainer.appendChild(textArea);
      draggableInputContainer.appendChild(inputContainerTitleBar);
    };

    Checkserver.insertElementToCheckArea(draggableInputContainer);
  },
  
// Builds a less intrusive title bar with icons found on most input field 
  domElementLibrary.buildInputTitleBar = (sentTitle) => {

    let inputContainerTitleBar = Checkserver.buildElement("div", "", "title-container", "", "");
    let inputContainerTitle = Checkserver.buildElement("p", "", "info-font handle print-remove", "", sentTitle);
    let infoIcon = Checkserver.buildElement("img", "", "window-icon settings print-remove", {"src":"img/settings.png", "alt":"Settings Button"}, "");

    inputContainerTitleBar.appendChild(inputContainerTitle);
    inputContainerTitleBar.appendChild(infoIcon);

    return inputContainerTitleBar;
  },

// Inserts an element to the top of the body child tree
  domElementLibrary.insertElementToCheckArea = (sentElementBody) => $("#check-1").prepend(sentElementBody)

  return domElementLibrary;

})(Checkserver || {});