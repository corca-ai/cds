import { getPatternStyles as a, patternFns as f } from "../helpers.mjs";
import { css as l } from "../css/css.mjs";
const s = {
  transform(t, { map: r }) {
    const { size: o, ...c } = t;
    return {
      alignSelf: "stretch",
      justifySelf: "stretch",
      flex: r(o, (e) => e == null ? "1" : `0 0 ${e}`),
      ...c
    };
  }
}, n = (t = {}) => {
  const r = a(s, t);
  return s.transform(r, f);
}, p = (t) => l(n(t));
p.raw = n;
export {
  n as getSpacerStyle,
  p as spacer
};
//# sourceMappingURL=spacer.mjs.map
