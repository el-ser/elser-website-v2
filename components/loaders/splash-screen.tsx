import Image from "next/image";
import { useSpring, useSpringRef, animated, easings } from "@react-spring/web";
import { useEffect } from "react";

const SplashScreen = () => {
  const api = useSpringRef();
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    ref: api,
  });

  useEffect(() => {
    api.start({
      to: [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      config: {
        easing: easings.easeInOutBack,
        duration: 2000,
      },
    });
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <animated.div className="relative h-full w-60" style={spring}>
        <Image
          src="/logo.svg"
          alt="splash-logo"
          priority
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </animated.div>
    </div>
  );
};

export default SplashScreen;
