import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

import Header from './Header/Header';
import Post from './Post/Post';

class App extends Component {
  state = {
    appTitle: 'RocketBook',
    posts: [
      {
        id: 1,
        name: 'Pedro Bittencourt',
        avatar: 'https://avatars.githubusercontent.com/pd-bittencourt',
        time: 'há 10 min',
        body:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        id: 2,
        name: 'Shane Osbourne',
        avatar: 'https://avatars.githubusercontent.com/shakyShane',
        time: 'há 15 min',
        body:
          'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
      },
      {
        id: 3,
        name: 'David Dias',
        avatar: 'https://avatars.githubusercontent.com/thedaviddias',
        time: 'há 20 min',
        body:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      },
    ],
  };

  render() {
    const { appTitle } = this.state;
    return (
      <>
        <Header title={appTitle} />
        <div className="posts-wrapper">
          <Post />
          <Post />
          <Post />
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
