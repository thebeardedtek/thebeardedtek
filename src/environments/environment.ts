// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const dir: String = `/api/`;
const base: String = (window.location.origin).toString();

export const environment = {
  production: false,
  restAPI: {
    baseURL: base,
    apis: {
      menu : `${dir}menu`,
      login : `${dir}login`,
      register : `${dir}register`,
      user : `${dir}user`,
      portfolio : `${dir}portfolio-meta`,
      portfolioTypes : `${dir}portfolio-types`,
      webapps : `${dir}webapp-types`,
      forgot : `${dir}forgot-password`,
      banner : `${dir}banner`,
      contactForm : `${dir}contact-form`,
      pageHeader : `${dir}page-header`,
      pricing : `${dir}all-pricing-plans`,
      stripeCustomer : `${dir}customer`,
      projects : `${dir}projects`,
      billing : `${dir}billing`,
      courses : `${dir}courses`,
      projectStatus : `${dir}project-status`,
      documents : `${dir}documents`,
      history : `${dir}history`,
      cancel: `${dir}cancel`,
    }
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
