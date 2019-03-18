import React, { createElement, useState } from 'react';
import { Cimitero } from './pages/cimitero';
import { Fabbrica } from './pages/fabbrica';
export const DinamicPage = props => {
  switch (props.name) {
    case 'cimitero':
      import('./pages/cimitero');
      return <Cimitero />;
    case 'fabbrica':
      return (
        <Fabbrica
          status={props.status}
          name={props.name}
          language={props.language}
        />
      );
    default:
      return null;
  }
};
