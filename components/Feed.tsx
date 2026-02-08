
import React from 'react';
import { posts, users } from '../constants';
import type { Post as PostType, User as UserType } from '../types';
import Post from './Post';
import CreatePost from './CreatePost';
import Stories from './Stories';

const Feed: React.FC = () => {
  const getUserById = (userId: number): UserType | undefined => {
    return users.find(user => user.id === userId);
  };

  return (
    <div className="mx-auto max-w-[680px] space-y-4 py-4">
      <Stories />
      <CreatePost />
      {posts.map(post => {
        const user = getUserById(post.userId);
        if (!user) return null;
        return <Post key={post.id} post={post} user={user} />;
      })}
    </div>
  );
};

export default Feed;
