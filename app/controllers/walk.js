import Ember from 'ember';

export default Ember.Controller.extend({
  startWalk: null,
  endWalk: null,
  result: "",
  actions: {
    calculateWalkMiles: function(start, end) {
      var distance;
      var _this = this;

      Ember.$.getJSON('http://localhost:3000/walk?start=' + start + '&end=' + end).then(function (results) {
        distance = results["distance"]["text"];

        var fancyResult = "Distance walked: " + distance;

        _this.set('result', fancyResult);
      });
    }
  }
});
