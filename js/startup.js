"use strict"

// Adds the Input Box Areas to the DOM
//  Loops through the Build Elements which is an object (key: {key: [array]} pairs)
//  The .apply allows you to use an array as the list of parameters for a function call

$(document).ready( () => {
  
  Checkserver.setNumberOfChecks(3);
  Checkserver.setCurrentCheckNumber(1001);

  Checkserver.xhrElementPullAndParse();

});

