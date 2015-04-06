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
  busMiles: Ember.computed.mapBy('busSegments', 'distance'),
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

  milesChartData: function() {
    var walk = this.get('totalWalk');
    var bike = this.get('totalBike');
    var bus = this.get('totalBus');
    var bart = this.get('totalBART');

    var data = [
    {
      value: walk,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Walk"
    },
    {
      value: bike,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Bike"
    },
    {
      value: bus,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Bus"
    },
    {
      value: bart,
      color:"#949FB1",
      highlight: "#A8B3C5",
      label: "BART"
    },
  ];
    return data;
  }.property('miles'),

  emissionsChartData: function() {
    var walk = this.get('totalWalkEms');
    var bike = this.get('totalBikeEms');
    var bus = this.get('totalBusEms');
    var bart = this.get('totalBartEms');

    var emdata = [
    {
      value: walk,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Walk"
    },
    {
      value: bike,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Bike"
    },
    {
      value: bus,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Bus"
    },
    {
      value: bart,
      color:"#949FB1",
      highlight: "#A8B3C5",
      label: "BART"
    },
  ];
    return emdata;
  }.property('ems')
});
