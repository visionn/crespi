import React, { createElement, useState } from 'react';
import { Cimitero } from './pages/cimitero';
import { Fabbrica } from './pages/fabbrica';
import { Info } from './pages/info';
export const DinamicPage = props => {
  switch (props.description.name) {
    case 'cimitero':
      return (
        <Fabbrica
          status={props.status}
          name={props.description.name}
          language={props.language}
          title={props.description.title}
          subtitle={props.description.subtitle}
        />
      );
    case 'fabbrica':
      return (
        <Fabbrica
          status={props.status}
          name={props.description.name}
          language={props.language}
          title={props.description.title}
          subtitle={props.description.subtitle}
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
