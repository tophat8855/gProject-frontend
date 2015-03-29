import Ember from 'ember';

export default Ember.Controller.extend({
  bartShowing: false,

  actions: {
    showBART: function() {
      console.log("sup");
      this.set('bartShowing', true);
    }
  }
});
