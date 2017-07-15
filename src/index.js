import React from 'react';
import { render } from 'react-dom';

import ApplicationContainer from './containers/ApplicationContainer/';
import routes from './routes/';
import store, { history } from './store';

import './styles/main.scss';

const mount = document.querySelector('#root'); // eslint-disable-line

render(
  <ApplicationContainer
    store={store}
    history={history}
    routes={routes}
  />,
  mount,
);
