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
        title="hero-section"
        id="hero-section"
        className="flex flex-col justify-center h-full w-full px-8 md:gap-8 md:items-start"
      >
        <h1
          role="heading"
          arial-level="1"
          title="hero-header"
          id="hero-text-container"
          className="flex flex-col font-poppins"
        >
          <p
            title="Hey there! I am"
            className="text-2xl font-ubuntuMono font-bold md:text-4xl"
          >
            Hey there! I am
          </p>
          <p
            title="Manuel Serafin Bugarin"
            className="font-bold text-7xl tracking-normal md:text-9xl"
          >
            Manu
            <span className="transition-theme text-accent-light dark:text-accent-dark">
              el Ser
            </span>
            afin
            <br />
            Bugarin
          </p>
          <p
            title="A software developer, turning ideas to reality"
            className="text-2xl font-ubuntuMono font-bold py-4 px-0 md:text-3xl"
          >
            A{" "}
            <span className="text-accent-light dark:text-accent-dark">
              software developer
            </span>
            , turning ideas to reality
          </p>
          <div
            title="CLICK ME"
            className="font-ubuntuMono text-5xl font-bold animate-click-me"
          >
            CLICK ME
          </div>
        </h1>
      </section>
    </ParallaxLayer>
  );
});

export default HeroPage;
