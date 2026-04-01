import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({productPromise}) => {
    // console.log(productPromise);
    const products = use(productPromise);


    return (
        <div className='py-20'>
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h1 className="text-5xl font-extrabold  tracking-tighter mb-4">
                        Premium Digital Tools
                    </h1>
                    <p>Choose from our curated collection of premium digital products designed 
                        <br /> to boost your productivity and creativity.
                    </p>
                </div>

                {/* tabs */}

                {/* product cards */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                   {products.map((product)=> ( 
                        <ProductCard product={product} key={product.id}/>

                   ))}
                </div>

            </div>
            
        </div>
    );
};

export default Products;