import path from "path";
import fs from "fs-extra";
import isEmpty from "lodash.isempty";

import createOptions from "./create-options";
import webFonts from "./web-fonts";

export const onPreBootstrap = async (
  { cache, createContentDigest, store, pathPrefix },
  pluginOptions,
) => {
  if (isEmpty(pluginOptions.fonts)) return;

  const { directory } = store.getState().program;

  const cacheFolder = path.join(directory, `.cache`, `webfonts`);
  const publicFolder = path.join(directory, `public`, `static`, `webfonts`);

  const options = createOptions({ ...pluginOptions, cacheFolder, pathPrefix });

  const optionsCacheKey = `options-${createContentDigest(options)}`;

  const cachedOptions = await cache.get(optionsCacheKey);

  if (!cachedOptions) {
    await webFonts(options);
    await cache.set(optionsCacheKey, options);
  }

  const filter = src => path.extname(src) !== `.css`;
  await fs.copy(cacheFolder, publicFolder, { filter });
};
