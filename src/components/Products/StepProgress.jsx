// import { useState,} from "react";
// import step1 from "../../assets/images/products/step1.svg";
// import step2 from "../../assets/images/products/step2.svg";
// import step3 from "../../assets/images/products/step3.svg";

// const stepsConfig = [
//   {
//     name: "Step 1",
//     description: "Connect your sales channels & send us your products.",
//     image: step1,
//   },
//   {
//     name: "Step 2",
//     description: "We’ll store & manage them in our fulfillment centers.",
//     image: step2,
//   },
//   {
//     name: "Step 3",
//     description:
//       "Your orders will be fulfilled 24X7 for a blazing-fast delivery.",
//     image: step3,
//   },
// ];

// function StepProgress() {
//   return (
//     <div className="h-screen px-4 md:px-16 flex flex-col items-center">
//       <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
//       <CheckoutStepper stepsConfig={stepsConfig} />
//     </div>
//   );
// }

// export default StepProgress;

// function CheckoutStepper({ stepsConfig = [] }) {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);

//   if (!stepsConfig.length) return null;

//   const handleNext = () => {
//     setCurrentStep((prevStep) => {
//       if (prevStep === stepsConfig.length) {
//         setIsComplete(true);
//         return prevStep;
//       }
//       return prevStep + 1;
//     });
//   };

//   const progressBarWidth = ((currentStep - 1) / (stepsConfig.length - 1)) * 100;

//   const ActiveComponent = stepsConfig[currentStep - 1];

//   return (
//     <div className="w-full max-w-2xl">
//       {/* Step Circles */}
//       <div className="relative flex justify-between items-center w-full gap-x-6">
//         {stepsConfig.map((step, index) => (
//           <div
//             key={step.name}
//             className={`flex flex-col items-center transition-all duration-300 ${
//               currentStep > index + 1 || isComplete
//                 ? "text-green-600"
//                 : currentStep === index + 1
//                 ? "text-blue-500"
//                 : "text-gray-400"
//             }`}
//           >
//             <div
//               className={`flex items-center justify-center w-10 h-10 rounded-full font-bold border transition-all duration-300 ${
//                 currentStep > index + 1 || isComplete
//                   ? "bg-green-600 text-white border-green-600"
//                   : currentStep === index + 1
//                   ? "bg-blue-500 text-white border-blue-500"
//                   : "bg-gray-200 border-gray-400"
//               }`}
//             >
//               {currentStep > index + 1 || isComplete ? "✔" : index + 1}
//             </div>
//             <span className="text-sm mt-2">{step.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* Progress Bar */}
//       <div className="relative w-full h-2 bg-gray-200 rounded-full mt-4">
//         <div
//           className="absolute h-2 bg-green-600 rounded-full transition-all duration-500 ease-in-out"
//           style={{ width: `${progressBarWidth}%` }}
//         ></div>
//       </div>

//       {/* Step Description */}
//       <div className="relative w-64 h-64 mt-6 text-center rounded-md shadow-2xl bg-blue-200">
//         <div className="absolute inset-4 bg-gradient-to-br from-blue-300 to-white rounded-2xl">
//           <img
//             src={ActiveComponent.image}
//             alt={ActiveComponent.name}
//             className="mx-auto w-88 h-full mb-4 drop-shadow-2xl -mt-28"
//           />
//           <p className="text-lg text-gray-700">{ActiveComponent.description}</p>
//         </div>
//       </div>

//       {/* Next Button */}
//       {!isComplete && (
//         <div className="mt-6 flex justify-center">
//           <button
//             className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
//             onClick={handleNext}
//           >
//             {currentStep === stepsConfig.length ? "Finish" : "Next"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import step1 from "../../assets/images/products/step1.svg";
import step2 from "../../assets/images/products/step2.svg";
import step3 from "../../assets/images/products/step3.svg";
import { FaCheck } from "react-icons/fa";

const stepsConfig = [
  {
    name: "Step 1",
    description: "Connect your sales channels & send us your products.",
    image: step1,
  },
  {
    name: "Step 2",
    description: "We’ll store & manage them in our fulfillment centers.",
    image: step2,
  },
  {
    name: "Step 3",
    description:
      "Your orders will be fulfilled 24X7 for a blazing-fast delivery.",
    image: step3,
  },
];

function StepProgress() {
  return (
    <div className="h-screen flex flex-col bg-white items-center justify-center px-4 md:px-16">
      <h1 className="text-5xl text-center font-black text-blue-950 mb-4">
        How to {" "}
        <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent font-thin">
          get started
        </span>
      </h1>
      <p className="text-center text-base text-zinc-500 mb-8">
        Send us your inventory and let us take care of your order fulfillment
        process
      </p>
      <CheckoutStepper stepsConfig={stepsConfig} />
    </div>
  );
}

export default StepProgress;

function CheckoutStepper({ stepsConfig = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  if (!stepsConfig.length) return null;

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      }
      return prevStep + 1;
    });
  };

  const progressBarWidth = ((currentStep - 1) / (stepsConfig.length - 1)) * 100;

  return (
    <div className="w-full max-w-3xl">
      {/* Step Circles */}
      <div className="relative z-30 flex justify-between items-center w-full gap-x-6">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            className={`flex flex-col items-center transition-all duration-300 ${
              currentStep > index + 1 || isComplete
                ? "text-green-600"
                : currentStep === index + 1
                ? "text-blue-500"
                : "text-gray-400"
            }`}
          >
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-full font-bold border transition-all duration-300 ${
                currentStep > index + 1 || isComplete
                  ? "bg-green-600 text-white border-green-600"
                  : currentStep === index + 1
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-200 border-gray-400"
              }`}
            >
              {currentStep > index + 1 || isComplete ? (
                <>&#10004;</>
              ) : (
                index + 1
              )}
            </div>
            <span className="text-sm mt-2">{step.name}</span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="relative -top-19 w-full h-4 bg-gray-200 rounded-full mt-4">
        <div
          className="absolute h-4 bg-green-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>

      <div className="relative mt-6 flex space-x-1 overflow-visible w-full">
        {/* Changed overflow-hidden to overflow-visible */}
        {stepsConfig.slice(0, currentStep).map((step, index) => (
          <div
            key={step.name}
            className="relative w-64 h-64 p-6 bg-white shadow-2xl rounded-md flex flex-col items-center transition-transform duration-500"
            style={{ transform: `translateX(${index * 2}px)` }}
          >
            <div className="absolute inset-4 bg-gradient-to-br from-blue-300 to-white rounded-2xl">
              {/* Image Positioned Above the Step Box */}
              <img
                src={step.image}
                alt={step.name}
                className="relative top-[-100px] left-1/2 transform -translate-x-1/2 z-50 w-80 h-60" // Centering the image
              />
              <p className="text-gray-600 text-lg text-center -mt-28 px-2">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      {!isComplete && (
        <div className="mt-6 flex justify-center">
          <button
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
            onClick={handleNext}
          >
            {currentStep === stepsConfig.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
