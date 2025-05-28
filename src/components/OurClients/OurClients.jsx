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
    <div className="px-5 lg:px-10 py-5">
      <h2 className="text-xl text-center lg:text-2xl font-semibold mb-3 text-amber-500">Join The Ranks Of Successful Brands That Trust Our E-Commerce Expertise </h2>
      <p className="text-center mb-10">We've supported global brands with efficient store optimization and growth strategies.

</p>
      <Marquee direction="left" pauseOnHover speed={40}>
  {clients.map((client, index) => (
    <div key={client._id} className="flex items-center">
      <img
        src={client.imageUrl}
        alt="client-logo"
        className="w-20 h-20 object-contain mx-6"
      />
      {index !== clients.length - 1 && (
        <span className="text-gray-400 text-2xl"></span>
      )}
    </div>
  ))}
</Marquee>

    </div>
  );
};

export default OurClients;
