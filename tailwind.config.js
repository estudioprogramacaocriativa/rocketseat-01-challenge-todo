/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1E6F9F',
        'purple-dark': '#5E60CE',
        'gray-100': '#F2F2F2',
        'gray-200': '#D9D9D9',
        'gray-300': '#808080',
        'gray-400': '#333333',
        'gray-500': '#262626',
        'gray-600': '#1A1A1A',
        'gray-700': '#0D0D0D',
        blue: '#4EA8DE',
        purple: '#8284FA',
        danger: '#E25858',
      },
      fontFamily: {
        default: 'Inter, sans-serif'
      },
      lineHeight: {
        default: '140%'
      },
    },
  },
  plugins: [],
}

