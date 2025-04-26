
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Era-specific colors
				era1: {
					primary: '#FF6600', // Classic orange
					secondary: '#003399', // Deep blue
					background: '#CCCCCC', // Light gray
					text: '#000000', // Black
					accent: '#00CC00', // Bright green
				},
				era2: {
					primary: '#3B5998', // Facebook blue
					secondary: '#38B0DE', // Sky blue
					background: '#F2F2F2', // Light gray
					text: '#333333', // Dark gray
					accent: '#4CAF50', // Green
				},
				era3: {
					primary: '#2D3748', // Dark blue-gray
					secondary: '#805AD5', // Purple
					background: '#FFFFFF', // White
					text: '#1A202C', // Near black
					accent: '#3182CE', // Blue
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				comic: ['"Comic Sans MS"', 'cursive'],
				times: ['"Times New Roman"', 'serif'],
				helvetica: ['Helvetica', 'Arial', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				opensans: ['"Open Sans"', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'crt-flicker': {
					'0%': { opacity: '0.9' },
					'2%': { opacity: '0.5' },
					'3%': { opacity: '0.9' },
					'10%': { opacity: '1' },
					'70%': { opacity: '0.9' },
					'72%': { opacity: '0.5' },
					'74%': { opacity: '1' },
					'100%': { opacity: '0.9' },
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'spin': 'spin 2s linear infinite',
				'crt-flicker': 'crt-flicker 5s infinite',
				'blink': 'blink 1s infinite',
				'typing': 'typing 3.5s steps(40, end)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
