import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    signUp: function () {
      var email = this.get('email');
      var password = this.get('password');
      var self = this;

      var user = this.store.createRecord('user',
        {email: email,
         password: password});
      self.set('email', '');
      self.set('password', '');
      user.save().then(function () {
        this.get('session').authenticate('simple-auth-authenticator:devise', {
          identification: email,
          password: password
        });
        self.transitionToRoute('leg');
      }.bind(self));
    },
  }
});
