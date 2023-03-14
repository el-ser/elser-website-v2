import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { MutableRefObject } from "react";
import { SiNextdotjs } from "react-icons/si";

import { terminalDetails } from "../../../../../config/about-page-data";

import AboutTerminal from "../../about-terminal/about-terminal";
import ReactIcon from "../../svg/into-development/react-icon";
import JavaScriptIcon from "../../svg/into-development/javascript-icon";
import NodejsIcon from "../../svg/into-development/nodejs-icon";

const { developerExperince } = terminalDetails;

const DeveloperExperience = React.forwardRef<IParallax, {}>((_props, ref) => {
  return (
    <>
      {/* next js icon */}
      <ParallaxLayer offset={3.5} speed={0.1} style={{ zIndex: -10 }}>
        <div className="relative mt-[30vh]">
          <SiNextdotjs className="transition-theme w-52 h-auto opacity-30 md:w-80" />
        </div>
      </ParallaxLayer>
      {/* react icon */}
      <ParallaxLayer offset={3.1} speed={0.6} className="mt-[80vh]">
        <div className="relative w-1/2 opacity-40 ">
          <ReactIcon />
        </div>
      </ParallaxLayer>

      {/* nodejs icon */}
      <ParallaxLayer offset={3.6} speed={0.2} className="mt-[70vh]">
        <div className="relative w-2/5 opacity-30 md:w-1/4">
          <NodejsIcon />
        </div>
      </ParallaxLayer>

      {/* javascript icon */}
      <ParallaxLayer offset={3} speed={1.3} className="mt-[15vh]">
        <div className="relative w-1/2 opacity-40 md:w-1/4">
          <JavaScriptIcon />
        </div>
      </ParallaxLayer>

      {/* page 4 description */}
      <AboutTerminal
        offset={3}
        speed={1.7}
        sectionName="developer-exp"
        commandText={developerExperince.commandText}
        content={developerExperince.content}
        headerText={developerExperince.headerText}
        techStack={developerExperince.techStack}
        previousPageHandler={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(2)
        }
        nextPageHandler={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(4)
        }
      />
    </>
  );
});

export default DeveloperExperience;
