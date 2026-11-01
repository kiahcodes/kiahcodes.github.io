/** @type {import('tailwindcss').Config} */
import defaultColors from 'tailwindcss/colors';

// Dark (default) uses the stock Tailwind palette, so the original look is unchanged.
// Light overrides these variables in src/index.css with the Lapis velvet evening palette.
const hues = ["gray","cyan","blue","sky","indigo","green","emerald","purple","fuchsia","pink","rose","orange","yellow","amber"];
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;
const themed = Object.fromEntries(
  hues.map((h) => [h, Object.fromEntries(Object.keys(defaultColors[h]).map((s) => [s, v(`${h}-${s}`)]))]),
);

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ...themed, ink: v('ink') },
    },
  },
  plugins: [],
};
