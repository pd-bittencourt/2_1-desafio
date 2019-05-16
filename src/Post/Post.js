import React from 'react';
import PostHeader from './PostHeader';

import './styles.css';

export default function Post() {
  return (
    <div className="post-wrapper">
      <PostHeader />
      <p className="post-body">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters
      </p>
    </div>
  );
}
