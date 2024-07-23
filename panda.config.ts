import { definePreset } from '@pandacss/dev';
import { defineConfig } from '@pandacss/dev';

const fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
};

const cdsPreset = definePreset({
  name: 'cds',
  theme: {
    tokens: {
      colors: {
        main: {
          black: { value: '#292929' },
          yellow: { value: '#ffd464' },
        },
        grey: {
          10: { value: '#363738' },
          20: { value: '#515354' },
          30: { value: '#737678' },
          40: { value: '#aaacaf' },
          50: { value: '#ced1d6' },
          60: { value: '#e4e5e9' },
          70: { value: '#f3f4f6' },
          80: { value: '#f8f9fb' },
        },
        etc: {
          white: { value: '#ffffff' },
          focus: { value: '#3b79d7' },
          active: {
            30: { value: '#b10e1c' },
            20: { value: '#fc685f' },
            10: { value: '#ffe7e6' },
          },
          error: {
            30: { value: '#037847' },
            20: { value: '#14ba6d' },
            10: { value: '#ecfdf3' },
          },
        },
      },
    },
    textStyles: {
      h1: {
        description: 'heading1',
        value: {
          fontSize: '22px',
          fontWeight: fontWeight.bold,
        },
      },
      h2: {
        description: 'heading2',
        value: {
          fontSize: '20px',
          fontWeight: fontWeight.semibold,
        },
      },
      b1: {
        description: 'body1',
        value: {
          fontSize: '16px',
          fontWeight: fontWeight.medium,
        },
      },
      b2: {
        description: 'body2',
        value: {
          fontSize: '14px',
          fontWeight: fontWeight.regular,
        },
      },
      b3: {
        description: 'body3',
        value: {
          fontSize: '13px',
          fontWeight: fontWeight.regular,
        },
      },
      b4: {
        description: 'body4',
        value: {
          fontSize: '12px',
          fontWeight: fontWeight.semibold,
        },
      },
      b5: {
        description: 'body5',
        value: {
          fontSize: '12px',
          fontWeight: fontWeight.regular,
        },
      },
      b6: {
        description: 'body6',
        value: {
          fontSize: '10px',
          fontWeight: fontWeight.semibold,
        },
      },
      b7: {
        description: 'body7',
        value: {
          fontSize: '14px',
          fontWeight: fontWeight.semibold,
        },
      },
    },
  },
});
export default defineConfig({
  // Whether to use css reset

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  presets: [cdsPreset],

  polyfill: true,
  // The output directory for your css system
  outdir: 'styled-system',
});
