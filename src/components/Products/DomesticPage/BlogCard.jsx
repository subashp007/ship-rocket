import React, { useState, useEffect } from 'react';
import blog1 from '../../../assets/Domestic/blog1.png';
import blog2 from '../../../assets/Domestic/blog2.jpg';
import blog3 from '../../../assets/Domestic/blog3.jpg';
import { NavLink } from 'react-router-dom';

export const BlogCard = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const blogdata = [
        { img: blog1, btn: 'ECOMMERCE SHIPPING', title: 'Top 10 Leading Shipping Carriers For E-commerce & Their Services' },
        { img: blog2, btn: [{ Eship: 'ECOMMERCE SHIPPING' }, { SpX: 'SHIPROCKETX' }], title: 'De Minimis Values for International Shipping' },
        { img: blog3, btn: 'ECOMMERCE SHIPPING', title: 'How To Start Apparel eCommerce Business In India' }
    ];

    return (
        <div className='flex-row lg:flex justify-between items-start gap-6 mt-6 p-3 '>
            {blogdata.map((data, i) => (
                <div key={i} className='space-y-4'>
                    <img className='rounded-t-3xl shadow-2xl w-full h-full lg:w-[430px] lg:h-[250px]'
                        src={data.img} alt='image' />

                    <div className='flex gap-2'>
                        {Array.isArray(data.btn)
                            ? data.btn.map((item, index) => (
                                Object.values(item).map((btnText, idx) => (
                                    <button key={`${index}-${idx}`} className='text-xs px-4 py-1 bg-[#EBFCF3] rounded-lg'>
                                        {btnText}
                                    </button>
                                ))
                            ))
                            : <button className='text-xs px-4 py-1 bg-[#EBFCF3] rounded-lg'>{data.btn}</button>
                        }
                    </div>

                    <h1 className='text-xl font-manrope text-[#0B0757]'>
                        {isLargeScreen ? data.title.replace(/ /g, ' ') : data.title.replace(/ /g, ' ')}
                    </h1>
                    <NavLink className='opacity-50 text-xl text-purple-600 font-TWKLausanne'>Know more →</NavLink>
                </div>
            ))}
        </div>
    );
};
