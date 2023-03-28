import { IParallax } from "@react-spring/parallax";
import React, { MutableRefObject } from "react";
import Link from "next/link";

import { terminalDetails, links } from "../../../../../config/about-page-data";
import Footer from "../../../common/footer/footer";
import ResetParallaxArrow from "../../../common/reset-parallax-arrow/reset-parallax-arrow";
import AboutTerminal from "../about-terminal/about-terminal";

const { letsConnect } = terminalDetails;

const LetsConnect = React.forwardRef<IParallax, {}>((_props, ref) => {
  return (
    <>
      <AboutTerminal
        offset={4}
        sectionName="whats-next"
        headerText={letsConnect.headerText}
        commandText={letsConnect.commandText}
        content={
          <>
            {letsConnect.content}
            <span className="font-bold"> elser.code@gmail.com</span>
          </>
        }
        afterTerminal={
          <>
            <div
              id="links"
              className="flex justify-center items-center gap-x-8 text-color font-lexendDeca md:gap-x-16">
              {links.map(({ href, text, Icon }, idx) => {
                return (
                  <Link href={href} key={idx}>
                    <span className="cursor-pointer flex flex-col items-center">
                      <Icon className="icon-size w-full hover:scale-105 duration-300" />
                      <span>{text}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <Footer />
          </>
        }
      />

      {/** Reset Arrow */}
      <ResetParallaxArrow
        offset={4}
        onClick={() => (ref as MutableRefObject<IParallax>).current.scrollTo(0)}
      />
    </>
  );
});

export default LetsConnect;
