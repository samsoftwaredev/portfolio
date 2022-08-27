import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WoopraTracker } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WoopraTracker
        config={{
          domain: "samuelruizportfolio.herokuapp.com",
          outgoing_tracking: true,
          download_tracking: true,
          click_tracking: true,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
