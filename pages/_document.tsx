import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@600&family=Poppins&display=swap"
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
