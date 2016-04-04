"use strict"

var Checkserver = ((domElementLibrary) => {

// This will build a new element. It accepts: (ElementType, ID, Classes, Attributes, TextLabel) 
//  Send the element-type and ID as strings, class(es) as a string (in the form "class1 class2")
//  and attributes as an object of key:value pairs {"key1": "value1", "key2": "value2"} followed
//  by a text label as a string.
  domElementLibrary.buildElement = (sentElementType, sentId, sentClasses, sentAttributes, sentTextLabel) => {

    let newElement = document.createElement(sentElementType);
    
    newElement.id = (sentId === "") ? "" : sentId;
    newElement.className = (sentClasses === "") ? "" : sentClasses;

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

// This builds a complete movable, text entry box.  It accepts a Title, an ID a starting location (in the form "left: #unit; top: #unit;"
//  and what text you want insidefor where it is on the DOM.  A special class can be added for those items that have special font needs
  domElementLibrary.addDraggableInputLowerTitleToDom = (sentTitle, sentId, sentLocation, sentTextNode, sentSpecialClass) => {

    let draggableInputContainer = Checkserver.buildElement("div", sentId, "draggable", {"style": sentLocation}, "");
    let inputContainerTitleBar = Checkserver.buildInputBar(sentTitle);
    let textArea = Checkserver.buildElement("div", "", `inputter${sentSpecialClass}`, {"contenteditable":true}, sentTextNode);
    let settingsBar = Checkserver.buildSettingsBar();

    draggableInputContainer.appendChild(textArea);
    draggableInputContainer.appendChild(inputContainerTitleBar);
    draggableInputContainer.appendChild(settingsBar);

    Checkserver.insertElement(draggableInputContainer);
  },

// Builds the general input box found on most input field 
  domElementLibrary.buildInputBar = (sentTitle) => {

    let inputContainerTitleBar = Checkserver.buildElement("div", "", "title-container remove-view", "", "");
    let inputContainerTitle = Checkserver.buildElement("p", "", "info-font handle print-remove", "", sentTitle);
    let infoIcon = Checkserver.buildElement("img", "", "window-icon info print-remove", {"src":"img/info.png", "alt":"Info Button"}, "");
    let deleteIcon = Checkserver.buildElement("img", "", "window-icon delete print-remove", {"src":"img/delete.png", "alt":"Delete Button"}, "");
    let settingsIcon = Checkserver.buildElement("img", "", "window-icon settings print-remove", {"src":"img/settings.png", "alt":"Settings Button"}, "");

    inputContainerTitleBar.appendChild(inputContainerTitle);
    inputContainerTitleBar.appendChild(deleteIcon);
    inputContainerTitleBar.appendChild(settingsIcon);
    inputContainerTitleBar.appendChild(infoIcon);

    return inputContainerTitleBar;
  },

// Builds the general settings bar found on every input field 
  domElementLibrary.buildSettingsBar = () => {
    let settingsBar = Checkserver.buildElement("div", "", "button-container remove-view print-remove", "", "");

    let settinsBarBtn1 = Checkserver.buildElement("p", "", "button-row font", "", "Font", "");
    let settinsBarBtn2 = Checkserver.buildElement("p", "", "button-row font-size", "", "Font Size", "");
    let settinsBarBtn3 = Checkserver.buildElement("p", "", "button-row justification", "", "Justification", "");

    settingsBar.appendChild(settinsBarBtn1);
    settingsBar.appendChild(settinsBarBtn2);
    settingsBar.appendChild(settinsBarBtn3);

    return settingsBar;
  },

  // Inserts an element to the top of the body child tree
  domElementLibrary.insertElement = (sentElementBody) => $("body").prepend(sentElementBody)

  return domElementLibrary;

})(Checkserver || {});