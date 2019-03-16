import React, { useState } from 'react';
const importBody = async () => {
  const page = await import('../../assets/text/ita/chiesa/desc.md');
  return page.default;
};
export const Body = props => {
  const [content, setContent] = useState('');
  importBody().then(text => {
    setContent(text);
  });
  return <div>{content}</div>;
};
