/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./ui-framework/**/*.{js,ts,jsx,tsx}", 
    "./dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Roboto"', 'sans-serif'],
        heading: ['"Work Sans"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        outline: ['"Kumar One Outline"', 'cursive'],
      },
      // You can add more tokens like colors or spacing here
    },
  },
  plugins: [],
}

