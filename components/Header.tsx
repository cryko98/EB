
import React from 'react';

const NavIcon: React.FC<{ path: string; isActive?: boolean }> = ({ path, isActive }) => (
    <div className={`flex-grow flex justify-center p-2 rounded-lg cursor-pointer ${isActive ? 'text-fb-blue border-b-4 border-fb-blue' : 'text-fb-secondary-text hover:bg-fb-hover'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d={path} />
        </svg>
    </div>
);

const ActionIcon: React.FC<{ path: string }> = ({ path }) => (
    <div className="p-2 bg-fb-input rounded-full text-fb-primary-text cursor-pointer hover:bg-fb-hover">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    </div>
);

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-fb-header shadow-md z-50 h-14 flex items-center px-4">
      <div className="flex items-center w-full">
        {/* Left Side */}
        <div className="flex items-center">
            <div className="text-fb-blue font-bold text-4xl tracking-tighter" style={{ fontFamily: "monospace" }}>e</div>
          <div className="relative ml-2">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-fb-secondary-text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search Epstbook"
              className="bg-fb-input rounded-full py-2 pl-10 pr-4 w-60 text-fb-primary-text placeholder-fb-secondary-text focus:outline-none hidden md:block"
            />
          </div>
        </div>

        {/* Center Nav */}
        <nav className="flex-grow flex justify-center items-center space-x-2 max-w-xl mx-auto">
            <NavIcon path="m11.47 3.84a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 5.87l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z M12 7.22 4.5 14.72V19.5a.75.75 0 0 0 .75.75h4.78a.75.75 0 0 0 .53-.22l6.97-6.97-5.56-5.56Z" isActive />
            <NavIcon path="M11.25 4.5A2.25 2.25 0 0 0 9 6.75v.563c0 .633-.207 1.22-.578 1.714l-2.09 2.508c-.424.508-.682 1.139-.682 1.815v.35a2.25 2.25 0 0 0 2.25 2.25h.375a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H8.25v-.35a.75.75 0 0 1 .228-.536l2.09-2.508a3.75 3.75 0 0 1 .982-2.858V6.75A.75.75 0 0 1 12 6h.375a.75.75 0 0 0 .75-.75V4.5h-.375Zm4.5 1.5a.75.75 0 0 0-.75.75v.35c0 .676-.258 1.307-.682 1.815l-2.09 2.508a.75.75 0 0 1-.228.536v.35H12a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h.375a2.25 2.25 0 0 0 2.25-2.25v-.35c0-.676.258-1.307.682-1.815l2.09-2.508A3.75 3.75 0 0 1 18 8.813v-.563A2.25 2.25 0 0 0 15.75 6Z" />
            <NavIcon path="M10.5 4.5a3 3 0 0 0-3 3v.75a.75.75 0 0 0 1.5 0v-.75a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-.75a.75.75 0 0 0 0 1.5h.75a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3h-3Z M4.5 10.5a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-.75a.75.75 0 0 0-1.5 0v.75a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h.75a.75.75 0 0 0 0-1.5h-.75Z M10.5 13.5a.75.75 0 0 0-.75.75v.75a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h.75a.75.75 0 0 0 0-1.5h-.75a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-.75a.75.75 0 0 0-.75-.75Z" />
            <NavIcon path="M9 4.5a.75.75 0 0 1 .75.75v1.5c0 .414.336.75.75.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v1.5c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h1.5A.75.75 0 0 1 6.75 9V7.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 1-.75-.75h-1.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h3a2.25 2.25 0 0 1 2.25 2.25v3a2.25 2.25 0 0 1-2.25 2.25h-1.5a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-1.5A2.25 2.25 0 0 0 6 12.75H4.5a2.25 2.25 0 0 1-2.25-2.25v-3A2.25 2.25 0 0 1 4.5 4.5h3Z" />
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-2">
            <ActionIcon path="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            <ActionIcon path="M3.5 2A1.5 1.5 0 0 0 2 3.5v13A1.5 1.5 0 0 0 3.5 18h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-13ZM12.25 8.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM11.5 12.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM8.25 8.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM7.5 12.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM6 6.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm10-.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3Z" />
            <ActionIcon path="M10 2a6 6 0 0 0-6 6v3.586l-1.707 1.707A.75.75 0 0 0 3 14.25h14a.75.75 0 0 0 .707-1.057L16 11.586V8a6 6 0 0 0-6-6Zm-4.25 9.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            <img src="https://epstagram.xyz/images/pfp/jeffrey-epstein.png" alt="User Avatar" className="w-10 h-10 rounded-full cursor-pointer"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
