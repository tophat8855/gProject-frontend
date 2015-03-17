import Ember from 'ember';

export default Ember.Controller.extend({
  startBike: null,
  endWalk: null,
  result: '',
  actions: {
    calculateBikeMiles: function(start, end) {
      var distance;
      var emissions;
      var _this = this;

      return Ember.$.getJSON('http://localhost:3000/bike?start=' + start + '&end=' + end).then(function (results) {
        Ember.run(function() {
          distance = results["distance"]["text"];
          var floatDistance = parseFloat(distance);
          emissions = (floatDistance * 0.887).toString().concat(' pounds of CO2');
          _this.set('distance', distance);
          _this.set('emissions', emissions);

        });
      });
    }
  }
});
