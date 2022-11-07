import Link from "next/link";
import Image from "next/image";
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
      <div
        id="nav-container"
        className="fixed z-40 w-full flex justify-between items-center h-[10vh] p-4 transition-theme navigation-bg"
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
              <FaMoon className="h-2/5 w-full cursor-pointer" />
            ) : (
              <FaSun className="h-2/5 w-full cursor-pointer" />
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
        <NavigationLinks additionalClass="px-8" />
        </nav>
      </div>
      {sidebarTransition((style, showSidebar) => {
        return showSidebar ? <SideBar animationStyle={style} /> : "";
      })}
    </>
  );
};

export default NavigationBar;
