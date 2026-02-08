
import React from 'react';
import { users } from '../constants';

const CreatePost: React.FC = () => {
  const currentUser = users[0];
  return (
    <div className="bg-fb-card rounded-lg p-3 shadow-md">
      <div className="flex items-center space-x-3 pb-3 border-b border-fb-hover">
        <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-10 h-10 rounded-full" />
        <div className="flex-1 bg-fb-input rounded-full text-fb-secondary-text px-4 py-2 cursor-pointer hover:bg-gray-300">
          What's on your mind?
        </div>
      </div>
      <div className="flex justify-around pt-2">
        <div className="flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-fb-hover cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#45BD62" className="w-6 h-6"><path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06l2.755-2.755a.75.75 0 0 1 1.06 0l3.72 3.72a.75.75 0 0 0 1.06 0l3.522-3.522a.75.75 0 0 1 1.06 0l2.505 2.505V6.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v9.31Z" clipRule="evenodd" /></svg>
          <span className="font-semibold text-fb-secondary-text">Photo/video</span>
        </div>
        <div className="flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-fb-hover cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F7B928" className="w-6 h-6"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.26 10.872a.75.75 0 0 1 1.06-1.06l.97.97a.75.75 0 0 1-1.06 1.06l-.97-.97Zm.97 4.243a.75.75 0 1 0-1.06-1.06l-.97.97a.75.75 0 0 0 1.06 1.06l.97-.97ZM12 11.625a.75.75 0 0 1 .75.75v.001a.75.75 0 0 1-1.5 0v-.001a.75.75 0 0 1 .75-.75Zm3.712-1.813a.75.75 0 0 0-1.06-1.06l-.97.97a.75.75 0 0 0 1.06 1.06l.97-.97Zm-.97 4.242a.75.75 0 1 1 1.06-1.06l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97Z" clipRule="evenodd" /></svg>
          <span className="font-semibold text-fb-secondary-text">Feeling/activity</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
