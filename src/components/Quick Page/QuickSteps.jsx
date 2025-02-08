import React from 'react'
import Step1 from '../../assets/images/quick/step1.png'
import Step2 from '../../assets/images/quick/step2.png'
import Step3 from '../../assets/images/quick/step3.png'
import Step4 from '../../assets/images/quick/step4.png'
import Step5 from '../../assets/images/quick/step5.png'

function QuickSteps() {
  const steps=[{img:Step1,step:"Effortlessly place a shipment request"},{img:Step2,step:"A rider will be assigned in seconds"},{img:Step3,step:"Rider will head towards the pickup location"},{img:Step4,step:"Rider will pick up your order from the location"},{img:Step5,step:"Your order will get delivered in minutes"}]
  return (
    <div className='bg-[#f6fafe] w-full py-20 '>
      <div className='max-w-6xl mx-auto lg:px-4'>
              <h2 className=' text-6xl font-semibold text-primes'>
              5 steps for <span className='text-gradient1'>QUICKest deliveries</span>
              </h2>
      </div>

              <div className='flex gap-14 overflow-scroll overflow-x-auto scrollbar-hidden py-10 lg:px-2 px-8'>
                {
                  steps.map((step,index)=>(
                    <div className={`h-60 w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-2xl flex flex-col gap-6 justify-between p-6 shrink-0 ${index ===0 ? "lg:ml-40":"ml-0"}`} key={index}>
                      <img src={step.img} alt={step.img} className='w-14 h-14'/>
                      <p className='py-2 px-4 text-center bg-[#e8e3ff]  rounded-lg text-primes w-1/3'>Step {index+1}</p>
                      <p className='text-gray-600 text-xl'>{step.step}</p>
    
                  
                    </div>))
                }

              </div>
    </div>
  )
}

export default QuickSteps