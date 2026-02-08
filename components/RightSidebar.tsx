
import React from 'react';
import { users } from '../constants';

const RightSidebar: React.FC = () => {
  const newFriend = users[11];
  const contacts = users.slice(1, 8);

  return (
    <div className="sticky top-20 text-fb-secondary-text space-y-4 p-4">
      <div className="p-4 bg-fb-card rounded-lg shadow">
        <h3 className="font-bold text-lg text-fb-primary-text mb-2">Sponsored</h3>
        <div className="space-y-4">
            <div>
                <h4 className="font-bold text-fb-primary-text text-xl">$EB Token</h4>
                <p className="text-sm">The official currency of the island. Now on Solana. Don't ask questions.</p>
            </div>
            <div>
                <label className="text-xs">Contract Address</label>
                <div className="bg-fb-input p-2 rounded-md mt-1 text-xs text-fb-primary-text break-all">
                    <span>xxxxxxxxxxxxxxxxxxxxxxx</span>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <a href="#" className="bg-fb-blue text-white text-center font-bold py-2 rounded-lg hover:bg-opacity-90 transition">Buy on pump.fun</a>
                <a href="#" className="bg-purple-600 text-white text-center font-bold py-2 rounded-lg hover:bg-purple-700 transition">View Chart</a>
            </div>
        </div>
      </div>
      
      <div className="p-4 bg-fb-card rounded-lg shadow">
        <h3 className="font-bold text-lg text-fb-primary-text mb-4">Friend Requests</h3>
        {newFriend && <div className="flex items-start space-x-3">
            <img src={newFriend.avatarUrl} alt={newFriend.name} className="w-14 h-14 rounded-full" />
            <div className='flex-grow'>
                <p className="font-semibold text-fb-primary-text">{newFriend.name}</p>
                <div className='flex space-x-2 mt-2'>
                    <button className="flex-grow bg-fb-blue text-white px-3 py-1.5 rounded-md hover:bg-opacity-90 font-semibold">Confirm</button>
                    <button className="flex-grow bg-fb-hover text-fb-primary-text px-3 py-1.5 rounded-md hover:bg-opacity-90 font-semibold">Delete</button>
                </div>
            </div>
        </div>}
      </div>

       <div className="p-4 bg-fb-card rounded-lg shadow">
        <h3 className="font-bold text-lg text-fb-primary-text mb-4">Birthdays</h3>
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-fb-blue">
            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5.25 12a.75.75 0 1 1 .75-.75.75.75 0 0 1-.75.75ZM6 15a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM10.5 12a.75.75 0 1 1 .75-.75.75.75 0 0 1-.75.75ZM12 15a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM10.5 18a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM14.25 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM18.75 12a.75.75 0 1 1 .75-.75.75.75 0 0 1-.75.75ZM18 15a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.188a.75.75 0 0 1 .65 1.288A7.47 7.47 0 0 0 7.5 9.75a.75.75 0 0 1 0 1.5 8.97 8.97 0 0 1-.588-2.52.75.75 0 0 1 .35-1.532ZM12 4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM17.15 7.477a.75.75 0 0 1 .35 1.532 8.97 8.97 0 0 1-.588 2.52.75.75 0 1 1 0-1.5 7.47 7.47 0 0 0 .626-2.262.75.75 0 0 1 1.012-.638Z" clipRule="evenodd" />
          </svg>
          <p className="text-fb-primary-text"><span className="font-semibold">Ghislaine Maxwell</span> and <span className="font-semibold">2 others</span> have birthdays today.</p>
        </div>
      </div>

      <div className="p-4 bg-fb-card rounded-lg shadow">
        <h3 className="font-bold text-lg text-fb-primary-text mb-4">Contacts</h3>
        <div className="space-y-4">
          {contacts.map(user => (
            <div key={user.id} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-fb-hover">
              <div className="relative">
                <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 rounded-full" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <p className="font-semibold text-fb-primary-text">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
