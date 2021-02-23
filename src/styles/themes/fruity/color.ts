import { ColorTheme } from '../../../theme/types'

export const brand = {
  lime: {
    100: '#76d668',
    200: '#63d052',
    300: '#4fca3d',
    400: '#3cc427',
    500: '#29bf12',
    600: '#26ae11',
  },

  chartreuse: {
    100: '#c9ff8f',
    200: '#c1ff7f',
    300: '#baff6f',
    400: '#b2ff5f',
    500: '#abff4f',
    600: '#9ce848',
  },

  turquoise: {
    100: '#61d5d5',
    200: '#4bcfcf',
    300: '#34c9c9',
    400: '#1ec3c3',
    500: '#08bdbd',
    600: '#08acac',
  },

  watermelon: {
    100: '#f66d84',
    200: '#f55973',
    300: '#f44461',
    400: '#f32f50',
    500: '#f21b3f',
    600: '#dc193a',
  },

  tangelo: {
    100: '#ffbe69',
    200: '#ffb454',
    300: '#ffab3e',
    400: '#ffa229',
    500: '#ff9914',
    600: '#e88c13',
  },
}

/*
// WestCoast
--gold-crayola: #f2c57c;
--fawn: #ddae7e;
--dark-sea-green: #7fb685;
--hookers-green: #426a5a;
--light-coral: #ef6f6c;


// WesAnderson
--rosso-corsa: #d00000;
--selective-yellow: #ba08;
--green-blue-crayola: #3f88c5;
--prussian-blue: #032b43;
--pine-green: #136f63;
*/

export const pallete = {
  lime100: '#76d668',
  lime200: '#63d052',
  lime300: '#4fca3d',
  lime400: '#3cc427',
  lime500: '#29bf12',
  lime600: '#26ae11',

  chartreuse100: '#c9ff8f',
  chartreuse200: '#c1ff7f',
  chartreuse300: '#baff6f',
  chartreuse400: '#b2ff5f',
  chartreuse500: '#abff4f',
  chartreuse600: '#9ce848',

  turquoise100: '#61d5d5',
  turquoise200: '#4bcfcf',
  turquoise300: '#34c9c9',
  turquoise400: '#1ec3c3',
  turquoise500: '#08bdbd',
  turquoise600: '#08acac',

  watermelon100: '#f66d84',
  watermelon200: '#f55973',
  watermelon300: '#f44461',
  watermelon400: '#f32f50',
  watermelon500: '#f21b3f',
  watermelon600: '#dc193a',

  tangelo100: '#ffbe69',
  tangelo200: '#ffb454',
  tangelo300: '#ffab3e',
  tangelo400: '#ffa229',
  tangelo500: '#ff9914',
  tangelo600: '#e88c13',
}

export const grays = {
  100: '#f4f8fd',
  200: '#e5ecf3',
  300: '#cfd9e3',
  400: '#a0acb8',
  500: '#6c7680',
  600: '#444d56',
  700: '#24292e',
}

export const color: ColorTheme = {
  black: '#000',
  white: '#fff',

  grays: {
    ...grays,
  },

  primary: {
    100: pallete.chartreuse100,
    200: pallete.chartreuse200,
    300: pallete.chartreuse300,
    400: pallete.chartreuse400,
    500: pallete.chartreuse500,
    600: pallete.chartreuse600,
  },

  secondary: {
    100: pallete.turquoise100,
    200: pallete.turquoise200,
    300: pallete.turquoise300,
    400: pallete.turquoise400,
    500: pallete.turquoise500,
    600: pallete.turquoise600,
  },

  tertiary: {
    100: pallete.watermelon100,
    200: pallete.watermelon200,
    300: pallete.watermelon300,
    400: pallete.watermelon400,
    500: pallete.watermelon500,
    600: pallete.watermelon600,
  },

  quaternary: {
    100: pallete.tangelo100,
    200: pallete.tangelo200,
    300: pallete.tangelo300,
    400: pallete.tangelo400,
    500: pallete.tangelo500,
    600: pallete.tangelo600,
  },
}
