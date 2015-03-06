import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bart');
  this.route('walk');
  this.route('bike');
  this.route('about');
  this.resource('trip', function() {
    this.route('new');
  });
  this.resource('leg', function() {});
});

export default Router;
