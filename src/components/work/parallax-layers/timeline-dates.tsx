import { ParallaxLayer } from "@react-spring/parallax";

const TimelineDates = () => {
  return (
    <>
      {/* timeline */}
      <ParallaxLayer
        offset={0}
        style={{ zIndex: -10 }}
        className="flex flex-col items-end justify-around font-lexendDeca text-4xl md:text-5xl text-color"
      >
        <div className="-rotate-90 opacity-50 scale-75">2012</div>
        <div className="-rotate-90 opacity-50 scale-75">2013</div>
        <div className="-rotate-90 opacity-50 scale-75">2014</div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        style={{ zIndex: -10 }}
        className="flex flex-col items-end justify-around font-lexendDeca text-4xl md:text-5xl text-color"
      >
        <div className="-rotate-90 opacity-50 scale-75">2015</div>
        <div className="-rotate-90">2016</div>
        <div className="-rotate-90 opacity-50 scale-75">2017</div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        style={{ zIndex: -10 }}
        className="flex flex-col items-end justify-around font-lexendDeca text-4xl md:text-5xl text-color"
      >
        <div className="-rotate-90 opacity-50 scale-75">2018</div>
        <div className="-rotate-90 opacity-50 scale-75">2019</div>
        <div className="-rotate-90">2020</div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        style={{ zIndex: -10 }}
        className="flex flex-col items-end justify-around font-lexendDeca text-4xl md:text-5xl text-color"
      >
        <div className="-rotate-90 opacity-50 scale-75">2021</div>
        <div className="-rotate-90">2022</div>
        <div className="-rotate-90 opacity-50 scale-75">2023</div>
      </ParallaxLayer>
    </>
  );
};

export default TimelineDates;
