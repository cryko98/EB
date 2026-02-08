
import React from 'react';

const events = [
  {
    title: "Annual 'Quantum Physics & You' Symposium",
    description: "A deep dive into theoretical physics with special guest lecturers. Accommodations are... unique. Discretion is a must."
  },
  {
    title: "Advanced Massage & Wellness Workshop",
    description: "Learn ancient relaxation techniques from our globally-sourced team of expert therapists. All sessions are private and confidential."
  },
  {
    title: "Internship Program Networking Mixer",
    description: "An exclusive opportunity for our brightest young minds to connect with powerful mentors. Career-making connections guaranteed."
  },
  {
    title: "Talent Scouting Gala & Showcase",
    description: "Discover the next generation of models, artists, and performers. Private auditions will be held throughout the weekend."
  },
  {
    title: "Mystery Island Treasure Hunt",
    description: "A fun-filled day of puzzles and exploration. The grand prize is a 'get out of jail free' card. (Metaphorically, of course)."
  }
];

const EventsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
          <h2 className="text-xl font-bold text-fb-primary-text">Upcoming Island Events</h2>
          <button onClick={onClose} className="p-2 rounded-full bg-fb-input hover:bg-fb-hover">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-fb-secondary-text">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {events.map((event, index) => (
            <div key={index} className="p-3 bg-fb-bg rounded-lg">
              <h3 className="font-semibold text-fb-primary-text">{event.title}</h3>
              <p className="text-sm text-fb-secondary-text mt-1">{event.description}</p>
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

export default EventsModal;
