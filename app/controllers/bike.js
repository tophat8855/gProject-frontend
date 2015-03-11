import Ember from 'ember';

export default Ember.Controller.extend({
  startBike: null,
  endWalk: null,
  result: '',
  actions: {
    calculateBikeMiles: function(start, end) {
      var distance;
      var _this = this;

      return Ember.$.getJSON('http://localhost:3000/bike?start=' + start + '&end=' + end).then(function (results) {
        Ember.run(function() {
          distance = results["distance"]["text"];

          _this.set('distance', distance);
        });
      });
    }
  }
});
