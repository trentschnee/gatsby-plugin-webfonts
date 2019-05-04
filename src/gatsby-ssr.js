import React from 'react';
import fs from 'fs';
import path from 'path';

import createOptions from './create-options';
import { useGooglePreconnect } from './modules/google';
import Preconnect from './components/preconnect';
import Preload from './components/preload';
import Css from './components/css';

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { usePreload, formats, ...options } = createOptions(pluginOptions);

  const css = fs.readFileSync(
    path.join('./.cache', 'webfonts', 'webfonts.css'),
    'utf8'
  );

  setHeadComponents([
    <Preconnect
      key="webFontsPreconnectGoogleFonts"
      disabled={!useGooglePreconnect(options)}
      href="https://fonts.googleapis.com"
    />,
    <Preload
      key="webFontsPreload"
      disabled={!usePreload}
      format={formats[0]}
      css={css}
    />,
    <Css key="webFontsCss" css={css} />
  ]);
};
