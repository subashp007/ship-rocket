import React,{useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


import Logo from '../../assets/images/quick/Logo.png'
function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <div className='w-full border-b border-b-gray-300 border-dashed '>
    <nav className='max-w-6xl mx-auto p-2 h-10 hidden md:block z-20  mb-6 '>
        <div className="flex justify-between items-center ">
            <div className="logo">
                <img src={Logo} alt="logo" className='h-12' />

            </div>
            <div className="links">
                <ul className='flex gap-5 text-gray-500'>
                    <li className='flex'>Products <FaChevronDown className='relative top-2 left-1' /></li>
                    <li className='flex'>Platform <FaChevronDown className='relative top-2 left-1' /></li>
                    <li>Track Order</li>
                    <li className='flex'>Resources <FaChevronDown className='relative top-2 left-1' /></li>
                    <li className='text-[#735ae5;]'>Quick</li>
                </ul>
            </div>
        
        </div>
    
    </nav>
    {/* mobile view */}
    <nav className='md:hidden  '>
        <div className={`flex justify-between p-2 border-b border-dashed border-gray-400 ${open ? "z-50 fixed" :"z-0"}`}>
            <img src={Logo} alt="logo" />
            <div className="button">
                <button onClick={() => setOpen(!open)} className='text-2xl cursor-pointer '>
                    <RiMenu3Line />
            
                </button>
                
                

            </div>
        </div>
        {open && (        <div className='mt-3 fixed -top-2 left-0 bottom-0 right-0 bg-white z-50 md:-z-10  '> 
            <ul className=' flex flex-col gap-6'>
                <li className='relative text-2xl cursor-pointer w-full flex justify-end top-3 right-5' onClick={() => setOpen(!open)} ><IoMdClose /></li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Products</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Platform</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Pricing</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Partners</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Track Order</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Resources</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Quick</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Login</li>

            </ul>
            <button className='w-80 mx-6 text-center border-0 rounded-lg text-xl py-2 bg-[#735ae5] text-white  my-6'>Try For Free</button>

        </div>)}

    </nav>
    


    </div>
  )
}

export default Navbar