import React, { useState, createElement } from 'react';
import {
  Container,
  LeftMessage,
  RightMessage,
  PaddedDiv,
} from '../../style/description';
import { Title, Subtitle, Body as NormalBody } from '../../style/common';
import { PhotoSphere } from '../functions/photo';
import { Body } from '../functions/body';
import { Video } from '../functions/video';
import { BidimensionalPhoto } from '../functions/bidimensionalPhoto';
import ContainerDimensions from 'react-container-dimensions';
export const Fabbrica = props => {
  const [content, setContent] = useState('');
  return (
    <div>
      <ContainerDimensions>
        {({ width, height }) => (
          <Video name={props.name} width={width} height={height} />
        )}
      </ContainerDimensions>
      <Title>Fabbrica</Title>
      <Subtitle>Fabbrica di Crespi</Subtitle>
      <PaddedDiv>
        <LeftMessage>
          <Body filename={'desc'} name={props.name} language={props.language} />
        </LeftMessage>
        <RightMessage>
          <Body filename={'desc'} name={props.name} language={props.language} />
        </RightMessage>
        <PhotoSphere />
        <NormalBody>
          <Body filename={'desc'} name={props.name} language={props.language} />
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
