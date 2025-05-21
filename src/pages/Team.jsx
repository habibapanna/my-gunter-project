import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('https://my-gunter-project-server.vercel.app/team')
      .then(res => res.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching team data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-black py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-purple-600">Meet Our Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-md p-4 flex flex-col hover:shadow-2xl transition-all duration-300"
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-60 object-cover mb-4"
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
              <p className="text-gray-500 mt-1">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
