import { parseCss } from "../modules/utils";

describe(`parseCss`, () => {
  it(`should return correct CSS for single 'local()', single format`, () => {
    const google = `@font-face {
  font-family: 'Neucha';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Neucha'), url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlt.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`;
    const expected = `@font-face {
    font-family: 'Neucha';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Neucha'), url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlt.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}`;
    const css = parseCss(google, {
      fontDisplay: `swap`,
      useMerge: true,
    });
    return expect(css).resolves.toEqual(expected);
  });

  it(`should return correct CSS for single 'local()', multiple formats`, () => {
    const google = `@font-face {
  font-family: 'Neucha';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Neucha'), url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlt.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Neucha';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Neucha'), url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlr.woff) format('woff');
}`;
    const expected = `@font-face {
    font-family: 'Neucha';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Neucha'), url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlt.woff2) format('woff2'),  url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlr.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}`;
    const css = parseCss(google, {
      fontDisplay: `swap`,
      useMerge: true,
    });
    return expect(css).resolves.toEqual(expected);
  });

  it(`should return correct CSS for dual 'local()', single format`, () => {
    const google = `@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`;
    const expected = `@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}`;
    const css = parseCss(google, {
      fontDisplay: `swap`,
      useMerge: true,
    });
    return expect(css).resolves.toEqual(expected);
  });

  it(`should return correct CSS for dual 'local()', multiple formats`, () => {
    const google = `@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxM.woff) format('woff');
}`;
    const expected = `@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2'),  url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxM.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}`;
    const css = parseCss(google, {
      fontDisplay: `swap`,
      useMerge: true,
    });
    return expect(css).resolves.toEqual(expected);
  });
});
