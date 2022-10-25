import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { store } from "../store/store";
import { Provider } from "react-redux";
import ReactIconProvider from "../components/icon-provider";

function MyApp({ Component, pageProps }: AppProps) {
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
