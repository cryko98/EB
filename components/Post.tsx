
import React, { useState } from 'react';
import type { Post as PostType, User as UserType } from '../types';
import { users } from '../constants';

interface PostProps {
  post: PostType;
  user: UserType;
  onLike: (postId: number) => void;
  onComment: (postId: number, commentText: string) => void;
  getUserById: (userId: number) => UserType | undefined;
}

const PostActionButton: React.FC<{ icon: React.ReactElement; label: string; onClick?: () => void; isActive?: boolean }> = ({ icon, label, onClick, isActive }) => {
    return (
        <div 
            className={`flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-fb-hover cursor-pointer space-x-2 ${isActive ? 'text-fb-blue' : 'text-fb-secondary-text'}`}
            onClick={onClick}
        >
            {icon}
            <span className={`font-semibold ${isActive ? 'text-fb-blue' : 'text-fb-secondary-text'}`}>{label}</span>
        </div>
    );
};

const Post: React.FC<PostProps> = ({ post, user, onLike, onComment, getUserById }) => {
  const [newComment, setNewComment] = useState('');
  const loggedInUser = users[0];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(post.id, newComment.trim());
      setNewComment('');
    }
  };

  const commentCount = (post.prefilledComments?.length || 0) + (post.commentList?.length || 0);

  return (
    <div className="bg-fb-card rounded-lg shadow-md">
      {/* Post Header */}
      <div className="p-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
              <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-fb-primary-text hover:underline cursor-pointer">{user.name}</p>
                <div className="flex items-center space-x-1 text-xs text-fb-secondary-text">
                    <span className="hover:underline cursor-pointer">{post.timestamp}</span>
                    <span>·</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM4.25 9.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z" />
                    </svg>
                </div>
              </div>
          </div>
          <div className="p-2 rounded-full hover:bg-fb-hover cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-fb-secondary-text">
                  <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
          </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-2 text-fb-primary-text text-[15px]">
        <p>{post.text}</p>
      </div>
      {post.imageUrl && (
        <div className="bg-fb-bg -mx-px">
          <img src={post.imageUrl} alt="Post content" className="w-full object-cover" />
        </div>
      )}

      {/* Post Stats */}
      <div className="px-4 py-2.5 flex justify-between items-center text-fb-secondary-text text-sm">
        <div className="flex items-center space-x-1">
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-fb-blue flex items-center justify-center border-2 border-fb-card z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-2.5 h-2.5"><path d="M5.34 14.322a1.35 1.35 0 0 1-1.34-1.294 1.35 1.35 0 0 1 .539-1.258 1.33 1.33 0 0 1 1.583.189 1.33 1.33 0 0 1 .189 1.583 1.35 1.35 0 0 1-1.258 .539.14.14 0 0 0-.053.053l.34.34Z" /><path fillRule="evenodd" d="M12.933 2.022a1.5 1.5 0 0 0-1.898.317l-5.1 6.375a.75.75 0 0 1-1.076.09L3.5 7.75a.75.75 0 0 0-1 1.118l1.36 1.05a2.25 2.25 0 0 0 3.227-.272l5.1-6.375a1.5 1.5 0 0 0-.254-2.218Z" clipRule="evenodd" /></svg>
                </div>
            </div>
            <span className="hover:underline cursor-pointer">{post.likes}</span>
        </div>
        <div className="hover:underline cursor-pointer">{commentCount} Comments</div>
      </div>

      {/* Post Actions */}
      <div className="border-t border-fb-hover mx-4"></div>
      <div className="p-1 flex justify-around">
        <PostActionButton 
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill={post.isLiked ? "#1877F2" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" /></svg>}
            label="Like"
            onClick={() => onLike(post.id)}
            isActive={post.isLiked}
        />
        <PostActionButton 
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-fb-secondary-text"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>}
            label="Comment"
        />
        <PostActionButton 
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-fb-secondary-text"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 4.184 2.25 2.25 0 0 0 0-4.184Zm0 0a2.25 2.25 0 1 1 0 4.184 2.25 2.25 0 0 1 0-4.184Zm0 0a2.25 2.25 0 1 0 0 4.184 2.25 2.25 0 0 0 0-4.184Zm12.783 0a2.25 2.25 0 1 0 0 4.184 2.25 2.25 0 0 0 0-4.184Zm0 0a2.25 2.25 0 1 1 0 4.184 2.25 2.25 0 0 1 0-4.184Zm0 0a2.25 2.25 0 1 0 0 4.184 2.25 2.25 0 0 0 0-4.184Z" /></svg>}
            label="Share"
        />
      </div>

      {/* Comments Section */}
      <div className="border-t border-fb-hover mx-4"></div>
      <div className="p-4 space-y-3">
        {post.prefilledComments && post.prefilledComments.map((comment, index) => {
            const commenter = getUserById(comment.userId);
            if (!commenter) return null;
            return (
                <div key={`prefilled-${index}`} className="flex items-start space-x-2">
                    <img src={commenter.avatarUrl} alt={commenter.name} className="w-8 h-8 rounded-full" />
                    <div className="bg-fb-input rounded-xl p-2 text-sm">
                    <p className="font-semibold text-fb-primary-text">{commenter.name}</p>
                    <p className="text-fb-primary-text">{comment.text}</p>
                    </div>
                </div>
            );
        })}
        {post.commentList && post.commentList.map((comment, index) => (
          <div key={`user-${index}`} className="flex items-start space-x-2">
            <img src={loggedInUser.avatarUrl} alt={loggedInUser.name} className="w-8 h-8 rounded-full" />
            <div className="bg-fb-input rounded-xl p-2 text-sm">
              <p className="font-semibold text-fb-primary-text">{loggedInUser.name}</p>
              <p className="text-fb-primary-text">{comment}</p>
            </div>
          </div>
        ))}
        <form onSubmit={handleCommentSubmit} className="flex items-center space-x-2">
          <img src={loggedInUser.avatarUrl} alt={loggedInUser.name} className="w-8 h-8 rounded-full" />
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 bg-fb-input rounded-full px-3 py-1.5 text-sm text-fb-primary-text placeholder-fb-secondary-text focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Post;
