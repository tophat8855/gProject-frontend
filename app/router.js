import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bart', function() {
    this.route('results', {path: '/bart/results'});
  });
  this.route('walk');
});

export default Router;
