import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";

import "../styles/globals.css";
import Layout from "../components/layout";
import { store } from "../store/store";
import ReactIconProvider from "../components/icon-provider";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   if (darkMode) {
  //     const htmlElement = document.querySelector("html");
  //     htmlElement?.classList.add("dark");
  //   }
  // }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").then(
        function (registration) {
          console.log(
            "Service Worker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("Service Worker registration failed: ", err);
        }
      );
    }
  }, []);

  return (
    <Provider store={store}>
      <ReactIconProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReactIconProvider>
    </Provider>
  );
}

export default MyApp;
