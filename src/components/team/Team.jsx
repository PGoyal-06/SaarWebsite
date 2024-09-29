import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const teamMembers = [
  {
    name: 'Rohit Goyal',
    role: 'CEO',
    imageUrl: '/Rohit-Goyal.jpg',
  },
  {
    name: 'Richa Chavda',
    role: 'Manager',
    imageUrl: '/Richa-Chavda.jpg',
  },
  {
    name: 'Dakshi Narang',
    role: 'Bookkeeper',
    imageUrl: '/Dakshi-Narang.jpg',
  },
  {
    name: 'Navi Sonkar',
    role: 'Senior Accountant',
    imageUrl: '/Navi-Sonkar.jpg',
  },
  {
    name: 'Ritika Jain',
    role: 'Director of Bookkeeping and Audit Operations',
    imageUrl: '/Ritika-Jain.jpg',
  },
  {
    name: 'Kajal Sonkar',
    role: 'Bookkeeper',
    imageUrl: '/Kajal-Sonkar.jpg',
  },
];

function Team() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id='team' className="bg-white py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Meet our team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.75 + index * 0.2 }}
              >
                <img className="h-40 w-40 rounded-full object-cover" src={member.imageUrl} alt={member.name} />
                <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900">{member.name}</h3>
                <p className="mt-2 text-base text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Team;
