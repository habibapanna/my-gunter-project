import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import { PiDiamondsFourBold } from 'react-icons/pi';
import { FaDiamond } from 'react-icons/fa6';

const images = [
    { image: "https://i.ibb.co.com/KxkjsyPm/mailchimp-KR0-WW6bjtt0-unsplash.jpg" },
    { image: "https://i.ibb.co.com/Rkk4dv0Z/myriam-jessier-eve-I7-MOc-Smw-unsplash.jpg" },
    { image: "https://i.ibb.co.com/S4kXQt7V/charlesdeluvio-tcw-NN4-B9u-WE-unsplash.jpg" },
    { image: "https://i.ibb.co.com/r29WRj1N/pexels-ron-lach-9594430.jpg" },
];

const Blog3 = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* Carousel Section */}
            <section className="w-full max-w-3xl mx-auto mb-10">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1000}
                    loop={true}
                    className="w-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img.image} alt={`Slide ${index}`} className="w-full shadow-md h-[400px] object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <h1 className="text-4xl font-bold mb-4 white">The Benefits of Private Label and Branding in eCommerce</h1>
            <p className='text-gray-400 text-[16px] font-normal mb-8'>In today's competitive eCommerce landscape, private labeling and branding have become essential strategies for entrepreneurs looking to build long-term, profitable businesses. Unlike reselling existing products, private labeling allows sellers to create unique brands, increase profit margins, and establish customer loyalty. In this blog, we’ll explore the key benefits of private labeling and how branding can set your business apart.</p>
            
            <h2 className='text-white text-2xl mb-5'>1. What is Private Labeling?</h2>
            <p className='text-gray-400 text-[16px] font-normal'>Private labeling is the process of sourcing products from manufacturers and branding them under your own company name. Instead of selling generic or unbranded items, private label businesses create their own identity, packaging, and marketing strategies to stand out in the market.</p>
            
            <h3 className='text-white text-xl mt-3 mb-3'>Examples of Private Label Businesses:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-[16px] font-normal">
            <div className="flex items-start gap-2">
                <FaDiamond className="text-purple-600 mt-1 text-2xl" />
                <p>
                    <strong>Amazon FBA Private Label:</strong> Many sellers source products from suppliers and sell them under their own brand via Fulfillment by Amazon (FBA).
                </p>
            </div>
            <div className="flex items-start gap-2">
                <FaDiamond className="text-purple-600 mt-1 text-2xl" />
                <p>
                    <strong>Walmart Marketplace Private Label:</strong> Private label brands on Walmart can leverage Walmart Fulfillment Services for logistics and customer service.
                </p>
            </div>
            <div className="flex items-start gap-2">
                <FaDiamond className="text-purple-600 mt-1 text-2xl" />
                <p>
                    <strong>Shopify Stores:</strong> Entrepreneurs use private labeling to create unique products and build independent eCommerce brands.
                </p>
            </div>
        </div>


            <h2 className='text-white text-2xl mb-5 mt-8'>2. Key Benefits of Private Labeling</h2>
            <ul className='text-gray-400 text-[16px] font-normal list-disc pl-5'>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' /><strong>Higher Profit Margins:</strong> You own the brand and set premium pricing.</li>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' /><strong>Brand Recognition & Customer Loyalty:</strong> Builds trust and repeat purchases.</li>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' /><strong>Reduced Competition:</strong> Eliminates direct competition with generic products.</li>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' /><strong>Full Control:</strong> Over product quality, packaging, pricing, and marketing.</li>
            </ul>

            <h2 className='text-white text-2xl mb-5 mt-8'>3. How to Succeed with Private Labeling</h2>
            <ul className='text-gray-400 text-[16px] font-normal list-decimal pl-5'>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' />Market Research & Product Selection</li>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' />Find a Reliable Supplier</li>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' />Branding & Packaging</li>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' />Listing & Marketing Your Product</li>
                <li className="flex items-center gap-2"><FaDiamond className='text-purple-600' />Scale & Expand</li>
            </ul>

            <h2 className='text-white text-2xl mb-5 mt-8'>4. Final Thoughts</h2>
            <p className='text-gray-400 text-[16px] font-normal'>Private labeling and branding provide long-term business stability and profitability...</p>
            <p className='text-purple-600 font-semibold mt-6'>Ready to launch your private label brand? Start today and take control of your eCommerce future!</p>
            <div className="text-center mt-8">
          <button className="relative bg-purple-600 px-6 py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation text-[18px]">
            <Link to='/contact'>Contact us today for expert guidance!</Link>
          </button>
        </div>
        {/* Tailwind Keyframe Styles */}
      <style>
    {`
    .shadow-animation {
        position: relative;
        overflow: hidden;
    }

    .shadow-animation::before,
    .shadow-animation::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9); /* Solid dark panel */
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        opacity: 0;
    }
    
    /* Left panel (rises from bottom) */
    .shadow-animation::before {
        left: 0;
        bottom: -100%;
    }
    
    /* Right panel (falls from top) */
    .shadow-animation::after {
        right: 0;
        top: -100%;
    }

    /* Hover Effect */
    .shadow-animation:hover::before {
        transform: translateY(-100%);
        opacity: 1;
    }

    .shadow-animation:hover::after {
        transform: translateY(100%);
        opacity: 1;
    }

    /* Panels Disappear After a While */
    .shadow-animation:hover::before,
    .shadow-animation:hover::after {
        animation: panelDisappear 1s ease-in-out forwards;
    }

    @keyframes panelDisappear {
        0% {
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(0);
        }
    }
    `}
</style>
        </div>
    );
};

export default Blog3;
