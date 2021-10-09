import Head from "next/head";

const HeadTag = ({ title }) => {
  return (
    <Head>
      <title>{title ? `${title} | Nivedin` : "Nivedin"}</title>
      <meta
        name="description"
        content="I'm Nivedin P Suryan, a Front End Developer working remotely for Digital Vault having 1.5 years of experience in web development,
              mostly with Front-end but working on backend as well.
              I am doing my final year B.tech in Computer Science apart
              from freelancing. I think understanding the human experience
              is essential for creating useful and effective products that make
              life easier. I enjoy using my skill-set to empower people to
              accomplish their goals."
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
      <meta name="twitter:card" content="summary" />
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
    </Head>
  );
};

export default HeadTag;
