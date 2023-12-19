/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      h1: [
        '48px',
        {
          fontWeight: '500',
          lineHeight: '58px',
        },
      ],
      h2: [
        '40px',
        {
          fontWeight: '500',
          lineHeight: '50px',
        },
      ],
      h3: [
        '24px',
        {
          fontWeight: '500',
          lineHeight: '29px',
        },
      ],
      h4: [
        '20px',
        {
          fontWeight: '500',
        },
      ],
      h5: [
        '18px',
        {
          fontWeight: '400',
        },
      ],
      h6: [
        '16px',
        {
          fontWeight: '400',
        },
      ],
      body: [
        '16px',
        {
          fontWeight: '400',
        },
      ],
      small: [
        '14px',
        {
          fontWeight: '400',
        },
      ],
      tiny: [
        '12px',
        {
          fontWeight: '400',
        },
      ],
    },
    fontFamily: {
      heading: ['var(--font-montserrat)'],
      body: ['var(--font-poppins)'],
    },
    extend: {
      flex: {
        full: '1 1 100%',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
        },
        secondary: {
          DEFAULT: 'hsla(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        font: {
          text: 'hsl(var(--font-text))',
          heading: 'hsl(var(--font-heading))',
          primary: 'hsl(var(--font-primary))',
          footer: 'hsl(var(--font-footer))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
