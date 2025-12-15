export default function Expertise() {
  const expertiseFields = [
    {
      title: "Infrastructure",
      description: "Development of transformative, large-scale structural projects",
    },
    {
      title: "Energy",
      description: "Development of transformative, large-scale structural projects",
    },
    {
      title: "Agro-Industry",
      description: "Modernization and sustainable transformation of agriculture",
    },
  ];

  return (
    <section className="flex flex-col gap-6 sm:gap-8 lg:gap-12 items-center w-full text-white px-4 sm:px-8 lg:px-24 py-12 sm:py-16 overflow-x-hidden">
      <div className="flex flex-col gap-2 sm:gap-1.5 items-center w-full max-w-full">
        <h2 
          className="font-normal text-2xl sm:text-3xl lg:text-4xl leading-[1.33] text-white w-full text-center"
        >
          Our Fields of Expertise
        </h2>
        <p 
          className="font-light text-sm sm:text-base lg:text-xl leading-[1.51] text-white w-full text-center px-2"
        >
          Exploring the Core Sectors That Drive Our Impact
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-stretch w-full">
        {expertiseFields.map((field, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#001f12] to-[#003e25] flex flex-col min-h-[300px] sm:h-[352px] lg:h-[400px] items-start justify-end overflow-clip px-6 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-9 rounded-2xl w-full sm:flex-1"
          >
            <div className="flex flex-col gap-2 sm:gap-1.5 items-center lg:items-start leading-[1.51] w-full">
              <h3 
                className="font-normal text-xl sm:text-2xl lg:text-3xl text-white w-full text-center lg:text-left"
              >
                {field.title}
              </h3>
              <p 
                className="font-light text-[#f1f1f1] text-sm sm:text-base lg:text-xl w-full text-center lg:text-left"
              >
                {field.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

