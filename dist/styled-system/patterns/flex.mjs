import { getPatternStyles as c, patternFns as p } from "../helpers.mjs";
import { css as m } from "../css/css.mjs";
const e = {
  transform(t) {
    const { direction: r, align: n, justify: o, wrap: i, basis: f, grow: l, shrink: a, ...x } = t;
    return {
      display: "flex",
      flexDirection: r,
      alignItems: n,
      justifyContent: o,
      flexWrap: i,
      flexBasis: f,
      flexGrow: l,
      flexShrink: a,
      ...x
    };
  }
}, s = (t = {}) => {
  const r = c(e, t);
  return e.transform(r, p);
}, g = (t) => m(s(t));
g.raw = s;
export {
  g as flex,
  s as getFlexStyle
};
//# sourceMappingURL=flex.mjs.map
