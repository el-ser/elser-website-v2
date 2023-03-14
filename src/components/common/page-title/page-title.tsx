import { SpringValue, animated } from "@react-spring/web";

const PageTitle = ({
  children,
  spring,
}: {
  children: string;
  spring?: { opacity: SpringValue<number> };
}) => {
  return (
    <animated.h1
      className="text-color font-poppins text-5xl font-semibold pt-[5%]"
      style={spring}
    >
      {children}
    </animated.h1>
  );
};

export default PageTitle;
