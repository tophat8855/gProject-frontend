import Ember from 'ember';

export default Ember.Controller.extend({
  startBike: null,
  endWalk: null,
  result: '',
  actions: {
    calculateBikeMiles: function(start, end) {
      var distance;
      var _this = this;

      Ember.$.getJSON('http://localhost:3000/bike?start=' + start + '&end=' + end).then(function (results) {
        distance = results["distance"]["text"];

        var fancyResult = "Distance biked: " + distance;

        _this.set('result', fancyResult);
      });
    }
  }
});
