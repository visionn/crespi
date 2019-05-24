import React, { Component } from 'react';
import { PaddedDiv } from '../../style/description';
import { Footer, CrespiLogo, ViewCode } from '../../style/info';
import {
  Title,
  Subtitle,
  Body as NormalBody,
  Button,
  Top,
} from '../../style/common';
import { PhotoSphere } from '../functions/photo';
import { Body } from '../functions/body';
const openLink = () => {
  window.open('https://github.com/visionn/crespi', '_blank');
};
export const Info = props => {
  return (
    <div>
      <CrespiLogo>crespi 👇🏼</CrespiLogo>
      <PaddedDiv>
        <NormalBody>
          <PhotoSphere name={props.name} filename={'1'} />
          <Body filename={'desc'} name={'info'} language={props.language} />
          <ViewCode onPointerDown={openLink} onTouchStart={openLink}>
            <Body filename={'code'} name={'info'} language={props.language} />
          </ViewCode>
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
