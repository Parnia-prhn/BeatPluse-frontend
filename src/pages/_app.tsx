import { AppProps } from "next/app";
import { appWithTranslation } from "@/i18n";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
