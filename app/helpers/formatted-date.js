import Ember from 'ember';

export function formattedDate(date, format) {
  return moment(date).format(format);
}

export default Ember.Handlebars.makeBoundHelper(formattedDate);
