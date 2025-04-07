import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  expertise: string;
  image: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Noah Barrett',
      role: 'AI Researcher',
      phone: '(902) 318-3605',
      email: 'noah.barrett@dal.ca',
      expertise: 'Artificial Intelligence Researcher; Machine Learning Engineer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sam Silver',
      role: 'Software Engineer',
      phone: '(902) 318-8820',
      email: 'sam55silver@gmail.com',
      expertise: 'Software and Data Engineer; Marketing and Outreach; Finances',
      image: 'https://randomuser.me/api/portraits/men/41.jpg'
    },
    {
      name: 'Jessica Doman',
      role: 'Conservation Specialist',
      phone: '(905) 407-2664',
      email: 'jess.doman10@gmail.com',
      expertise: 'Wildlife Conservation, Environmental Management, and Marine Conservation',
      image: 'https://randomuser.me/api/portraits/women/47.jpg'
    },
    {
      name: 'Harvey Wang',
      role: 'Ocean Physicist',
      phone: '(902) 220-4468',
      email: 'harvey@dal.ca',
      expertise: 'Diversity measures; renewable energy; ocean physics; signal processing',
      image: 'https://randomuser.me/api/portraits/men/68.jpg'
    }
  ];

  return (
    <section id="team" className="py-16 bg-gradient-to-b from-[#0f172a] to-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#0d9488]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            We are passionate about the protection of endangered species, such as the North Atlantic Right Whale. 
            Our team unites specialties in wildlife conservation and resource management with technical innovation 
            and entrepreneurship.
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Our well-rounded team consists of professionals in data science and software engineering, complemented 
            by academics in environmental science, computer science, and physics. We are actively seeking ways to turn 
            our technical expertise into business ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e293b]/60 rounded-xl overflow-hidden shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#0d9488]/50"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-[#2dd4bf] font-medium mt-1">{member.role}</p>
                <p className="mt-3 text-gray-300 text-sm">{member.expertise}</p>
                <div className="mt-5 space-y-2">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Phone className="h-4 w-4 mr-2 text-[#2dd4bf]" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Mail className="h-4 w-4 mr-2 text-[#2dd4bf]" />
                    <a href={`mailto:${member.email}`} className="hover:text-[#2dd4bf] transition-colors">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}