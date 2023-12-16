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
        main: {
          1: "#139476",
          2: "#f8f8f8",
          3: "#5b5b5a",
          4: "#5e5f5f",
          5: "#f8f8f8",
          6: "#00c39c",
          7: "#41b8a0",
          8: "#50d4bc",
          9: "#b7ded4",
          10: "#393838",
          11: "#2f2e2e"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config