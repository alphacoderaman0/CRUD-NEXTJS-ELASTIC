import { Client } from '@elastic/elasticsearch';

const client = new Client({ 
  node: "http://122.180.244.93:8081", 
});

export default client;