export const locales = ["en", "fa"] as const;
console.log("in i18n.config.ts");
export type Locale = (typeof locales)[number];
