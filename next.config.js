const withPWA = require("next-pwa");
const path = require("path");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
});
