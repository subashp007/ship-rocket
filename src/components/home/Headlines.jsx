import thestatesman from "../../assets/images/headlines/news-logo-1.png";
import zee from "../../assets/images/headlines/news-logo-2.png";
import indianexpress from "../../assets/images/headlines/news-logo-3.png";
import bwbussiness from "../../assets/images/headlines/news-logo-4.png";
import inc24 from "../../assets/images/headlines/news-logo-5.png";
import yourstory from "../../assets/images/headlines/news-logo-6.png";
import deccan from "../../assets/images/headlines/news-logo-7.png";
import asianage from "../../assets/images/headlines/news-logo-8.png";
import dataquest from "../../assets/images/headlines/news-logo-9.png";
import economicstimes from "../../assets/images/headlines/news-logo-10.png";
import cnbc from "../../assets/images/headlines/news-logo-11.png";

const headlines = [
  { name: "The Statesman", logo: thestatesman },
  { name: "Zee News", logo: zee },
  { name: "Indian Express", logo: indianexpress },
  { name: "BW Businessworld", logo: bwbussiness },
  { name: "Inc42", logo: inc24 },
  { name: "YourStory", logo: yourstory },
  { name: "Deccan Herald", logo: deccan },
  { name: "Asian Age", logo: asianage },
  { name: "DataQuest", logo: dataquest },
  { name: "Economic Times", logo: economicstimes },
  { name: "CNBC", logo: cnbc },
];


function Headlines() {
  return (
    <div className="bg-zinc-100 space-y-8 py-8">
      <h1 className="text-zinc-900 px-4 font-manrope text-start text-3xl md:text-5xl ml-2">
        Shiprocket Making Headlines
      </h1>
      <div className="overflow-hidden relative">
        <div className="flex gap-2 animate-marquee">
          {headlines.map((headline, index) => (
            <div
              key={index}
              className="flex-none w-40 h-16 rounded-lg flex items-center justify-center"
            >
              <img
                src={headline.logo}
                alt={headline.name}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Headlines;
