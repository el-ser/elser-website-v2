import DeltekIcon from "../src/components/work/svg/deltek-icon";
import MayaIcon from "../src/components/work/svg/maya-icon";
import VertereIcon from "../src/components/work/svg/vertere-icon";

export type TimelineItemType = {
  companyName: string;
  role: string;
  description: string[];
  techStack: string[];
  startingYear: number;
  Logo: JSX.Element;
};

export const timelineDetails: TimelineItemType[] = [
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
    startingYear: 2016,
    Logo: <DeltekIcon className="h-auto w-1/2 md:w-2/5 lg:w-1/6" />,
  },
  {
    companyName: "Maya",
    role: "Quality Engineer Specialist",
    description: [
      "Performed API and mobile app testing with Cucumber.js, Behave Python and Codeceptjs",
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
    startingYear: 2020,
    Logo: <MayaIcon className="h-auto w-1/2 md:w-2/5 lg:w-1/4" />,
  },
  {
    companyName: "Vertere Global Solutions",
    role: "Programmer Analyst S3",
    description: [
      "Developed and deployed features for Metrobank Authenticator",
      "Investigated production issues through NGINX logs and service logs",
    ],
    techStack: [
      "React-native",
      "React Boilerplate",
      "NGINX",
      "Tailwindcss",
      "Nextjs",
      "Loopback 4",
    ],
    startingYear: 2022,
    Logo: <VertereIcon className="h-auto w-1/2 md:w-2/5" />,
  },
];
