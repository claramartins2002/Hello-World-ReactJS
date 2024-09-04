
import { PostCard } from '../PostCard';
import './styles.css';
import P from 'prop-types';
import React from 'react';
export const Posts = ({ posts }) => (
    <div className="posts">
    { posts.map(post => (
         <PostCard post={post} key={post.id}></PostCard>
    ))}
   </div>
)

Posts.defaultProps ={
  posts: []
}

Posts.propTypes = {
  posts: P.array,
}
