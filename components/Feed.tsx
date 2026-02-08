
import React, { useState } from 'react';
import { posts as initialPosts, users } from '../constants';
import type { Post as PostType, User as UserType } from '../types';
import Post from './Post';
import CreatePost from './CreatePost';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);

  const getUserById = (userId: number): UserType | undefined => {
    return users.find(user => user.id === userId);
  };

  const handleLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLiked;
          const likes = isLiked ? post.likes + 1 : post.likes - 1;
          return { ...post, isLiked, likes };
        }
        return post;
      })
    );
  };

  const handleComment = (postId: number, commentText: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const newCommentList = [...(post.commentList || []), commentText];
          return { ...post, commentList: newCommentList };
        }
        return post;
      })
    );
  };

  return (
    <div className="mx-auto max-w-[680px] space-y-4 py-4">
      <CreatePost />
      {posts.map(post => {
        const user = getUserById(post.userId);
        if (!user) return null;
        return <Post key={post.id} post={post} user={user} onLike={handleLike} onComment={handleComment} />;
      })}
    </div>
  );
};

export default Feed;
