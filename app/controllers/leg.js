import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteLeg: function(leg) {
      var _this = this;
      this.store.find('leg', leg.id).then(function(leg) {
        leg.destroyRecord().then(function() {
          _this.transitionToRoute('leg');
        });
      });
    }
  }
});
