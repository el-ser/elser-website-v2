import { FaWindowClose, FaGithub, FaLinkedin } from "react-icons/fa";
import { animated } from "react-spring";
import Link from "next/link";

import NavigationLinks from "./navigation-links";
import type { NavbarStyleType } from "./navigation-bar";

import { setIsSideBarOpen } from "../store/navigation/navigation.slice";
import { useAppDispatch } from "../store/hooks";

const SideBar = ({ animationStyle }: { animationStyle: NavbarStyleType }) => {
  const dispatch = useAppDispatch();

  return (
    <animated.aside
      style={animationStyle}
      className={`fixed flex flex-col z-50 h-full w-full navigation-bg top-0 right-0 md:hidden`}
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
        <Link
          href={"https://www.linkedin.com/in/manuel-serafin-bugarin-636554144/"}
        >
          <a
            className={`flex items-center gap-4 font-ubuntuMono no-underline transition-theme text-navy-blue-700 dark:text-smoke-600 py-8 text-3xl`}
            onClick={() => {
              dispatch(setIsSideBarOpen());
            }}
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </Link>
        <Link href={"https://github.com/el-ser"}>
          <>
            <a
              className={`flex items-center gap-4 font-ubuntuMono no-underline transition-theme text-navy-blue-700 dark:text-smoke-600 py-8 text-3xl`}
              onClick={() => {
                dispatch(setIsSideBarOpen());
              }}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </>
        </Link>
      </nav>
    </animated.aside>
  );
};

export default SideBar;
