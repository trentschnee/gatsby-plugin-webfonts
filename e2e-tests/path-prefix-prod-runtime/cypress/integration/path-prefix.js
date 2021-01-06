const { pathPrefix } = require(`../../gatsby-config`);

const withTrailingSlash = (url) => `${url}/`;

describe(`Production pathPrefix`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange();
  });

  it(`returns 200 on base route`, () => {
    cy.location(`pathname`).should(`eq`, withTrailingSlash(pathPrefix));
  });
});
