import React, { createElement, useState } from 'react';
import { Cimitero } from './pages/cimitero';
import { Fabbrica } from './pages/fabbrica';
import { Info } from './pages/info';
export const DinamicPage = props => {
  switch (props.description.name) {
    case 'cimitero':
      import('./pages/cimitero');
      return <Cimitero />;
    case 'fabbrica':
      return (
        <Fabbrica
          status={props.status}
          name={props.description.name}
          language={props.language}
        />
      );
    case 'info':
      return (
        <Info
          status={props.status}
          name={props.description.name}
          language={props.language}
        />
      );
    default:
      return null;
  }
};
