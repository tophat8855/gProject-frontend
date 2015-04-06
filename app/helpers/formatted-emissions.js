import Ember from 'ember';

export function formattedEmissions(input) {
  var formatted = parseFloat(input, 10).toFixed(2);
  return formatted;
}

export default Ember.Handlebars.makeBoundHelper(formattedEmissions);
