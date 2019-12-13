import React, { Component } from 'react';
import {
  Footer,
  Subtitle,
  CrespiLogo,
  ViewCode,
  PhotoBody,
  Slide,
  QR,
  CrespiWorld,
  VideoContainer,
  VideoBody,
} from './style';
import {
  Title,
  Button,
  Top,
  Body as NormalBody,
  PaddedDiv,
} from '../../common/style/style';
import { PhotoSphere } from '../../helpers/PhotoSphere';
import { Photo } from '../../helpers/loadPhoto';
import { Body } from '../../helpers/Body';
import { QRCode } from 'react-qr-svg';
import ReactPlayer from 'react-player';

const openLink = () => {
  window.open('https://github.com/visionn/crespi', '_blank');
};
export const Info = props => {
  return (
    <div>
      <CrespiLogo>crespi</CrespiLogo>
      <PaddedDiv>
        <VideoBody>
          <VideoContainer>
            <ReactPlayer
              width="auto"
              url="https://www.youtube.com/watch?v=qI70dYpsPTU"
              controls
            />
          </VideoContainer>
        </VideoBody>
        <Slide>
          <PhotoBody>
            <Title>Cura nei dettagli🗽</Title>
            <Photo name="info" filename="modelli" type="gif" />
            <Subtitle>"Sembra così reale"</Subtitle>
          </PhotoBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <Title>Un po' di storia🏺</Title>
            <Photo name="info" filename="testo" type="gif" />
            <Subtitle>"Abbiamo parlato con un operaio del 1800"</Subtitle>
          </PhotoBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <Title>Video col drone🛸</Title>
            <Photo name="info" filename="video" type="gif" />
            <Subtitle>"Gli UFO esistono"</Subtitle>
          </PhotoBody>
        </Slide>
        <Slide>
          <PhotoBody>
            <Title>Internet, mai stato così reale😮</Title>
            <Photo name="info" filename="codice" type="gif" />
            <Subtitle>"Posso toccarlo!"</Subtitle>
          </PhotoBody>
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
          <ViewCode onPointerDown={openLink} onTouchStart={openLink}>
            <Body filename={'code'} name={'info'} language={props.language} />
          </ViewCode>
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
