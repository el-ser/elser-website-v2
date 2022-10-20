import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div
        id="body-wrapper"
        className="transition-theme bg-white dark:bg-navy-blue-800"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  );
}

export default MyApp;
