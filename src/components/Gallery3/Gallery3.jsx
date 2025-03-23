import React from 'react';

const Gallery3 = () => {
    const images = [
        { image: "https://i.ibb.co.com/KxkjsyPm/mailchimp-KR0-WW6bjtt0-unsplash.jpg" },
        { image: "https://i.ibb.co.com/Rkk4dv0Z/myriam-jessier-eve-I7-MOc-Smw-unsplash.jpg" },
        { image: "https://i.ibb.co.com/S4kXQt7V/charlesdeluvio-tcw-NN4-B9u-WE-unsplash.jpg" },
        { image: "https://i.ibb.co.com/r29WRj1N/pexels-ron-lach-9594430.jpg" },
        { image: "https://i.ibb.co.com/r2tL62PZ/james-yarema-r-ZLIRu-BW6-Ac-unsplash.jpg" },
        { image: "https://i.ibb.co.com/MkGxFtD3/austin-distel-n-Gc5-RT2-Hm-F0-unsplash.jpg" },
        { image: "https://i.ibb.co.com/VY8pvgRb/nik-r22q-S5ej-ODs-unsplash.jpg" },
        { image: "https://i.ibb.co.com/W4x6dFXs/pexels-ivan-samkov-7621004.jpg" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {images.map((img, index) => (
                <div key={index} className="bg-white shadow-lg overflow-hidden">
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

export default Gallery3;
