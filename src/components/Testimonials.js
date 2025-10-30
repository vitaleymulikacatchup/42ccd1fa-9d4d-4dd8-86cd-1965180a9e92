import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Sargas delivered an exceptional web application that exceeded our expectations. Their AI-powered approach and attention to detail made all the difference.',
      rating: 5,
      avatar: '/images/avatar-1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, InnovateLab',
      content: 'The mobile app they built for us has been a game-changer. The 12-week timeline was met perfectly, and the quality is outstanding.',
      rating: 5,
      avatar: '/images/avatar-2.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager, GrowthCo',
      content: 'Working with Sargas was a pleasure. Their expertise in modern technologies and commitment to excellence is evident in every aspect of their work.',
      rating: 5,
      avatar: '/images/avatar-3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with Sargas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;