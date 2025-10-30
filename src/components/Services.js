import React from 'react';
import { Globe, Package } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Web Development */}
          <div className="service-card text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Custom web applications built with modern technologies. 
                From simple websites to complex enterprise solutions, 
                we deliver scalable and performant web experiences.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <span className="tech-badge bg-red-100 text-red-700">React</span>
              <span className="tech-badge bg-green-100 text-green-700">Node.js</span>
              <span className="tech-badge bg-blue-100 text-blue-700">TypeScript</span>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="service-card text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-16 h-16 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mobile Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Native and cross-platform mobile applications that provide 
                exceptional user experiences. Built for iOS and Android 
                with modern development frameworks.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <span className="tech-badge bg-blue-100 text-blue-700">React Native</span>
              <span className="tech-badge bg-green-100 text-green-700">Flutter</span>
              <span className="tech-badge bg-orange-100 text-orange-700">Swift</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get the same high-quality service for a smaller task
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you need a quick prototype, a specific feature, or ongoing maintenance, 
              we apply the same level of expertise and attention to detail to projects of all sizes.
            </p>
            <button className="btn-primary">
              Start Small Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;