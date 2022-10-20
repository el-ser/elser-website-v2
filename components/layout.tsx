// @ts-nocheck
import Footer from "./footer";
import NavigationBar from "./navigation-bar";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
