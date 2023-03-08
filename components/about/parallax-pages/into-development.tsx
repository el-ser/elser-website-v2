import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { MutableRefObject, useState, useEffect } from "react";
import { SiNextdotjs } from "react-icons/si";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import TerminalContainer from "../../common/terminal-container";
import ReactIcon from "../svg/into-development/react-icon";
import JavaScriptIcon from "../svg/into-development/javascript-icon";
import NodejsIcon from "../svg/into-development/nodejs-icon";

const HEADER_TEXT = "Road to Developer";

const IntoDevelopment = React.forwardRef<IParallax, {}>((_props, ref) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

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
      <ParallaxLayer offset={3} speed={2.5}>
        <section
          title="into-development-section"
          id="into-development-section"
          className="flex flex-col gap-8 h-full items-center justify-center font-poppins">
          <h2 className="text-center text-color font-lexendDeca text-5xl font-bold pt-[5vh] hidden md:block">
            {HEADER_TEXT}
          </h2>
          <div className="flex flex-row justify-center items-center">
            <FaAngleLeft
              className="change-offset-button"
              onClick={() => {
                (ref as MutableRefObject<IParallax>).current?.scrollTo(2);
              }}
            />
            <TerminalContainer
              hasCursor
              headerText={HEADER_TEXT}
              headerClass="md:hidden">
              <p>
                {`Last login: ${dateState.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  day: "numeric",
                  month: "long",
                  hour12: true,
                })} `}
                <br />
                el-ser@MacBook ~ % yarn add jumping-into --dev
                <br />
                <br />
                With 6 years experience in software testing, I finally decided
                to pursue my passion for developing softwares. I took online
                courses on Udemy and LinkedIn Learning, watched YouTube
                tutorials, wrote blogs about the things I learned, and used my
                free time to practice. After several months of learning and
                submitting resume, I finally became Software Developer!
              </p>
            </TerminalContainer>
            <FaAngleRight
              className="change-offset-button"
              onClick={() => {
                (ref as MutableRefObject<IParallax>).current?.scrollTo(4);
              }}
            />
          </div>
        </section>
      </ParallaxLayer>
    </>
  );
});

export default IntoDevelopment;
