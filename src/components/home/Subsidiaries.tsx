import Image from "next/image";

export default function Subsidiaries() {
  const subsidiaries = [
    {
      name: "KCE",
      tagline: "Construction, Energy & Mining",
      image: "/kce.webp",
      items: [
        "Infrastructure- Development of road infrastructure, modern housing, and sustainable public buildings",
        "Energy- Innovative electrification solutions for both rural and urban areas",
        "Mines- Development of mineral resources (iron, cement) to strengthen a competitive national industry",
      ],
      imageRounded: "rounded-2xl",
    },
    {
      name: "Agritech",
      tagline: "Agricultural Innovation & Agro-Industry",
      image: "/agritech.webp",
      items: [
        "Agricultural Technologies- Smart irrigation systems and surveillance drones to optimize yields",
        "Mechanization- Rental and sale of modern agricultural equipment suited to local conditions",
        "Optimization- Digital traceability solutions and online platforms connecting producers and buyers",
      ],
      imageRounded: "rounded-xl",
    },
    {
      name: "Kane Services",
      tagline: "Import–Export & Distribution",
      image: "/kane-services.webp",
      items: [
        "Agricultural Technologies- Smart irrigation systems and surveillance drones to optimize yields",
        "Mechanization- Rental and sale of modern agricultural equipment suited to local conditions",
        "Optimization- Digital traceability solutions and online platforms connecting producers and buyers",
      ],
      imageRounded: "rounded-xl",
    },
  ];

  return (
    <section className="flex flex-col gap-6 sm:gap-8 lg:gap-16 items-center lg:items-start w-full text-white px-4 sm:px-8 lg:px-24 py-12 sm:py-16 overflow-x-hidden">
      <div className="flex flex-col gap-2 sm:gap-1.5 items-center lg:items-start w-full">
        <h2 className="font-normal text-2xl sm:text-3xl lg:text-4xl leading-[1.33] text-white w-full text-center lg:text-left">
          Our Strategic Subsidiaries
        </h2>
        <p className="font-light text-sm sm:text-base lg:text-xl leading-[1.51] text-white w-full text-center lg:text-left">
          Empowering progress through a diversified network of specialized ventures.
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center lg:items-start w-full">
        {subsidiaries.map((subsidiary, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center lg:items-start w-full gap-6 ${
                index === 0 ? "lg:gap-7" : "lg:gap-7.5"
              }`}
            >
              <div className="relative h-64 sm:h-72 lg:h-[400px] w-full lg:w-[576px] xl:w-[576px] shrink-0">
                <Image
                  src={subsidiary.image}
                  alt={subsidiary.name}
                  fill
                  className={`object-cover ${subsidiary.imageRounded}`}
                />
              </div>
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-6 items-center lg:items-start flex-1 w-full lg:w-auto">
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-6 items-center lg:items-start w-full">
                <div className="flex flex-col items-center lg:items-start leading-[1.51] w-full gap-1">
                  <h3 className="font-normal text-xl sm:text-2xl lg:text-3xl text-white w-full text-center lg:text-left">
                    {subsidiary.name}
                  </h3>
                  <p className="font-normal text-sm sm:text-base lg:text-xl text-[#e3e3e3] w-full text-center lg:text-left">
                    {subsidiary.tagline}
                  </p>
                </div>
                <ul className="block leading-0 text-[#e3e3e3] text-sm sm:text-base lg:text-lg w-full list-disc text-left">
                  {subsidiary.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`leading-[1.95] my-2 ml-7 ${
                        itemIndex === subsidiary.items.length - 1 ? "" : "mb-0"
                      }`}
                    >
                      <span className="leading-[1.95]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-transparent border border-solid border-white flex items-center justify-center px-4 py-2 lg:p-2.5 rounded-3xl w-full sm:w-52 hover:opacity-90 transition-opacity">
                <p className="font-normal leading-[1.51] text-sm sm:text-base lg:text-xl text-center whitespace-nowrap text-white">
                  Learn More
                </p>
              </button>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}

