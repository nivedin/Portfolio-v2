import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Nivedin</title>
          <meta
            name="description"
            content="✌️ Hey, I'm Nivedin P Suryan a Front End Developer working remotely for Digital Vault having 1.5 years of experience in web development,
              mostly with Front-end but working on backend as well."
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
