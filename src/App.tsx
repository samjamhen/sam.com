import { useState, useEffect } from "react";
import BrainCard from "./components/BrainCard";
import HeartCard from "./components/HeartCard";
import PencilCard from "./components/PencilCard";
import {
  intact1, intact2, intact3,
  genetecDev1, genetecDev2,
  illumiSonics1, illumiSonics2, illumiSonics3, illumiSonics4,
  genetecSupport1, genetecSupport2,
  habs, liverpewl,
  hawaii1, hawaii2, hawaii3, hawaii4,
  portugal1, portugal2, portugal3, portugal4,
  thai1, thai2, thai3, thai4,
  italy1, italy2, italy3, italy4,
  trayneTech, trayneGit, trayne1, trayne2, trayne3,
  campusMapTech, campusMapGit, campusMap1, campusMap2,
  carRentalTech, carRentalGit, carRental1, carRental2, carRental3,
  facialRecognitionTech, facialRecognitionGit, facialRecognition1, facialRecognition2, facialRecognition3,
  baseballTech, baseballGit, baseball1, baseball2, baseball3
} from "./constants/bulletPoints";

export default function App() {
  const bonhommeSvgs = [
    `${import.meta.env.BASE_URL}/assets/bonhomme.svg`,
    `${import.meta.env.BASE_URL}/assets/bonhommeMid.svg`,
    `${import.meta.env.BASE_URL}/assets/bonhommeBlink.svg`,
  ];

  const [currentBonhomme, setCurrentBonhomme] = useState(0);

  useEffect(() => {
    const blinkCycle = () => {
      // Show the "blink" state for a short time
      setCurrentBonhomme(1); // Blink
      setTimeout(() => {
        setCurrentBonhomme(2); // Closed eyes
        setTimeout(() => {
          setCurrentBonhomme(0); // Open eyes
        }, 200); // Time for the "closed" state
      }, 100); // Time for the "blink" state
    };

    // Set up an interval to trigger the blink cycle
    const interval = setInterval(() => {
      blinkCycle();
    }, 3000); // Time between blinks (adjust for blinking frequency)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const [isHoveredBrain, setIsHoveredBrain] = useState(false);
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHoveredPencil, setIsHoveredPencil] = useState(false);
  const [isHoveredHeadphones, setIsHoveredHeadphones] = useState(false);

  const [showBrain, setShowBrain] = useState(true);
  const [showBrainCards, setShowBrainCards] = useState(false);

  const [showHeart, setShowHeart] = useState(true);
  const [showHeartCards, setShowHeartCards] = useState(false);

  const [showPencil, setShowPencil] = useState(true);
  const [showPencilCards, setShowPencilCards] = useState(false);

  const [showHeadphones, setShowHeadphones] = useState(true);
  const [showHeadphonesCards, setShowHeadphonesCards] = useState(false);

  return (
    <div className="relative w-screen flex flex-col items-center min-h-screen py-2 font-roboto">
      <div id="left-boxes" className="absolute w-1/3 top-10 left-10 space-y-4">
        {showBrainCards && (
          <div className="animate-fadeIn absolute left-0 flex flex-col gap-4">
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
          <div className="animate-fadeIn absolute left-0 flex flex-col gap-4">
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

        {showPencilCards && (
          <div className="animate-fadeIn absolute left-0 flex flex-col gap-4">
            <PencilCard project="Campus Map Mobile Application" tech={campusMapTech} github={campusMapGit} points={[campusMap1, campusMap2]}/>
            <PencilCard project="Car Rental Management System" tech={carRentalTech} github={carRentalGit} points={[carRental1, carRental2, carRental3]}/>
            <PencilCard project="Lesson Offering App" tech={trayneTech} github={trayneGit} points={[trayne1, trayne2, trayne3]}/>
          </div>
        )}

        {showHeadphonesCards && (
          <div className="animate-fadeIn space-y-4">
            {/*<h1 className="font-bold">Favourite albums at the moment.</h1>*/}
          <iframe
            allow="autoplay *; encrypted-media *;"
            frameBorder={0}
            height={375}
            style={{ width: "100%", maxWidth: 660, borderRadius: 12 }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/son-of-spergy/1839352404"
          />

          <iframe
            allow="autoplay *; encrypted-media *;"
            frameBorder={0}
            height={375}
            style={{ width: "100%", maxWidth: 660, borderRadius: 12 }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/from-me-2-u-ep/1852540873"
          />
        </div>
        )}
      </div>

      <div id="name-box" className="flex flex-col items-center h-max">
        <div id="name-box-text" className="text-center h-max y-max mt-[100px] mb-[200px]">
          <h1 className="font-bold">sam.</h1>
        </div>
      </div>

      <div
        id="character-box"
        className="relative mt-4 w-[150px] h-[150px] flex items-center justify-center mb-[100px]"
      >
        <img
          src={bonhommeSvgs[currentBonhomme]}
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
            } z-20`}
            onClick={() => {
              setShowBrainCards(!showBrainCards);
              setShowHeart(!showHeart);
              setShowPencil(!showPencil);
              setShowHeadphones(!showHeadphones);
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
              setShowPencil(!showPencil);
              setShowHeadphones(!showHeadphones);
            }}
            onMouseEnter={() => setIsHoveredHeart(true)}
            onMouseLeave={() => setIsHoveredHeart(false)}
          />
        )}

        {showPencil && (
          <img
            src={`${import.meta.env.BASE_URL}/assets/pencil.svg`}
            alt="Pencil Icon"
            width={13}
            height={13}
            className={`absolute left-[118px] top-[93px] transition-transform ${
              isHoveredPencil ? "scale-110" : "scale-100"
            }`}
            onClick={() => {
              setShowPencilCards(!showPencilCards);
              setShowBrain(!showBrain);
              setShowHeart(!showHeart);
              setShowHeadphones(!showHeadphones);
            }}
            onMouseEnter={() => setIsHoveredPencil(true)}
            onMouseLeave={() => setIsHoveredPencil(false)}
          />
        )}

        {showHeadphones && (
          <img
            src={`${import.meta.env.BASE_URL}/assets/headphones.svg`}
            alt="Headphones Icon"
            width={100}
            height={100}
            className={`absolute left-[25px] bottom-[200px] transition-transform ${
              isHoveredHeadphones ? "scale-110" : "scale-100"
            } z-10`}
            onClick={() => {
              setShowHeadphonesCards(!showHeadphonesCards);
              setShowBrain(!showBrain);
              setShowHeart(!showHeart);
              setShowPencil(!showPencil);
            }}
            onMouseEnter={() => setIsHoveredHeadphones(true)}
            onMouseLeave={() => setIsHoveredHeadphones(false)}
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
          <div className="animate-fadeIn absolute right-0 flex flex-col gap-4">
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
          <div className="animate-fadeIn absolute right-0 flex flex-col gap-4">
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

        {showPencilCards && (
          <div className="animate-fadeIn absolute left-0 flex flex-col gap-4">
            <PencilCard project="Facial Emotion Recognition with Convolutional Neural Networks" tech={facialRecognitionTech} github={facialRecognitionGit} points={[facialRecognition1, facialRecognition2, facialRecognition3]}/>
            <PencilCard project="Baseball Data Analysis" tech={baseballTech} github={baseballGit} points={[baseball1, baseball2, baseball3]}/>
          </div>
        )}

        {showHeadphonesCards && (
          <div className="animate-fadeIn space-y-4">
            {/*<h1 className="font-bold">Favourite chunes at the moment.</h1>*/}
            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder={0}
              style={{ width: "100%", maxWidth: 660, borderRadius: 12, overflow: "hidden" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/dtmf/1787022393?i=1787023936&itscg=30200"
            />

            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder={0}
              style={{ width: "100%", maxWidth: 660, borderRadius: 12, overflow: "hidden" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/so-easy-to-fall-in-love/1817609404?i=1817609507"
            />

            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder={0}
              style={{ width: "100%", maxWidth: 660, borderRadius: 12, overflow: "hidden" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/i-know-you/1512318724?i=1512318907&itscg=30200"
            />

            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder={0}
              style={{ width: "100%", maxWidth: 660, borderRadius: 12, overflow: "hidden" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/the-recipe-feat-rema/1522795234?i=1522795688&itscg=30200"
            />

            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder={0}
              style={{ width: "100%", maxWidth: 660, borderRadius: 12, overflow: "hidden" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/raindance/1847992481?i=1847992612&itscg=30200
"
            />
          </div>
        )}
      </div>
    </div>
  );
}