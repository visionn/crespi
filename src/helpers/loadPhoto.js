import React, { useState } from 'react';
import { Image } from '../../style/info';
const importPhoto = async props => {
  const page = await import(
    `../../assets/img/${props.name}/${props.filename}.${props.type}`
  );
  return page.default;
};
export const Photo = props => {
  const [content, setContent] = useState('');
  importPhoto(props).then(text => {
    setContent(text);
  });
  return <Image src={content} />;
};
