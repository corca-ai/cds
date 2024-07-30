import { getPatternStyles as a, patternFns as c } from "../helpers.mjs";
import { css as f } from "../css/css.mjs";
const e = {
  transform(t) {
    const { justify: s, gap: r, ...o } = t;
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: s,
      gap: r,
      flexDirection: "column",
      ...o
    };
  },
  defaultValues: { gap: "10px" }
}, n = (t = {}) => {
  const s = a(e, t);
  return e.transform(s, c);
}, l = (t) => f(n(t));
l.raw = n;
export {
  n as getVstackStyle,
  l as vstack
};
//# sourceMappingURL=vstack.mjs.map
