// Adds the Input Box Areas to the DOM
//  Loops through the Build Elements which is an object (key:[array] pairs)
//  The .apply allows you to use an array as the list of parameters for a function call
for (let keys in Checkserver.getElementParams()) {
  let currentKeyArray = Checkserver.getElementParams()[keys];
  Checkserver.addDraggableInputLowerTitleToDom.apply(this, currentKeyArray);
};
