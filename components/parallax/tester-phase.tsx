import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { MutableRefObject } from "react";
import Image from "next/image";

import TerminalContainer from "./terminal-container";

const TesterPhase = React.forwardRef<IParallax, {}>((_props, ref) => {
  return (
    <>
      {/* cucumber icon */}
      <ParallaxLayer offset={2.1} speed={1.3} className="mt-[80vh]">
        <div className="relative w-36 h-36 opacity-40">
          <Image
            src="/assets/tester-phase/cucumber-colored.svg"
            layout="fill"
          />
        </div>
      </ParallaxLayer>

      {/* jest icon */}
      <ParallaxLayer offset={2.7} speed={3} className="mt-[70vh]">
        <div className="relative w-48 h-48 opacity-30 rotate-12">
          <Image src="/assets/tester-phase/jest.svg" layout="fill" />
        </div>
      </ParallaxLayer>

      {/* nightwatch icon */}
      <ParallaxLayer offset={2.15} speed={1} className="mt-[7vh]">
        <div className="relative w-28 h-28 opacity-40">
          <Image src="/assets/tester-phase/nightwatchjs.svg" layout="fill" />
        </div>
      </ParallaxLayer>

      {/* page 3 title */}
      <ParallaxLayer offset={2} speed={1.5}>
        <h2 className="flex justify-center text-color font-lexendDeca text-5xl font-bold pt-[15vh] px-[5%]">
          Tester Phase
        </h2>
      </ParallaxLayer>

      {/* page 3 description */}
      <ParallaxLayer
        offset={2}
        speed={2.5}
        className="flex items-center justify-center font-poppins"
        onClick={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(3)
        }
      >
        <TerminalContainer fileText="yarn test">
          Fast forward after graduating college in 2016, I started my career as
          a Test Automation Engineer in a company called Deltek. I didn’t know
          testing was a thing in software development so I invested my time
          learning about software testing. As time goes by, new frameworks and
          libraries became trend in software development such as ReactJS and
          AngularJS. It offered better developer experience compared to the ones
          I learned during college which led to asking myself “maybe I could be
          a developer again?”.
        </TerminalContainer>
      </ParallaxLayer>
    </>
  );
});

export default TesterPhase;
