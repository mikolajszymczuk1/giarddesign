/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      white: '#FFFFFF',
      lightCream: '#F5F0EC',
      mediumCream: '#DCC1AB',
      green: '#1B5B31',
      black: '#111111',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xlg: '1440px',
      ulg: '1800px',
    },
    backgroundImage: {
      heroImageAMobile: "url('/src/assets/images/heroImageA-mobile.png')",
      heroImageADesktop: "url('/src/assets/images/heroImageA-desktop.png')",
      aboutImageMobile: "url('/src/assets/images/aboutImage-mobile.png')",
      aboutImageDesktop: "url('/src/assets/images/aboutImage-desktop.png')",
    },
	},
	plugins: [],
}
