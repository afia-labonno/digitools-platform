import React from 'react';
import { Star } from 'lucide-react';

const StateSection = () => {
    return (
        <div className=' w-full bg-linear-to-r from-purple-800 via-purple-600 to-blue-500 mt-15'>
            <div className='flex justify-center items-center gap-20 text-white mx-auto text-center p-8'>

                <div className='flex gap-8'>
                    <div className='space-y-2'>
                        <h1 className='text-5xl font-bold'>50K+</h1>
                        <p>Active Users</p>
                    </div>
                    <div className="divider divider-horizontal divider-end before:bg-white after:bg-white h-20 mx-4"></div>
                </div>

                <div className='flex gap-8'>
                    <div className='space-y-2'>
                    <h1 className='text-5xl font-bold'>200+</h1>
                    <p>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal divider-end before:bg-white after:bg-white h-20 mx-4"></div>
                </div>

                <div className='space-y-2'>
                    <div className='flex'>
                        <span><Star /></span>
                        <h1 className='text-5xl font-bold'>4.9</h1>
                    </div>

                    <p>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default StateSection;