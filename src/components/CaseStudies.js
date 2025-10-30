import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Dios',
      description: 'A comprehensive digital platform that streamlines business operations and enhances user engagement through innovative design and robust functionality.',
      image: '/images/case-study-dios.jpg',
      tags: ['Web App', 'Dashboard', 'Analytics'],
      metrics: {
        users: '$2,500',
        growth: '150%',
        satisfaction: '98%'
      },
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable results through innovative solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-12 text-white">
                  <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag, index) => (
                      <span key={index} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <div className="text-2xl font-bold">{study.metrics.users}</div>
                      <div className="text-blue-200 text-sm">Revenue Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{study.metrics.growth}</div>
                      <div className="text-blue-200 text-sm">User Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{study.metrics.satisfaction}</div>
                      <div className="text-blue-200 text-sm">Satisfaction</div>
                    </div>
                  </div>

                  <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2">
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Image/Preview */}
                <div className="bg-white bg-opacity-10 p-8 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-xl p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="h-16 bg-blue-100 rounded"></div>
                          <div className="h-16 bg-purple-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;