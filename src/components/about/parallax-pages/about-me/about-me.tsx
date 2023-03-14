import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { MutableRefObject } from "react";

import { terminalDetails } from "../../../../../config/about-page-data";

import HeadphonesIcon from "../../svg/about-me/headphones-icon";
import CameraIcon from "../../svg/about-me/camera-icon";
import TravelIcon from "../../svg/about-me/travel-icons";
import AboutTerminal from "../../about-terminal/about-terminal";

const { aboutMe } = terminalDetails;

const AboutMe = React.forwardRef<IParallax, {}>((_props, ref) => {
  return (
    <>
      {/** headphone icon */}
      <ParallaxLayer offset={1.7} speed={2.5} className="mt-[15vh]">
        <div className="relative w-1/2 opacity-40 rotate-45 md:w-1/4">
          <HeadphonesIcon />
        </div>
      </ParallaxLayer>

      {/** travel icon */}
      <ParallaxLayer offset={1.2} speed={1.5} className="mt-[60vh]">
        <div className="relative opacity-40 md:w-1/2">
          <TravelIcon />
        </div>
      </ParallaxLayer>

      {/** camera icon */}
      <ParallaxLayer offset={1} speed={0.9} className="mt-[60vh]">
        <div className="relative w-1/2 opacity-50 -rotate-45 md:w-1/5">
          <CameraIcon />
        </div>
      </ParallaxLayer>

      {/* page 2 description */}
      <AboutTerminal
        offset={1}
        speed={1.1}
        sectionName="about-me"
        commandText={aboutMe.commandText}
        content={aboutMe.content}
        headerText={aboutMe.headerText}
        previousPageHandler={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(0)
        }
        nextPageHandler={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(2)
        }
      />
    </>
  );
});

export default AboutMe;
