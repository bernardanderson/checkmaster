"use strict"

// Adds the Input Box Areas to the DOM
//  Loops through the Build Elements which is an object (key: {key: [array]} pairs)
//  The .apply allows you to use an array as the list of parameters for a function call
for (let keys in Checkserver.getElementParams()) {
  for (let inputType in Checkserver.getElementParams()[keys]) {
    if (inputType === "blankInput") {
      let currentKeyArray = Checkserver.getElementParams()[keys][inputType];
      Checkserver.addDraggableBlankInputToDom.apply(this, currentKeyArray);
    } else if (inputType === "contentInput") {
        let currentKeyArray = Checkserver.getElementParams()[keys][inputType];
        Checkserver.addDraggableContentInputToDom.apply(this, currentKeyArray);
    };
  };
};
