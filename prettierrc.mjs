/** @type {import("prettier").Config} */
export default {
  tailwindStylesheet: "./src/styles/global.css",
  plugins: ['prettier-plugin-astro'],
  overrides: [
    { 
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};