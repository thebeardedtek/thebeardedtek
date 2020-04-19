const dir: String = `/api/`;
const base: String = (window.location.origin).toString();

export const environment = {
  production: true,
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
