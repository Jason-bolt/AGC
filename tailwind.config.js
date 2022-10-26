/** @type {import('tailwindcss').Config} */
module.exports = {
  'darkMode': 'class',
  content: ['./views/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1449px'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
