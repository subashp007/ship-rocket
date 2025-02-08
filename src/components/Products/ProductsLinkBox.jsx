import { Link } from "react-router-dom";

const productCategories = {
  Shipping: [
    {
      title: "Domestic-Shipping",
      desc: "Shipping to 19,000+ unique pin codes",
      menuIcon: "icon_path_here",
    },
    {
      title: "Cargo Shipping",
      desc: "Nationwide B2B & bulk shipping",
      menuIcon: "icon_path_here",
    },
    {
      title: "Quick",
      desc: "Speedy local deliveries at low costs",
      menuIcon: "icon_path_here",
    },
    {
      title: "Fulfillment",
      desc: "Warehousing, packaging & shipping services",
      menuIcon: "icon_path_here",
    },
  ],
  "Cross-Border": [
    {
      title: "ShipX",
      desc: "Shipping to 220+ countries & territories",
      menuIcon: "icon_path_here",
    },
    {
      title: "CargoX",
      desc: "Cross-border B2B & bulk shipping",
      menuIcon: "icon_path_here",
    },
  ],
  //   "Retail Enablement": [
  //     {
  //       title: "LaunchX",
  //       desc: "End-to-end unified retail enablement solution",
  //       menuIcon: "icon_path_here",
  //     },
  //   ],
  "Growth & Marketing": [
    {
      title: "Checkout",
      desc: "Effortless single-click checkout solution",
      menuIcon: "icon_path_here",
    },
    {
      title: "Engage 360",
      desc: "WhatsApp-centric marketing solutions",
      menuIcon: "icon_path_here",
    },
    {
      title: "Promise",
      desc: "EDD and trust badges for eCommerce",
      menuIcon: "icon_path_here",
    },
    {
      title: "ONDC",
      desc: "Enhanced digital visibility with ONDC",
      menuIcon: "icon_path_here",
    },
  ],
};

const serviceCategories = {
  "Financial Services": [
    {
      title: "Capital",
      desc: "Financial services support",
      menuIcon: "icon_path_here",
    },
    {
      title: "Credit Score",
      desc: "Credit score for free",
      menuIcon: "icon_path_here",
    },
  ],
  "AI-Enabled Products": [
    {
      title: "Sense",
      desc: "Turning Data into Power with APIs",
      menuIcon: "icon_path_here",
    },
    {
      title: "Trends",
      desc: "Consumer Behaviour and eCommerce Analytics",
      menuIcon: "icon_path_here",
    },
  ],
};

const valueAddedServices = [
  "Returns Management",
  "Delivery Boost",
  "Delight Tracking",
  "Instant COD",
  "Instant Pick Up",
  "Shiprocket Prime",
  "Omuni",
  "Packaging",
  "Co-Pilot",
  "Instant Exchange",
  "Express Shipping",
];

function ProductsLinkBox() {
  return (
    <div className="flex bg-white shadow-lg p-6 rounded-lg w-96">
      {/* Products Section */}
      <div className="bg-red-600 w-96">
        <div className="flex">
          {Object.entries(productCategories).map(([category, items]) => (
            <div
              key={category}
              className="mb-4 border-4 border-amber-400 space-x-44"
            >
              <h3 className="text-md text-zinc-200 w-fit bg-background-100">
                {category}
              </h3>
              {items.map((product) => (
                <div key={product.title} className="items-center w-fit gap-6">
                  <img src={product.menuIcon} alt="" className="w-4 h-4" />
                  <Link
                 
                    to={`/${product.title.toLowerCase()}`}
                    className="text-blue-600 hover:underline"
                  >
                    {product.title}
                  </Link>
                  <p>{product.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="">
          <h2 className="text-lg font-bold mt-4 mb-2">Services</h2>
          {Object.entries(serviceCategories).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h3 className="text-md font-semibold">{category}</h3>
              {items.map((service) => (
                <div key={service.title} className="flex items-center gap-2">
                  <img src={service.menuIcon} alt="" className="w-4 h-4" />
                  <Link to="#" className="text-blue-600 hover:underline">
                    {service.title}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Value-Added Services Section */}
      <div>
        <h2 className="text-lg font-bold mt-4 mb-2">Value-Added Services</h2>
        <div className="grid grid-cols-2 gap-2">
          {valueAddedServices.map((service) => (
            <Link
              key={service}
              to="#"
              className="text-blue-600 hover:underline"
            >
              {service}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsLinkBox;
