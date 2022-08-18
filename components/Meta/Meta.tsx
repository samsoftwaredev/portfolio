import Head from "next/head";
import { OWNER } from "../../constants/variables/owner";

const Meta = () => {
  return (
    <Head>
      <title>{OWNER.firstName}&apos;s portfolio</title>
      <meta name="description" content={OWNER.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
