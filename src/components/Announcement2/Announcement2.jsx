import React from 'react';

const newsArticles = [
  {
    title: "Breaking News: Walmart Business is Revolutionizing eCommerce!",
    image: "https://i.ibb.co.com/p6RXDJyy/vanilla-bear-films-JEw-NQerg3-Hs-unsplash.jpg",
    description: "Walmart Business is transforming online retail with AI tools, fulfillment solutions, and massive growth opportunities.",
  },
  {
    title: "F-Commerce Booming in Bangladesh: The Future of Online Business!",
    image: "https://i.ibb.co.com/8n2xG3Gv/pexels-mustapha-damilola-458083529-31269038.jpg",
    description: "With millions of active users, Facebook Commerce is shaping the future of online selling in Bangladesh.",
  },
  {
    title: "Amazon FBA Continues to Dominate eCommerce!",
    image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/05/google-1-1-1-380x330.jpg",
    description: "Amazon’s FBA program is scaling businesses worldwide with fast shipping and automated fulfillment.",
  },
  {
    title: "Amazon FBA Continues to Dominate eCommerce!",
    image: "https://i.ibb.co.com/S7fvk9xs/pexels-airamdphoto-31258451.jpg",
    description: "Amazon’s FBA program is scaling businesses worldwide with fast shipping and automated fulfillment.",
  },
];

const Announcement2 = () => {
  return (
    <div>
      <h2 className='text-white mb-5 text-2xl font-bold'>Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {newsArticles.map((article, index) => (
          <div key={index} className="border border-gray-800 p-4 rounded-lg shadow-md">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2 text-white">{article.title}</h3>
            <p className="mt-2 text-gray-500">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement2;
