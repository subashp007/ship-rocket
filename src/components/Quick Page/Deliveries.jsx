import React from 'react'
import Delivery1 from '../../assets/images/quick/delivery1.png'
import Delivery2 from '../../assets/images/quick/delivery2.png'
import Delivery3 from '../../assets/images/quick/delivery3.png'
import Delivery4 from '../../assets/images/quick/delivery4.png'
import Delivery5 from '../../assets/images/quick/delivery5.png'
import Delivery6 from '../../assets/images/quick/delivery6.png'

function Deliveries() {
  const deliverys = [
    {img:Delivery1,text:"Lowest delivery charges",content:"Rates starting at just ₹10/km with 0 demand surge fee",color:"#fffded"},
    {img:Delivery2,text:"Fastest rider allocation",content:"Rider assigned in seconds even during peak hours",color:"#F6FFF0"},{
      img:Delivery3,text:"Delivery in minutes",content:"Orders are swiftly delivered right to their destinations ",color:"#edf6fc"
    },
    {img:Delivery4,text:"Multiple courier partners",content:"Top-rated couriers tailored to your hyperlocal delivery needs",color:"#F3F2FF"},
    {img:Delivery5,text:"24/7 deliveries",content:"Round-the-clock fast deliveries",color:"#fff6ed"},
    {img:Delivery6,text:"Uniform courier pricing",content:"A consistent, single and transparent rates for all couriers",color:"#fffded"}
  ]
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-0'>
        <h2 className='text-6xl font-semibold text-primes w-full text-center my-8'>We’ve got your <span className='text-gradient1'>local deliveries covered</span></h2>
        {
          deliverys.map((delivery,index) =>(
            <div style={{ backgroundColor: delivery.color }} className={`flex flex-col md:flex-row md:px-16 md:pt-16  px-5 pt-5  rounded-2xl my-20 gap-10 ${index===0 && "md:pb-16"} `} key={index}>
                <div className={`md:w-1/2 w-full flex flex-col gap-4   justify-center ${index%2 !==0 ? "md:order-2":""} `}>
                    <h3 className='text-4xl font-semibold text-primes'>{delivery.text}</h3>
                    <p className='text-gray-600 text-lg'>{delivery.content}</p>
                </div>
                <div className={`md:w-1/2 w-full ${index%2 ===0 ? "md:order-3":""}`}>
                    <img src={delivery.img} alt={delivery.text} className=' md:h-96'/>
                </div>
            </div>

          ))
        }

    </div>
  )
}

export default Deliveries