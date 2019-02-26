import React, { createElement } from 'react';
import { Title, Subtitle, Body } from '../style/common';
<<<<<<< HEAD
import { Video } from './functions/video';
=======
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
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
<<<<<<< HEAD
        return <Video />
=======
        return createElement(TopImage, null, '');
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
      } else {
        return '';
      }
    });
  } catch (e) {}
  return <div>{page}</div>;
};
