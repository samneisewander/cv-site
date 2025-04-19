/** @type {import('tailwindcss').Config} */

const { withMaterialColors } = require('tailwind-material-colors')

const config = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	  ],
	  theme: {
		extend: {},
	  },
	  plugins: [],
}

module.exports = withMaterialColors(
	config,
	{
		// Your base colors as HEX values. 'primary' is required.
		primary: '#D0021B',
		// secondary and/or tertiary are optional, if not set they will be derived from the primary color.
		// secondary: '#ffff00',
		// tertiary: '#0000ff',
		// // add any named colors you need:
		// green: '#00ff00',
		// blue: '#0000ff',
	},
	{
		/* one of 'content', 'expressive', 'fidelity', 'monochrome', 'neutral', 'tonalSpot' or 'vibrant' */
		scheme: 'content',
		// contrast is optional and ranges from -1 (less contrast) to 1 (more contrast).
		contrast: 0,
	}
)
