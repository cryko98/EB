
import React from 'react';
import { users } from '../constants';

const InnerCircleModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-fb-card rounded-lg shadow-xl w-full max-w-lg m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-fb-hover flex justify-between items-center">
          <h2 className="text-xl font-bold text-fb-primary-text">Inner Circle</h2>
          <button onClick={onClose} className="p-2 rounded-full bg-fb-input hover:bg-fb-hover">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-fb-secondary-text">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
          {users.map((user) => (
            <div key={user.id} className="flex items-center space-x-4 p-2 bg-fb-bg rounded-lg">
              <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full" />
              <span className="font-semibold text-fb-primary-text">{user.name}</span>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-fb-hover text-right">
          <button 
            onClick={onClose} 
            className="bg-fb-blue text-white font-semibold px-4 py-2 rounded-lg hover:bg-opacity-90"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnerCircleModal;
