import React from 'react';
import PostHeader from './PostHeader';

import './styles.css';

const Post = props => (
  <div className="post-wrapper">
    <PostHeader avatar={props.data.avatar} name={props.data.name} time={props.data.time} />
    <p className="post-body">{props.data.body}</p>
  </div>
);

export default Post;
