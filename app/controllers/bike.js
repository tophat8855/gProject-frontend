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
    },

    saveBike: function(start, end, calcDistance, calcEmissions) {
      var mode = 'bike';
      var startLocation = start;
      var endLocation = end;
      var distance = calcDistance;
      var emissions = calcEmissions;
      var bike = this.store.createRecord('leg', {mode: mode, start_location: startLocation,
        end_location: endLocation, distance: distance, emissions: emissions});
      bike.save();
    }
  }
});
