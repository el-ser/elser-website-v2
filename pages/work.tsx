import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { config } from "react-spring";

import CustomButton from "../components/custom-button";
import TerminalContainer from "../components/terminal-container";
import DeltekIcon from "../components/work/svg/deltek-icon";
import MayaIcon from "../components/work/svg/maya-icon";
import VertereIcon from "../components/work/svg/vertere-icon";
import WorkPageOverlay from "../components/work/svg/work-page-overlay";
import TimelineDates from "../components/work/parallax-layers/timeline-dates";

import { useGetPublicRepositoriesQuery } from "../store/github/github.api";

export type TimelineItemType = {
  companyName: string;
  role: string;
  description: string[];
  offset: number;
  techStack: string[];
  Logo: JSX.Element;
};

const timelineDetails: TimelineItemType[] = [
  {
    companyName: "Deltek",
    role: "Software Engineer",
    description: [
      "Implemented and maintained web test automation framework using Nightwatchjs",
      "Developed test automation result dashboard using Reactjs and Material UI v3",
    ],
    techStack: [
      "Nightwatchjs",
      "JavaScript",
      "Reactjs",
      "MUI v3",
      "Azure DevOps",
      "Team Foundation Server",
    ],
    offset: 1,
    Logo: <DeltekIcon className="h-auto w-1/2 mr-12 md:w-2/5 lg:w-1/4" />,
  },
  {
    companyName: "Maya",
    role: "Quality Engineer Specialist",
    description: [
      "Performed API and mobile app testing with Cucumber.js and Codeceptjs",
      "Utilized GitLab CI/CD and GitLab registries to deliver quicker result and reusable codes",
    ],
    techStack: [
      "AWS",
      "GitLab",
      "Burp Suite",
      "Behave Python",
      "CodeceptJS",
      "Cucumber.js",
      "PactumJS",
    ],
    offset: 2.33,
    Logo: <MayaIcon className="h-auto w-1/2 mr-12 md:w-2/5 lg:w-1/4" />,
  },
  {
    companyName: "Vertere Global Solutions",
    role: "Programmer Analyst S3",
    description: ["Maintained codes"],
    techStack: ["React Boilerplate", "NGINX", "Tailwindcss", "Nextjs"],
    offset: 3,
    Logo: <VertereIcon className="h-auto w-3/4 mr-16 md:w-2/5" />,
  },
];

const Work: NextPage = () => {
  // const { data, isLoading, isError } = useGetPublicRepositoriesQuery(null);
  const timelinePages = timelineDetails.length;
  const parallaxRef = useRef<IParallax>(null!);

  return (
    <div>
      <Head>
        <title>Experience / el-ser</title>
      </Head>
      <main>
        <Parallax
          ref={parallaxRef}
          pages={timelinePages + 2}
          config={config.gentle}
        >
          {/** page title */}
          <ParallaxLayer
            offset={0}
            className="flex justify-left items-center"
            onClick={() => parallaxRef.current.scrollTo(1)}
          >
            <h2 className="text-left text-color font-lexendDeca text-6xl font-bold pl-4 md:text-8xl">
              WORK{" "}
              <span className="text-accent-light dark:text-accent-dark">
                HISTORY
              </span>
            </h2>
          </ParallaxLayer>

          {/* timeline bar */}
          <ParallaxLayer
            sticky={{ start: 0, end: timelinePages }}
            style={{
              zIndex: -20,
              top: 0,
              right: 0,
            }}
            className="flex justify-end"
          >
            <div className="transition-theme bg-navy-blue-700 dark:bg-smoke-600 w-4 h-full rounded-xl" />
          </ParallaxLayer>

          {/** overlay */}
          <ParallaxLayer
            sticky={{ start: 0, end: timelinePages }}
            style={{
              zIndex: -30,
            }}
          >
            <WorkPageOverlay />
          </ParallaxLayer>

          <TimelineDates />

          {/* work history layers */}
          {timelineDetails.map((item, idx) => {
            const { offset, companyName, role, description, techStack, Logo } =
              item;

            return (
              <ParallaxLayer
                key={idx}
                offset={offset}
                onClick={() => {
                  if (idx === timelineDetails.length - 1) {
                    return parallaxRef.current.scrollTo(
                      timelineDetails.length + 1
                    );
                  }
                  return parallaxRef.current.scrollTo(
                    timelineDetails[idx + 1].offset
                  );
                }}
                className="flex flex-col justify-center items-center"
              >
                {Logo}
                <TerminalContainer containerClass="w-3/4 mr-20 md:w-3/5">
                  <>
                    <span className="block text-xl">
                      Company: <span className="font-bold">{companyName}</span>
                    </span>
                    <span className="block text-left">
                      Role: <span className="font-semibold">{role}</span>
                    </span>
                    <span className="block text-left">
                      {description.map((txt, idx) => (
                        <span key={idx} className="block">{`> ${txt}`}</span>
                      ))}
                    </span>
                    <span className="block font-bold">Tech Used:</span>{" "}
                    <span className="grid grid-cols-2 text-left">
                      {techStack.map((txt, idx) => {
                        return (
                          <span key={idx} className="block">{`> ${txt}`}</span>
                        );
                      })}
                    </span>
                  </>
                </TerminalContainer>
              </ParallaxLayer>
            );
          })}

          <ParallaxLayer
            offset={4}
            speed={2}
            className="flex justify-center items-start"
          >
            <h2 className="text-center text-color font-lexendDeca text-6xl font-bold pt-[20vh] md:text-8xl">
              HIRING?
            </h2>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={1}
            className="flex justify-center items-center"
          >
            <p className="text-color font-ubuntuMono text-center text-2xl w-3/4 md:text-3xl">
              I'm always open for new opportunities! <br />
              Connect with me through my LinkedIn or directly download my CV!
            </p>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4.2}
            speed={0}
            className="flex justify-center items-center gap-4"
          >
            <CustomButton>
              <Link href="https://www.linkedin.com/in/manuel-serafin-bugarin-636554144/">
                LinkedIn
              </Link>
            </CustomButton>
            <CustomButton>
              <Link href="https://github.com/el-ser">Resume</Link>
            </CustomButton>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
};

export default Work;
