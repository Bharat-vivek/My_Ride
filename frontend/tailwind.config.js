/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",              // ✅ correct path if index.html is in the root
        "./src/**/*.{js,jsx,ts,tsx}" // ✅ all your source files
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
