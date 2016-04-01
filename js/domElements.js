"use strict"

var Checkserver = (() => {

  var draggableDivType = { 
    payor: [
    '<div class="draggable" style="left: 100px;top: 100px;"><div id="payor-address" class="title-container">',
    '<p class="info-font handle">Payor Address</p>',
    '<div id="payor-setting" class="button-container remove-view">'
    ],

    drawee: [
    '<div class="draggable" style="left: 700px;top: 100px;"><div id="drawee-address" class="title-container">',
    '<p class="info-font handle">Drawee Address</p>',
    '<div id="drawee-setting" class="button-container remove-view">'
    ]

  }

  return {

    // Inserts an element to the top of the body child tree
    insertElement: (sentElementBody) => $("body").prepend(sentElementBody),

    // Builds a draggable div textarea element based on the category sent to it
    makeDragDivElement: (sentCategory) => {

      let dragInputDiv = 
        `
        ${Checkserver.getDraggableDivType()[sentCategory][0]}
        ${Checkserver.getDraggableDivType()[sentCategory][1]}
        <img class="window-icon delete" src="img/delete.png" alt="">
        <img class="window-icon settings" src="img/settings.png" alt="">
        </div>
        <textarea class="inputter"></textarea>
        ${Checkserver.getDraggableDivType()[sentCategory][2]}
        <p class="button-row font">Font</p>
        <p class="button-row font-size">Font Size</p>
        <p class="button-row justification">Justification</p>
        </div></div>`

      return dragInputDiv;
    },

    // Allows access to the private array/object "draggableDivType"
    getDraggableDivType: () => draggableDivType,

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