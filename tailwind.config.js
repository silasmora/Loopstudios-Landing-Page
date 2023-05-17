/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white' : 'hsl(0, 0%, 100%)',
        'black' : 'hsl(0, 0%, 0%)',
        'dark-gray' : 'hsl(0, 0%, 55%)',
        'very-dark-gray' : 'hsl(0, 0%, 41%)',   
      },
      backgroundImage: {
        'image-hero': "url('/images/mobile/image-hero.jpg')",
        'image-hero-desktop': "url('/images/desktop/image-hero.jpg')",
        'image-interactive': "url('/images/mobile/image-interactive.jpg')",
        'image-interactive-desktop': "url('/images/desktop/image-interactive.jpg')",
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
      }
  },
  plugins: [],
}
}
