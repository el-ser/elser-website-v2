import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";

import "../styles/globals.css";
import Layout from "../components/layout";
import { store } from "../store/store";
import ReactIconProvider from "../components/icon-provider";
import { INITIAL_STATE } from "../store/navigation/navigation.slice";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   if (darkMode) {
  //     const htmlElement = document.querySelector("html");
  //     htmlElement?.classList.add("dark");
  //   }
  // }, []);

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
