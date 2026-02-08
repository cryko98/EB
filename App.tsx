
import React from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Feed from './components/Feed';

const App: React.FC = () => {
  return (
    <div className="bg-fb-bg min-h-screen font-sans">
      <Header />
      <main className="pt-14">
        <div className="grid grid-cols-12 gap-4">
          <aside className="hidden lg:block col-span-3">
            <LeftSidebar />
          </aside>
          <div className="col-span-12 lg:col-span-6">
            <Feed />
          </div>
          <aside className="hidden lg:block col-span-3">
            <RightSidebar />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default App;
