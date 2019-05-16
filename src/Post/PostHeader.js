import React from 'react';

// import { Container } from './styles';

export default function PostHeader() {
  return (
    <div className="post-header">
      <img src="https://avatars.githubusercontent.com/pd-bittencourt" alt="" className="avatar" />
      <div className="post-header-info">
        <h2>Pedro Bittencourt</h2>
        <p>há 5 min</p>
      </div>
    </div>
  );
}
