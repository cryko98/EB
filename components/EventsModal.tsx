
import React from 'react';

const events = [
  {
    title: "Advanced Networking & Recruitment Seminar",
    description: "A unique opportunity for promising young talent to connect with our most influential partners. Discretion and an open mind are mandatory."
  },
  {
    title: "VIP 'Stress Relief' Massage Certification",
    description: "An intensive, hands-on workshop in advanced therapeutic techniques. Taught by Ghislaine. All participants receive a non-disclosure agreement."
  },
  {
    title: "Global Finance & Youth Philanthropy Summit",
    description: "Discussing the future of giving with world leaders. Special focus on identifying and mentoring the next generation of philanthropists."
  },
  {
    title: "Exclusive Talent Showcase & Portfolio Review",
    description: "Discover the next generation of models and performers before they're famous. Private one-on-one sessions available upon request."
  },
  {
    title: "Private Island 'Unwind' Retreat",
    description: "A weekend to disconnect from the world. No phones, no questions. Just relaxation and good company. What happens here, stays here."
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
