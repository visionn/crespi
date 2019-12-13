import React, { createElement } from 'react';
import { Fabbrica } from '../../../assets/Fabbrica/index';
import LazyLoad from 'react-lazyload';
export const DinamicPage = props => {
  switch (props.description.name) {
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
    default:
      return null;
  }
};
