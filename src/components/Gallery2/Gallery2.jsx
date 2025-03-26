import React from 'react';

const Gallery2 = () => {
    const images = [
        { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/project-details2-1-1-380x350.jpg" },
        { image: "https://i.ibb.co.com/TBBywqhy/pexels-shoper-pl-550490863-17485353.jpg" },
        { image: "https://i.ibb.co.com/LX55CzsT/pexels-ivan-samkov-7621136.jpg" },
        { image: "https://i.ibb.co.com/n81KPgP6/pexels-ivan-samkov-7621131.jpg" },
        { image: "https://i.ibb.co.com/JWn064XP/pexels-mikhail-nilov-6969962.jpg" },
        { image: "https://i.ibb.co.com/8DKXsfP2/pexels-ivan-samkov-7621020.jpg" },
        { image: "https://i.ibb.co.com/LDT38Nd5/pexels-pixabay-50987.jpg" },
        { image: "https://i.ibb.co.com/wF2Y3z2j/pexels-olenkabohovyk-3819969.jpg" },
        { image: "https://i.ibb.co.com/fYSJMzTc/pexels-ayush-phillip-1415203-2732096.jpg" },
        { image: "https://i.ibb.co.com/XrMmmxrv/pexels-laryssa-suaid-798122-1667071-1.jpg" },
        { image: "https://i.ibb.co.com/wNrbjxky/pexels-alexazabache-3766111.jpg" },
        { image: "https://i.ibb.co.com/j9mPCHhQ/pexels-binoid-cbd-1990665-3612182.jpg" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {images.map((img, index) => (
                <div key={index} className="bg-black shadow-lg overflow-hidden">
                    <img
                        src={img.image}
                        alt={`Gallery Item ${index}`}
                        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery2;
