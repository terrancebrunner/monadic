/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  output: "export", // generate static HTML for all pages
}

export default nextConfig