/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
 "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./assets/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    important:"#elipse",
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      colors: {
        'black': '#151515',
        'green': '#4EE1A0',
        'dark-grey':'#242424',
        'grey':'#D9D9D9',
        'white':'#FFFFFF',
        'light-red':'#FF6F5B'
      }      
    },
  
    fontSize: {
      'm': ['18px', {
        lineHeight: '28px',
        fontWeight: '500',
      }],
      'hm': ['24px', {
        lineHeight: '32px',
        fontWeight: '700',
      }],
      'hl': ['48px', {
        lineHeight: '56px',
        fontWeight: '700',
        letterSpacing: '-1.5px',
      }],
      'hxl': ['88px', {
        lineHeight: '88px',
        fontWeight: '700',
        letterSpacing: '-2.5px',
      }],
      'icon': ['20px', {
      }],
      'iconmd': ['25px', {
      }],
      /**mobile */
      'mobm': ['16px', {
        lineHeight: '26px',
        fontWeight: '500',
      }],
      'mobh': ['40px', {
        lineHeight: '40px',
        fontWeight: '700',
        letterSpacing: '-1.14px',
      }],
    }
    ,
    dropShadow: {
      '3xl': '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
    
    },
    scale: {
      '-1': '-1'
    }
  },
  plugins: [],
}

