import React from 'react';
import * as Icons from "lucide-react";
import { MdAutoDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handleRemove = (id) => {
        const filterCarts = carts.filter(item => item.id !== id);
        setCarts(filterCarts);
        toast("Item removed from the cart");
    }

    return (
        <div className='py-12'>
            <div className='max-w-4xl mx-auto px-6'>
                {/* header */}
                <div className='mb-10'>
                    <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
                </div>

                {carts.length === 0 ? (
                    <div className='flex flex-col justify-center items-center m-5'>
                        <img src="/empty-cart.webp" alt="Empty Cart" className='h-[300px] w-[400px] object-contain border border-zinc-200 shadow-lg rounded-md'/>
                        <h1 className='text-xl font-bold mt-2 text-gray-600'>Your cart is empty</h1>
                    </div>
                ) : (
                    <div className='space-y-6 border border-zinc-200 shadow-lg rounded-md'>
                        {/* cart items */}
                        {carts.map((item) => {
                            const Icon = Icons[item.icon];

                            return (
                                <div>
                                    <div className='flex justify-between bg-zinc-100 border border-zinc-300 p-3 hover:border-red-600/50 transition-all'>
                                        <div
                                            key={item.id}
                                            className='flex gap-6 items-center'
                                        >
                                            {Icon ? <Icon size={24} /> : <Icons.HelpCircle size={24} />}

                                            <div>
                                                <h2 className='text-2xl font-bold'>
                                                    {item.name}
                                                </h2>

                                                <div>
                                                    <span className='text-xl font-bold'>
                                                        ${item.price}
                                                    </span>
                                                    <span>/{item.period}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            {/* remove button */}
                                            <button onClick={() => handleRemove(item.id)}
                                                className="ml-4 text-zinc-500 hover:text-red-500 transition-colors">
                                                <MdAutoDelete />
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            );
                        })}

                        {/* Total Amount */}
                        <div className='mt-12 bg-zinc-100 border border-zinc-300 p-8'>
                            <div className='flex justify-between items-center'>
                                <span className='text-gray-700'>Total</span>
                                <span className='text-black text-xl font-semibold'>${totalPrice}</span>
                            </div>
                        </div>

                        {/* checkout button */}
                        <div>
                            <button onClick={() => {
                                setCarts([]);
                                toast("Payment Successful!")
                            }}
                                className='w-full rounded-full my-8 mx-auto text-2xl font-semibold shadow-xl bg-linear-to-r from-blue-500 to-purple-800 p-5 text-white'>
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;