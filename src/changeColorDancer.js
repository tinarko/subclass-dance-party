var makeChangeColorDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  // this = Object.create(makeBlinkyDancer.prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="dancer colorDancer"></span>');

  this.colors = ['grayscale', 'contrast', 'brightness', 'blur', 'invert', 'herotate', 'sepia'];

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = this.step;
  
  // this.oldStep = makeDancer.prototype.step;

  // *** Q: is there a way for us to not have to rewrite this.setPosition code below? it seems like
  // if we don't rewrite this line, that the position does not fallback to dancer since we are overwriting
  // it in the this.$node = ... declaration above
  this.setPosition(top, left);

  // return this;
};

makeChangeColorDancer.prototype = Object.create(makeDancer.prototype);
makeChangeColorDancer.prototype.constructor = makeBlinkyDancer;
makeChangeColorDancer.prototype.step = function() {

  // call the old version of step at the beginning of any call to this new version of step
  if (!this.oldStep) {
    this.oldStep = makeDancer.prototype.step;
  }
  
  this.oldStep();

  // this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  if (!this.colors) {
    this.$node.addClass('sepia');
    this.currentColor = 'sepia'; 
  } else {
    this.$node.removeClass(this.currentColor);

    var index = Math.floor(Math.random() * this.colors.length);
    this.currentColor = this.colors[index];
    
    this.$node.addClass(this.currentColor);
  }

};


