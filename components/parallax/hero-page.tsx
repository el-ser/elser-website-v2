import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import React, { MutableRefObject } from "react";

const HeroPage = React.forwardRef<IParallax, {}>((_props, ref) => {
  return (
    <ParallaxLayer
      id="page-1"
      offset={0}
      onClick={() => (ref as MutableRefObject<IParallax>).current.scrollTo(1)}
      className="text-color"
    >
      <section
        id="hero-section"
        className="flex flex-col justify-center h-full w-full px-8 md:flex-row-reverse md:gap-8 md:items-center md:justify-around"
      >
        <h1 id="hero-text-container" className="flex flex-col font-poppins">
          <div className="text-2xl md:text-4xl">Hey there! I am</div>
          <div className="font-bold text-7xl tracking-normal md:text-9xl">
            Manu
            <span className="transition-theme text-accent-light dark:text-accent-dark">
              el Ser
            </span>
            afin
            <br />
            Bugarin
          </div>
          <p className="text-2xl md:text-3xl py-2 px-0">
            Passionate in building amazing things
          </p>
        </h1>
      </section>
    </ParallaxLayer>
  );
});

export default HeroPage;
