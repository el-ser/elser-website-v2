import { FaWindowClose } from "react-icons/fa";
import { animated } from "react-spring";

import NavigationLinks from "./navigation-links";
import type { NavbarStyleType } from "./navigation-bar";

import { setIsSideBarOpen } from "../../store/navigation/navigation.slice";
import { useAppDispatch } from "../../store/hooks";

const SideBar = ({ animationStyle }: { animationStyle: NavbarStyleType }) => {
  const dispatch = useAppDispatch();

  return (
    <animated.aside
      role="complementary"
      style={animationStyle}
      className={`fixed flex flex-col z-50 h-full w-full navigation-bg top-0 right-0 md:hidden`}>
      <FaWindowClose
        id="close-sidebar-button"
        className="w-10 h-10 self-end pointer-events-auto relative top-4 right-4"
        onClick={() => dispatch(setIsSideBarOpen())}
      />
      <nav
        id="nav-links"
        className="flex flex-col gap-8 h-full justify-evenly items-center">
        <NavigationLinks
          internalOptions={{ showIcon: true, className: "text-4xl" }}
          externalOptions={{ showText: true, className: "text-4xl" }}
        />
      </nav>
    </animated.aside>
  );
};

export default SideBar;
