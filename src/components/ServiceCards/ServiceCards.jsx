import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { SiAmazonsimpleemailservice } from 'react-icons/si';
import { TbTargetArrow } from 'react-icons/tb';

const ServiceCards = () => {
    return (
        <div className='bg-black py-10'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 px-5 lg:px-10'>
                {/* Card 1 */}
                <div className='relative p-5 lg:p-10 bg-stone-900 backdrop-blur-md opacity-95 transition-colors duration-500 group hover:bg-purple-600'>
                    <SiAmazonsimpleemailservice className='text-purple-600 text-3xl lg:text-5xl mb-5 transition-colors duration-500 group-hover:text-white' />
                    <h1 className='text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-500'>E-Commerce Business Management</h1>
                    <div className='flex gap-1 mb-5 text-purple-600 group-hover:text-white transition-colors duration-500'>
                        <span className='border-2 w-8'></span>
                        <span className='border-2 w-2'></span>
                        <span className='border-2 w-3'></span>
                    </div>
                    <p className='mb-10 text-white group-hover:text-white transition-colors duration-500'>
                        Comprehensive solutions for seamless store operations, marketing, and fulfillment across Amazon, Walmart, eBay, Shopify, and F-Commerce.
                    </p>
                    <img className='absolute bottom-1 right-21' src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/dot.png" alt="" />
                    <img className='absolute bottom-1 right-1' src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/white-dot.png" alt="" />
                </div>

                {/* Card 2 */}
                <div className='relative p-5 lg:p-10 bg-purple-600 backdrop-blur-xl opacity-95 transition-colors duration-500'>
                    <TbTargetArrow className='text-white text-3xl lg:text-5xl mb-5' />
                    <h1 className='text-xl lg:text-2xl font-bold mb-3 text-white'>Marketing Services</h1>
                    <div className='flex gap-1 mb-5 text-white'>
                        <span className='border-2 w-8'></span>
                        <span className='border-2 w-2'></span>
                        <span className='border-2 w-3'></span>
                    </div>
                    <p className='mb-10 text-white'>
                        Data-driven strategies, including PPC, SEO, and social media marketing, to boost visibility and sales across Amazon, Walmart, eBay, Shopify, and F-Commerce.
                    </p>
                    <img className='absolute bottom-1 right-1' src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/white-dot.png" alt="" />
                </div>

                {/* Card 3 */}
                <div className='relative p-5 lg:p-10 bg-stone-900 backdrop-blur-md opacity-95 transition-colors duration-500 group hover:bg-purple-600'>
                    <GiMagnifyingGlass className='text-purple-600 text-3xl lg:text-5xl mb-5 transition-colors duration-500 group-hover:text-white' />
                    <h1 className='text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-500'>Product Photography & Videography</h1>
                    <div className='flex gap-1 mb-5 text-purple-600 group-hover:text-white transition-colors duration-500'>
                        <span className='border-2 w-8'></span>
                        <span className='border-2 w-2'></span>
                        <span className='border-2 w-3'></span>
                    </div>
                    <p className='mb-10 text-white group-hover:text-white transition-colors duration-500'>
                        High-quality visuals that enhance brand appeal, boost conversions, and drive sales across Amazon, Walmart, eBay, Shopify, and F-Commerce.
                    </p>
                    <img className='absolute bottom-1 right-21' src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/dot.png" alt="" />
                    <img className='absolute bottom-1 right-1' src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/white-dot.png" alt="" />
                </div>
           </div>
        </div>
    );
};

export default ServiceCards;
