import Ember from 'ember';
import { module, test} from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: New Trip Creation', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /trip/new', function(assert){
  visit('/trip/new');

  andThen(function() {
    assert.equal(currentPath(), 'trip.new');
  });
});

test('adding a BART leg', function(assert) {
  visit('/trip/new');
  click('#bart');

  andThen(function() {
    fillIn('#startBART', '16TH');
    fillIn('#endBART', '24TH');
    click('#calculate');
  });

  andThen(function() {
    var bartResult = $('.bart-miles').text().trim();
    assert.equal(bartResult, "Distance between stations: 0.90 miles. Emissions saved: 0.7 pounds of CO2");
  });
});

test('adding a walk leg', function(assert) {
  visit('/trip/new');
  click('#walk');

  andThen(function() {
    assert.equal(currentPath(), 'walk');
    fillIn('#startAddress', '1200 Park Ave. Emeryville, CA');
    fillIn('#endAddress', '2101 Webster Street, Oakland, CA');
    click('#calculate');
  });

  andThen(function() {
    assert.equal($('.walk-miles').text().trim(), "Distance walked: 3.4 km");
  });

});

test('adding a bike leg', function(assert) {
  visit('/trip/new');
  click('#bike');

  andThen(function() {
    assert.equal(currentPath(), 'bike');
    fillIn('#startAddress', '44 Tehama San Franciso, CA');
    fillIn('#endAddress', '543 Howard San Francisco, CA');
    click('#calculate');
  });

  andThen(function() {
    assert.equal($('.bike-miles').text().trim(), "Distance biked: 0.7 mi");
  });

});
