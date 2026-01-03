type TravelProp = {
  country: string;
  date: string;
  pictures: string[]; // For travel cards
};

type SportsProp = {
  team: string;
  logo: string; // For sports cards
};

export default function HeartCard(props: TravelProp | SportsProp) {
  if ("pictures" in props) {
    // Travel Card
    const { country, date, pictures } = props as TravelProp;
    return (
      <div className="p-4 bg-white shadow-md rounded-lg w-full">
        <h2 className="text-lg font-bold">{country}</h2>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <div className="flex flex-wrap p-4">
          {pictures.map((picture, index) => (
            <a
              key={index}
              href={picture}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img
                src={picture}
                srcSet={`${picture}?w=400 400w, ${picture}?w=800 800w, ${picture}?w=1200 1200w`}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 800px"
                alt={`${country} - ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-[100px] h-auto rounded-md shadow-sm ml-2 mb-2"
              />
            </a>
          ))}
        </div>
      </div>
    );
  } else {
    // Sports Card
    const { team, logo } = props as SportsProp;
    return (
      <div className="p-4 bg-white shadow-md rounded-lg w-full flex flex-col">
        <h2 className="text-lg font-bold">{team}</h2>
        <div className="flex justify-center">
          <img
            src={logo}
            alt={`${team} Logo`}
            className="w-[130px] h-[130px] object-contain rounded-md"
          />
        </div>
      </div>
    );
  }
}