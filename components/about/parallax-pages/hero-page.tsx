import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import React, { MutableRefObject, useEffect } from "react";
import { useTrail, animated, config } from "@react-spring/web";

const HeroPage = React.forwardRef<IParallax, {}>((_props, ref) => {
  const [trails, api] = useTrail(3, () => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
      ...config.gentle,
    },
  }));

  useEffect(() => {
    api.start();
  });

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
          <animated.p
            title="Hey there! I am"
            className="text-2xl font-ubuntuMono font-bold md:text-4xl"
            style={trails[0]}
          >
            Hey there! I am
          </animated.p>
          <animated.p
            title="Manuel Serafin Bugarin"
            className="font-bold text-7xl tracking-normal md:text-9xl"
            style={trails[1]}
          >
            Manu
            <span className="transition-theme text-accent-light dark:text-accent-dark">
              el Ser
            </span>
            afin
            <br />
            Bugarin
          </animated.p>

          <animated.p
            title="A software developer, turning ideas to reality"
            className="text-2xl font-ubuntuMono font-bold py-4 px-0 md:text-3xl"
            style={trails[2]}
          >
            A{" "}
            <span className="text-accent-light dark:text-accent-dark">
              software developer
            </span>
            , turning ideas to reality
          </animated.p>
        </h1>
      </section>
    </ParallaxLayer>
  );
});

export default HeroPage;
