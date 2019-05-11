import React from 'react';

export default function Css({ css }) {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
