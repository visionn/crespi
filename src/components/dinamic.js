import React, { createElement } from 'react';
import { Cimitero } from './pages/cimitero';
import { Fabbrica } from './pages/fabbrica';
import { Info } from './pages/info';
import { Case } from './pages/case';
import { Chiesa } from './pages/chiesa';
import { CaseMedicoParroco } from './pages/case_medico_parroco';
import { Scuola } from './pages/scuola';
export const DinamicPage = props => {
  switch (props.description.name) {
    case 'cimitero':
      return (
        <Cimitero
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
    case 'scuola':
      return (
        <Scuola
          status={props.status}
          name={props.description.name}
          language={props.language}
          title={props.description.title}
          subtitle={props.description.subtitle}
        />
      );
    case 'case':
      return (
        <Case
          status={props.status}
          name={props.description.name}
          language={props.language}
          title={props.description.title}
          subtitle={props.description.subtitle}
        />
      );
    case 'case_medico_parroco':
      return (
        <CaseMedicoParroco
          status={props.status}
          name={props.description.name}
          language={props.language}
          title={props.description.title}
          subtitle={props.description.subtitle}
        />
      );
    case 'chiesa':
      return (
        <Chiesa
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
