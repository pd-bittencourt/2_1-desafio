import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

import Header from './Header/Header';
import PostHeader from './Post/PostHeader';
import Post from './Post/Post';

class App extends Component {
  state = {
    appTitle: 'RocketBook',
    title: 'Facebook List',
    text: 'Lorem ipsum',
  };

  render() {
    const { appTitle } = this.state;
    return (
      <>
        <Header title={appTitle} />
        <PostHeader />
        <Post />
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
