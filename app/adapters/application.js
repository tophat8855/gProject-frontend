import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
  // slight hack until the ember-cli-dotenv package is fixed
  //host: ENV.adapterURL || ENV.ADAPTER_URL

});
