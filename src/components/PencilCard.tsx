type CardProps = {
    project: string;
    tech: string;
    github: string;
    points: string[];
  };
  
  export default function BrainCard({ project, tech, github, points }: CardProps) {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg w-full">
        <h2 className="text-lg font-bold">
            <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            >
            {project}
            </a>
        </h2>
        <p className="text-sm text-gray-600">{tech}</p>
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