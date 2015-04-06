import DS from 'ember-data';

export default DS.Model.extend({
  mode: DS.attr('string'),
  start_location: DS.attr('string'),
  end_location: DS.attr('string'),
  distance: DS.attr('number'),
  emissions: DS.attr('number'),
  route: DS.attr('string'),
  direction: DS.attr('string'),
  trip_id: DS.attr('number'),
  user_id: DS.attr('number'),
  created_at: DS.attr('date'),

  modeIsWalk: function() {
    return this.get('mode') === 'walk';
  }.property('mode'),

  modeIsBike: function() {
    return this.get('mode') === 'bike';

  }.property('mode'),

  modeIsBus: function() {
    return this.get('mode') === 'bus';
  }.property('mode'),

  modeIsBART: function() {
    return this.get('mode') === 'bart';
  }.property('mode')

});
