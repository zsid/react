// import component from './component';

// document.body.appendChild(component());
import React from 'react';
import { render } from 'react-dom';

import ApplicationContainer from './containers/ApplicationContainer/';

const mount = document.querySelector('#root'); // eslint-disable-line

render(
  <ApplicationContainer />,
  mount,
);
