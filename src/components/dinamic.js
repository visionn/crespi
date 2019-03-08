import React, { createElement, useState } from 'react';
import { Title, Subtitle, Body } from '../style/common';
import { Video } from './functions/video';
import { TopImage } from '../style/description';
import { PhotoSphere } from './functions/photo';
import ContainerDimensions from 'react-container-dimensions';
const importBody = async () => {
  const page = await import('../assets/text/ita/chiesa/desc.md');
  return page.default;
};
export const DinamicPage = props => {
  let page = [''];
  const [content, setContent] = useState('');
  if (props.description !== false) {
    page = Object.keys(props.description).map(key => {
      if (key === 'Title') {
        return createElement(Title, null, props.description[key]);
      } else if (key === 'Subtitle') {
        return createElement(Subtitle, null, props.description[key]);
      } else if (key === 'Body') {
        importBody().then(text => {
          setContent(text);
        });
        return createElement(Body, null, content);
      } else if (key === 'PhotoSphere') {
        return <PhotoSphere />;
      } else if (key === 'TopImage') {
        return (
          <ContainerDimensions>
            {({ width, height }) => <Video name={props.name} width={width} height={height} />}
          </ContainerDimensions>
        );
      } else {
        return '';
      }
    });
  } else {
  }
  return <div>{page}</div>;
};
