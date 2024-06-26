import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";

console.log("Middleware loaded");
export default createMiddleware({
  defaultLocale: "en",
  locales,
  localeDetection: false,
});

export const config = {
  // matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)",
  ],
};
