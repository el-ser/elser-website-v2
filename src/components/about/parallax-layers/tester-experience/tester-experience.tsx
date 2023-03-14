import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { MutableRefObject } from "react";
import { GrTest } from "react-icons/gr";

import { terminalDetails } from "../../../../../config/about-page-data";

import AboutTerminal from "../about-terminal/about-terminal";
import CucumberIcon from "../../svg/tester-phase/cucumber-icon";
import JestIcon from "../../svg/tester-phase/jest-icon";
import NightwatchIcon from "../../svg/tester-phase/nightwatch-icon";

const { testerExperience } = terminalDetails;

const TesterExperience = React.forwardRef<IParallax, {}>((_props, ref) => {
  return (
    <>
      {/* test tube icon */}
      <ParallaxLayer offset={2.5} speed={0.1} style={{ zIndex: -10 }}>
        <div className="relative mt-[7vh]">
          <GrTest className="w-60 h-auto opacity-30 transition-theme" />
        </div>
      </ParallaxLayer>

      {/* cucumber icon */}
      <ParallaxLayer offset={2.1} speed={0.9} className="mt-[80vh]">
        <div className="relative w-2/5 opacity-40">
          <CucumberIcon />
        </div>
      </ParallaxLayer>

      {/* jest icon */}
      <ParallaxLayer offset={2.7} speed={0.5} className="mt-[60vh]">
        <div className="relative w-1/2 opacity-30 rotate-12 md:w-1/4">
          <JestIcon />
        </div>
      </ParallaxLayer>

      {/* nightwatch icon */}
      <ParallaxLayer offset={2} speed={0.2} className="mt-[7vh]">
        <div className="relative w-1/2 opacity-40 md:w-1/4">
          <NightwatchIcon />
        </div>
      </ParallaxLayer>

      {/* page 3 description */}
      <AboutTerminal
        offset={2}
        speed={2}
        sectionName="tester-exp"
        commandText={testerExperience.commandText}
        content={testerExperience.content}
        headerText={testerExperience.headerText}
        techStack={testerExperience.techStack}
        previousPageHandler={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(1)
        }
        nextPageHandler={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(3)
        }
      />
    </>
  );
});

export default TesterExperience;
