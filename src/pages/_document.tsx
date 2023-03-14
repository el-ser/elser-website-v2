import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-PH">
      <Head>
        <meta
          name="keywords"
          content="elser, manuel serafin bugarin, macky bugarin, blogs, portfolio, software developer"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Manuel Serafin Bugarin's software developer portfolio"
        />
        <meta name="robot" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
        <link
        rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Ubuntu+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="transition-theme bg-white dark:bg-navy-blue-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
