import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React from "react";
import Link from "next/link";
import { MutableRefObject } from "react";

import ResetParallaxArrow from "../../../common/reset-parallax-arrow/reset-parallax-arrow";
import PillButton from "../../../common/pill-button/pill-button";

import { timelineDetails } from "../../../../../config/experience-page-data";

const Hiring = React.forwardRef<IParallax, {}>((_props, ref) => {
  const offset = timelineDetails.length + 1;
  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={2}
        className="flex justify-center items-start">
        <h2 className="text-center text-color font-lexendDeca text-6xl font-bold pt-[25vh] md:text-8xl">
          HIRING?
        </h2>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offset}
        speed={1}
        className="flex flex-col gap-8 justify-center items-center pt-16">
        <p className="text-color font-ubuntuMono text-center text-2xl w-3/4 md:text-3xl">
          I'm always open for new opportunities! <br />
          Connect with me through my LinkedIn or directly download my CV!
        </p>
        <div className="flex gap-4">
          <PillButton>
            <Link href="https://www.linkedin.com/in/manuel-serafin-bugarin-636554144/">
              LinkedIn
            </Link>
          </PillButton>
          <PillButton>
            <Link href="https://github.com/el-ser">Resume</Link>
          </PillButton>
        </div>
      </ParallaxLayer>

      {/** Reset Arrow */}
      <ResetParallaxArrow
        offset={4}
        onClick={() => (ref as MutableRefObject<IParallax>).current.scrollTo(0)}
      />
    </>
  );
});

export default Hiring;
