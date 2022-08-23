import Head from "next/head";
import { OWNER } from "@/constants/variables/owner";

const Meta = () => {
  const pageTitle = `${OWNER.firstName} ${OWNER.lastName} Portfolio`;
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={OWNER.description} />
      <meta
        name="keywords"
        content={`${pageTitle}, Portfolio, Skills, Projects, Biography, About `}
      />
      <meta name="author" content={`${OWNER.firstName} ${OWNER.lastName}`} />
      <meta property="og:title" content={pageTitle} />
      {/* <meta property='og:image' content='//media.example.com/ 1234567.jpg'/> */}
      <meta property="og:description" content={OWNER.description} />
      {/* <meta property='og:url' content='//www.example.com/URL of the article'/> */}
    </Head>
  );
};

export default Meta;
