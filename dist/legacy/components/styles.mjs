const o = {
  size: {
    xxxl: 30,
    xxl: 26,
    xl: 20,
    l: 18,
    m: 16,
    s: 14,
    xs: 13,
    xxs: 12,
    xxxs: 10
  },
  weight: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400
  },
  fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Noto Sans KR', sans-serif`
}, e = {
  // Main color
  "main-black": "#292929",
  "main-yellow": "#FFD464",
  // Grey color
  "grey-80": "#363738",
  "grey-70": "#515354",
  "grey-60": "#737678",
  "grey-50": "#AAACAF",
  "grey-40": "#CED1D6",
  "grey-30": "#E4E5E9",
  "grey-20": "#F3F4F6",
  "grey-10": "#F8F9FB",
  // ETC
  black: "#000000",
  white: "#FFFFFF",
  focus: "#3B79D7",
  "error-30": "#B10E1C",
  "error-20": "#FC685F",
  "error-10": "#FFE7E6",
  "active-30": "#037847",
  "active-20": "#14BA6D",
  "active-10": "#ECFDF3"
}, t = {
  h1: {
    fontSize: 22,
    fontWeight: o.weight.bold,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  },
  h2: {
    fontSize: 20,
    fontWeight: o.weight.semibold,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  },
  b1: {
    fontSize: 16,
    fontWeight: o.weight.medium,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  },
  b2: {
    fontSize: 14,
    fontWeight: o.weight.regular,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  },
  b3: {
    fontSize: 13,
    fontWeight: o.weight.regular,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  },
  b4: {
    fontSize: 12,
    fontWeight: o.weight.semibold,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  },
  b5: {
    fontSize: 12,
    fontWeight: o.weight.regular,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  },
  b6: {
    fontSize: 10,
    fontWeight: o.weight.semibold,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  },
  b7: {
    fontSize: 14,
    fontWeight: o.weight.semibold,
    color: e["grey-80"],
    fontFamily: o.fontFamily
  }
};
export {
  e as color,
  t as fontStyle,
  o as typography
};
//# sourceMappingURL=styles.mjs.map
