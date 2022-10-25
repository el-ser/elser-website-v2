import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import { RefObject } from "react";
import Image from "next/image";

import TerminalContainer from "./terminal-container";

const IntoDevelopment = ({ parallax }: { parallax: RefObject<IParallax> }) => {
  return (
    <>
      {/* react icon */}
      <ParallaxLayer offset={3.1} speed={2} className="mt-[80vh]">
        <div className="relative w-60 h-60 opacity-40">
          <Image src="/assets/into-development/react.svg" layout="fill" />
        </div>
      </ParallaxLayer>

      {/* nodejs icon */}
      <ParallaxLayer offset={3.6} speed={1.3} className="mt-[70vh]">
        <div className="relative w-48 h-48 opacity-30">
          <Image src="/assets/into-development/nodejs.svg" layout="fill" />
        </div>
      </ParallaxLayer>

      {/* javascript icon */}
      <ParallaxLayer offset={3} speed={2.5} className="mt-[15vh]">
        <div className="relative w-60 h-60 opacity-40">
          <Image src="/assets/into-development/js.svg" layout="fill" />
        </div>
      </ParallaxLayer>

      {/* page 4 title */}
      <ParallaxLayer offset={3} speed={1.5}>
        <h1 className="flex justify-end text-right text-color font-lexendDeca text-4xl font-bold pt-[20vh] px-[5%]">
          Jumping Into Development
        </h1>
      </ParallaxLayer>

      {/* page 4 description */}
      <ParallaxLayer
        offset={3}
        speed={2.5}
        className="flex items-center justify-center font-poppins"
        onClick={() => parallax.current?.scrollTo(4)}
      >
        <TerminalContainer
          text={`With 5 years experience in software testing, I finally decided to pursue my passion for developing softwares. I took online courses on Udemy and LinkedIn Learning, watched YouTube tutorials, wrote blogs about the things I learned, and used my free time to put what I learned into practice. After several months of learning and applying for a developer position, I finally became a JavaScript Developer! `}
        />
      </ParallaxLayer>
    </>
  );
};

export default IntoDevelopment;
