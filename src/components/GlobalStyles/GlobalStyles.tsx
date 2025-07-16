"use client";
import { createGlobalStyle } from "styled-components";
import { COLORS, FONT_SIZES } from "../../../constant";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;

}

#root, main {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
  
}


html {
 
/* Colors */
--color-primary: hsl(${COLORS.primary});
--color-secondary: hsl(${COLORS.secondary});
--color-bg: hsl(${COLORS.bg});
--color-white: hsl(${COLORS.white});
--color-black: hsl(${COLORS.black});
--color-text: hsl(${COLORS.text});
--color-green-10: hsl(${COLORS.accents.light_green});
--color-blue-10: hsl(${COLORS.accents.light_blue});
--color-blue-bg: hsl(${COLORS.blue_bg});



/* Font-sizes */
--text-h1: calc((${FONT_SIZES.h1} / 16) * 1rem);
--text-h2: calc((${FONT_SIZES.h2} / 16) * 1rem);
--text-h3: calc((${FONT_SIZES.h3} / 16) * 1rem);
--text-h4: calc((${FONT_SIZES.h4} / 16) * 1rem);
--text-h5: calc((${FONT_SIZES.h5} / 16) * 1rem);
--text-h6: calc((${FONT_SIZES.h6} / 16) * 1rem);
--text-body: calc((${FONT_SIZES.body} / 16) * 1rem);
--text-small: calc((${FONT_SIZES.small} / 16) * 1rem);
--text-description: calc((${FONT_SIZES.description} / 16) * 1rem);

/* Padding */

--padding-8: 8px;
--padding-16: 16px;
--padding-24: 24px;
--padding-32: 32px;
--padding-40: 40px;
--padding-48: 48px;
--padding-56: 56px;
--padding-64: 64px;
--padding-72: 72px;
--padding-80: 80px;
--padding-88: 88px;
--padding-96: 96px;

--padding-x-8: 8px;
--padding-x-16: 16px;
--padding-x-24: 24px;
--padding-x-32: 32px;
--padding-x-40: 40px;
--padding-x-48: 48px;
--padding-x-56: 56px;
--padding-x-64: 64px;
--padding-x-72: 72px;
--padding-x-80: 80px;
--padding-x-88: 88px;
--padding-x-96: 96px;

--padding-y-8: 8px;
--padding-y-16: 16px;
--padding-y-24: 24px;
--padding-y-32: 32px;
--padding-y-40: 40px;
--padding-y-48: 48px;
--padding-y-56: 56px;
--padding-y-64: 64px;
--padding-y-72: 72px;
--padding-y-80: 80px;
--padding-y-88: 88px;
--padding-y-96: 96px;


/* Margin */
--margin-8: 8px;
--margin-16: 16px;
--margin-24: 24px;
--margin-32: 32px;
--margin-40: 40px;
--margin-48: 48px;
--margin-56: 56px;
--margin-64: 64px;
--margin-72: 72px;
--margin-80: 80px;
--margin-88: 88px;
--margin-96: 96px;

--margin-x-auto: auto;
--margin-x-8: 8px;
--margin-x-16: 16px;
--margin-x-24: 24px;
--margin-x-32: 32px;
--margin-x-40: 40px;
--margin-x-48: 48px;
--margin-x-56: 56px;
--margin-x-64: 64px;
--margin-x-72: 72px;
--margin-x-80: 80px;
--margin-x-88: 88px;
--margin-x-96: 96px;

--margin-y-auto: auto;
--margin-y-8: 8px;
--margin-y-16: 16px;
--margin-y-24: 24px;
--margin-y-32: 32px;
--margin-y-40: 40px;
--margin-y-48: 48px;
--margin-y-56: 56px;
--margin-y-64: 64px;
--margin-y-72: 72px;
--margin-y-80: 80px;
--margin-y-88: 88px;
--margin-y-96: 96px;


/* Gap */
--gap-8: 8px;
--gap-16: 16px;
--gap-24: 24px;
--gap-32: 32px;
--gap-40: 40px;
--gap-48: 48px;
--gap-56: 56px;
--gap-64: 64px;
--gap-72: 72px;
--gap-80: 80px;
--gap-88: 88px;
--gap-96: 96px;

--gap-x-8: 8px;
--gap-x-16: 16px;
--gap-x-24: 24px;
--gap-x-32: 32px;
--gap-x-64: 64px;
--gap-x-72: 72px;
--gap-x-80: 80px;
--gap-x-88: 88px;
--gap-x-96: 96px;


--gap-y-8: 8px;
--gap-y-16: 16px;
--gap-y-24: 24px;
--gap-y-32: 32px;
--gap-y-64: 64px;
--gap-y-72: 72px;
--gap-y-80: 80px;
--gap-y-88: 88px;
--gap-y-96: 96px;
  


  /* change scrollbar width */
  scrollbar-width: thin;


  
}


html, body, #root {
  height: 100%;


}
`;

export default GlobalStyles;
