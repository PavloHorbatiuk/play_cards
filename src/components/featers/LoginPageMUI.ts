import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    background: '#1c5fda',
                    fontSize: '1rem',
                },
            },
        },
    },
});