import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'footer-bg': 'linear-gradient(to right,#16222A,#1A2932,#1D2F39,#20333E,#223743,#243A47,#263D4A,#27404D,#294250,#2A4553,#2C4756,#2E4B5A,#304E5E,#335364,#36596B,#3A6073)',
        'domains-gradient': 'linear-gradient(to right, #008000, #ADFF2F, #FFFF00, #FFD700, #FFA500, #FF4500, #FF0000)'
      },
    },
  },
  plugins: [],
}
export default config
