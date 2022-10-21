import { NextComponentType, NextPageContext } from "next";
import { animated, useSpring } from "react-spring";

import Footer from "./footer";
import NavigationBar from "./navigation-bar";

export default function Layout({ children }: { children: JSX.Element }) {
  const navigationBar = useSpring({});
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
