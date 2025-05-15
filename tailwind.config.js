/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': {'max': '500px'},
      },
      colors: {
        primary: "#F05736", // Brand primary color
        secondary: {
          100: "#FFF8F6",
          200: "#FFE8E2",
          300: "#FFCCC0",
          400: "#FF9A85",
          500: "#F05736", // Same as primary
          600: "#D83A1A",
          700: "#A22C14",
          800: "#6E1E0E",
          900: "#3A1007",
        },
        accent: {
          blue: "#1D67C9",
          green: "#34D399",
          yellow: "#FBBF24",
          purple: "#8B5CF6",
        },
        dark: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
        'cta-pattern': "url('/src/assets/images/cta-bg.jpg')",
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 