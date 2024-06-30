// import createMiddleware from "next-intl/middleware";
// import { locales } from "./i18n.config";

// // export default createMiddleware({
// //   defaultLocale: "en",
// //   locales,
// //   localeDetection: false,
// // });
// ////////////////////////////////////////////////
// const middleware = createMiddleware({
//   defaultLocale: "en",
//   locales,
//   localeDetection: false,
// });
// export default function handler(req: any, res: any) {
//   console.log("Request URL:", req.url);
//   return middleware(res);
// }

// export const config = {
//   // matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
//   /////////////////////////////////////////////////////
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)",
//   ],
// };
