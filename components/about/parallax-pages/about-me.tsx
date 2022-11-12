import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";

import React, { useState, MutableRefObject, useEffect } from "react";
import TerminalContainer from "../../terminal-container";
import HeadphonesIcon from "../svg/about-me/headphones-icon";
import CameraIcon from "../svg/about-me/camera-icon";
import TravelIcon from "../svg/about-me/travel-icons";

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
      <ParallaxLayer
        offset={1}
        speed={2.5}
        className="flex flex-col gap-8 items-center justify-center font-poppins"
        onClick={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(2)
        }
      >
        <h2 className="text-color font-lexendDeca text-5xl font-bold pt-[5vh] hidden md:block">
          About Me
        </h2>
        <TerminalContainer
          hasCursor
          headerText="About Me"
          headerClass="md:hidden"
        >
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
            My name is Manuel Serafin Bugarin but people usually call me Macky.
            I graduated with a bachelor’s degree of Computer Science in Mapua
            University. Similar to others, my exposure to computer was through
            video games. Have you seen people playing LAN games in a local
            computer rental shops? Yeah, I used to be one of those kids. As I
            grew up, I developed interests to 🎸 music , 🎥 film making, and ✈️
            travelling!
          </p>
        </TerminalContainer>
      </ParallaxLayer>
    </>
  );
});

export default AboutMe;
