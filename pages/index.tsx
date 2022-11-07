import type { NextPage } from "next";
import { useRef } from "react";
import Head from "next/head";
import { config } from "react-spring";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import AboutMe from "../components/about/parallax-pages/about-me";
import TesterPhase from "../components/about/parallax-pages/tester-phase";
import IntoDevelopment from "../components/about/parallax-pages/into-development";
import LastPage from "../components/about/parallax-pages/lets-connect";
import HeroPage from "../components/about/parallax-pages/hero-page";

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
          horizontal
        >
          <HeroPage ref={parallaxRef} />

          {/* page 2 - 4 background */}
          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            onClick={() => parallaxRef.current?.scrollTo(2)}
            className="bg-slate-200 dark:bg-slate-800"
            style={{
              zIndex: -20,
            }}
          />

          <AboutMe ref={parallaxRef} />
          <TesterPhase ref={parallaxRef} />
          <IntoDevelopment ref={parallaxRef} />

          <LastPage ref={parallaxRef} />
        </Parallax>
      </main>
    </>
  );
};

export default Home;
