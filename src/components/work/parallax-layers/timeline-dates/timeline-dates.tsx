import { ParallaxLayer } from "@react-spring/parallax";

type Props = {
  offset: number;
  highlight?: boolean;
  year: number;
};

const TimelineDates: React.FunctionComponent<Props> = ({
  offset,
  highlight = false,
  year,
}) => {
  // const parallaxClass;
  return (
    <>
      {/* timeline */}
      <ParallaxLayer
        offset={offset}
        style={{ zIndex: -10 }}
        className="flex items-end justify-around font-lexendDeca pb-2 text-4xl md:text-5xl text-color">
        <div className="opacity-50 scale-75">{year - 1}</div>
        <div className={`${!highlight && "opacity-50"} scale-75`}>{year}</div>
        <div className="opacity-50 scale-75">{year + 1}</div>
      </ParallaxLayer>
    </>
  );
};

export default TimelineDates;
