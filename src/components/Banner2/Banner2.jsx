
import { Link, useLocation } from 'react-router-dom';

const Banner2 = () => {
    const location = useLocation(); // Get the current route

    return (
        <div>
            <div className='bg-black py-20 '>
                <h1 className='text-4xl font-bold mb-5 text-center text-white'>Contact</h1>
                <p className='text-center text-white'>
                    <Link 
                        to="/" 
                        className={`mr-3 transition-colors duration-300 ${location.pathname === '/' ? 'text-amber-500 font-semibold' : 'hover:text-amber-500'}`}
                    >
                        Home
                    </Link>
                    /
                    <Link 
                        to="/contact" 
                        className={`ml-3 transition-colors duration-300 ${location.pathname === '/contact' ? 'text-amber-500 font-semibold' : 'hover:text-amber-500'}`}
                    >
                        Contact
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Banner2;
