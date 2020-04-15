import React, { useState, createElement } from 'react';
import {
  PaddedDiv,
} from '../../common/style/body';
import { Title, Subtitle, Body as NormalBody } from '../../common/style/style';
import { PhotoSphere } from '../../helpers/PhotoSphere';
import { Body } from '../../helpers/Body';
import { BidimensionalPhoto } from '../../helpers/BidimensionalPhoto';
import ContainerDimensions from 'react-container-dimensions';
import { TopPhoto } from '../../helpers/TopPhoto';
export const Fabbrica = props => {
  const [content, setContent] = useState('');
  return (
    <div>
      <TopPhoto name={props.name} filename={'2'} />
      <Title>{`${props.title} 👇🏼`}</Title>
      <PaddedDiv>
        <NormalBody>
          <Body filename={'1'} name={props.name} language={props.language} />
          <PhotoSphere name={props.name} filename={'1'} />
        </NormalBody>
      </PaddedDiv>
    </div>
  );
};
