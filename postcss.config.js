const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    // Can't purge CSS yet because of Carbon Components
    // ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};