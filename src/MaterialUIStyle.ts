import createTheme from '@mui/material/styles/createTheme';
export const theme = createTheme({

	typography: {
		fontFamily: "Poppins"
	},

	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot

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
					textTransform: "inherit"
				},

			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					width: '347px',
					height: '48px',
				}
			}
		},
	},
});