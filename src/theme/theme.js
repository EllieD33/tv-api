import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        custom: {
            50: "#F2F4F8",
            100: "#E4E9F2",
            200: "#C2CBD9",
            300: "#A2AFBF",
            400: "#818DA5",
            500: "#55697D",
            600: "#3D4E64",
            700: "#23355A",
            800: "#192642",
            900: "#0E142B",
            light: "#AFBEC1",
            dark: "#29284E",
        },
    },
    styles: {
        global: {
            body: {
                color: "custom.900",
            },
        },
    },
});

export default theme;
