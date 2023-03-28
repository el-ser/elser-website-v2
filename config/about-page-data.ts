import { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaFeatherAlt, FaCode } from "react-icons/fa";

export const terminalDetails = {
  aboutMe: {
    headerText: "About Myself",
    commandText: "elser init",
    content: `Hi! My name is Manuel Serafin Bugarin, a
      computer science graduate from Mapua University. 
      I started my career as a test automation engineer and 
      decided to switch role to software developer.
      By becoming a developer, it allowed me to utilize my creativity in solving problems.`,
  },
  testerExperience: {
    headerText: "Tester Experience",
    commandText: "elser test",
    content: `With 6 years of experience as a test automation engineer, 
    it taught me on how to deliver quality and tested applications without 
    compromising the delivery velocity.
    Here are the technologies I used as a tester:`,
    techStack: [
      "Node.js",
      "Reactjs",
      "Material-UI (v3)",
      "Behave Python",
      "GitLab CI/CD",
      "Nightwatch.js",
      "CodeceptJS",
      "PactumJS",
    ],
  },
  developerExperince: {
    headerText: "Developer Experience",
    commandText: "elser dev",
    content: `My developer experience is a bit mixture of everything from web, backend, and mobile.
    Even though my years of experience as a developer is low compared to my previous role, I always
    enjoy the process of learning especially the latest trends! 
    Here are some of the technologies I am using so far:`,
    techStack: [
      "Express",
      "Nestjs",
      "Flutter",
      "Nextjs",
      "Redux",
      "React-spring",
      "Tailwindcss",
      "MongoDB",
    ],
  },
  letsConnect: {
    headerText: "What's next?",
    commandText: "elser connect",
    content: `So what's next? Checkout my blogs and experience! You may reach
              out to me through my LinkedIn or email`,
  },
};

type IconLink = {
  href: string;
  text: string;
  Icon: IconType;
};

export const links: IconLink[] = [
  {
    href: "https://www.linkedin.com/in/manuel-serafin-bugarin-636554144/",
    text: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/el-ser",
    text: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "/blogs",
    text: "Blogs",
    Icon: FaFeatherAlt,
  },
  {
    href: "/experience",
    text: "Experience",
    Icon: FaCode,
  },
];
