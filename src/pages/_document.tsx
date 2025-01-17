/* eslint-disable @next/next/no-document-import-in-page */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:title"
            content="init.tips - start on the right stack"
          />
          <meta
            name="description"
            content="Getting started with a new project doesn't have to be hard. Take our recommendations to begin on the right foot. Open source. Currently recommending Next.js and TypeScript"
          />
          <meta
            property="og:description"
            content="Getting started with a new project doesn't have to be hard. Take our recommendations to begin on the right foot. Open source. Currently recommending Next.js and TypeScript"
          />
          <meta property="og:url" content="https://init.tips/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.svg?v=2" />
          <meta
            property="og:image"
            content={"https://init.tips/twitter-banner.png"}
          />
          <meta
            name="twitter:image"
            content={"https://init.tips/twitter-banner.png"}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=2"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=2"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=2"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9ca3af" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body className="bg-gray-800 text-gray-200 min-h-screen antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
