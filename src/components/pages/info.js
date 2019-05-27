import React, { Component } from 'react';
import { PaddedDiv } from '../../style/description';
import {
  Footer,
  Subtitle,
  CrespiLogo,
  ViewCode,
  PhotoBody,
  Slide,
  QR,
  CrespiWorld,
} from '../../style/info';
import { Title, Button, Top, Body as NormalBody } from '../../style/common';
import { PhotoSphere } from '../functions/photo';
import { Photo } from '../functions/loadPhoto';
import { Body } from '../functions/body';
import { QRCode } from 'react-qr-svg';
const openLink = () => {
  window.open('https://github.com/visionn/crespi', '_blank');
};
export const Info = props => {
  return (
    <div>
      <CrespiLogo>crespi</CrespiLogo>
      <PaddedDiv>
        <Slide>
          <PhotoBody>
            <Title>Cura per i dettagli🗽</Title>
            <Photo name="info" filename="modelli" type="gif" />
          </PhotoBody>
          <NormalBody>
            <Body
              filename={'modelli'}
              name={'info'}
              language={props.language}
            />
          </NormalBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <Title>Un po' di storia🏺</Title>
            <Photo name="info" filename="modelli" type="gif" />
          </PhotoBody>
          <NormalBody>
            <Body filename={'testi'} name={'info'} language={props.language} />
          </NormalBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <Title>Video col drone🛸</Title>
            <Photo name="info" filename="modelli" type="gif" />
          </PhotoBody>
          <NormalBody>
            <Body filename={'video'} name={'info'} language={props.language} />
          </NormalBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <Title>Internet, mai stato così reale😮</Title>
            <Photo name="info" filename="modelli" type="gif" />
          </PhotoBody>
          <NormalBody>
            <Body filename={'codice'} name={'info'} language={props.language} />
          </NormalBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <Title>Inquadra il codice🤳 o vai su</Title>
            <CrespiWorld>crespi.world</CrespiWorld>
            <QR>
              <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: '40%' }}
                value="https://crespi.world"
              />
            </QR>
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
