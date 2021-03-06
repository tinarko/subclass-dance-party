var makeBreakDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  // this = Object.create(makeBlinkyDancer.prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="dancer breakDancer"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = this.step;
  
  // this.oldStep = makeDancer.prototype.step;


  this.setPosition(top, left);
  // return this;

};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBlinkyDancer;
makeBreakDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  if (!this.oldStep) {
    this.oldStep = makeDancer.prototype.step;
  }
  
  this.oldStep();

  this.timeBetweenSteps = 1;

  // this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (!this.degree) {
    this.degree = 1;
  } else {
    var value = 'rotate(' + this.degree + 'deg)';
    this.$node.css('transform', value);
    this.degree -= 2;
    
  }
  
};



