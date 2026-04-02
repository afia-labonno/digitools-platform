import { Check } from 'lucide-react';
import React, { useState } from 'react';
import * as Icons from "lucide-react";
import { toast } from 'react-toastify';


const ProductCard = ({product, carts, setCarts}) => {
    const Icon = Icons[product.icon];
    // console.log(product);

    const [isAddedToCart, setIsAddedToCart] = useState(false) ; 

    const handleBuyNow = () =>{
        const isFound = carts.find(item => item.id === product.id)
        if(isFound){
            toast.error("Item already in cart") ;
            return ;
        }
        
        setIsAddedToCart(true) ;
        setCarts([...carts, product]) ;
        toast.success('item added to cart successfully');
    }


    return (
        <div className="shadow-lg border border-zinc-300  rounded-3xl overflow-hidden p-6 space-y-4">
            {/* tag */}
            <div className='flex flex-col items-end p-1.5 text-end'>
                {product.tag && (
                    <div className={`badge text-xs rounded-full font-semibold p-4
                        ${product.tag === "popular" ? "bg-purple-100 text-purple-700" : ""}
                        ${product.tag === "best seller" ? "bg-amber-100 text-amber-600" : ""}
                        ${product.tag === "new" ? "bg-green-100 text-green-700" : ""}
                        `}>

                            {product.tag === "popular" && "Popular"}
                            {product.tag === "best seller" && "Best Seller"}
                            {product.tag === "new" && "New"}

                    </div>
                )} 
            </div>

            {/* product icon */}
            <div 
            className='bg-zinc-100 w-15 h-15 rounded-full shadow-lg border border-zinc-50 
            flex flex-wrap justify-center items-center text-amber-900'>
                {Icon ? <Icon size={24} /> : <Icons.HelpCircle />}
            </div>

            {/* product name */}
            <div>
                <h1 className='text-2xl font-bold mb-2'>{product.name}</h1>
                <p>{product.description}</p>
            </div>

            {/* price */}
            <div>
                <span className='text-2xl font-bold'>${product.price}</span>
                <span>/{product.period}</span>
            </div>

            {/* features */}
            <div className='space-y-2'>
                {
                    product.features.map((feature, index)=>(
                        <div key={index} className='flex items-center gap-2'>
                            <Check className='text-green-600 w-4 h-4'/>
                            <span>{feature}</span>
                        </div>
                    ))
                }
            </div>

            {/* Action Button */}
            <button onClick={handleBuyNow}
                className='btn rounded-full bg-linear-to-r from-blue-500 to-purple-800 
                w-full px-4 py-2 mt-auto text-white cursor-pointer'>
                
                {
                    isAddedToCart ? "Added to Cart" : "Buy Now"
                }
            </button>
        </div>
    );
};

export default ProductCard;