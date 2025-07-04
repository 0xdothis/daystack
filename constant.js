export const COLORS = {
  primary: "137deg 51% 47%",
  secondary: "196deg 90% 45%",
  white: "160deg 43% 99%",
  accents: {
    light_green: "134deg 87% 97%",
    light_blue: "201deg 74% 95%",
  },
  bg: "200deg 33% 98%",
  black: "209deg 93% 11%",
  text: "209deg 96% 10%",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 750,
  laptop: 1300,
};

export const QUERIES = {
  tabletAndBigger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndBigger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 700,
  black: 900,
};
