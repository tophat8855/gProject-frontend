import Ember from 'ember';
import Env from '../config/environment';

export default Ember.Controller.extend({
  selectedStartStation: null,
  selectedEndStation:null,
  result: "",
  stations: [
    {stationName: "", id: ""},
    {stationName: "12th St. Oakland City Center", id: "12TH"},
    {stationName: "16th St. Mission (SF)", id: "16TH"},
    {stationName: "19th St. Oakland", id: "19TH"},
    {stationName: "24th St. Mission (SF)", id: "24TH"},
    {stationName: "Ashby (Berkeley)", id: "ASHB"},
    {stationName: "Balboa Park (SF)", id: "BALB"},
    {stationName: "Bay Fair (San Leandro)", id: "BAYF"},
    {stationName: "Civic Center/UN Plaza (SF)", id: "CIVC"},
    {stationName: "Colma", id: "COLM"},
    {stationName: "Coliseum", id: "COLS"},
    {stationName: "Oakland International Airport", id: "OAC"},
    {stationName: "Concord", id: "CONC"},
    {stationName: "Castro Valley", id: "CVLY"},
    {stationName: "Daly City", id: "DALY"},
    {stationName: "Downtown Berkeley", id: "DBRK"},
    {stationName: "El Cerrito del Norte", id: "DELN"},
    {stationName: "Dublin/Pleasanton", id: "DUBL"},
    {stationName: "Embarcadero (SF)", id: "EMBR"},
    {stationName: "Fremont", id: "FRMT"},
    {stationName: "Fruitvale (Oakland)", id: "FTVL"},
    {stationName: "Glen Park (SF)", id: "GLEN"},
    {stationName: "Hayward", id: "HAYW"},
    {stationName: "Lafayette", id: "LAFY"},
    {stationName: "Lake Merritt (Oakland)", id: "LAKE"},
    {stationName: "MacArthur (Oakland)", id: "MACR"},
    {stationName: "Millbrae", id: "MLBR"},
    {stationName: "Mongomery St. (SF)", id: "MONT"},
    {stationName: "North Berkeley", id: "NBRK"},
    {stationName: "North Concord/Martinez", id: "NCON"},
    {stationName: "Orinda", id: "ORIN"},
    {stationName: "Pleasant Hill/Contra Costa Centre", id: "PHIL"},
    {stationName: "Pittsburg/Bay Point", id: "PITT"},
    {stationName: "El Cerrito Plaza", id: "PLZA"},
    {stationName: "Powell St. (SF)", id: "POWL"},
    {stationName: "Richmond", id: "RICH"},
    {stationName: "Rockridge (Oakland)", id: "ROCK"},
    {stationName: "San Leandro", id: "SANL"},
    {stationName: "San Bruno", id: "SBRN"},
    {stationName: "San Francisco Int'l Airport", id: "SFIA"},
    {stationName: "South Hayward", id: "SHAY"},
    {stationName: "South San Francisco", id: "SSAN"},
    {stationName: "Union City", id: "UCTY"},
    {stationName: "Walnut Creek", id: "WCRK"},
    {stationName: "West Dublin/Pleasanton", id: "WDUB"},
    {stationName: "West Oakland", id: "WOAK"},
  ],
  actions: {
    calculateBartMiles: function(startStation, endStation){
      var distance;
      var emissions;
      var _this = this;

      Ember.$.getJSON(Env.ApiURL + '/bart?start=' + startStation + '&end=' + endStation).then(function (results) {
        Ember.run(function() {
          distance = results.stations[0].distance;
          emissions = results.stations[0].emissions;


          _this.set('distance', distance);
          _this.set('emissions', emissions);
        });
      });
    },

    saveBART: function(startStation, endStation, calcDistance, calcEmissions) {
      var mode = 'bart';
      var startLocation = this.getStationName(startStation);
      var endLocation = this.getStationName(endStation);
      var distance = calcDistance;
      var emissions = calcEmissions;
      var bart = this.store.createRecord('leg', {mode: mode, start_location: startLocation,
        end_location: endLocation, distance: distance, emissions: emissions});
      bart.save();
      this.transitionToRoute('leg');
    },
  },

  getStationName: function(id) {
    for (var i = 0; i < this.stations.length; i++) {
      if (this.stations[i].id === id){
        return this.stations[i].stationName;
      }
    }
  }
});
