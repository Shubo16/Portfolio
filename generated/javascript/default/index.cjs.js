const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'my-new-pf',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

