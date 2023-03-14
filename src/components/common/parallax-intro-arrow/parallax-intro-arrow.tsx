import { ParallaxLayer } from "@react-spring/parallax";
import { FaAngleRight } from "react-icons/fa";

type Props = {
  offset: number;
  speed?: number;
  onClick: () => void;
};

const ParallaxIntroArrow: React.FunctionComponent<Props> = ({
  offset,
  speed = 1,
  onClick,
}) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      onClick={onClick}
      className="flex justify-end text-color text-8xl mt-[12vh] md:text-9xl">
      <FaAngleRight className="cursor-pointer animate-horizontal-bounce" />
    </ParallaxLayer>
  );
};

export default ParallaxIntroArrow;
