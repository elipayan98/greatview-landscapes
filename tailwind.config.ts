import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#1B4D3E',
            light: '#2A7D5F',
            dark: '#0F2E25',
            50: '#EEFAF4',
          },
          navy: {
            DEFAULT: '#172A3A',
            light: '#1E3A50',
          },
          gold: {
            DEFAULT: '#C8A951',
            light: '#D4BC72',
            dark: '#A8893A',
          },
          cream: '#F9F7F3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
