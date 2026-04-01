import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] w-full mt-30'>
            <div className='text-base-100 mx-auto p-20 space-y-4 flex gap-5 justify-around'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-extrabold'>DigiTools</h1>
                    <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-xl'>Product</h3>
                    <ul className='space-y-2 text-sm'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-xl'>Company</h3>
                    <ul className='space-y-2 text-sm'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-xl'>Resources</h3>
                    <ul className='space-y-2 text-sm'>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-xl'>Social Links</h3>
                    <ul className='flex flex-wrap gap-3 justify-center items-center'>
                        <li><FaInstagram  className='text-lg'/></li>
                        <li><FaFacebookSquare className='text-lg'/></li>
                        <li><FaXTwitter className='text-lg'/></li>
                    </ul>
                </div>
            </div>

            <hr className="border-t border-gray-600 my-6 mx-20" />
            
            <div className='flex justify-between items-center px-20 pb-10 text-sm text-gray-400'>
                <div>
                    <p>&copy;2026 DitiTools. All rights reserved</p>
                </div>
                <div>
                    <ul className='flex gap-4 '>
                        <li className='cursor-pointer'>Privacy Policy</li>
                        <li className='cursor-pointer'>Terms Of Service</li>
                        <li className='cursor-pointer'>Cookies</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Footer;