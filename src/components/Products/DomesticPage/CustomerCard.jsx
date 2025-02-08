import React, { useState } from "react";
import icon1 from "../../../assets/Domestic/cars.png";
import icon2 from "../../../assets/Domestic/car2.png";
import icon3 from "../../../assets/Domestic/car3.png";
import icon4 from "../../../assets/Domestic/car4.png";
import icon5 from "../../../assets/Domestic/car5.png";
import { IoIosArrowDropright } from "react-icons/io";

const data = [
  {
    img: icon1,
    desc: (
      <>
        How Car 101 Is Scaling Their <br />
        Business Using Shiprocket
      </>
    ),
  },
  {
    img: icon2,
    desc: (
      <>
        Growth Journey Of Little <br /> Rituals With Shiprocket
      </>
    ),
  },
  {
    img: icon3,
    desc: (
      <>
        Shiprocket In Conversation <br /> With Rimpi Juneja, Founder,
        <br /> Fuaark
      </>
    ),
  },
  {
    img: icon4,
    desc: (
      <>
        How Arata Simplified Their <br /> Post Purchase Process Using <br />
        Shiprocket
      </>
    ),
  },
  {
    img: icon5,
    desc: (
      <>
        Shiprocket, In Conversation <br /> With Desiree Pereira, Co- <br />
        Founder – Disguise <br /> Cosmetics
      </>
    ),
  },
];

const videoURL = "https://www.youtube.com/watch?v=sMKsLR-m7PA";

const Card = ({ img, desc }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-[#6A54CB] sm:h-[300px] md:h-[360px] p-8 rounded-xl shadow-lg 
    flex xs:flex-col md:flex-row xs:items-center xs:text-center justify-between items-center relative">
      
      <div className="space-y-4">
      
        <img className="w-40 object-contain xs:block xs:mx-auto sm:mx-auto md:mx-0" src={img} alt="img" />
        <h1 className="xs:text-3xl lg:text-4xl font-semibold text-white">
          {desc}
        </h1>
      </div>

      <div className="sm:mr-0 md:mr-20 lg:mr-44 xs:self-center">
        <button
          onClick={() => setShowVideo(true)}
          className="xs:w-16 xs:h-16 md:w-24 md:h-24 flex items-center justify-center text-white 
          bg-gradient-to-r from-orange-300 via-pink-400 to-purple-400 rounded-full mt-4 
          transition-transform duration-300 hover:scale-110"
        >
          <IoIosArrowDropright className="xs:w-14 xs:h-14 md:w-20 md:h-20" />
        </button>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <iframe
              className="rounded-lg shadow-xl sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[700px] lg:h-[600px]"
              src={videoURL}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

const Car1 = () => <Card img={data[0].img} desc={data[0].desc} />;
const Car2 = () => <Card img={data[1].img} desc={data[1].desc} />;
const Car3 = () => <Card img={data[2].img} desc={data[2].desc} />;
const Car4 = () => <Card img={data[3].img} desc={data[3].desc} />;
const Car5 = () => <Card img={data[4].img} desc={data[4].desc} />;

export { Car1, Car2, Car3, Car4, Car5 };
