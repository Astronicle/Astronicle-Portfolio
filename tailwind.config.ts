import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './types/**/*.{js,ts}',
  ],
  theme: { extend: {} },
  plugins: [],
}
export default config
