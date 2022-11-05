import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";

import React, { useState, MutableRefObject, useEffect } from "react";
import TerminalContainer from "../../terminal-container";

const AboutMe = React.forwardRef<IParallax, {}>((_props, ref) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <>
      {/** headphone icon */}
      <ParallaxLayer offset={1.7} speed={2.5} className="mt-[15vh]">
        <div className="relative w-40 h-40">
          <Image
            src="/assets/about-me/headphones.svg"
            layout="fill"
            className="opacity-60 rotate-45"
          />
        </div>
      </ParallaxLayer>

      {/** travel icon */}
      <ParallaxLayer offset={1.2} speed={1.5} className="mt-[60vh]">
        <div className="relative w-96 h-96">
          <Image
            src="/assets/about-me/travel.svg"
            layout="fill"
            className="opacity-60"
          />
        </div>
      </ParallaxLayer>

      {/** camera icon */}
      <ParallaxLayer offset={1} speed={0.9} className="mt-[70vh]">
        <div className="relative w-40 h-40">
          <Image
            src="/assets/about-me/camera.svg"
            layout="fill"
            className="opacity-60 -rotate-45"
          />
        </div>
      </ParallaxLayer>

      {/* page 2 title */}
      <ParallaxLayer offset={1} speed={1.5}>
        <h2 className="text-color font-lexendDeca text-5xl font-bold pt-[15vh] px-[5%]">
          About Me
        </h2>
      </ParallaxLayer>

      {/* page 2 description */}
      <ParallaxLayer
        offset={1}
        speed={2.5}
        className="flex items-center justify-center font-poppins"
        onClick={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(2)
        }
      >
        <TerminalContainer>
          <>
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
          </>
        </TerminalContainer>
      </ParallaxLayer>
    </>
  );
});

export default AboutMe;
