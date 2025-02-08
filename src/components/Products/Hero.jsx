import heroVid from "../../assets/images/products/SRF_Banner_02.webm";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover -mt-16"
        src={heroVid}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-10 left-0 w-full h-full flex flex-col space-y-8 text-black px-4 md:px-16 text-left">
        <h1 className="text-2xl  text-blue-950 md:text-6xl w-1/2 font-bold max-w-3xl leading-16">
          Unleash the power of{" "}
          <span className="bg-gradient-to-r from-purple-600 to bg-yellow-200 bg-clip-text text-transparent">
            seamless
          </span>{" "}
          <br />{" "}
          <span className="bg-gradient-to-r from-blue-300 to bg-green-200 bg-clip-text text-transparent font-medium ">
            supply chain.
          </span>
        </h1>
        <p className="text-zinc-500 text-basic w-1/2">
          A comprehensive, tech-enabled, and end-to-end fulfillment solution
          designed for retail and eCommerce brands to streamline B2B and B2C
          operations, improve efficiency, and deliver a superior customer
          experience.
        </p>
        <button className="mt-4 w-fit bg-blue-500 font-semibold shadow-lg hover:bg-blue-600 rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-200 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Hero;
