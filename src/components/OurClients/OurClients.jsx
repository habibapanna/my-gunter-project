import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const OurClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  return (
    <div className="mb-10 px-5 lg:px-10 py-10">
      <h2 className="text-2xl lg:text-4xl font-semibold mb-6 text-amber-500">Our Clients</h2>
      <Marquee direction="left" pauseOnHover speed={50}>
        {clients.map((client) => (
          <img
            key={client._id}
            src={client.imageUrl}
            alt="client-logo"
            className="w-32 px-2 h-20 bg-white object-contain mx-6"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default OurClients;
