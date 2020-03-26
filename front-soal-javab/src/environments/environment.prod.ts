// const server = 'https://localhost:2424';
const server = 'http://porsopey.ir';

export const environment = {
  production: true,
  apiConfig: {
    apiEnv: 'prod',
    timeExpired: 1200,
    credentials: {
      clientId: '',
      clientSecret: ''
    },
    baseUrl: server,
    apiUrls: []
  }
};
