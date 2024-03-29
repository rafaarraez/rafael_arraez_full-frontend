import { css } from 'styled-components';

export const Typography = css`
    @font-face { 
        font-family: "Montserrat";
        src: url("./assets/fonts/Montserrat-Light.woff2") format("woff2");
        font-weight: 300;
        font-style: normal; 
    }
    @font-face {
        font-family: "Montserrat";
        src: url("./assets/fonts/Montserrat-Regular.woff2") format("woff2");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "Montserrat";
        src: url("./assets/fonts/Montserrat-Medium.woff2") format("woff2");
        font-weight: 500;
        font-style: normal;

    }
    @font-face {
        font-family: "Montserrat";
        src: url("./assets/fonts/Montserrat-SemiBold.woff2") format("woff2");
        font-weight: 600;
        font-style: normal;

    }
    @font-face {
        font-family: "Montserrat";
        src: url("/assets/fonts/Montserrat-Bold.woff2") format("woff2");
        font-weight: 700;
        font-style: bold;

    }
    @font-face {
        font-family: "Montserrat";
        src: url("/assets/fonts/Montserrat-ExtraBold.woff2") format("woff2");
        font-weight: 800;
        font-style: bolder;

    }
    @font-face {
        font-family: "Montserrat";
        src: url("/assets/fonts/Montserrat-Black.woff2") format("woff2");
        font-weight: 900;
        font-style: bolder;
    }
`;