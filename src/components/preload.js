import React from 'react';

export default function Preload({
  css,
  disabled,
  format = 'woff2',
  crossOrigin = 'anonymous'
}) {
  if (disabled) return null;

  const regex = /url\((.+?)\)/gi;
  const fontUrls = css
    .match(regex)
    .map(urlString => urlString.replace(regex, '$1'))
    .filter(urlString => urlString.endsWith(`.${format}`));

  return fontUrls.map((url, key) => (
    <link
      key={`webfonts${key}`}
      rel="preload"
      as="font"
      type={`font/${format}`}
      crossOrigin={crossOrigin}
      href={url}
    />
  ));
}
