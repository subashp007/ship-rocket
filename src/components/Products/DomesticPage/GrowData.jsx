import React from "react";

export const GrowData = () => {
  const components = [
    {
      title: "12+",
      description: (
        <>
          Sales Channel <br />
          Integration
        </>
      ),
      bgColor: "from-orange-200",
      textColor: "text-[#0B0757]",
    },
    { title: "25+", description: "courier partners" },
    { title: "20%", description: "lower shipping cost" },
    { title: "45%", description: "lesser RTO losses" },
  ];

  return (
    <div className="mb-4 mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-10 justify-between border-b-3 text-gray-400 pb-3 border-dotted">
      {components.map((component, index) => (
        <div key={index} className="mb-4">
          <h1 className={`text-[#0B0757] text-4xl font-bold relative pl-4`}>
            {component.title}
            <span className="absolute left-0 top-0 h-[95px] w-1 bg-gradient-to-b from-purple-400 via-purple-700 to-orange-400"></span>
          </h1>
          <p className="text-gray-600 text-lg pl-3 text-lg tracking-tight py-2 font-TWKLausanne">
            {component.description}
          </p>
        </div>
      ))}
    </div>
  );
};
