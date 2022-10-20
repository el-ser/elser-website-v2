import Link from "next/link";
import Image from "next/image";
import { IconContext } from "react-icons";
import { FiAlignRight } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTransition, SpringValue } from "react-spring";

import NavigationLinks from "./navigation-links";
import SideBar from "./side-bar";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectIsSideBarOpen,
  selectUseDarkMode,
} from "../store/navigation/navigation.selector";
import {
  setIsSideBarOpen,
  setUseDarkMode,
} from "../store/navigation/navigation.slice";
import tailwindConfig from "../tailwind.config";

export type NavbarStyleType = {
  x: SpringValue<number>;
};

const NavigationBar = () => {
  const isSideBarOpen = useAppSelector(selectIsSideBarOpen);
  const useDarkMode = useAppSelector(selectUseDarkMode);
  const sidebarTransition = useTransition(isSideBarOpen, {
    from: { x: 1000 },
    enter: { x: 0 },
    leave: { x: 1000 },
  });

  const dispatch = useAppDispatch();
  const { colors } = tailwindConfig.theme.extend;

  const handleDarkMode = () => {
    const htmlElement = document.querySelector("html");

    if (useDarkMode) {
      htmlElement?.classList.remove("dark");
    } else {
      htmlElement?.classList.add("dark");
    }
    dispatch(setUseDarkMode(!useDarkMode));
  };

  return (
    <>
      <IconContext.Provider
        value={{
          color: useDarkMode ? colors["smoke-600"] : colors["navy-blue-700"],
        }}
      >
        <div
          id="nav-container"
          className="fixed z-20 w-full flex justify-between items-center h-[10vh] p-4 transition-theme navigation-bg"
        >
          <Link href="/">
            <a id="nav-icon" className="grow">
              <Image src="/logo.svg" alt="logo" width="150" height="150" />
            </a>
          </Link>

          <div
            id="nav-menu"
            className="flex justify-end items-center grow-3 gap-x-4 right-4 w-12 h-full"
          >
            <span
              onClick={handleDarkMode}
              className="flex items-center h-full w-16"
            >
              {useDarkMode ? (
                <FaMoon className="h-2/5 w-full" />
              ) : (
                <FaSun className="h-2/5 w-full" />
              )}
            </span>
            <FiAlignRight
              className="h-4/5 w-16 md:hidden"
              onClick={() => {
                dispatch(setIsSideBarOpen());
              }}
            />
          </div>
          <nav id="nav-links" className="hidden md:block">
            <NavigationLinks additionalClass="px-4" />
          </nav>
        </div>
        {sidebarTransition((style, showSidebar) => {
          return showSidebar ? <SideBar animationStyle={style} /> : "";
        })}
      </IconContext.Provider>
    </>
  );
};

export default NavigationBar;
