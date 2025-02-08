import DeliveryEfficiency from "../../assets/images/products/deliverEfficiency.webm";

const efficiencies = [
  "20% lower shipping costs",
  "60% lesser RTO losses",
  "99.9% accurate operations",
  "0 weight discrepancies",
];

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={DeliveryEfficiency}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-10 left-0 w-1/2 h-full flex flex-col px-4 md:px-16 text-left">
        <span className="text-white">BUILT FOR SCALE</span>
        <h1 className="text-2xl  text-white md:text-5xl font-bold max-w-3xl leading-16">
          <span className="bg-gradient-to-r from-blue-600 to bg-sky-400 bg-clip-text text-transparent font-medium ">
            Deliver efficiency <br />
          </span>
          in every direction
        </h1>
        <p className="text-white text-basic mb-4">
          Use our all-in-one tech stack to optimise your supply chain, making
          eCommerce fulfillment more efficient than ever.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {efficiencies.map((efficiency, index) => {
            const words = efficiency.split(" ");
            return (
              <div
                key={index}
                className="flex justify-center items-center bg-[#445AD5] p-4 transition-all shadow-[8px_8px_0px_white] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]"
              >
                <p className="text-white text-3xl font-bold">
                  <span>{words[0]}</span> <br />
                  <span className="text-base">
                    {words.slice(1).join(" ")}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
