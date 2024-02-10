/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/modules/**/*.{js,jsx,ts,tsx}",
		"./src/common/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{html,js}",
	],
	css: ["./src/assets/styles/custom.css"],
	options: {
		safelist: [],
		safelistPatterns: [],
		keyframes: true,
		fontFace: true,
	},
	theme: {
		screens: {
			// specifying screens is mandatory in every tailwind.config file
			xs: "320px", //min-width 480px
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#FFF",
			black: {
				100: "#191714",
			},
			blue: {
				100: "#C5E4E7",
			},
			grey: {
				10: "#F3F8FB",
				50: "#F3F3F3",
				100: "#6B7777",
			},
			red: {
				50: "#B48372",
			},
			green: {
				10: "#A9C3C6",
				20: "#9FE8DD",
				30: "#26C2AD",
				40: "#649BA0",
				50: "#406667",
				60: "#21C3AC",
				70: "#9FE8DF",
				80: "#004849",
				100: "#00474B",
			},
		},

		fontSize: {
			// `[fontSize, { letterSpacing, lineHeight }]`
			ft0: [
				"12px",
				{
					letterSpacing: "0px",
					lineHeight: "24px",
				},
			],
			ft1: [
				"16px",
				{
					letterSpacing: "0px",
					lineHeight: "26px",
				},
			],
			ft2: [
				"20px",
				{
					letterSpacing: "0px",
					lineHeight: "30px",
				},
			],
			ft3: [
				"40px",
				{
					letterSpacing: "10px",
					lineHeight: "50px",
				},
			],
			ft4: [
				"22px",
				{
					letterSpacing: "",
					lineHeight: "20px",
				},
			],
			ft5: [
				"24px",
				{
					letterSpacing: "",
					lineHeight: "20px",
				},
			],
			ft6: [
				"32px",
				{
					letterSpacing: "0px",
					lineHeight: "50px",
				},
			],

			ft7: [
				"40px",
				{
					letterSpacing: "0px",
					lineHeight: "50px",
				},
			],
		},

		fontFamily: {
			IBMPlexMonoExtraBold: ["IBMPlexMono-ExtraBold", "sans-serif"],
			IBMPlexMonoExtraLight: ["IBMPlexMono-ExtraLight", "sans-serif"],
			IBMPlexMonoLight: ["IBMPlexMono-Light", "sans-serif"],
			IBMPlexMonoMedium: ["IBMPlexMono-Medium", "sans-serif"],
			IBMPlexMonoRegular: ["IBMPlexMono-Regular", "sans-serif"],
			IBMPlexMonoSemiBold: ["IBMPlexMono-SemiBold", "sans-serif"],
			IBMPlexMonoBold: ["IBMPlexMono-Bold", "sans-serif"],
		},

		extend: {
			//theme options are to be extended with custom variants and not overridden (1 unit = 4px)
			spacing: {
				//common for width, height, padding, margin
				4.25: "17px",
				5.25: "21px",
				13: "52px",
				13.75: "55px",
				14.25: "57px",
				15.75: "63px",
				17.5: "70px",
				21: "84px",
				21.25: "85px",
				25: "100px",
				33.75: "135px",
				34.25: "137px",
				113: "452px",
				122.5: "490px",
				127.5: "510px",
				292.5: "1170px",
				"5per": "5%",
				"10per": "10%",
				"50per": "50%",
				"90per": "90%",
			},
			borderRadius: {
				//same as border width
				0.5: "0.5px",
				10: "10px",
				15: "15px",
			},
			borderColor: {
				white: "#FFFFFF", // Change to the color you desire
			},
			borderWidth: {
				0.5: "0.5px",
			},
			gridTemplateColumns: {
				dashCol: "327px 1163px",
				dashColIcon: "124px 1316px",
				loginCol: "50% 50%",
				userCol: "277px 759px 404px",
				userColIcon: "124px 912px 404px",
			},
			gridTemplateRows: {
				dashRow: "85px 775px",
				userRow: "105px 795px",
			},
			maxHeight: {
				"50vh": "50vh",
				"70vh": "70vh",
				"75vh": "75vh",
				"80vh": "80vh",
				"95vh": "95vh",
			},
		},
	},
	variants: {
		//there are few css properties which don't support features/events like responsive, hover etc. by default, so to make them supportive for those css properties, we write them down as below
		width: ["responsive", "hover", "focus", "group-hover"],
		display: ["responsive", "hover", "focus", "group-hover"],
		transform: ["responsive", "hover", "focus", "group-hover"],
		scale: ["responsive", "hover", "focus", "group-hover"],
		extend: {
			animation: ["hover", "focus", "group-hover"],
			grayscale: ["hover", "focus", "group-hover"],
		},
	},
	plugins: [],
};
