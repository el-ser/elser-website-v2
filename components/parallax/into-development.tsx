import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { MutableRefObject, RefObject } from "react";
import Image from "next/image";

import TerminalContainer from "./terminal-container";

const IntoDevelopment = React.forwardRef<IParallax, {}>((_props, ref) => {
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
        <h2 className="flex justify-end text-right text-color font-lexendDeca text-5xl font-bold pt-[15vh] px-[5%]">
          Jumping Into Development
        </h2>
      </ParallaxLayer>

      {/* page 4 description */}
      <ParallaxLayer
        offset={3}
        speed={2.5}
        className="flex items-center justify-center font-poppins"
        onClick={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(4)
        }
      >
        <TerminalContainer fileText="yarn add jumping-into --dev">
          With 5 years experience in software testing, I finally decided to
          pursue my passion for developing softwares. I took online courses on
          Udemy and LinkedIn Learning, watched YouTube tutorials, wrote blogs
          about the things I learned, and used my free time to put what I
          learned into practice. After several months of learning and applying
          for a developer position, I finally became a JavaScript Developer!
        </TerminalContainer>
      </ParallaxLayer>
    </>
  );
});

export default IntoDevelopment;
