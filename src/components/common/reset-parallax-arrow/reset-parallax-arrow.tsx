import { ParallaxLayer } from "@react-spring/parallax";
import { FaAngleLeft } from "react-icons/fa";

type Props = {
  offset: number;
  onClick: () => void;
};

const ResetParallaxArrow: React.FunctionComponent<Props> = ({
  offset,
  onClick,
}) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={3}
      onClick={onClick}
      className="text-color text-3xl mt-[12vh]"
      style={{
        height: "10%",
        width: "5%",
      }}>
      <FaAngleLeft className="h-full w-auto cursor-pointer animate-pulse-70" />
    </ParallaxLayer>
  );
};

export default ResetParallaxArrow;
