
import React from 'react';

const logs = [
  {
    log: "Flight #777: Teterboro (TEB) ✈ Little St. James (LSJ)",
    details: "Passengers: W. Allen, L. Summers. Cargo: 2 crates of 'art supplies', 1 box of 'massage oils'."
  },
  {
    log: "Flight #101: Palm Beach (PBI) ✈ Little St. James (LSJ)",
    details: "Passengers: P. Andrew, C. Tucker. Note: Pilot requested to disable transponder upon approach."
  },
  {
    log: "Flight #666: Paris (LBG) ✈ New York (JFK)",
    details: "Passengers: J. Epstein, G. Maxwell, 4 'interns'. Note: Return flight for 'modeling opportunity'."
  },
  {
    log: "Flight #420: Santa Fe (SAF) ✈ Teterboro (TEB)",
    details: "Passengers: B. Clinton. Cargo: Several unmarked wooden crates. Refused inspection."
  },
  {
    log: "Flight #007: London (LTN) ✈ Palm Beach (PBI)",
    details: "Passenger: Prince Andrew. Note: Requested a list of local pizza restaurants upon arrival."
  }
];

const FlightLogsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
          <h2 className="text-xl font-bold text-fb-primary-text">Flight Logs</h2>
          <button onClick={onClose} className="p-2 rounded-full bg-fb-input hover:bg-fb-hover">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-fb-secondary-text">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="p-3 bg-fb-bg rounded-lg">
              <h3 className="font-semibold text-fb-primary-text">{log.log}</h3>
              <p className="text-sm text-fb-secondary-text mt-1">{log.details}</p>
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

export default FlightLogsModal;
