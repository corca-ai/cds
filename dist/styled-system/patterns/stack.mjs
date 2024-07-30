import { getPatternStyles as c, patternFns as l } from "../helpers.mjs";
import { css as f } from "../css/css.mjs";
const s = {
  transform(t) {
    const { align: n, justify: r, direction: o, gap: a, ...i } = t;
    return {
      display: "flex",
      flexDirection: o,
      alignItems: n,
      justifyContent: r,
      gap: a,
      ...i
    };
  },
  defaultValues: { direction: "column", gap: "10px" }
}, e = (t = {}) => {
  const n = c(s, t);
  return s.transform(n, l);
}, m = (t) => f(e(t));
m.raw = e;
export {
  e as getStackStyle,
  m as stack
};
//# sourceMappingURL=stack.mjs.map
