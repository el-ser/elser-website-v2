import Footer from "./footer";
import NavigationBar from "./navigation-bar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
