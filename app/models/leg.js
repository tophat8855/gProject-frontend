import DS from 'ember-data';

export default DS.Model.extend({
  mode: DS.attr('string'),
  start_location: DS.attr('string'),
  end_location: DS.attr('string'),
  distance: DS.attr('string'),
  emissions: DS.attr('string'),
  route: DS.attr('string'),
  direction: DS.attr('string'),
  trip_id: DS.attr('number'),
  user_id: DS.attr('number')
});
