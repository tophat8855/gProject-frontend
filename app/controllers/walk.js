import Ember from 'ember';

export default Ember.Controller.extend({
  startWalk: null,
  endWalk: null,
  result: "",
  actions: {
    calculateWalkMiles: function(start, end) {
      var _this = this;
      var url = 'http://localhost:3000/walk?start=' + start + '&end=' + end;

      return Ember.$.getJSON(url).then(function (results) {
        Ember.run(function() {
          var distance = results["distance"]["text"];

          _this.set('distance', distance);
        });
      });
    }
  }
});
