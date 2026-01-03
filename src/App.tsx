import { useState } from "react";
import BrainCard from "./components/BrainCard";
import HeartCard from "./components/HeartCard";
import {
  intact1, intact2, intact3,
  genetecDev1, genetecDev2,
  illumiSonics1, illumiSonics2, illumiSonics3, illumiSonics4,
  genetecSupport1, genetecSupport2,
  habs, liverpewl,
  hawaii1, hawaii2, hawaii3, hawaii4,
  portugal1, portugal2, portugal3, portugal4,
  thai1, thai2, thai3, thai4,
  italy1, italy2, italy3, italy4
} from "./constants/bulletPoints";

export default function App() {
  const [isHoveredBrain, setIsHoveredBrain] = useState(false);
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);

  const [showBrain, setShowBrain] = useState(true);
  const [showBrainCards, setShowBrainCards] = useState(false);

  const [showHeart, setShowHeart] = useState(true);
  const [showHeartCards, setShowHeartCards] = useState(false);

  return (
    <div className="relative w-screen flex flex-col items-center justify-center min-h-screen py-2 font-roboto">
      <div id="left-boxes" className="absolute w-1/3 top-10 left-10 space-y-4">
        {showBrainCards && (
          <div className="absolute left-0 flex flex-col gap-4">
            <BrainCard
              title="Backend Software Developer"
              company="Intact Insurance"
              location="Montreal, QC"
              date="Fall 2025"
              points={[intact1, intact2, intact3]}
            />
            <BrainCard
              title="F# Software Developer"
              company="Genetec"
              location="Montreal, QC"
              date="Fall 2024"
              points={[genetecDev1, genetecDev2]}
            />
          </div>
        )}

        {showHeartCards && (
          <div className="absolute left-0 flex flex-col gap-4">
            <HeartCard team="Les Canadiens de Montréal" logo={habs} />
            <HeartCard
              country="Hawaii"
              date="May 2023"
              pictures={[hawaii1, hawaii2, hawaii3, hawaii4]}
            />
            <HeartCard
              country="Portugal"
              date="May 2024"
              pictures={[portugal1, portugal2, portugal3, portugal4]}
            />
          </div>
        )}
      </div>

      <div id="name-box" className="flex flex-col items-center h-max">
        <div id="name-box-text" className="text-center h-max mb-[150px]">
          <h1 className="font-bold">sam.</h1>
        </div>
      </div>

      <div
        id="character-box"
        className="relative mt-4 w-[150px] h-[150px] flex items-center justify-center"
      >
        <img
          src={`${import.meta.env.BASE_URL}/assets/bonhomme.svg`}
          alt="Bonhomme Character"
          width={150}
          height={150}
        />

        {showBrain && (
          <img
            src={`${import.meta.env.BASE_URL}/assets/brain.svg`}
            alt="Brain Icon"
            width={40}
            height={40}
            className={`absolute left-[55px] bottom-[227px] transition-transform ${
              isHoveredBrain ? "scale-110" : "scale-100"
            }`}
            onClick={() => {
              setShowBrainCards(!showBrainCards);
              setShowHeart(!showHeart);
            }}
            onMouseEnter={() => setIsHoveredBrain(true)}
            onMouseLeave={() => setIsHoveredBrain(false)}
          />
        )}

        {showHeart && (
          <img
            src={`${import.meta.env.BASE_URL}/assets/heart.svg`}
            alt="Heart Icon"
            width={35}
            height={35}
            className={`absolute left-[70px] top-[-16px] transition-transform ${
              isHoveredHeart ? "scale-110" : "scale-100"
            }`}
            onClick={() => {
              setShowHeartCards(!showHeartCards);
              setShowBrain(!showBrain);
            }}
            onMouseEnter={() => setIsHoveredHeart(true)}
            onMouseLeave={() => setIsHoveredHeart(false)}
          />
        )}
      </div>

      <div id="socials-box" className="flex flex-col">
        <div id="socials-box-text" className="mt-[150px]">
          <a
            href="https://github.com/samjamhen"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            @github
          </a>

          <a
            href="mailto:sa_hend@live.concordia.ca"
            className="block text-center text-blue-500 hover:text-blue-700 transition-colors duration-200 mt-4"
          >
            sa_hend@live.concordia.ca
          </a>
        </div>
      </div>

      <div id="right-boxes" className="absolute w-1/3 top-10 right-10 space-y-4">
        {showBrainCards && (
          <div className="absolute right-0 flex flex-col gap-4">
            <BrainCard
              title="Engineering Assistant"
              company="illumiSonics"
              location="Waterloo, ON"
              date="Summer 2025"
              points={[illumiSonics1, illumiSonics2, illumiSonics3, illumiSonics4]}
            />
            <BrainCard
              title="Commercial Product Support Coordinator"
              company="Genetec"
              location="Montreal, QC"
              date="Fall 2023"
              points={[genetecSupport1, genetecSupport2]}
            />
          </div>
        )}

        {showHeartCards && (
          <div className="absolute right-0 flex flex-col gap-4">
            <HeartCard
              country="Thailand"
              date="January 2025"
              pictures={[thai1, thai2, thai3, thai4]}
            />
            <HeartCard
              country="Italy"
              date="August 2025"
              pictures={[italy1, italy2, italy3, italy4]}
            />
            <HeartCard team="Liverpool FC" logo={liverpewl} />
          </div>
        )}
      </div>
    </div>
  );
}
