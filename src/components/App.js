import React, { Component } from 'react';
import AppHeaderContainer from 'containers/AppHeaderContainer';
import AppContentContainer from 'containers/AppContentContainer';

class App extends Component {
  render() {
    return (
      <>
        <AppHeaderContainer/>
        <AppContentContainer />
      </>
    );
  }
}

export default App;