"use strict"

var Checkserver = (() => {

  var draggableDivType = { 
    payor: [
    '<div id="payor-address" class="title-container">',
    '<p class="info-font handle">Payor Address</p>',
    '<div id="payor-setting" class="button-container remove-view">'
    ],

    drawee: [
    '<div id="drawee-address" class="title-container">',
    '<p class="info-font handle">Drawee Address</p>',
    '<div id="drawee-setting" class="button-container remove-view">'
    ]

  }

  return {

    insertElement: (sentElementBody) => $("body").prepend(sentElementBody),

    makeDragDivElement: (sentCategory) => {

      let dragInputDiv = 
        `<div class="draggable">
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

    getDraggableDivType: () => draggableDivType,

  };


})();