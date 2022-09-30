//TODO:  Temp Fix: Safelist should not need to be added.  Interpolation not working on multicomun or foote count

module.exports = {
  safelist: [
    'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5'
  ],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['1.6rem', '2.4rem'],
        lg: ['2.4rem', '2.4rem'],
        xl: ['46px', '46px'],
        xxl: ['80px', '80px'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        grey: '#f2f2f2',
        blue: '#2d70ce',
        white: '#ffffff',
        red: '#c41515',
      },
          
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
