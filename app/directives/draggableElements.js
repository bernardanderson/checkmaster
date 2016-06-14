// This directive allows draggability, borrowed and modified from:
//  https://docs.angularjs.org/guide/directive#creating-a-directive-that-adds-event-listeners
app.directive('dragme', ['$document', function($document) {
  return {
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.on('mousedown', function(event) {
        // This prevents default dragging of selected content but I commented it out
        //  because it blocks the editing of contentedited elements
        // event.preventDefault();

        console.log(event)

        startX = event.pageX - x;
        startY = event.pageY - y;
        console.log("startX: ", startX, "startY: ", startY);
        console.log("event.pageX: ", event.pageX, "event.pageY: ", event.pageY);
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;

        // Keeps the objects from moving off screen to the left
        x < 0 ? x = 0 : x = x;
        y < 0 ? y = 0 : y = y;
// -----------------
      scope.$apply(function() {
        return scope.$parent.events.push({
          mousemove: {
            x: x,
            y: y,
            pageX: event.pageX,
            pageY: event.pageY,
            startY: startY,
            startX: startX
          }
        });
      });
// -----------------
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);