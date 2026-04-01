import React from 'react';

const Tabs = ({activeTab, setActiveTab}) => {
    return (
        <div>
            <div className="tabs tabs-box justify-center gap-10 bg-transparent ">
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full w-30 ${activeTab === 'product' && 'bg-linear-to-r from-blue-500 to-purple-800 text-white'}`}
                    aria-label="Products"
                    defaultChecked
                    onClick={()=>setActiveTab('product')}
                />
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full w-30 ${activeTab === 'cart' && 'bg-linear-to-r from-blue-500 to-purple-800'}`}
                    aria-label="Cart"
                    onClick={()=>setActiveTab('cart')}
                    
                />

            </div>
        </div>
    );
};

export default Tabs;