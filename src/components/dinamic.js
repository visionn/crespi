import React, { createElement, useState } from 'react';
import { Cimitero } from './pages/cimitero';
import { Fabbrica } from './pages/fabbrica';
export const DinamicPage = props => {
  switch (props.name) {
    case 'cimitero':
      import('./pages/cimitero')
      return <Cimitero />
    case 'fabbrica':
      return <Fabbrica />
    default:
      return null;
  }
};
