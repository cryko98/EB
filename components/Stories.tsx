
import React from 'react';
import { users } from '../constants';

const Stories: React.FC = () => {
    const storyUsers = users.slice(0, 5);
    return (
        <div className="flex space-x-2">
            {/* Create Story Card */}
            <div className="flex-shrink-0 w-1/5">
                <div className="bg-fb-card rounded-lg shadow overflow-hidden h-full flex flex-col">
                    <div className="flex-grow bg-cover bg-center" style={{ backgroundImage: `url(${users[0].avatarUrl})` }}></div>
                    <div className="relative p-2 text-center h-16">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-fb-blue rounded-full flex items-center justify-center border-4 border-fb-card">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5">
                                 <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                             </svg>
                         </div>
                        <p className="text-xs font-semibold text-fb-primary-text mt-2">Create story</p>
                    </div>
                </div>
            </div>

            {/* User Story Cards */}
            {storyUsers.map(user => (
                <div key={user.id} className="flex-shrink-0 w-1/5 relative cursor-pointer group">
                    <img src={user.avatarUrl} alt={`${user.name}'s story`} className="absolute top-2 left-2 w-8 h-8 rounded-full border-4 border-fb-blue z-10" />
                    <div className="w-full h-full rounded-lg overflow-hidden">
                        <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                        <p className="text-white text-xs font-semibold drop-shadow-lg">{user.name}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            ))}
        </div>
    );
};

export default Stories;
