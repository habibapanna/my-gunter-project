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
    <div className="min-h-screen bg-black py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-purple-600"> Meet the Team Behind Your Future E-commerce Success</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="shadow-md flex flex-col hover:shadow-2xl transition-all duration-300"
          >
          <div className="w-full max-w-sm mx-auto mb-4">
  <div className="relative h-[300px] w-full bg-gradient-to-br from-amber-500 to-purple-600 flex flex-col items-center justify-center overflow-hidden rounded-lg">
    <img 
      src={member.image} 
      alt={member.name} 
      className="h-[200px] w-[150px] object-cover rounded-full shadow-lg"
    />
    <h2 className="mt-4 text-lg sm:text-xl font-semibold text-white text-center px-2">
      {member.name}
    </h2>
  </div>
</div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
