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
import { TopPhoto } from '../functions/topPhoto';
export const Case = props => {
  return (
    <div>
      <TopPhoto name={props.name} filename={'1'} />
      <Title>{props.title}</Title>
      <PaddedDiv>
        <NormalBody>
          <Body filename={'1'} name={props.name} language={props.language} />
          <Body filename={'2'} name={props.name} language={props.language} />
          <Body filename={'3'} name={props.name} language={props.language} />
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
