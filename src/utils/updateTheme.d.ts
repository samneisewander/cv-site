declare module './updateTheme.js' {
	export function updateTheme(
		colorsMap: ColorsMap,
		darkModeConfig: 'media' | 'class',
		scheme: 'content' | 'expressive' | 'fidelity' | 'monochrome' | 'neutral' | 'tonalSpot' | 'vibrant',
		contrast: number,
	): any
}


