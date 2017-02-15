describe('breakDancer', function() {

  var breakDancer, clock, regularDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    breakDancer = new makeBreakDancer(10, 20, timeBetweenSteps);
    regularDancer = new makeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a different step function than Regular dancer', function() {    
    expect(regularDancer.step).to.not.equal(breakDancer.step);    
  });

});
