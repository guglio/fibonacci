/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#6b6375',
        textH: '#08060d',
        background: '#fff',
        border: '#e5e4e7',
        codeBackground: '#f4f3ec',
        accent: '#aa3bff',
        accentBackground: 'rgba(170, 59, 255, 0.1)',
        accentBorder: 'rgba(170, 59, 255, 0.5)',
        socialBackground: 'rgba(244, 243, 236, 0.5)',
        headerBg: '#3949ab',
        primary: {
          dark: '#1976d2',
          main: '#2196f3',
          text: '#fff',
          light: '#64b5f6',
        },
        secondary: {
          dark: '#616161',
          main: '#757575',
          text: '#fff',
          light: '#e0e0e0',
        },
      },
    },
  },
  plugins: [],
}
