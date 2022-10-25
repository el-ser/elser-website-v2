import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";

import { RefObject } from "react";
import TerminalContainer from "./terminal-container";

const AboutMe = ({ parallax }: { parallax: RefObject<IParallax> }) => {
  return (
    <>
      {/** headphone icon */}
      <ParallaxLayer offset={1.7} speed={2.5} className="mt-[15vh]">
        <Image
          src="/assets/about-me/headphones.svg"
          width="100"
          height="100"
          className="opacity-60 rotate-45"
        />
      </ParallaxLayer>

      {/** travel icon */}
      <ParallaxLayer offset={1.2} speed={1.5} className="mt-[80vh]">
        <Image
          src="/assets/about-me/travel.svg"
          width="250"
          height="250"
          className="opacity-60"
        />
      </ParallaxLayer>

      {/** guitar icon */}
      <ParallaxLayer offset={1.0} speed={3} className="mt-[30vh]">
        <Image
          src="/assets/about-me/electric-guitar.svg"
          width="500"
          height="500"
          className="opacity-10"
        />
      </ParallaxLayer>

      {/** camera icon */}
      <ParallaxLayer offset={1} speed={0.9} className="mt-[70vh]">
        <Image
          src="/assets/about-me/camera.svg"
          width="150"
          height="150"
          className="opacity-60 -rotate-45"
        />
      </ParallaxLayer>

      {/* page 2 title */}
      <ParallaxLayer offset={1} speed={1.5}>
        <h1 className="text-color font-lexendDeca text-4xl font-bold pt-[20vh] px-[5%]">
          About Me
        </h1>
      </ParallaxLayer>

      {/* page 2 description */}
      <ParallaxLayer
        offset={1}
        speed={2.5}
        className="flex items-center justify-center font-poppins"
        onClick={() => parallax.current?.scrollTo(2)}
      >
        <TerminalContainer
          text={`My name is Manuel Serafin Bugarin but people usually call me
                Macky. I graduated with a bachelor’s degree of Computer Science
                in Mapua University. Similar to others, my exposure to computer
                was through video games. Have you seen people playing LAN games
                in a local computer rental shops? Yeah, I used to be one of
                those kids. As I grew up, I developed interests to 🎸 music ,
                🎥 film making, and ✈️ travelling!`}
        />
      </ParallaxLayer>
    </>
  );
};

export default AboutMe;
