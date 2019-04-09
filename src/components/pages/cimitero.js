import React, { createElement, useState } from 'react';
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
export const Cimitero = props => {
  return (
    <div>
      <ContainerDimensions>
        {({ width, height }) => (
          <Video name={props.name} width={width} height={height} />
        )}
      </ContainerDimensions>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <PaddedDiv>
        <NormalBody>
          <PhotoSphere name={props.name} filename={'1'} />
          <PhotoSphere name={props.name} filename={'2'} />
          <BidimensionalPhoto name={props.name} filename={'1'} />
          <Body filename={'desc'} name={props.name} language={props.language} />
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
