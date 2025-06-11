const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
 buildExcludes: [/app-build-manifest\.json$/], // ← esto evita precachear el archivo 404
});

module.exports = withPWA({
  reactStrictMode: true,
});
 