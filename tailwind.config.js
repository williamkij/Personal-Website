/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
fontFamily: {
    sans: ['"Sora"', 'system-ui', 'sans-serif'],
    display: ['"Source Serif 4"', 'Georgia', 'serif']
},
			colors: {
				surface: {
					DEFAULT: '#fafaf9',
					dark: '#1c1917'
				},
				accent: {
					DEFAULT: '#2563eb',
					light: '#3b82f6'
				}
			},
			maxWidth: {
				content: '1200px'
			}
		}
	},
	plugins: []
};
