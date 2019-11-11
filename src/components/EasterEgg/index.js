import React, { createElement, useState } from 'react';
import { Egg } from '../style/scene';
export const EasterEgg = props => {
  return (
    <Egg status={props.status}>
      <div>{`Creato con 💖 da visionn☄️`}</div>
    </Egg>
  );
};
