/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': {'max': '500px'},
      },
      colors: {
        // This defines the main brand color that can be used as 'bg-primary', 'text-primary' etc.
        primary: "#F05736", // Brand primary color (a shade of red/orange)
        
        // Secondary colors are variations/shades of the primary color
        // The numbers represent different shades (100 being lightest, 900 being darkest)
        // Can be used like 'bg-secondary-100', 'text-secondary-600' etc.
        secondary: {
          100: "#FFF8F6", // Very light shade
          200: "#FFE8E2", 
          300: "#FFCCC0",
          400: "#FF9A85",
          500: "#F05736", // Same as primary color
          600: "#D83A1A",
          700: "#A22C14", 
          800: "#6E1E0E",
          900: "#3A1007", // Very dark shade
        },
        
        // Accent colors are supporting colors for highlighting or contrasting elements
        // Can be used like 'bg-accent-blue', 'text-accent-green' etc.
        accent: {
          blue: "#1D67C9",   // For links, buttons etc
          green: "#34D399",  // For success states
          yellow: "#FBBF24", // For warnings
          purple: "#8B5CF6", // For special highlights
        },
        dark: {
          50: "#F9FAFB",   // Use with bg-dark-50 for subtle backgrounds, text-dark-50 for very light text
          100: "#F3F4F6",  // Use with bg-dark-100 for hover states, text-dark-100 for light text
          200: "#E5E7EB",  // Use with border-dark-200 for borders, bg-dark-200 for light backgrounds
          300: "#D1D5DB",  // Use with text-dark-300 for secondary text, border-dark-300 for stronger borders
          400: "#9CA3AF",  // Use with text-dark-400 for placeholder text, bg-dark-400 for medium backgrounds
          500: "#6B7280",  // Use with text-dark-500 for default text, bg-dark-500 for medium-dark backgrounds
          600: "#4B5563",  // Use with text-dark-600 for stronger text, bg-dark-600 for darker backgrounds
          700: "#374151",  // Use with text-dark-700 for headers, bg-dark-700 for very dark backgrounds
          800: "#1F2937",  // Use with text-dark-800 for high contrast text, bg-dark-800 for near-black backgrounds
          900: "#111827",  // Use with text-dark-900 for highest contrast, bg-dark-900 for darkest backgrounds
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