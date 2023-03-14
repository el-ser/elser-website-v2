import type { NextPage } from "next";
import { useRef } from "react";
import Head from "next/head";
import { config } from "react-spring";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import AboutMe from "../components/about/parallax-layers/about-me/about-me";
import TesterPhase from "../components/about/parallax-layers/tester-experience/tester-experience";
import IntoDevelopment from "../components/about/parallax-layers/developer-experience/developer-experience";
import LetsConnect from "../components/about/parallax-layers/connect/lets-connect";
import HeroPage from "../components/about/parallax-layers/hero-page/hero-page";

const Home: NextPage = () => {
  const parallaxRef = useRef<IParallax>(null!);

  return (
    <>
      <Head>
        <title>el-ser</title>
      </Head>
      <main>
        <Parallax
          ref={parallaxRef}
          pages={5}
          style={{ top: "0", left: "0" }}
          config={config.slow}
          horizontal>
          {/* page 2 - 4 background */}
          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            className="bg-slate-200 dark:bg-slate-800"
            style={{
              zIndex: -20,
            }}
          />

          <HeroPage ref={parallaxRef} />
          <AboutMe ref={parallaxRef} />

          <TesterPhase ref={parallaxRef} />
          <IntoDevelopment ref={parallaxRef} />
          <LetsConnect ref={parallaxRef} />
        </Parallax>
      </main>
    </>
  );
};

export default Home;
