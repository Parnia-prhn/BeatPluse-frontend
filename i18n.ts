import NextI18Next from "next-i18next";
import path from "path";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fa"],
  localePath: path.resolve("./public/locales"),
});

export default NextI18NextInstance;
export const { appWithTranslation, withTranslation, i18n } =
  NextI18NextInstance;
