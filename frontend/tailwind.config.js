/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom Colors
        tomato:'#FF6347',
        lightBlack:'#242323',
        primary: {
          DEFAULT: '#1E293B', // Default primary color
          light: '#334155',   // Lighter variant
          dark: '#0F172A',    // Darker variant
        },
        accent: {
          DEFAULT: '#E11D48', // Vibrant accent color
          light: '#F43F5E',   // Lighter variant
          dark: '#9F1239',    // Darker variant
        },
        success: '#22C55E',   // Success green
        warning: '#F59E0B',   // Warning yellow
        error: '#EF4444',     // Error red
        neutral: '#374151',   // Neutral gray
      },
    },
  },
  plugins: [],
};
