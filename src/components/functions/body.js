import React, { useState } from 'react';
import { Body as Container } from '../../style/common';
const importBody = async () => {
  const page = await import('../../assets/text/ita/chiesa/desc.md');
  return page.default;
};
export const Body = props => {
  const [content, setContent] = useState('');
  importBody().then(text => {
    setContent(text);
  });
  return <Container>{content}</Container>;
};
