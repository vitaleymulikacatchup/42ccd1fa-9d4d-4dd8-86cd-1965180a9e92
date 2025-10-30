import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '92%',
      label: 'Client Satisfaction Rate',
      description: 'Based on project completion surveys'
    },
    {
      number: '50+',
      label: 'Successful Projects',
      description: 'Delivered across various industries'
    },
    {
      number: '30k+',
      label: 'Lines of Code',
      description: 'Written with precision and care'
    },
    {
      number: '100%',
      label: 'On-Time Delivery',
      description: 'Meeting deadlines consistently'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;