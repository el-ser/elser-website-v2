import { useState } from "react";

import Footer from "../footer/footer";
import NavigationBar from "../navigation-bar/navigation-bar";
import SplashScreen from "../../loaders/splash-screen";

export default function Layout({ children }: { children: JSX.Element }) {
  const [showSplash, setShowSplash] = useState(true);

  setTimeout(() => {
    setShowSplash(false);
  }, 4000);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <NavigationBar />
          {children}
        </>
      )}
    </>
  );
}
