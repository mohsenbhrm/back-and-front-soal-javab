const server = 'https://localhost:2424';

export const environment = {
  production: true,
  apiConfig: {
    apiEnv: 'dev',
    timeExpired: 1200,
    credentials: {
      clientId: '',
      clientSecret: ''
    },
    baseUrl: server,
    apiUrls: []
  }
};
