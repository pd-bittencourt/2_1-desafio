import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import './styles.css';

const Post = ({ data }) => (
  <div className="post-wrapper">
    <PostHeader avatar={data.avatar} name={data.name} time={data.time} />
    <p className="post-body">{data.body}</p>
  </div>
);

Post.defaultProps = {
  data: null,
};

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default Post;
