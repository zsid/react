import React, { Component } from 'react';

class ApplicationContainer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>Hello From React It actually works</div>
    );
  }
}

export default ApplicationContainer;
