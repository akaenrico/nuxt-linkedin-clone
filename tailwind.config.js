import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // TODO Dark theme
        dt: {
          background: '#0b0b0b'
        },
        background: '#F4F2EE'
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
