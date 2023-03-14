import { ParallaxLayer } from "@react-spring/parallax";
import { animated } from "@react-spring/web";

import useMountTrail from "../../../../hooks/use-mount-trail";

import ParallaxIntroArrow from "../../../common/parallax-intro-arrow/parallax-intro-arrow";
import TimelineDates from "../timeline-dates/timeline-dates";

type Props = {
  nextPageHandler: () => void;
};

const ExperienceTitle: React.FunctionComponent<Props> = ({
  nextPageHandler,
}) => {
  const trails = useMountTrail(4);
  return (
    <>
      {/** page title */}
      <ParallaxLayer offset={0} className="flex justify-left items-center">
        <animated.h2
          className="text-left text-color font-lexendDeca text-6xl font-bold pl-4 md:text-8xl"
          style={trails[3]}>
          WORK{" "}
          <span className="text-accent-light dark:text-accent-dark">
            HISTORY
          </span>
        </animated.h2>
      </ParallaxLayer>

      {/** timeline dates */}
      <TimelineDates offset={0} year={2013} />

      {/** next section arrow */}
      <ParallaxIntroArrow offset={0} speed={1} onClick={nextPageHandler} />
    </>
  );
};

export default ExperienceTitle;
