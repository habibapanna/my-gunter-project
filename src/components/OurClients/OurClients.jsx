import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const OurClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  return (
    <div className="mb-10 px-5 lg:px-10">
      <h3 className="text-amber-500 text-xl font-semibold mb-3">Meet Our Clients</h3>
      <h2 className="text-2xl lg:text-4xl font-semibold mb-8 text-white">Our Clients</h2>
      <div className='flex gap-1 mb-5 text-amber-500 group-hover:text-white transition-colors duration-500'>
                        <span className='border-2 w-8'></span>
                        <span className='border-2 w-2'></span>
                        <span className='border-2 w-3'></span>
                    </div>
      <Marquee direction="left" pauseOnHover speed={50}>
        {clients.map((client) => (
          <img
            key={client._id}
            src={client.imageUrl}
            alt="client-logo"
            className="w-32 h-20 object-contain mx-6"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default OurClients;
