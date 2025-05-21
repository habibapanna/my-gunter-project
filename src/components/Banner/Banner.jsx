import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Banner = () => {
    const location = useLocation(); // Get the current route

    return (
        <div>
            <div className='bg-black py-12 '>
                <h1 className='text-4xl font-bold mb-5 text-center text-white'>Services</h1>
                <p className='text-center text-white'>
                    <Link 
                        to="/" 
                        className={`mr-3 transition-colors duration-300 ${location.pathname === '/' ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}`}
                    >
                        Home
                    </Link>
                    /
                    <Link 
                        to="/services" 
                        className={`ml-3 transition-colors duration-300 ${location.pathname === '/services' ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}`}
                    >
                        Services
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Banner;
