import React, { createElement } from 'react';
import { Title, Subtitle, Body } from '../style/common';
import { Video } from './functions/video';
import { TopImage } from '../style/description';
export const DinamicPage = props => {
  let page = [''];
  try {
    page = Object.keys(props.description).map(key => {
      if (key === 'Title') {
        return createElement(Title, null, props.description[key]);
      } else if (key === 'Subtitle') {
        return createElement(Subtitle, null, props.description[key]);
      } else if (key === 'Body') {
        return createElement(Body, null, props.description[key]);
      } else if (key === 'TopImage') {
        return <Video />
      } else {
        return '';
      }
    });
  } catch (e) {}
  return <div>{page}</div>;
};
