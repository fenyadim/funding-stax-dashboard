/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'collapsible-down': 'collapsible-down 0.2s ease-out',
				'collapsible-up': 'collapsible-up 0.2s ease-out',
			},
			keyframes: {
				'accordion-down': {
					from: {
						maxHeight: '0',
					},
					to: {
						maxHeight: '100vh',
					},
				},
				'accordion-up': {
					from: {
						maxHeight: '100vh',
					},
					to: {
						maxHeight: '0',
					},
				},
				'collapsible-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-collapsible-content-height)' },
				},
				'collapsible-up': {
					from: { height: 'var(--radix-collapsible-content-height)' },
					to: { height: '0' },
				},
			},
			fontFamily: {
				roboto: 'var(--font-roboto)',
				manrope: 'var(--font-manrope)',
			},
			content: {
				arrow: 'url("/arrow.svg")',
				arrowWhite: 'url("/arrow-white.svg")',
			},
			spacing: {
				sidebar: 'calc(350px + 1rem + 24px)',
				mainFullScreen: 'calc(100vh - (32px + 63px))',
				mainWithoutFooter: 'calc(100vh - (32px + 63px + 60px))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				error: 'hsl(var(--error))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
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
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
