import Ember from 'ember';

export default Ember.Controller.extend({
  bikeSegments: Ember.computed.filterBy('model', 'modeIsBike'),
  bikeMiles: Ember.computed.mapBy('bikeSegments', 'distance'), //for total mapBy('model', 'distance')
  totalBike: Ember.computed.sum('bikeMiles'),

  //totalBike: Ember.computed.sum('bikeSegments.distance'),

  actions: {
    deleteLeg: function(leg) {
      var _this = this;
      this.store.find('leg', leg.id).then(function(leg) {
        leg.destroyRecord().then(function() {
          _this.transitionToRoute('leg');
        });
      });
    }
  },
});
