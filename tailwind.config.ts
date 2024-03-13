import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#1E1E1E',
        'off-white': '#F1F1F1',
        'off-grey': '#9F9F9F',
      },
      fontFamily: {
       montserrat: ["montserrat", 'sans-serif'],
       switzer: ['switzer', 'sans-serif'],
      },
      fontSize: {
        'title': '11.25rem',
        'website': '8rem',
        'mac': '8.5rem'
      },
      lineHeight: {
        'title': '12.25rem',
        'website': '8rem',
        'mac': '8.5rem'
      },
      letterSpacing: {
        'title': '.20em',
        'website': '.14em'
      },
      backgroundImage: {
        'noise': 'url("./assets/noise.gif")',
        'hero-pattern': 'url("./svg/topography.svg")'
      }
    },
  },
  plugins: [],
};
export default config;
