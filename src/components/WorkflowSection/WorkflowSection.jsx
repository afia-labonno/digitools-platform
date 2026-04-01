import React from 'react';
import { Dot } from 'lucide-react';

const WorkflowSection = () => {
    return (
        <div className='bg-linear-to-r from-blue-600 to-purple-800 w-full'>
            <div className='mx-auto flex flex-col justify-center items-center p-30 m-30 space-y-6'>
                <div className='space-y-4'>
                    <h1 className='text-white text-6xl font-bold'>
                        Ready to Transform Your Workflow?
                    </h1>
                    <p className='text-sm text-white text-center'>
                        Join thousands of professionals who are already using Digitools to work smarter. 
                        <br /> Start your free trial today.
                    </p>
                </div>
                <div className='space-y-4'>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        <button className='cursor-pointer btn rounded-full text-purple-800 px-4 py-2 font-semibold'>Explore Products</button>
                        <button className='cursor-pointer btn btn-outline text-white rounded-full  px-4 py-2 font-semibold '>View Pricing</button>
                       
                    </div>
                    
                    <ul className='flex  flex-wrap gap-2 justify-center text-gray-50 text-sm'>
                        <li>14-day free trial</li>
                        <li className='flex'><span><Dot /></span> No credit card required</li>
                        <li className='flex'><span><Dot /></span> Cancel anytime</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkflowSection;