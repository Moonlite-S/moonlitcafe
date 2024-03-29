import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        100: '#FFF5BB',
        200: '#FBEB87',
        300: '#F4DF57',
        400: '#EBD440',
        500: '#DAC229',
        600: '#B39D10',
        700: '#8A790B',
        800: '#675902',
        900: '#413801',
      },
      'secondary': {
        100: '#EAF0F3',
        200: '#BEC7CD',
        300: '#94A2A9',
        400: '#778892',
        500: '#485C67',
        600: '#2A414E',
        700: '#1A303D',
        800: '#0E232F',
        900: '#020B10',
      },
      'warning': {
        100: '#FFF5BB',
        200: '#FBEB87',
        300: '#F4DF57',
        400: '#EBD440',
        500: '#DAC229',
        600: '#B39D10',
        700: '#8A790B',
        800: '#675902',
        900: '#413801',
      },
      'error': {
        100: '#FBE9E9',
        200: '#FAB1B1',
        300: '#F58787',
        400: '#DF5A5A',
        500: '#C03838',
        600: '#9C2424',
        700: '#751212',
        800: '#5E0B0B',
        900: '#360101',
      },
      'success': {
        100: '#DCFAD9',
        200: '#A2F39C',
        300: '#86F27E',
        400: '#6AE161',
        500: '#44CD3A',
        600: '#17A40C',
        700: '#13830B',
        800: '#0D6607',
        900: '#044100',
      },
      'information': {
        100: '#C8E7FF',
        200: '#A2D6FE',
        300: '#74BFF9',
        400: '#4DA9EF',
        500: '#298DDA',
        600: '#1571B7',
        700: '#0A5C9B',
        800: '#054B82',
        900: '#002847',
      },
    },
  },
};
export default config;
