import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/team")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-purple-600">
        Meet the Team Behind Your Future E-commerce Success
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member._id || index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image area divided in half: left bg-img, right title */}
            <div className="relative flex h-[250px]">
              {/* Left Half with BG Image */}
              

              {/* Right Half with vertical title */}
              <div className=" h-full bg-black flex items-start justify-end text-right px-2">
                <p className="text-gray-500 font-semibold tracking-widest text-[14px] leading-[18px] uppercase whitespace-pre-line text-center">
                  {member.title.split("").join("\n")}
                </p>
              </div>

              {/* Centered Member Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className=" object-cover shadow-lg z-10 h-[250px]"
                />
              </div>
            </div>

            {/* Name & LinkedIn Section */}
            <div className="text-center px-4 py-5 bg-stone-900">
              <h3 className="text-xl text-amber-500 font-semibold">{member.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
