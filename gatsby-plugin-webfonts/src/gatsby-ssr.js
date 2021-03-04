import React from "react";
import isEmpty from "lodash.isempty";

import createOptions from "./create-options";
import { isGooglePreconnectEnabled } from "./modules/google";
import Preconnect from "./components/preconnect";
import Preload from "./components/preload";
import Css from "./components/css";
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#using-fs-in-ssr
// eslint-disable-next-line import/no-webpack-loader-syntax
import webfontsCss from "!!raw-loader!/.cache/webfonts/webfonts.css";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (isEmpty(pluginOptions.fonts)) return;

  const { usePreload, formats, ...options } = createOptions(pluginOptions);

  setHeadComponents([
    <Preconnect
      key="webFontsPreconnectGoogleFonts"
      disabled={!isGooglePreconnectEnabled(options)}
      href="https://fonts.googleapis.com"
    />,
    <Preload
      key="webFontsPreload"
      disabled={!usePreload}
      format={formats[0]}
      css={webfontsCss}
    />,
    <Css key="webFontsCss" css={webfontsCss} />,
  ]);
};
