type CardProps = {
    title: string;
    company: string;
    location: string;
    date: string;
    points: string[];
  };
  
  export default function BrainCard({ title, company, location, date, points }: CardProps) {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg w-full">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm font-bold">{company}</p>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <div className="p-4">
          <ul className="list-disc text-gray-800">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }