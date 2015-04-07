import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import ENV from '../config/environment';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  loginError: false,

  ENV: function() {
    return ENV;
  }.property()
});
