import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-black p-12 text-center'>
            <h1 className='text-white font-bold text-2xl lg:text-5xl mb-10'>Oops! Page is not found</h1>
            <Link to="/"><button className='btn bg-purple-600 border-none'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;