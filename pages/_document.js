import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#111"
          />
          <meta
            name="description"
            content="✌️ Hey, I'm Nivedin P Suryan a Front End Developer working remotely for Digital Vault having 1.5 years of experience in web development,
              mostly with Front-end but working on backend as well."
          />
          <meta property="og:site_name" content="Nivedin" />
          <meta property="og:url" content="https://nivedin.tech" />
          <meta
            name="twitter:card"
            content="✌️ Hey, I'm Nivedin P Suryan a Front End Developer working remotely for Digital Vault having 1.5 years of experience in web development,
              mostly with Front-end but working on backend as well."
          />
          <meta name="twitter:title" content="Nivedin" />
          <meta
            name="twitter:description"
            content="I'm Nivedin P Suryan, a Front End Developer working remotely for Digital Vault having 1.5 years of experience in web development,
              mostly with Front-end but working on backend as well.
              I am doing my final year B.tech in Computer Science apart
              from freelancing."
          />
          <meta name="twitter:site" content="Nivedin" />
          <meta name="twitter:creator" content="nivedin" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta property="og:image" content="/nivedin_image-min.jpg" />
          <meta name="twitter:image" content="/nivedin_image-min.jpg" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
