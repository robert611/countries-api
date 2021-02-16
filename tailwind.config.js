module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#FF6363',
				secondary: {
					100: '#E2E2D5',
					200: '#888888'
				}
			},
		},
		minWidth: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
