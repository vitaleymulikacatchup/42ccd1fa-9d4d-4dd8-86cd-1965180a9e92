import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in React, Node.js, and AI integration.',
      avatar: '/images/team-alex.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'alex@sargas.io'
      }
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and modern interface solutions.',
      avatar: '/images/team-maria.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'maria@sargas.io'
      }
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'Mobile Developer',
      bio: 'Specialist in React Native and Flutter with expertise in cross-platform development.',
      avatar: '/images/team-david.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'david@sargas.io'
      }
    },
    {
      id: 4,
      name: 'Sophie Laurent',
      role: 'Project Manager',
      bio: 'Experienced PM ensuring smooth project delivery and client satisfaction.',
      avatar: '/images/team-sophie.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'sophie@sargas.io'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind Sargas who are passionate about 
            creating exceptional digital experiences and driving innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
              
              <div className="flex justify-center space-x-3">
                <a 
                  href={member.social.linkedin} 
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={member.social.github} 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={`mailto:${member.social.email}`} 
                  className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;