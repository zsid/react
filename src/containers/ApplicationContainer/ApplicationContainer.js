import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

class ApplicationContainer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { history, routes, store } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          { routes }
        </ConnectedRouter>
      </Provider>
    );
  }
}

ApplicationContainer.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default ApplicationContainer;
