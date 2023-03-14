import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import React, { MutableRefObject, useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";

import { terminalDetails, links } from "../../../../../config/about-page-data";
import TerminalContainer from "../../../common/terminal-container/terminal-container";
import Footer from "../../../common/footer/footer";

const { letsConnect } = terminalDetails;

const LetsConnect = React.forwardRef<IParallax, {}>((_props, ref) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <>
      <ParallaxLayer offset={4} speed={1.5}>
        <section className="h-full flex flex-col items-center justify-center gap-y-8 text-color">
          <h2 className="flex justify-end text-center text-color font-lexendDeca text-5xl font-bold pt-[13vh] px-[5%]">
            {letsConnect.headerText}
          </h2>
          <TerminalContainer textClass="text-start" hasCursor>
            <>
              {`Last login: ${dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
                hour12: true,
              })} `}
              <br />
              el-ser@MacBook ~ % {letsConnect.commandText}
              <br />
              <br />
              {letsConnect.content}
              <span className="font-bold"> elser.code@gmail.com</span>
            </>
          </TerminalContainer>
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
        </section>
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
        }}>
        <FaAngleLeft className="h-full w-auto cursor-pointer animate-pulse-70" />
      </ParallaxLayer>
    </>
  );
});

export default LetsConnect;
