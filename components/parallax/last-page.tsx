import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import React, { MutableRefObject } from "react";
import {
  FaAngleLeft,
  FaLinkedin,
  FaGithub,
  FaFeatherAlt,
  FaCode,
} from "react-icons/fa";

import Link from "next/link";
import TerminalContainer from "./terminal-container";
import { IconType } from "react-icons";

type IconLink = {
  href: string;
  text: string;
  Icon: IconType;
};

const links: IconLink[] = [
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
    href: "/work",
    text: "Work",
    Icon: FaCode,
  },
];

const LastPage = React.forwardRef<IParallax, {}>((_props, ref) => {
  const iconClasses = "icon-size w-full hover:scale-105 duration-300";
  return (
    <>
      <ParallaxLayer
        offset={4}
        speed={1.5}
        className="flex flex-col items-center justify-center gap-y-8 text-color"
      >
        <TerminalContainer textClass="text-start" fileText="yarn publish">
          <>
            Thank you for visiting my website! Feel free to reach out to me
            through my LinkedIn or email{" "}
            <span className="font-bold">elser.code@gmail.com</span>. Check out
            my blogs and work!
          </>
        </TerminalContainer>

        <div
          id="links"
          className="flex justify-center items-center gap-x-8 text-color font-lexendDeca md:gap-x-16"
        >
          {links.map(({ href, text, Icon }, idx) => {
            return (
              <Link href={href} key={idx}>
                <span className="cursor-pointer">
                  <Icon className={iconClasses} />
                  <span>{text}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={4}
        speed={3}
        onClick={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(0)
        }
        className="text-color text-3xl mt-[12vh]"
        style={{
          height: "10%",
          width: "5%",
        }}
      >
        <FaAngleLeft className="h-full w-auto cursor-pointer animate-pulse-70" />
      </ParallaxLayer>
    </>
  );
});

export default LastPage;
