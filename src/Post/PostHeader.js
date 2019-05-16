import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ avatar, name, time }) => (
  <div className="post-header">
    <img src={avatar} alt="" className="avatar" />
    <div className="post-header-info">
      <h2>{name}</h2>
      <p>{time}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
