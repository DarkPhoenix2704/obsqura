import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>
          {`
                            * {
                              font-family: 'Clash Display', sans-serif;
                            }
            `}
        </style>
        {
          // eslint-disable-next-line @next/next/no-css-tags
          <link href="/style/clashDisplay.css" rel="stylesheet" />
        }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
