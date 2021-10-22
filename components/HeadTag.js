import Head from "next/head";

const HeadTag = ({ title }) => {
  return (
    <Head>
      <title>{title ? `${title} | Nivedin` : "Nivedin"}</title>
      <meta
        name="description"
        content="✌️ Hey, I'm Nivedin P Suryan a Front End Developer working remotely for Digital Vault having 1.5 years of experience in web development,
              mostly with Front-end but working on backend as well."
      />
      <meta property="og:title" content="Nivedin" key="title" />
      <meta property="og:type" content="website" />
      <meta
        name="og:description"
        property="og:description"
        content="I'm Nivedin P Suryan, a Front End Developer working remotely for Digital Vault having 1.5 years of experience in web development,
              mostly with Front-end but working on backend as well.
              I am doing my final year B.tech in Computer Science apart
              from freelancing."
      />
      <meta property="og:site_name" content={`${title} | Nivedin`} />
      <meta property="og:url" content="https://nivedin.com" />
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
      <link rel="manifest" href="/manifest.json" />
      <link rel="manifest" href="/manifest.json" />
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link
        rel="apple-touch-icon"
        href="/icons/apple-touch-icon-152x152.png"
      ></link>
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
    </Head>
  );
};

export default HeadTag;
