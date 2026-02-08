
import React from 'react';
import { users } from '../constants';

interface SidebarLinkProps {
  icon: React.ReactElement;
  text: string;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, text, onClick }) => {
  const content = (
    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-fb-hover">
      <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
      <span className="font-semibold text-fb-primary-text">{text}</span>
    </div>
  );
  
  if (onClick) {
    return <div onClick={onClick} className="cursor-pointer">{content}</div>;
  }

  return <a href="#">{content}</a>;
};


const LeftSidebar: React.FC<{ onShowEvents: () => void; }> = ({ onShowEvents }) => {
    const currentUser = users[0];
    return (
        <div className="sticky top-20 text-fb-primary-text space-y-1 p-2">
            <SidebarLink 
                icon={<img src={currentUser.avatarUrl} alt={currentUser.name} className="w-8 h-8 rounded-full"/>}
                text={currentUser.name}
            />
            <SidebarLink 
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3289F4" className="w-8 h-8"><path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63l-1.5 .75a.75.75 0 0 1-1.114-.635v-3.418a.75.75 0 0 0-.153-.451l-1.08-1.296a.75.75 0 0 0-1.071.016l-1.89 2.126a.75.75 0 0 0 .04 1.06l1.5 1.5a.75.75 0 0 1 .14.868l-2.25 4.5a.75.75 0 0 1-1.372-.686l.616-2.465a.75.75 0 0 0-.29-.713l-1.08-1.296a.75.75 0 0 0-1.071.015l-1.89 2.126a.75.75 0 0 0 .04 1.06l1.5 1.5a.75.75 0 0 1 .14.868l-2.25 4.5a.75.75 0 0 1-1.372-.686l.616-2.465a.75.75 0 0 0-.29-.713l-1.08-1.296a.75.75 0 0 0-1.071.015l-1.89 2.126a.75.75 0 0 0 .04 1.06l1.5 1.5a.75.75 0 0 1 .14.868l-2.25 4.5a.75.75 0 0 1-1.372-.686l.616-2.465a.75.75 0 0 0-.29-.713l-1.08-1.296a.75.75 0 0 0-1.071.015L-3.08 30.23a.75.75 0 0 0 .04 1.06l1.5 1.5a.75.75 0 0 1 .14.868l-2.25 4.5a.75.75 0 0 1-1.372-.686l.616-2.465a.75.75 0 0 0-.29-.713l-1.08-1.296a.75.75 0 0 0-1.071.015Z" /><path d="M15.75 19.128a5.625 5.625 0 0 1 11.25 0v.003l-.001.119a.75.75 0 0 1-.363.63l-1.5 .75a.75.75 0 0 1-1.052-.635v-3.418a.75.75 0 0 0-.153-.451l-1.08-1.296a.75.75 0 0 0-1.071.016l-1.89 2.126a.75.75 0 0 0 .04 1.06l1.5 1.5a.75.75 0 0 1 .14.868l-2.25 4.5a.75.75 0 0 1-1.372-.686l.616-2.465a.75.75 0 0 0-.29-.713l-1.08-1.296a.75.75 0 0 0-1.071.015l-1.89 2.126a.75.75 0 0 0 .04 1.06l1.5 1.5a.75.75 0 0 1 .14.868l-2.25 4.5a.75.75 0 0 1-1.372-.686l.616-2.465a.75.75 0 0 0-.29-.713l-1.08-1.296a.75.75 0 0 0-1.071.015l-1.89 2.126a.75.75 0 0 0 .04 1.06l1.5 1.5a.75.75 0 0 1 .14.868l-2.25 4.5a.75.75 0 0 1-1.372-.686l.616-2.465a.75.75 0 0 0-.29-.713l-1.08-1.296a.75.75 0 0 0-1.071.015L-3.08 30.23a.75.75 0 0 0 .04 1.06l1.5 1.5a.75.75 0 0 1 .14.868l-2.25 4.5a.75.75 0 0 1-1.372-.686l.616-2.465a.75.75 0 0 0-.29-.713l-1.08-1.296a.75.75 0 0 0-1.071.015Z" /></svg>}
                text="Inner Circle"
            />
             <SidebarLink 
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D8334A" className="w-8 h-8"><path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6v-1.5a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" /></svg>}
                text="Island Events"
                onClick={onShowEvents}
            />
             <SidebarLink 
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" className="w-8 h-8"><path d="M15.75 2.25a.75.75 0 0 0-1.5 0v1.5H9.75V2.25a.75.75 0 0 0-1.5 0v1.5H3.75A1.5 1.5 0 0 0 2.25 5.25v13.5A1.5 1.5 0 0 0 3.75 20.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H15.75V2.25Z" /><path d="M12.75 11.25a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Z" /><path fillRule="evenodd" d="M12 12.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V13.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>}
                text="Flight Logs"
            />
            <SidebarLink 
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F4B032" className="w-8 h-8"><path fillRule="evenodd" d="M10.788 3.212a.75.75 0 0 0-1.06 1.06L10.939 12l-1.211 1.212a.75.75 0 0 0 1.06 1.061l1.712-1.712a.75.75 0 0 0 0-1.06l-1.712-1.712-.001-.001Z" clipRule="evenodd" /><path fillRule="evenodd" d="M10.788 3.212a.75.75 0 0 0-1.06 1.06L10.939 12l-1.211 1.212a.75.75 0 0 0 1.06 1.061l1.712-1.712a.75.75 0 0 0 0-1.06l-1.712-1.712-.001-.001Z" clipRule="evenodd" /><path fillRule="evenodd" d="M10.788 3.212a.75.75 0 0 0-1.06 1.06L10.939 12l-1.211 1.212a.75.75 0 0 0 1.06 1.061l1.712-1.712a.75.75 0 0 0 0-1.06l-1.712-1.712-.001-.001Z" clipRule="evenodd" /></svg>}
                text="Testimonials"
            />
        </div>
    );
};

export default LeftSidebar;
