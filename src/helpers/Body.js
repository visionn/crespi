import React, { useState } from 'react';
import MDReactComponent from 'markdown-react-js';
const importBody = async props => {
  const page = await import(
    `../../assets/text/${props.language}/${props.name}/${props.filename}.md`
  );
  return page.default;
};
export const Body = props => {
  const [content, setContent] = useState('');
  importBody(props).then(text => {
    setContent(text);
  });
  return <MDReactComponent text={content} />;
};
