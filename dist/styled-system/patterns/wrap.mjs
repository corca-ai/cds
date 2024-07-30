import { getPatternStyles as i, patternFns as l } from "../helpers.mjs";
import { css as m } from "../css/css.mjs";
const s = {
  transform(t) {
    const { columnGap: r, rowGap: n, gap: a = r || n ? void 0 : "10px", align: e, justify: p, ...f } = t;
    return {
      display: "flex",
      flexWrap: "wrap",
      alignItems: e,
      justifyContent: p,
      gap: a,
      columnGap: r,
      rowGap: n,
      ...f
    };
  }
}, o = (t = {}) => {
  const r = i(s, t);
  return s.transform(r, l);
}, c = (t) => m(o(t));
c.raw = o;
export {
  o as getWrapStyle,
  c as wrap
};
//# sourceMappingURL=wrap.mjs.map
