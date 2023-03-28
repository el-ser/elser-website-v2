import NavigationBar from "../navigation-bar/navigation-bar";
// import SplashScreen from "../../loaders/splash-screen";

export default function Layout({ children }: { children: JSX.Element }) {
  /**
   * * Temporarily disabled splash screen
   */
  // const [showSplash, setShowSplash] = useState(true);

  // setTimeout(() => {
  //   setShowSplash(false);
  // }, 4000);

  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
