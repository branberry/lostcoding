const withPWA = require('next-pwa')({
	dest: 'public',
});
const withTM = require('next-transpile-modules')(['three']);

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = withTM(withPWA(nextConfig));
