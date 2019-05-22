import React, { createElement } from 'react';
import { Cimitero } from './pages/cimitero';
import { Fabbrica } from './pages/fabbrica';
import { Info } from './pages/info';
import { Case } from './pages/case';
import { Chiesa } from './pages/chiesa';
import { CaseMedicoParroco } from './pages/case_medico_parroco';
import { Scuola } from './pages/scuola';
import LazyLoad from 'react-lazyload';
export const DinamicPage = props => {
  switch (props.description.name) {
    case 'cimitero':
      return (
        <LazyLoad height={200} once>
          <Cimitero
            status={props.status}
            name={props.description.name}
            language={props.language}
            title={props.description.title}
            subtitle={props.description.subtitle}
          />
        </LazyLoad>
      );
    case 'fabbrica':
      return (
        <LazyLoad height={200} once>
          <Fabbrica
            status={props.status}
            name={props.description.name}
            language={props.language}
            title={props.description.title}
            subtitle={props.description.subtitle}
          />
        </LazyLoad>
      );
    case 'scuola':
      return (
        <LazyLoad height={200} once>
          <Scuola
            status={props.status}
            name={props.description.name}
            language={props.language}
            title={props.description.title}
            subtitle={props.description.subtitle}
          />
        </LazyLoad>
      );
    case 'case':
      return (
        <LazyLoad height={200} once>
          <Case
            status={props.status}
            name={props.description.name}
            language={props.language}
            title={props.description.title}
            subtitle={props.description.subtitle}
          />
        </LazyLoad>
      );
    case 'case_medico_parroco':
      return (
        <LazyLoad height={200} once>
          <CaseMedicoParroco
            status={props.status}
            name={props.description.name}
            language={props.language}
            title={props.description.title}
            subtitle={props.description.subtitle}
          />
        </LazyLoad>
      );
    case 'chiesa':
      return (
        <LazyLoad height={200} once>
          <Chiesa
            status={props.status}
            name={props.description.name}
            language={props.language}
            title={props.description.title}
            subtitle={props.description.subtitle}
          />
        </LazyLoad>
      );
    case 'info':
      return (
        <LazyLoad height={200} once>
          <Info
            status={props.status}
            name={props.description.name}
            language={props.language}
          />
        </LazyLoad>
      );
    default:
      return null;
  }
};
