import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import TerminalContainer from "../../common/terminal-container/terminal-container";

type Props = {
  offset: number;
  speed?: number;
  sectionName: string;
  headerText: string;
  commandText: string;
  content: string;
  techStack?: string[];
  previousPageHandler: () => void;
  nextPageHandler: () => void;
};

const AboutTerminal: React.FunctionComponent<Props> = ({
  offset,
  speed = 1.3,
  sectionName,
  headerText,
  commandText,
  content,
  techStack,
  previousPageHandler,
  nextPageHandler,
}): JSX.Element => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <ParallaxLayer offset={offset} speed={speed}>
      <section
        title={`${sectionName}-section`}
        id={`${sectionName}-section`}
        className="flex flex-col h-full gap-8 items-center justify-center font-poppins">
        <h2 className="text-color font-lexendDeca text-5xl font-bold pt-[5vh] hidden md:block">
          {headerText}
        </h2>
        <div className="flex flex-row justify-center items-center">
          <FaAngleLeft
            className="change-offset-button"
            onClick={previousPageHandler}
          />
          <TerminalContainer
            hasCursor
            headerText={headerText}
            headerClass="md:hidden">
            <p>
              {`Last login: ${dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
                hour12: true,
              })} `}

              <br />
              <span className="transition-theme text-accent-light dark:text-accent-dark">
                el-ser@MacBook ~ %{" "}
              </span>
              {commandText}
              <br />
              <br />
              {content}
              {techStack && (
                <ul className="grid grid-cols-2 text-left">
                  {techStack.map((txt, idx) => {
                    return (
                      <li
                        key={idx}
                        className="transition-theme hover:scale-105">
                        {`> `}
                        <span className="transition-theme text-accent-light dark:text-accent-dark">
                          {txt}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </p>
          </TerminalContainer>
          <FaAngleRight
            className="change-offset-button"
            onClick={nextPageHandler}
          />
        </div>
      </section>
    </ParallaxLayer>
  );
};

export default AboutTerminal;
