import React, { useState, useEffect } from 'react';
import work1 from '../../../assets/Domestic/work1.svg';
import work2 from '../../../assets/Domestic/work2.svg';
import work3 from '../../../assets/Domestic/work3.svg';

export const WorkCard = () => {
  const workdata = [
    { img: work1, title: 'Step 1', desc: 'Import or add your orders and select a shipment' },
    { img: work2, title: 'Step 2', desc: 'Choose a carrier based on your choice or our recommendation' },
    { img: work3, title: 'Step 3', desc: 'Pack, label and hand them over to the courier partner' },
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // Initial check for large screen

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Update state on resize
    };

    window.addEventListener('resize', handleResize); // Add resize event listener
    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, []);

  return (
    <>
      <div className="flex-row lg:flex  gap-4 mt-6">
        {workdata.map((data, i) => {
          return (
            <div key={i} className="flex flex-col items-center space-y-4">
              <img 
                className="xs:px-30 xs:py-6 sm:px-40 sm:py-8  mx-auto border-1 mt-3 border-gray-200 rounded-3xl shadow-2xl lg:p-8 w-[200px]h-[300px]" 
                src={data.img} 
                alt="image" 
              />
              <div className="">
                <h1 className=" md:text-xl font-manrope text-purple-600">{data.title}</h1>
                <p className="md:text-xl text-gray-600 font-TWKLausanne">
                  {/* Conditionally render text based on screen size */}
                  {isLargeScreen
                    ? (
                      <>
                        {data.desc.split(' ').map((word, index) => (
                          <span key={index}>{word} </span>
                        ))}
                      </>
                    )
                    : (
                      <>
                        {data.desc.split(' ').map((word, index) => (
                          <span key={index}>{word} </span>
                        ))}
                      </>
                    )
                  }
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
