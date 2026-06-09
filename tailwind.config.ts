import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: {
        cream: '#f8f1df',
        ink: '#181512',
        accent: '#ffd166',
        card: '#fffaf0',
      },
    },
  },
  plugins: [],
} satisfies Config;
