"use strict"

var Checkserver = (() => {

  return {

    insertElement: (sentElement) => { 
      $("body").prepend(sentElement);
    },

    makeDragDiv: () => {
      let dragInputDiv = `<div id="" class="draggable dragging">
      <div class="title-container">
      <p class="info-font">User Address</p>
      <img id="settings" class="settings-icon" src="img/settings.png" alt="">
      </div>
      <textarea id="user-address" class="inputter"></textarea>
      <div id="btn-container" class="button-container remove-view">
      <p class="button-row">Font</p>
      <p class="button-row">Font Size</p>
      </div></div>`
      return dragInputDiv;
    }


  };


})();