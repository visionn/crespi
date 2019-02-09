import React, { createElement } from 'react';
import { Title, Subtitle, Body } from '../style/common';
export const DinamicPage = props => {
  let page = [''];
  let Element = 'div';
  console.log(window['Body'])
  try {
    page = Object.keys(props.lookingAt.content)
    .map(key => {
      if (key === 'Title') {
        return createElement(Title, null, props.lookingAt.content[key]);
      } else if (key === 'Subtitle'){
        return createElement(Subtitle, null, props.lookingAt.content[key]);
      } else if (key === 'Body'){
        return createElement(Body, null, props.lookingAt.content[key]);
      }
    })
  } catch (e) {}
  return (
    <div>{page}</div>
  )
}
