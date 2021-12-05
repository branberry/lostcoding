const withTM = require("next-transpile-modules")([
  "@webxr-input-profiles/motion-controllers",
  "@react-three/xr",
  "three",
]);

module.exports = withTM({
  experimental: { esmExternals: "loose" },

  reactStrictMode: true,
});
