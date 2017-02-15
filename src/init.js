$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer); 
    $('body').append(dancer.$node);

  });

  $('.lineUp').on('click', function(event) {
    var lineTop = 0;
    var lineLeft = 0;

    //Get the height
    var oneDancer = window.dancers[0];
    var height = Number(oneDancer.$node.css('height').slice(0, -2));

    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      currentDancer.setPosition(lineTop, lineLeft);
      lineTop += height;
    }

  });

  // check to see if click handler is registering to dancer class

  // want ch to load on document
  // attach clickhandler to dynamically generated 
  // need to add another perameter 

  $('body').on('click', '.dancer', function(event) {
    // find dancer's location
    var top = event.target.style['top'];
    var left = event.target.style['left'];
    var radius = 300;
    var jumpingDancers = [];

    var withinRadius = function (dLeft, dTop) {
      var result = Math.sqrt ( Math.pow((dLeft - left), 2) + Math.pow((dTop - top), 2) );
      if (result <= radius) {
        return true;
      }
      return false;
    };

    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      // if (withinRadius(currentDancer.left, currentDancer.top)) {
        // this.jumpTogether();
        jumpingDancers.push(currentDancer);
      // }
    }
    console.log("jumpingDancers = "+ jumpingDancers);

  });

});



















