const tokens = {
  "colors.main.black": {
    "value": "#292929",
    "variable": "var(--colors-main-black)"
  },
  "colors.main.yellow": {
    "value": "#ffd464",
    "variable": "var(--colors-main-yellow)"
  },
  "colors.grey.10": {
    "value": "#363738",
    "variable": "var(--colors-grey-10)"
  },
  "colors.grey.20": {
    "value": "#515354",
    "variable": "var(--colors-grey-20)"
  },
  "colors.grey.30": {
    "value": "#737678",
    "variable": "var(--colors-grey-30)"
  },
  "colors.grey.40": {
    "value": "#aaacaf",
    "variable": "var(--colors-grey-40)"
  },
  "colors.grey.50": {
    "value": "#ced1d6",
    "variable": "var(--colors-grey-50)"
  },
  "colors.grey.60": {
    "value": "#e4e5e9",
    "variable": "var(--colors-grey-60)"
  },
  "colors.grey.70": {
    "value": "#f3f4f6",
    "variable": "var(--colors-grey-70)"
  },
  "colors.grey.80": {
    "value": "#f8f9fb",
    "variable": "var(--colors-grey-80)"
  },
  "colors.etc.white": {
    "value": "#ffffff",
    "variable": "var(--colors-etc-white)"
  },
  "colors.etc.focus": {
    "value": "#3b79d7",
    "variable": "var(--colors-etc-focus)"
  },
  "colors.etc.error.10": {
    "value": "#ffe7e6",
    "variable": "var(--colors-etc-error-10)"
  },
  "colors.etc.error.20": {
    "value": "#fc685f",
    "variable": "var(--colors-etc-error-20)"
  },
  "colors.etc.error.30": {
    "value": "#b10e1c",
    "variable": "var(--colors-etc-error-30)"
  },
  "colors.etc.active.10": {
    "value": "#ecfdf3",
    "variable": "var(--colors-etc-active-10)"
  },
  "colors.etc.active.20": {
    "value": "#14ba6d",
    "variable": "var(--colors-etc-active-20)"
  },
  "colors.etc.active.30": {
    "value": "#037847",
    "variable": "var(--colors-etc-active-30)"
  },
  "colors.colorPalette.black": {
    "value": "var(--colors-color-palette-black)",
    "variable": "var(--colors-color-palette-black)"
  },
  "colors.colorPalette.yellow": {
    "value": "var(--colors-color-palette-yellow)",
    "variable": "var(--colors-color-palette-yellow)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.20": {
    "value": "var(--colors-color-palette-20)",
    "variable": "var(--colors-color-palette-20)"
  },
  "colors.colorPalette.30": {
    "value": "var(--colors-color-palette-30)",
    "variable": "var(--colors-color-palette-30)"
  },
  "colors.colorPalette.40": {
    "value": "var(--colors-color-palette-40)",
    "variable": "var(--colors-color-palette-40)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.60": {
    "value": "var(--colors-color-palette-60)",
    "variable": "var(--colors-color-palette-60)"
  },
  "colors.colorPalette.70": {
    "value": "var(--colors-color-palette-70)",
    "variable": "var(--colors-color-palette-70)"
  },
  "colors.colorPalette.80": {
    "value": "var(--colors-color-palette-80)",
    "variable": "var(--colors-color-palette-80)"
  },
  "colors.colorPalette.white": {
    "value": "var(--colors-color-palette-white)",
    "variable": "var(--colors-color-palette-white)"
  },
  "colors.colorPalette.focus": {
    "value": "var(--colors-color-palette-focus)",
    "variable": "var(--colors-color-palette-focus)"
  },
  "colors.colorPalette.error.10": {
    "value": "var(--colors-color-palette-error-10)",
    "variable": "var(--colors-color-palette-error-10)"
  },
  "colors.colorPalette.error.20": {
    "value": "var(--colors-color-palette-error-20)",
    "variable": "var(--colors-color-palette-error-20)"
  },
  "colors.colorPalette.error.30": {
    "value": "var(--colors-color-palette-error-30)",
    "variable": "var(--colors-color-palette-error-30)"
  },
  "colors.colorPalette.active.10": {
    "value": "var(--colors-color-palette-active-10)",
    "variable": "var(--colors-color-palette-active-10)"
  },
  "colors.colorPalette.active.20": {
    "value": "var(--colors-color-palette-active-20)",
    "variable": "var(--colors-color-palette-active-20)"
  },
  "colors.colorPalette.active.30": {
    "value": "var(--colors-color-palette-active-30)",
    "variable": "var(--colors-color-palette-active-30)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar