const Gallery1 = () => {
    const images = [
        { image: "https://i.ibb.co.com/7tmB9P6n/pexels-liza-summer-6347554.jpg" },
        { image: "https://i.ibb.co.com/7N44mSpr/pexels-karolina-grabowska-6958478.jpg" },
        { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4-380x350.jpg" },
        { image: "https://i.ibb.co.com/Cp0zrKNt/pexels-pixabay-264502.jpg" },
        { image: "https://i.ibb.co.com/spVZ56ZF/pexels-pixabay-325876.jpg" },
        { image: "https://i.ibb.co.com/XZqdQZ8k/pexels-timothy-paule-ii-614774-2002717.jpg" },
        { image: "https://i.ibb.co.com/QvDtqBmB/pexels-aden-ardenrich-181745-581344.jpg" },
        { image: "https://i.ibb.co.com/ZzRLCy7h/pexels-divinetechygirl-1181467.jpg" },
        { image: "https://i.ibb.co.com/G3Jgk8bp/pexels-designecologist-1779487.jpg" },
        { image: "https://i.ibb.co.com/pvqsDkWX/pexels-tranmautritam-326503.jpg" },
        { image: "https://i.ibb.co.com/JWbcFmhX/pexels-djordje-petrovic-590080-2102416.jpg" },
        { image: "https://i.ibb.co.com/cc70sbfJ/pexels-shoper-pl-550490863-17485349.jpg" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {images.map((img, index) => (
                <div key={index} className="relative overflow-hidden shadow-md">
                    <img
                        src={img.image}
                        alt={`Gallery Item ${index}`}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery1;
