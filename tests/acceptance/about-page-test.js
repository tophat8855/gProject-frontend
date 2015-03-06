import Ember from 'ember';
import { module, test} from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: About Page', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /about', function(assert){
  visit('/about');

  andThen(function() {
    assert.equal(currentPath(), 'about');
  });
});
