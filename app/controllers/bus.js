import Ember from 'ember';

export default Ember.Controller.extend({
  startBus: null,
  endBus: null,
  route: null,
  direction: null,
  result: '',
  directions: [
    {lengthyDirection: "", id: ""},
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

      Ember.$.getJSON('http://localhost:300/bus?start=' + startBus + '&end=' + endBus + '&route=' + route + '&direction=' + direction).then(function (results) {
        Ember.run(function() {
          //distance = results
          //add code here once you have the API returning the correct JSON
        });
      });
    }
  }
});
