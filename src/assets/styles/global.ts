import { createGlobalStyle } from 'styled-components';


interface DefaultTheme {
    body: string;
    text: string;
}


export default createGlobalStyle<{ theme: DefaultTheme }>`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        border: none;
        list-style-type: none;
        box-sizing: border-box; 
    }

    :root {
        /** FONTS */
        --ui-primary-font: "Work Sans", sans-serif;
        --ui-title-font: "Work Sans", sans-serif;
        --ui-subtitle-font: "Work Sans", sans-serif;
        --info-font: "Space Grotesk", sans-serif;
        --pixel-font: "Press Start 2P", cursive;

        /** COLORS */
        --ui-primary-color: #0034EE;
        --ui-content-color: ${({ theme }) => theme.text}; 
        --ui-theme-background: ${({ theme }) => theme.body};
        --ui-red: #DB2326;

        /** BREAKPOINTS */
        --ui-media-breakpoints-xs: 375px;
        --ui-media-breakpoints-sm: 744px;
        --ui-media-breakpoints-md: 950px;
        --ui-media-breakpoints-lg: 1128px;
        --ui-media-breakpoints-xl: 1440px;

        /** GUTTERS */
        --ui-padding-x: 20px;
        --ui-padding-y: 20px;

        /** LINE HEIGHTS */
        --ui-title-lh-xs: 1.2em; 
        --ui-title-lh-sm: 1.2em; 
        --ui-title-lh-md: 1.2em; 
        --ui-title-lh-lg: 1.2em; 
        --ui-title-lh-xl: 3.3em; 

        /** BORDERS */
        --form-input-placeholder-color: #8E8E8E;
        --form-input-border-color: #DBDBDB;
        --form-input-border: 2px solid var(--form-input-border-color);
        --form-input-border-radius: 8px;

    }

    /** ANIMATIONS */
    
    @keyframes blinker {
        50% { opacity: 0; }
    }

    @keyframes animate {
        0%   { transform: scale(1); }
        50%  { transform: scale(0); }
        100% { transform: scale(1); }
    }

    @keyframes slideLeftToRight {
        0%   { transform: translateX(-100%); }
        100% { transform: translateX(0); }
    }

    @keyframes slideTopToBottom {
        0%   { transform: translateY(100%); }
        100% { transform: translateY(0); }
    }

    /** GLOBAL */

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: var(--ui-primary-font);
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        transition: background 0.5s, color 0.3s linear;
    }
    

    a {
        text-decoration: none;

        &:hover{
            text-decoration: underline;
            text-decoration-color: #000;
        }
    }


    /** HEADINGS */

    h2 {
        font-size: 3.5em;
    }

    button, input[type=submit] {
        width: fit-content;
        height: fit-content;
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
        font-family: var(--ui-primary-font);
        font-weight: 300;
        padding: 12px 20px;
        border-radius: 10px;
        cursor: pointer;
    }
`;