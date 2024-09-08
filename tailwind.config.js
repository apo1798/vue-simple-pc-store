/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false
  },
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true
      }
    }
  },
  plugins: []
}
