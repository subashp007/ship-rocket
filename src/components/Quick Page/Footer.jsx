import React, { useState } from 'react'
import Footerlogo from "../../assets/images/quick/Footerlogo.png"
import Playstore from "../../assets/images/quick/Playstore.png"
import Appstore from "../../assets/images/quick/Appstore.png"
import { FaFacebook, FaMailBulk, FaInstagram,FaYoutube,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail,CiLocationOn } from "react-icons/ci";
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";

function Footer() {
    const products=[
        "Shiprocket Shipping",
        "ShiprocketX",
        "Shiprocket Fullfillment",
        "Shiprocket Engage 360",
        "Shiprocket Capital",
        "Shiprocket Packaging",
        "Shiprocket Checkout",
        "Shiprocket Cargo",
        "Shiprocket Omuni",
        "Shiprocket Promise",
        "Shiprocket Amplify",
        "Shiprocket Quick",
        "Delivery Boost",
        "Shiprocket Sense",]
        const features=[
            "Cash on Delivery",
            "Serviceable Pin Codes",
            "API Integration",
            "Multiple Pickup Locations",
            "Print Shipping Labels",
            "Email & SMS Notifications",
            "Amazon Self-Ship",
            "All Features",
        ]
        const partners=[
            "Carrier", 
            "Technology",
             "Become a Partner"
        ]
        const resources=[
            "Shipping Rate Calculator",
            "Volumetric Weight Calculator",
            "Free eCommerce Tools",
            "Knowledge Base",
            "Coupons",
            "FAQ’s",
            "Blog",
            "Developers",
            "Blog",
            "Web Stories",
            "Ebook",
            "Encyclopedia",
            "Videos and Podcast",
            "Showcase Your Brand",
            "Tech Sphere",
        ]
        const Companies=["About Us", "Contact Us","Customers","Press Release","Careers","Investor Relations","ESG" ]
        const year=new Date().getFullYear()
        const [open,setOpen]=useState(null)
        console.log(open)
        

  return (
    <div className='w-full bg-black px-3 md:px-20  h-auto  overflow-hidden pt-20 mt-20 rounded-t-2xl'>
        <div className='flex flex-col md:flex-row md:gap-10 w-full '>
        <div className='flex md:w-1/3 w-full items-center md:items-start lg:w-1/5 flex-col gap-10 shrink-0  '>
            <div className='flex flex-col gap-6 mt-10'>
                <img src={Footerlogo} alt="logo" className='w-32 h-8' />
                <div className='flex gap-2'>
                    <FaFacebook className='text-white text-2xl '/>
                    <FaXTwitter className='text-white text-2xl '/>
                    <FaInstagram className='text-white text-2xl '/>
                    <FaYoutube className='text-white text-2xl '/>
                    <FaLinkedin className='text-white text-2xl '/>
                </div>
            </div>
            <div className='flex flex-col  gap-2'>
                <p className='text-gray-300 font-semibold text-xl'>Reach Us At</p>
                <p className='text-gray-300 flex items-center gap-2'><span className='text-white text-2xl inline-block'><CiMail  /></span>  cargosupport@shiprocket.com</p>
                <p className='text-gray-300 flex items-center gap-2'><span className='text-white text-2xl inline-block'><FaMailBulk /></span>  cargosales@shiprocket.com</p>
                <p className='text-gray-300 flex items-center gap-2'><span className='text-white text-2xl inline-block'><CiLocationOn /></span>  Shiprocket
                416, Udyog Vihar III, Sector 20, Gurugram, Haryana 122008</p>

            </div>
            <div>
            <p className='text-gray-300 font-semibold text-xl mb-4'>Download App</p>
            <div className='flex flex-col gap-4'>
                <img src={Playstore} alt="playstore" className='w-36 h-12' />
                <img src={Appstore} alt="appstore" className='w-36 h-12' />
            </div>
            </div>
        </div>
        <div className='flex md:w-1/3 w-full px-2 lg:w-1/5 flex-col md:mt-10 shrink-0 '>
            <div className="flex flex-col gap-4">
                 <div className='flex w-full justify-between'>
                 <p className='text-gray-300 font-semibold text-xl' onClick={()=>setOpen((prev)=>prev === "products" ? null : "products")}>Products </p>
                 <p className={`text-gray-300 text-xl transition-all duration-700 ease-in-out relative top-2 md:hidden`}>{open === "products" ? <FaAngleUp /> : <FaAngleDown />}</p>
                 </div>
                 <div className={`md:h-auto  overflow-hidden  h-0 transition-all duration-500 ease-in-out ${open === "products" && "h-96"}`}>
                    {
                    products.map((product,index)=><p key={index} className='text-gray-300 hover:text-white cursor-pointer trensition-color duration-500'>{product}</p>)
                    }

                 </div>
             
                
            </div>
        
        </div>
        <div className='flex  md:w-1/3 w-full px-2 lg:w-1/5 flex-col md:mt-10 md:gap-4 shrink-0 '>

            <div className="flex flex-col gap-4">
                <div className='flex w-full justify-between'>
                 <p className='text-gray-300 font-semibold text-xl' onClick={()=>setOpen((prev)=>prev === "features" ? null : "features")}>Features </p>
                 <p className={`text-gray-300 text-xl transition-all duration-700 ease-in-out relative top-2 md:hidden`}>{open === "features" ? <FaAngleUp /> : <FaAngleDown />}</p>
                 </div>
                 <div className={`md:h-auto  overflow-hidden  h-0 transition-all duration-500 ease-in-out ${open === "features" && "h-96"}`}>
                    {
                    features.map((feature,index)=><p key={index} className='text-gray-300 hover:text-white cursor-pointer trensition-color duration-500'>{feature}</p>)
                    }
                 </div>

                
            </div>
            <div className="flex flex-col gap-4">
                <div className='flex w-full justify-between'>
                    <p className='text-gray-300 font-semibold text-xl' onClick={()=>setOpen((prev)=>prev === "partner" ? null : "partner")}>Partner </p>
                    <p className={`text-gray-300 text-xl transition-all duration-700 ease-in-out relative top-2 md:hidden`}>{open === "partner" ? <FaAngleUp /> : <FaAngleDown />}</p>
                 </div>
                <div className={`md:h-auto  overflow-hidden  h-0 transition-all duration-500 ease-in-out ${open === "partner" && "h-96"}`}>
                        {
                        partners.map((partner,index)=><p key={index} className='text-gray-300 hover:text-white cursor-pointer trensition-color duration-500'>{partner}</p>)
                        }
                
                </div>

            </div>
        </div>
        <div className='flex md:w-1/3 w-full px-2 md:items-start lg:w-1/5 flex-col md:mt-10 shrink-0 '>
            <div className="flex flex-col gap-4">
                <div className='flex w-full justify-between'>
                    <p className='text-gray-300 font-semibold text-xl' onClick={()=>setOpen((prev)=>prev === "resources" ? null : "resources")}>Resources </p>
                    <p className={`text-gray-300 text-xl transition-all duration-700 ease-in-out relative top-2 md:hidden`}>{open === "resources" ? <FaAngleUp /> : <FaAngleDown />}</p>
                 </div>
                 <div className={`md:h-auto  overflow-hidden  h-0 transition-all duration-500 ease-in-out ${open === "resources" && "h-96"}`}>
                    {
                    resources.map((resource,index)=><p key={index} className='text-gray-300 hover:text-white cursor-pointer trensition-color duration-500'>{resource}</p>)
                    }

                 </div>
           
                
            </div>
        
        </div>
        <div className='flex md:w-1/3 w-full px-2 md:items-start lg:w-1/5 flex-col md:mt-10 md:gap-4 shrink-0 '>
            <div className="flex flex-col gap-4">
                <div className='flex w-full justify-between'>
                    <p className='text-gray-300 font-semibold text-xl' onClick={()=>setOpen((prev)=>prev === "company" ? null : "company")}>Company </p>
                    <p className={`text-gray-300 text-xl transition-all duration-700 ease-in-out relative top-2 md:hidden`}>{open === "company" ? <FaAngleUp /> : <FaAngleDown />}</p>
                 </div>
                 <div className={`md:h-auto  overflow-hidden  h-0 transition-all duration-500 ease-in-out ${open === "company" && "h-96"}`} >
                        {
                        Companies.map((company,index)=><p key={index} className='text-gray-300 hover:text-white cursor-pointer trensition-color duration-500'>{company}</p>)
                        }

                 </div>
           
                
            </div>
            <div className="flex flex-col gap-4">
                <div className='flex w-full justify-between'>
                    <p className='text-gray-300 font-semibold text-xl' onClick={()=>setOpen((prev)=>prev === "support" ? null : "support")}>Support </p>
                    <p className={`text-gray-300 text-xl transition-all duration-700 ease-in-out relative top-2 md:hidden`}>{open === "support" ? <FaAngleUp /> : <FaAngleDown />}</p>
                 </div>
                 <div className={`md:h-auto  overflow-hidden  h-0 transition-all duration-500 ease-in-out ${open === "support" && "h-96"}`} >
                    <p  className='text-gray-300 hover:text-white cursor-pointer trensition-color duration-500'>Help Center</p>
                </div>
               
               
                
            </div>
        </div>
        </div>

        <div className='w-full flex-col md:flex-row gap-6 md:gap-0 flex h-auto my-10 md:items-start items-center md:justify-between'>
            <div>
                <p className='text-gray-200  font-semibold '>© {year} Shiprocket. All rights reserved.</p>
            </div>
            <div className='flex gap-4 flex-wrap justify-center '>
                <p className='text-gray-200  font-semibold border-r border-gray-300 pr-4 hover:text-burgundy cursor-pointer'>Privacy Policy</p>
                <p className='text-gray-200  font-semibold border-r border-gray-300 pr-4 hover:text-burgundy cursor-pointer'>Compliance</p>
                <p className='text-gray-200  font-semibold hover:text-burgundy cursor-pointer '>Refund & Cancellation Policy</p>
            </div>
        </div>


    </div>
  )
}

export default Footer