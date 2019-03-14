import React, { createElement, useState } from 'react';
import { Title, Subtitle, Body } from '../style/common';
import { Video } from './functions/video';
import { TopImage } from '../style/description';
import { PhotoSphere } from './functions/photo';
import { BidimensionalPhoto } from './functions/bidimensionalPhoto';
import ContainerDimensions from 'react-container-dimensions';
const importBody = async () => {
  const page = await import('../assets/text/ita/chiesa/desc.md');
  return page.default;
};
export const DinamicPage = props => {
  let page = [''];
  let countPhotoSpheres = 1;
  const [content, setContent] = useState('');
  if (props.description !== false) {
    page = Object.keys(props.description).map(key => {
      switch (key) {
        case 'Title':
          return createElement(Title, null, props.description[key]);
        case 'Subtitle':
          return createElement(Subtitle, null, props.description[key]);
        case 'Body':
          importBody().then(text => {
            setContent(text);
          });
          return createElement(Body, null, content);
        case 'PhotoSphere':
          return (
            <PhotoSphere name={props.name} fileName={countPhotoSpheres} />
          );
          countPhotoSpheres++;
        case 'TopImage':
          return (
            <ContainerDimensions>
              {({ width, height }) => (
                <Video name={props.name} width={width} height={height} />
              )}
            </ContainerDimensions>
          );
        case 'Photo':
          return <BidimensionalPhoto />;
        default:
          return '';
      }
    });
  } else {
  }
  return <div>{page}</div>;
};
