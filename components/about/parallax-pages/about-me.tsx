import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { useState, MutableRefObject, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import TerminalContainer from "../../common/terminal-container";
import HeadphonesIcon from "../svg/about-me/headphones-icon";
import CameraIcon from "../svg/about-me/camera-icon";
import TravelIcon from "../svg/about-me/travel-icons";

const HEADER_TEXT = "About Myself";

const AboutMe = React.forwardRef<IParallax, {}>((_props, ref) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

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
      <ParallaxLayer offset={1} speed={2.5}>
        <section
          title="about-me-section"
          id="about-me-section"
          className="flex flex-col h-full gap-8 items-center justify-center font-poppins">
          <h2 className="text-color font-lexendDeca text-5xl font-bold pt-[5vh] hidden md:block">
            {HEADER_TEXT}
          </h2>
          <div className="flex flex-row justify-center items-center">
            <FaAngleLeft
              className="change-offset-button"
              onClick={() => {
                (ref as MutableRefObject<IParallax>).current?.scrollTo(0);
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
                el-ser@MacBook ~ % yarn init --aboutme
                <br />
                <br />
                Hi! My name is Manuel Serafin Bugarin but you can call me Macky.
                I am a computer science graduate from Mapua University and
                currently working as a software developer.
              </p>
            </TerminalContainer>
            <FaAngleRight
              className="change-offset-button"
              onClick={() => {
                (ref as MutableRefObject<IParallax>).current?.scrollTo(2);
              }}
            />
          </div>
        </section>
      </ParallaxLayer>
    </>
  );
});

export default AboutMe;
