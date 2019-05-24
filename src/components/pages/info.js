import React, { Component } from 'react';
import { PaddedDiv } from '../../style/description';
import {
  Footer,
  Subtitle,
  CrespiLogo,
  ViewCode,
  PhotoBody,
  Slide,
} from '../../style/info';
import { Title, Button, Top, Body as NormalBody } from '../../style/common';
import { PhotoSphere } from '../functions/photo';
import { Photo } from '../functions/loadPhoto';
import { Body } from '../functions/body';
import { QRCode } from "react-qr-svg";
const openLink = () => {
  window.open('https://github.com/visionn/crespi', '_blank');
};
export const Info = props => {
  return (
    <div>
      <CrespiLogo>crespi</CrespiLogo>
      <Subtitle>Il mondo parte della rete</Subtitle>
      <PaddedDiv>
        <Slide>
          <PhotoBody>
            <h2>Il progetto</h2>
            <Photo name="info" filename="modelli" type="gif" />
          </PhotoBody>
          <NormalBody>
            <div>Ecco come il gruppo ha lavorato</div>
          </NormalBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <h2>Il progetto</h2>
            <Photo name="info" filename="modelli" type="gif" />
          </PhotoBody>
          <NormalBody>
            <div>Ecco come il gruppo ha lavorato</div>
          </NormalBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
              style={{ "width": "40%" }}
              value="crespi.world"
            />
          </PhotoBody>
        </Slide>
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
