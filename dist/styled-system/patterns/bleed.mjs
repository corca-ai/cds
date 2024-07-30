import { getPatternStyles as d, patternFns as m } from "../helpers.mjs";
import { css as f } from "../css/css.mjs";
const r = {
  transform(e, { map: t, isCssUnit: s, isCssVar: c }) {
    const { inline: a, block: i, ...b } = e, l = (n) => s(n) || c(n) ? n : `token(spacing.${n}, ${n})`;
    return {
      "--bleed-x": t(a, l),
      "--bleed-y": t(i, l),
      marginInline: "calc(var(--bleed-x, 0) * -1)",
      marginBlock: "calc(var(--bleed-y, 0) * -1)",
      ...b
    };
  },
  defaultValues: { inline: "0", block: "0" }
}, o = (e = {}) => {
  const t = d(r, e);
  return r.transform(t, m);
}, g = (e) => f(o(e));
g.raw = o;
export {
  g as bleed,
  o as getBleedStyle
};
//# sourceMappingURL=bleed.mjs.map
