import React from 'react';

const PostHeader = props => (
  <div className="post-header">
    <img src={props.avatar} alt="" className="avatar" />
    <div className="post-header-info">
      <h2>{props.name}</h2>
      <p>{props.time}</p>
    </div>
  </div>
);

export default PostHeader;
