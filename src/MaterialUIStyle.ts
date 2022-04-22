import createTheme from '@mui/material/styles/createTheme';


export const theme = createTheme({
	palette: {
		text: {
			primary: "#2D2E46",
		}
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					background: '#21268F',
					width: "266px",
					height: "36px",
					borderRadius: "30px",
					boxShadow: " 0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)",
					fontFamily: " SF UI Display",
					fontSize: "16px",
					fontWeight: "500",
					lineHeight: "19px",
					letterSpacing: "0.01em",
					color: "#ECECF9",
					textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25);",
					alignItems: "center",
					textTransform: "inherit",
					margin: "0 auto",
				},
			},
		},
	},
}
)

theme.typography.h4 = {
	color: "#2D2E46",
	fontFamily: "Poppins",
	fontSize: "26px",
	fontWeight: "600 ",
	lineHeight: "39px",
	textAlign: "center",
}
theme.typography.h3 = {
	fontFamily: "SF UI Display",
	fontSize: "16px",
	fontWeight: "400",
	lineHeight: "24px",
}
theme.typography.h2 = {
	fontFamily: "SF UI Display",
	fontSize: "16px",
	fontWeight: "600 ",
	lineHeight: "24px",
	color: "	#21268F"
}

