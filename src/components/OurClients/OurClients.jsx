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
    <div className="px-5 lg:px-10">
      <h2 className="text-lg text-center lg:text-xl font-semibold mb-2 text-white">Trusted by top brands </h2>
      <Marquee direction="left" pauseOnHover speed={40}>
  {clients.map((client, index) => (
    <div key={client._id} className="flex items-center">
      <img
        src={client.imageUrl}
        alt="client-logo"
        className="w-30 h-20 object-contain mx-6"
      />
      {index !== clients.length - 1 && (
        <span className="text-gray-400 text-2xl">|</span>
      )}
    </div>
  ))}
</Marquee>

    </div>
  );
};

export default OurClients;
