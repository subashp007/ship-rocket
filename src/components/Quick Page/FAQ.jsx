import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function FAQ() {
    const faqs=[
        {question:"What courier partners can I choose from for my local deliveries?",answer:"You can select from a range of reliable courier partners including Ola, Porter, Flash, LoadShare Networks, & Borzo."},
        {question:"How do I ensure that my local order is picked up?",answer:"It’s very simple. You can easily track your order pickup by using our live real-time shipment tracking feature. This tool allows you to monitor your order’s status from order placement to delivery, ensuring you stay informed throughout the process."},
        {question:"Is there a minimum delivery distance for using Shiprocket Quick?",answer:"No, there’s no minimum delivery distance for using Shiprocket Quick. Whether you’re sending packages across town or just a few blocks away, our local delivery service is designed to handle it all efficiently."},
        {question:"Does Shiprocket Quick support cash on delivery (COD) orders?",answer:"Yes, Shiprocket Quick offers a “Pay on Delivery” option, allowing you to pay for your orders at the time of delivery."},
        {question:"Can I send deliveries to multiple locations from one pickup point?",answer:"No, currently Shiprocket Quick does not support sending deliveries to multiple locations from one pickup point."},
        {question:"What kind of support is available if I have concerns about my shipment?",answer:"We offer chat and on-call support to address any concerns you may have. Our team is available to assist you promptly and ensure your needs are met."},
        {question:"Does Shiprocket offer insurance for shipments",answer:"Yes, Shiprocket provides insurance for shipments. If your item is lost or damaged and costs more than ₹2,500, we will refund the money. For items costing less than ₹2,500, a refund will be initiated based on the invoice value."}
    ]
    const [indexOpened,setIndexOpened]=useState(null)
  return (
    <div className='max-w-6xl mx-auto px-2 my-20'>
        <div className='flex flex-col gap-10 md:flex-row md:gap-0'>
            <h2 className='text-5xl font-bold my-8 text-primes md:w-1/3'>
            Frequently asked <span className='text-gradient1 font-normal'>questions</span>
            </h2>
            <div className='md:w-2/3 md:mx-7  flex flex-col md:gap-8'>
            {
                faqs.map((faq,index)=>(
                    <div className=' border-gray-300 border-b-2 px-3 md:pb-0 cursor-pointer mt-4 md:mt-0' key={index}>
                    <p onClick={()=>setIndexOpened(index)} className={`lg:whitespace-nowrap  text-xl md:text-2xl ${indexOpened === index && "text-burgundy"}`}><span className={`font-normal inline-block mx-5  transition-all duration-700 ${indexOpened === index ? "transform rotate-[360deg]" :""} `}>{indexOpened === index ? <FaMinus className='relative top-1 font-extralight text-lg' /> : <FaPlus />}</span>{faq.question}</p>
                    <p className={`text-gray-700 md:my-4 mb-4 ml-14 overflow-hidden transition-all duration-500 ease-in-out ${indexOpened !==index ? "h-0" :"h-12"}`}>{faq.answer}</p>
                    </div>
                ))
            }


            </div>
        </div>



    </div>
  )
}

export default FAQ