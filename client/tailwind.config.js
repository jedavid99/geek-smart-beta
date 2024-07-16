/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
    {
      "rewrites": [{"source": "/(.*)", "destination": "/"}]
  }
  ],

  theme: {
    extend: {},
  },
  plugins: [
    
  ],
  
}

