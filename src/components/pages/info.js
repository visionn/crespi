import React, { Component } from 'react';
import { PaddedDiv } from '../../style/description';
import { Footer, CrespiLogo, ViewCode, PhotoBody } from '../../style/info';
import {
  Title,
  Subtitle,
  Button,
  Top,
  Body as NormalBody,
} from '../../style/common';
import { PhotoSphere } from '../functions/photo';
import { Photo } from '../functions/loadPhoto';
import { Body } from '../functions/body';
const openLink = () => {
  window.open('https://github.com/visionn/crespi', '_blank');
};
export const Info = props => {
  return (
    <div>
      <CrespiLogo>crespi</CrespiLogo>
      <PaddedDiv>
        <PhotoBody>
          <h2>Il progetto</h2>
          <Photo name="info" filename="modelli" type="gif" />
        </PhotoBody>
        <NormalBody>
          <div>Ecco come il gruppo ha lavorato</div>
        </NormalBody>
        <NormalBody>
          <PhotoSphere name={props.name} filename={'1'} />
          <ViewCode onPointerDown={openLink} onTouchStart={openLink}>
            <Body filename={'code'} name={'info'} language={props.language} />
          </ViewCode>
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
