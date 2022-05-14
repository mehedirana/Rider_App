import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primaryOriginal: '#39FF14',
  secondaryOriginal: '#00EE4A',
  primary: '#00D248',
  black: '#242823',
  blackSolid: '#000000',
  error: '#E5BE00',
  white: '#EBEBEB',
  whitePure: '#FFFFFF',
  gray: '#A7A7A7',
  lightGray: '#EBEBEB',
  lightGray10: '#F8F8F8',
  lightGray50: '#F5F5F5',
  darkGray: '#BEBEBE',
  gray2: '#C2C2C2',
  gray50: '#C6C6C6',
  gray10: '#B2B2B2',
  black50: '#444444',
  black10: '#696969',
  red: '#FF0000',
  redPuwe: '#EB5147',
  green: '#1C8C44',
  white2: '#F8F8F8',
  placeHolderColor: '#C6C6C6',

  dark: 'rgba(1, 10, 3, 0.8)',
  dark20: 'rgba(1, 10, 3, 0.2)',
  dark80: 'rgba(1, 10, 3, 0.8)',
  dark60: 'rgba(1, 10, 3, 0.6)',
  dark40: 'rgba(1, 10, 3, 0.4)',
  dark6: 'rgba(1, 10, 3, 0.6)',
  blackRgb: 'rgba(1, 10, 3, 1)',
  dark2: 'rgba(0, 0, 0, 1)',
  homeBg: '#E5E5E5',
  themeBg: '#F3F7F4',
  primaryBg16: 'rgba(0, 212, 42, 0.16)',
  primaryBg2: 'rgba(0, 212, 42, 0.2)',
  darkBlue: '#00007D',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 16,
  padding32: 32,
  padding12: 12,
  // font sizes
  largeTitle: 25,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  headerTitle: 21,
  headerTitle1: 21,

  // app dimensions
  width,
  height,

  buttonRadius: 4,
};

export const FONTS = {
  cardTitile: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 17
  },
  modalTitile: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 35,
  },
  xxSmall: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    lineHeight: 16.2,
  },
  bodyParagraph: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    lineHeight: 21.75,
  },
  bodyParagraphBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    lineHeight: 21.75,
  },
  bodyBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    lineHeight: 21.75,
  },
  body: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    lineHeight: 18.15,
  },
  bodyLarge: {
    fontFamily: 'Roboto-Regular',
    fontSize: 21,
    lineHeight: 30.45,
  },
  small: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    lineHeight: 15.73,
  },
  small1: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    lineHeight: 18.85,
  },
  small2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    lineHeight: 18,
  },
  small3: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    lineHeight: 17.55,
  },
  xtraSmall: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 14.52,
  },
  header4: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    lineHeight: 26.1,
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    lineHeight: 21.78,
  },
  header3Bold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 29,
  },
  header5: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
    lineHeight: 40.6,
  },
  header3: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    lineHeight: 29,
  },
  header2: {
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    lineHeight: 26.63,
  },
  header1: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 26.63,
  },
  button: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 28,
  },
  bodyMedium: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 18.75,
  },
  buttonLarge: {
    fontFamily: 'Roboto-Bold',
    fontSize: 19,
    lineHeight: 33.25,
  },
  smallBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    lineHeight: 15.73,
  },
  bodyRegular: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19.36,
  },
  bodyCustom:{
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    lineHeight: 24.65,
  },
  inter: {
    fontFamily: 'Inter',
    fontSize: 15,
    lineHeight: 19.6
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
