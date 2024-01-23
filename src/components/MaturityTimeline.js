import React from 'react';

const MaturityTimeline = () => {
  // Placeholder for your timeline data
  const timelineEvents = [
    { name: 'Utkarsh FD 1', date: new Date(2024, 0) },
    { name: 'Shriram FD Plan 2', date: new Date(2024, 3) },
    { name: 'Bajaj Finserv FD 1', date: new Date(2024, 6) },
    { name: 'Mahindra FD Plan 2', date: new Date(2024, 9) },
    // ... more events
  ];

  // Function to render the timeline
  const renderTimeline = () => {
    // Here you would dynamically create your timeline based on `timelineEvents`
    // For simplicity, we're returning a static example
    return (
      <div className="relative border-l-2 border-gray-300">
        {timelineEvents.map((event, index) => (
          <div key={index} className="mb-8 ml-4">
            <div
              className={`absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white`}
              style={{ marginTop: 4 }}
            ></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{event.date.toDateString()}</time>
            <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-xl mb-4">FD Maturity Timeline</h2>
      {renderTimeline()}
    </div>
  );
};

export default MaturityTimeline;
