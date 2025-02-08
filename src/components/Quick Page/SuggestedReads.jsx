import React from 'react'
import Suggested1 from '../../assets/images/quick/suggested1.png'
import Suggested2 from '../../assets/images/quick/suggested2.png'
import Suggested3 from '../../assets/images/quick/suggested3.png'
import { FaArrowRightLong } from "react-icons/fa6";

function SuggestedReads() {
    const suggests=[{image:Suggested1,title:'Laundry Pick Up and Delivery: How Apps Solve Laundromat Problems',texts:["Hyperlocal delivery","Shiprocket Quick"]},
{image:Suggested2,title:'Your Guide To Top Grocery Delivery Apps: Bringing The Market To..', texts:["Hyperlocal delivery","Shiprocket Quick"]},
{image:Suggested3,title:'5 Common Mistakes in Hyperlocal Marketing Every Business Must Avoid',texts:["Hyperlocal delivery","Shiprocket Quick","Quick Delivery"]},]
  return (
    <div className='max-w-6xl mx-auto my-20 px-4 md:px-0'>
        <h2 className='font-semibold text-5xl lg:whitespace-nowrap md:text-center text-primes'>Suggested Reads About <span className='text-gradient1'>Hyperlocal Delivery</span></h2>
        <div className="flex gap-10 mt-16  md:px-0 flex-wrap lg:flex-nowrap">
            {
                suggests.map((suggest,index) =>(
                    <div key={index} className='flex flex-col gap-4 w-full md:w-1/2 lg:w-1/4 grow shrink-0' >
                    <img src={suggest.image} alt={suggest.image} className='rounded-2xl w-full cursor-pointer' />
                    <div className='flex gap-4'>
                    {
                        suggest.texts.map((text,index)=>(
                            <p className='text-gray-900 text-sm capitalize ' key={index}>{text}</p>
                        ))
                    }
                    </div>
       
                    <p className='text-lg text-primes'>{suggest.title}</p>
                        <div className="group cursor-pointer text-burgundy flex  gap-3">
                        <p>Know More</p>
                        <span className="inline-block relative top-2 left-0 group-hover:left-2 transition-all duration-500">
                            <FaArrowRightLong />
                        </span>
                        </div>    
                    </div>
                ))
            }
          
        </div>
    </div>
  )
}

export default SuggestedReads