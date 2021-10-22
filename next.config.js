const withPWA = require("next-pwa");
const path = require("path");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
});
