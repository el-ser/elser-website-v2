import { FaWindowClose, FaGithub } from "react-icons/fa";
import { animated } from "react-spring";

import NavigationLinks from "./navigation-links";
import type { NavbarStyleType } from "./navigation-bar";

import { setIsSideBarOpen } from "../store/navigation/navigation.slice";
import { useAppDispatch } from "../store/hooks";

const SideBar = ({ animationStyle }: { animationStyle: NavbarStyleType }) => {
  const dispatch = useAppDispatch();

  return (
    <animated.aside
      style={animationStyle}
      className={`fixed flex flex-col z-30 h-full w-full navigation-bg top-0 right-0 md:hidden`}
    >
      <FaWindowClose
        id="close-sidebar-button"
        className="w-10 h-10 self-end pointer-events-auto relative top-4 right-4"
        onClick={() => dispatch(setIsSideBarOpen())}
      />
      <nav
        id="nav-links"
        className="flex flex-col h-full justify-start items-center"
      >
        <NavigationLinks additionalClass="py-8 text-3xl" />
      </nav>
    </animated.aside>
  );
};

export default SideBar;
