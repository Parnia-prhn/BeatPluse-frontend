import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === "fa" ? "rtl" : "ltr";

    return (
      <Html dir={dir} lang={locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
