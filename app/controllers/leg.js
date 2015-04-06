import Ember from 'ember';

export default Ember.Controller.extend({
  walkSegments: Ember.computed.filterBy('model', 'modeIsWalk'),
  walkMiles: Ember.computed.mapBy('walkSegments', 'distance'),
  walkEms: Ember.computed.mapBy('walkSegments', 'emissions'),
  totalWalkEms: Ember.computed.sum('walkEms'),
  totalWalk: Ember.computed.sum('walkMiles'),

  bikeSegments: Ember.computed.filterBy('model', 'modeIsBike'),
  bikeMiles: Ember.computed.mapBy('bikeSegments', 'distance'),
  bikeEms: Ember.computed.mapBy('bikeSegments', 'emissions'),
  totalBikeEms: Ember.computed.sum('bikeEms'),
  totalBike: Ember.computed.sum('bikeMiles'),

  busSegments: Ember.computed.filterBy('model', 'modeIsBus'),
  busMiles: Ember.computed.mapBy('busSegments', 'distance'), //for total mapBy('model', 'distance')
  busEms: Ember.computed.mapBy('busSegments', 'emissions'),
  totalBusEms: Ember.computed.sum('busEms'),
  totalBus: Ember.computed.sum('busMiles'),

  bartSegments: Ember.computed.filterBy('model', 'modeIsBART'),
  bartMiles: Ember.computed.mapBy('bartSegments', 'distance'),
  bartEms: Ember.computed.mapBy('bartSegments', 'emissions'),
  totalBartEms: Ember.computed.sum('bartEms'),
  totalBART: Ember.computed.sum('bartMiles'),

  allEms: Ember.computed.mapBy('model', 'emissions'),
  totalEmissions: Ember.computed.sum('allEms'),
  allMiles: Ember.computed.mapBy('model', 'distance'),
  totalMiles: Ember.computed.sum('allMiles'),

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
