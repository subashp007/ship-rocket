import React,{useState,useEffect} from 'react'
import Quick from '../../assets/images/quick/quick.png'

function Navbar2() {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
 <div className={` ${!isSticky && "custom-gradient1" }py-4 sticky top-4 z-50`}>
       <div className='max-w-6xl mx-auto  '>
            <div   className={`w-full flex justify-between items-center  ${isSticky ? 'bg-[#ffffffa5] backdrop-blur-xl h-16 py-4 px-6 rounded-[50px]' : ''} transition-all duration-500 my-5`}>
                <img src={Quick} alt="Quick" className='h-10 w-20' />
                <button className={`bg-burgundy text-xl text-white h-10 w-32 text-center  ${isSticky ? "rounded-4xl":"rounded-lg"}`}>Try For Free</button>
            </div>
        </div>
 </div>
  )
}

export default Navbar2