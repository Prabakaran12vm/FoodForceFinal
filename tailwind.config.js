/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
  },
    extend: {
        fontFamily:{
          'swig':['Gilroy-Medium', 'sans-serif']
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        

    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      'light',
    ]
  }
}