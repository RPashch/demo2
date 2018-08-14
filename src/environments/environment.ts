// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url: 'http://localhost:4200',
  apiHost: 'facecardpayments.us-east-2.elasticbeanstalk.com',
  apiUrl: `http://facecardpayments.us-east-2.elasticbeanstalk.com/api`,
  pointData:{
    merchantId: "merchantId",
    tradePointId: "tradePointId",
    cameraId: "demoCameraId"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

//TODO
//refresh array again - refresh button
//toaster - throw window, use another photo
//delete number increment in input
//add button for removing content
//5 - мастеркард
//4 - виза

//почему вообще не показывать только те фото у которых есть привязка к профилю
