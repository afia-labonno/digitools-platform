import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
    return (
        <div className='mt-30 w-full'>
            <div className='mx-auto space-y-6'>
                {/* title */}
                <div className='flex flex-col items-center space-y-2'>
                    <h1 className='text-6xl font-extrabold'>Simple, Transparent Pricing</h1>
                    <p className='text-sm text-gray-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* cards */}
                <div className='flex gap-8 justify-center items-center m-10'>

                    <div className='card shadow-xl p-6 space-y-4 text-left rounded-lg bg-gray-50 w-[300px] h-[400px] flex flex-col'>
                        <div className=''>
                            <h2 className='font-semibold text-xl'>Starter</h2>
                            <p className='text-sm text-gray-600'>Perfect for getting started</p>
                        </div>

                        <div className='flex items-center my-5'>
                            <h1 className='text-2xl font-bold'>$0</h1>
                            <p className='text-gray-600 text-sm'>/month</p>
                        </div>

                        <div className='mb-10'>

                            <div className='flex gap-1'>
                                <span><Check className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>Access to 10 free tools</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>Basic templates</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>Community support</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check  className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>1 project per month</p>
                            </div>

                        </div>
                        <button className='cursor-pointer btn w-full px-4 py-2 rounded-full mt-auto text-white bg-linear-to-r from-blue-500 to-purple-800'>Get Started Free</button>
                    </div>

                    <div className='card relative shadow-xl p-6 space-y-4 text-left rounded-lg bg-gray-50 w-[300px] h-[400px] flex flex-col bg-linear-to-r from-blue-500 to-purple-800 text-white'>
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                            <span className='text-xs px-4 py-1 rounded-full shadow-md bg-amber-100 text-amber-800'>Most Popular
                            </span>
                        </div>
                        <div className=''>
                            <h2 className='font-semibold text-xl'>Pro</h2>
                            <p className='text-sm text-white'>Best for professionals</p>
                        </div>

                        <div className='flex items-center my-5'>
                            <h1 className='text-2xl font-bold'>$29</h1>
                            <p className='text-white text-sm'>/month</p>
                        </div>

                        <div className='mb-10'>

                            <div className='flex gap-1'>
                                <span><Check className='text-white'/></span>
                                <p className='text-white text-sm'>Access to all premium tools</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check className='text-white'/></span>
                                <p className='text-white text-sm'>Unlimited templates</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check className='text-white'/></span>
                                <p className='text-white text-sm'>Priority support</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check  className='text-white'/></span>
                                <p className='text-white text-sm'>Unlimited projects</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check  className='text-white'/></span>
                                <p className='text-white text-sm'>Cloud sync</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check  className='text-white'/></span>
                                <p className='text-white text-sm'>Advanced analytics</p>
                            </div>

                        </div>
                        <button className='cursor-pointer btn w-full px-4 py-2 rounded-full mt-auto text-purple-800'>Start Pro Trial</button>
                    </div>

                    <div className='card shadow-xl p-6 space-y-4 text-left rounded-lg bg-gray-50 w-[300px] h-[400px] flex flex-col'>
                        <div className=''>
                            <h2 className='font-semibold text-xl'>Enterprise</h2>
                            <p className='text-sm text-gray-600'>For teams and businesses</p>
                        </div>

                        <div className='flex items-center my-5'>
                            <h1 className='text-2xl font-bold'>$99</h1>
                            <p className='text-gray-600 text-sm'>/month</p>
                        </div>

                        <div className='mb-10'>

                            <div className='flex gap-1'>
                                <span><Check className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>Everything in Pro</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>Team collaboration</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>Custom integrations</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check  className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>Dedicated support</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check  className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>SLA guarantee</p>
                            </div>

                            <div className='flex gap-1'>
                                <span><Check  className='text-green-500'/></span>
                                <p className='text-gray-600 text-sm'>Custom branding</p>
                            </div>

                        </div>
                        <button className=' cursor-pointer btn w-full px-4 py-2 rounded-full mt-auto text-white bg-linear-to-r from-blue-500 to-purple-800'>Contact Sales</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PricingSection;