import { ParallaxLayer } from "@react-spring/parallax";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import type { TimelineItemType } from "../../../../../config/experience-page-data";

import TerminalContainer from "../../../common/terminal-container/terminal-container";
import TimelineDates from "../timeline-dates/timeline-dates";

type Props = {
  offset: number;
  details: TimelineItemType;
  previousPageHandler: () => void;
  nextPageHandler: () => void;
};

const CompanyDetails: React.FunctionComponent<Props> = ({
  offset,
  details,
  previousPageHandler,
  nextPageHandler,
}) => {
  return (
    <>
      <ParallaxLayer
        offset={offset}
        className="flex flex-col justify-center items-center">
        {details.Logo}
        <div className="flex items-center justify-center">
          <FaAngleLeft
            className="change-offset-button"
            onClick={previousPageHandler}
          />
          <TerminalContainer containerClass="w-3/4 md:w-3/5">
            <>
              <span className="block text-xl">
                Company:{" "}
                <span className="font-bold transition-theme text-accent-light dark:text-accent-dark">
                  {details.companyName}
                </span>
              </span>
              <span className="block text-left">
                Role:{" "}
                <span className="font-semibold transition-theme text-accent-light dark:text-accent-dark">
                  {details.role}
                </span>
              </span>
              <span className="block text-left">
                {details.description.map((txt, idx) => (
                  <span key={idx} className="block">{`> ${txt}`}</span>
                ))}
              </span>
              <span className="block font-bold transition-theme text-accent-light dark:text-accent-dark">
                Tech Used:
              </span>{" "}
              <ul className="grid grid-cols-2 text-left">
                {details.techStack.map((txt, idx) => {
                  return (
                    <li key={idx} className="transition-theme hover:scale-105">
                      {`> `}
                      <span className="transition-theme text-accent-light dark:text-accent-dark">
                        {txt}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          </TerminalContainer>
          <FaAngleRight
            className="change-offset-button"
            onClick={nextPageHandler}
          />
        </div>
      </ParallaxLayer>

      {/** timeline dates */}
      <TimelineDates
        offset={offset}
        year={details.startingYear}
        highlight={true}
      />
    </>
  );
};

export default CompanyDetails;
