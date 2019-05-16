import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    title: 'Facebook List',
  };

  render() {
    const { title } = this.state;
    return (
      <>
        <h1>{title}</h1>
        <p>little app</p>
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
