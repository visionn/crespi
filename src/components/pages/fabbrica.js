import React, { useState, createElement } from 'react';
import {
  Container,
  LeftMessage,
  RightMessage,
  PaddedDiv,
} from '../../style/description';
import { Title, Subtitle, Body as NormalBody } from '../../style/common';
import { PhotoSphere } from '../functions/photo';
import { TopPhoto } from '../functions/topPhoto';
import { Body } from '../functions/body';
import { Video } from '../functions/video';
import { BidimensionalPhoto } from '../functions/bidimensionalPhoto';
import ContainerDimensions from 'react-container-dimensions';
export const Fabbrica = props => {
  const [content, setContent] = useState('');
  return (
    <div>
      <TopPhoto name={props.name} filename={'2'} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <PaddedDiv>
        <NormalBody>
          <Body filename={'1'} name={props.name} language={props.language} />
          <PhotoSphere name={props.name} filename={'1'} />
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
