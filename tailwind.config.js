module.exports = {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        foreground: 'var(--color-foreground)',
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        muted: 'var(--color-muted)',
      },
    },
  },
  plugins: [],
};


