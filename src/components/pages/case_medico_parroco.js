import React, { createElement, useState } from 'react';
import {
  Container,
  LeftMessage,
  RightMessage,
  PaddedDiv,
  Emoji,
} from '../../style/description';
import { Title, Subtitle, Body as NormalBody } from '../../style/common';
import { PhotoSphere } from '../functions/photo';
import { Body } from '../functions/body';
import { Video } from '../functions/video';
import { BidimensionalPhoto } from '../functions/bidimensionalPhoto';
import ContainerDimensions from 'react-container-dimensions';
export const CaseMedicoParroco = props => {
  return (
    <div>
      <Title>{props.title}</Title>
      <Emoji>👇🏼</Emoji>
      <PaddedDiv>
        <NormalBody>
          <Body filename={'1'} name={props.name} language={props.language} />
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
