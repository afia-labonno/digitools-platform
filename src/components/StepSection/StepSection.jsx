import React from 'react';

const StepSection = () => {
    return (
        <div className='w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-10'>
            <div className='mx-auto space-y-6'>
                {/* title */}
                <div className='flex flex-col items-center space-y-2'>
                    <h1 className='text-4xl sm:text-6xl font-extrabold'>Get Started in 3 Steps</h1>
                    <p>Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* cards */}
                <div className='flex gap-8 justify-center items-center m-20'>

                    <div className='card shadow-xl p-8 space-y-6 text-center rounded-lg'>
                        <div className='flex flex-col items-end'>
                            <p className=' bg-zinc-400 h-8 w-8 rounded-full bg-linear-to-r from-purple-800 to-blue-500 text-white font-semibold'>01</p>
                        </div>
                        <div className='flex justify-center items-center mx-auto h-20 w-20 rounded-full bg-purple-100'>
                            <img src="/user.png" alt="" />
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-2xl font-semibold'>Create Account</h2>
                            <p className='mt-4'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                        </div>
                    </div>

                    <div className='card shadow-xl p-8 space-y-6 text-center rounded-lg'>
                        <div className='flex flex-col items-end'>
                            <p className='h-8 w-8 rounded-full bg-linear-to-r from-purple-800 to-blue-500 text-white font-semibold'>02</p>
                        </div>
                        <div className='flex justify-center items-center mx-auto h-20 w-20 rounded-full bg-purple-100'>
                            <img src="/package.png" alt="" />
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-2xl font-semibold'>Choose Products</h2>
                            <p className='mt-4'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                        </div>
                    </div>

                    <div className='card shadow-xl p-8  space-y-6 text-center rounded-lg'>
                        <div className='flex flex-col items-end'>
                            <p className=' bg-zinc-400 h-8 w-8 rounded-full bg-linear-to-r from-purple-800 to-blue-500 text-white font-semibold'>03</p>
                        </div>
                        <div className='flex justify-center items-center mx-auto h-20 w-20 rounded-full bg-purple-100'>
                            <img src="/rocket.png" alt="" />
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-2xl font-semibold'>Start Creating</h2>
                            <p className='mt-4'>Download and start using your premium <br /> tools immediately.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StepSection;