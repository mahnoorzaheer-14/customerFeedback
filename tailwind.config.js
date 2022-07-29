/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: {
        content: ['./templates/**/*.html'],
    },
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require('tailwindcss-font-inter'), require("daisyui"), require('flowbite/plugin')],
    theme: {
        screens: {

        }
    },
}
