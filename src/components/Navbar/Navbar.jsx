import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='flex justify-around py-8 shadow-md'>
            <div>
                <h1 className='text-4xl font-extrabold bg-linear-to-r from-purple-800 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 p-2'>DigiTools</h1>
            </div>

            <div className='flex items-center'>
                <ul className='flex gap-5'>
                    <li className='cursor-pointer'><a href="Products"></a>Products</li>
                    <li className='cursor-pointer'><a href="Features"></a>Features</li>
                    <li className='cursor-pointer'><a href="Pricing"></a>Pricing</li>
                    <li className='cursor-pointer'><a href="Testimonials"></a>Testimonials</li>
                    <li className='cursor-pointer'><a href="FAQ"></a>FAQ</li>
                </ul>
            </div>

            <div className='buttons-container flex gap-3 justify-center items-center'>
                <button className='cursor-pointer'><ShoppingCart /></button>
                <button className='cursor-pointer'>Login</button>
                <button className=' cursor-pointer btn text-white bg-linear-to-r from-purple-800 to-blue-500 p-5 rounded-full'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;