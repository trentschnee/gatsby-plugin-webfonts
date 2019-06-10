import { parseCss } from "../modules/utils";

const sample_google_responses = [
  {
    type: `single 'local()', single format`,
    css: `@font-face {
    font-family: 'Neucha';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Neucha'), url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlt.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`,
    result: `@font-face {
    font-family: 'Neucha';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Neucha'), url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlt.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}`,
  },
  {
    type: `single 'local()', multiple formats`,
    css: `@font-face {
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
}`,
    result: `@font-face {
    font-family: 'Neucha';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Neucha'), url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlt.woff2) format('woff2'),  url(https://fonts.gstatic.com/s/neucha/v10/q5uGsou0JOdh94bfvQlr.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}`,
  },
  {
    type: `dual 'local()', single format`,
    css: `@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`,
    result: `@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}`,
  },
  {
    type: `dual 'local()', multiple formats`,
    css: `@font-face {
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
}`,
    result: `@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2'),  url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxM.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
}`,
  },
];

describe(`parseCss`, () => {
  for (var i = 0; i < sample_google_responses.length; i++) {
    it(
      `should return correct CSS for ` + sample_google_responses[i].type,
      (i => () => {
        const css = parseCss(sample_google_responses[i].css, {
          fontDisplay: `swap`,
          useMerge: true,
        });
        return expect(css).resolves.toEqual(sample_google_responses[i].result);
      })(i),
    );
  }
});
