/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@material-tailwind/react']);

module.exports = withTM({
  reactStrictMode: true,
});