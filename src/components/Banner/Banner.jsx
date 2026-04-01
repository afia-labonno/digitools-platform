import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center gap-5 mx-auto w-full space-y-6 mt-15 sm:px-10'>
            <div className='ml-20 w-[50%]'>
                <div className="flex items-center gap-2 bg-zinc-100 w-80 px-5 py-4 rounded-full shadow-md">
                    <span className="w-3 h-3 rounded-full bg-linear-to-r from-purple-800 to-blue-500 animate-pulse "></span>
                    <span class="bg-linear-to-r from-purple-800 to-blue-500 bg-clip-text text-transparent font-semibold transition-all duration-1000">New: AI-Powered Tools Available</span>
                </div>
                <div className='mt-4'>
                    <h1 className='text-5xl font-extrabold'>Supercharge Your <br />Digital Workflow</h1>
                    <p className='mt-4 pr-4'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. <br /> Explore Products
                    </p>
                </div>
                <div className='flex gap-3 mt-4'>
                    <button className=' cursor-pointer btn rounded-full px-4 py-2 text-white  font-semibold bg-linear-to-r from-purple-800 to-blue-500 transition-all duration-1000'>Explore Products</button>

                    <button className=" cursor-pointer p-[2px] rounded-full bg-linear-to-r from-purple-800 to-blue-500 transition-all duration-1000">
                        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-purple-800 font-semibold">
                            <img src="/Play.png" alt="" className="w-4 h-4" />
                            Watch Demo
                        </span>
                    </button>
                </div>
            </div>
            <div className='w-[50%] mr-20'>
                <img src="/banner.png" alt="banner-png" className='h-[600px] w-[800px]' />
            </div>
        </div>
    );
};

export default Banner;