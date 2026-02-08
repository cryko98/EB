
import React, { useState } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Feed from './components/Feed';
import EventsModal from './components/EventsModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);

  return (
    <div className="bg-fb-bg min-h-screen font-sans">
      <Header />
      <main className="pt-14 pb-16">
        <div className="grid grid-cols-12 gap-4 px-4">
          <aside className="hidden lg:block col-span-3">
            <LeftSidebar onShowEvents={() => setIsEventsModalOpen(true)} />
          </aside>
          <div className="col-span-12 lg:col-span-6">
            <Feed />
          </div>
          <aside className="hidden lg:block col-span-3">
            <RightSidebar />
          </aside>
        </div>
      </main>
      <Footer />
      {isEventsModalOpen && <EventsModal onClose={() => setIsEventsModalOpen(false)} />}
    </div>
  );
};

export default App;
