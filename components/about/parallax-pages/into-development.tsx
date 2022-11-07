import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { MutableRefObject, useState, useEffect } from "react";
import Image from "next/image";

import TerminalContainer from "../../terminal-container";
import ReactIcon from "../svg/into-development/react-icon";
import JavaScriptIcon from "../svg/into-development/javascript-icon";
import NodejsIcon from "../svg/into-development/nodejs-icon";

const IntoDevelopment = React.forwardRef<IParallax, {}>((_props, ref) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <>
      {/* react icon */}
      <ParallaxLayer offset={3.1} speed={2} className="mt-[80vh]">
        <div className="relative w-1/2 opacity-40 ">
          <ReactIcon />
        </div>
      </ParallaxLayer>

      {/* nodejs icon */}
      <ParallaxLayer offset={3.6} speed={1.3} className="mt-[70vh]">
        <div className="relative w-2/5 opacity-30 md:w-1/4">
          <NodejsIcon />
        </div>
      </ParallaxLayer>

      {/* javascript icon */}
      <ParallaxLayer offset={3} speed={2.5} className="mt-[15vh]">
        <div className="relative w-1/2 opacity-40 md:w-1/4">
          <JavaScriptIcon />
        </div>
      </ParallaxLayer>

      {/* page 4 description */}
      <ParallaxLayer
        offset={3}
        speed={2.5}
        className="flex flex-col gap-8 items-center justify-center font-poppins"
        onClick={() =>
          (ref as MutableRefObject<IParallax>).current?.scrollTo(4)
        }
      >
        <h2 className="flex justify-end text-center text-color font-lexendDeca text-5xl font-bold pt-[5vh]">
          Jumping Into Development
        </h2>
        <TerminalContainer hasCursor>
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
            el-ser@MacBook ~ % yarn add jumping-into --dev
            <br />
            <br />
            With 5 years experience in software testing, I finally decided to
            pursue my passion for developing softwares. I took online courses on
            Udemy and LinkedIn Learning, watched YouTube tutorials, wrote blogs
            about the things I learned, and used my free time to put what I
            learned into practice. After several months of learning and applying
            for a developer position, I finally became a JavaScript Developer!
          </>
        </TerminalContainer>
      </ParallaxLayer>
    </>
  );
});

export default IntoDevelopment;
