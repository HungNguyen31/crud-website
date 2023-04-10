/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js,ejs}"],
  content: ["./src/views/*.{html,js}", "./src/views/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [{ tailwindcss: {}, autoprefixer: {} }],
};
