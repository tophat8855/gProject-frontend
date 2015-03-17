import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  description: DS.attr('string'),
  start_location: DS.attr('string'),
  end_location: DS.attr('string'),
  distance: DS.attr('string'),
  emissions: DS.attr('string')
});
