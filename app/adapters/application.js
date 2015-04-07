import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  //host: 'http://localhost:3000'
  //slight hack until the ember-cli-dotenv package is fixed
  //host: ENV.adapterURL || ENV.ADAPTER_URL
//  host: 'http://carfreeapi.mybluemix.net'
  host: ENV.ADAPTER_URL,
});
