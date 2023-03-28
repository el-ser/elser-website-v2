import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import Head from "next/head";

import { useRef } from "react";
import { config } from "react-spring";
import { animated } from "@react-spring/web";

import WorkPageOverlay from "../components/work/svg/work-page-overlay";
import ExperienceTitle from "../components/work/parallax-layers/experience-title/experience-title";

// TODO: To be added
// import { useGetPublicRepositoriesQuery } from "../store/github/github.api";
import useMountTrail from "../hooks/use-mount-trail";
import { timelineDetails } from "../../config/experience-page-data";
import CompanyDetails from "../components/work/parallax-layers/company-details/company-details";
import Hiring from "../components/work/parallax-layers/hiring/hiring";

const Work: NextPage = () => {
  // TODO: To be added
  // const { data, isLoading, isError } = useGetPublicRepositoriesQuery(null);
  const timelinePages = timelineDetails.length;
  const parallaxRef = useRef<IParallax>(null!);
  const trails = useMountTrail(4, true);

  return (
    <div>
      <Head>
        <title>Experience / el-ser</title>
      </Head>
      <main>
        <Parallax
          ref={parallaxRef}
          horizontal={true}
          pages={timelinePages + 2}
          config={config.gentle}>
          {/** page title */}
          <ExperienceTitle
            nextPageHandler={() => parallaxRef.current?.scrollTo(1)}
          />

          {/* timeline bar */}
          <ParallaxLayer
            sticky={{ start: 0, end: timelinePages }}
            style={{
              zIndex: -20,
            }}
            className="flex items-end">
            <animated.div
              className="transition-theme bg-navy-blue-700 dark:bg-smoke-600 w-full h-4 rounded-xl"
              style={trails[1]}
            />
          </ParallaxLayer>

          {/** overlay */}
          <ParallaxLayer
            sticky={{ start: 0, end: timelinePages }}
            style={{
              zIndex: -30,
            }}>
            <animated.div
              className="relative h-screen w-screen"
              style={trails[0]}>
              <WorkPageOverlay />
            </animated.div>
          </ParallaxLayer>

          {/* work history layers */}
          {timelineDetails.map((item, idx) => {
            const offset = idx + 1;
            return (
              <CompanyDetails
                key={idx}
                offset={offset}
                details={item}
                previousPageHandler={() => {
                  return parallaxRef.current.scrollTo(offset - 1);
                }}
                nextPageHandler={() => {
                  return parallaxRef.current.scrollTo(offset + 1);
                }}
              />
            );
          })}

          {/** last page */}
          <Hiring ref={parallaxRef} />
        </Parallax>
      </main>
    </div>
  );
};

export default Work;
