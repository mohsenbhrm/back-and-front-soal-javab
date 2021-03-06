// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const server = 'https://localhost:5001';
const server = 'http://api.porsopey.ir';
//  const server = 'http://localhost:5000';


export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
