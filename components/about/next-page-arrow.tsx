import { ParallaxLayer } from "@react-spring/parallax";
import { FaAngleRight } from "react-icons/fa";

type Props = {
  onClickHandler: () => void;
  offset: number;
  speed?: number;
};

const NextPageArrow = ({ onClickHandler, offset, speed = 1 }: Props) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      onClick={onClickHandler}
      className="flex justify-end text-color text-8xl mt-[12vh] md:text-9xl">
      <FaAngleRight className="cursor-pointer animate-horizontal-bounce" />
    </ParallaxLayer>
  );
};

export default NextPageArrow;
