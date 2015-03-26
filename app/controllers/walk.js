import Ember from 'ember';

export default Ember.Controller.extend({
  startWalk: null,
  endWalk: null,
  result: "",
  actions: {
    calculateWalkMiles: function(start, end) {
      var _this = this;
      var emissions;
      var distance;

      var url = 'http://localhost:3000/walk?start=' + start + '&end=' + end;

      return Ember.$.getJSON(url).then(function (results) {
        Ember.run(function() {
          distance = results["distance"]["text"];
          var floatDistance = parseFloat(distance);
          emissions = (floatDistance * 0.887).toString().concat(' pounds of CO2');

          _this.set('distance', distance);
          _this.set('emissions', emissions);
        });
      });
    },

    saveWalk: function(start, end, calcDistance, calcEmissions) {
      var mode = 'walk';
      var startLocation = start;
      var endLocation = end;
      var distance = calcDistance;
      var emissions = calcEmissions;
      var walk = this.store.createRecord('leg', {mode: mode, start_location: startLocation,
        end_location: endLocation, distance: distance, emissions: emissions});
      walk.save();
    }
  }
});
