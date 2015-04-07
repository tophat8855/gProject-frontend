import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  startBus: null,
  endBus: null,
  route: null,
  direction: null,
  result: '',
  directions: [
    {lengthyDirection: "Direction", id: ""},
    {lengthyDirection: "North", id: "N"},
    {lengthyDirection: "South", id: "S"},
    {lengthyDirection: "East", id: "E"},
    {lengthyDirection: "West", id: "W"},
    {lengthyDirection: "Clockwise", id: "CL"},
    {lengthyDirection: "Counter-clockwise", id: "CCL"}
  ],
  actions: {
    calculateBusMiles: function(startBus, endBus, route, direction) {
      var distance;
      var emissions;
      var _this = this;

      Ember.$.getJSON(ENV.ADAPTER_URL + '/bus?start=' + startBus + '&end=' + endBus + '&route=' + route + '&direction=' + direction).then(function (results) {
        Ember.run(function() {
          distance = results.bus[0].distance;
          console.log(distance);
          emissions = results.bus[0].emissions;//.concat(' pounds of CO2');
          console.log(emissions);
          _this.set('distance', distance);
          _this.set('emissions', emissions);
        });
      });
    },

    saveBus: function(startBus, endBus, route, direction, calcDistance, calcEmissions) {
      var mode = 'bus';
      var startLocation = startBus;
      var endLocation = endBus;
      var busRoute = route;
      var busDirection = direction;
      var distance = calcDistance;
      var emissions = calcEmissions;
      var bus = this.store.createRecord('leg', {mode: mode, start_location: startLocation,
        end_location: endLocation, route: busRoute, direction: busDirection,
        distance: distance, emissions: emissions});
      bus.save();
      this.transitionToRoute('leg');
    }
  }
});
