import zomato from "../../assets/images/brands/zomato-logo.png";
import giva from "../../assets/images/brands/giva-logo.png";
import bellavita from "../../assets/images/brands/bellavita-logo.png";
import levis from "../../assets/images/brands/levis-logo.png";
import mamaearth from "../../assets/images/brands/mamaearth.webp";
import mCaffeine from "../../assets/images/brands/m-caffeine.webp";
import patanjali from "../../assets/images/brands/patanjali-logo.png";
import relaxo from "../../assets/images/brands/relaxo1.webp";
import samsung from "../../assets/images/brands/samsung.webp";
import bodycare from "../../assets/images/brands/body-care-re.png";
import akash from "../../assets/images/brands/akash.png";
import decathlon from "../../assets/images/brands/decathlone-logo.png";

const brands = [
  { name: "Zomato", logo: zomato },
  { name: "Giva", logo: giva },
  { name: "Bellavita", logo: bellavita },
  { name: "Levis", logo: levis },
  { name: "Mamaearth", logo: mamaearth },
  { name: "mCaffeine", logo: mCaffeine },
  { name: "Patanjali", logo: patanjali },
  { name: "Relaxo", logo: relaxo },
  { name: "Samsung", logo: samsung },
  { name: "Bodycare", logo: bodycare },
  { name: "Akash", logo: akash },
  { name: "Decathlon", logo: decathlon },
];

function SuccessStory() {
  return (
    <div className="bg-black space-y-8 py-8">
      <h1 className="text-zinc-300 text-center md:text-start text-2xl ml-2">
        Success Stories with{" "}
        <span className="text-white font-bold">3 Lakh+</span> eCommerce Brands
      </h1>
      <div className="overflow-hidden relative">
        <div className="flex gap-2 animate-marquee">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex-none w-40 h-16 border border-zinc-100 rounded-lg p-3 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuccessStory;
