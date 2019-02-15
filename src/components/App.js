import React, { Component } from 'react';
import AppHeaderContainer from 'containers/AppHeaderContainer';
import GetStore from 'components/GetStore';

class App extends Component {
  render() {
    return (
      <>
        <AppHeaderContainer/>
        <GetStore />
      </>
    );
  }
}

export default App;