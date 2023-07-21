/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
		},
		colors	: {
			'primary'	: '#0F4C81',
			'secondary'	: '#F2F2F2',
			'accent'	: '#F2F2F2',
		}
	},
	plugins: [],
}
}
