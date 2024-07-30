import { getPatternStyles as a, patternFns as c } from "../helpers.mjs";
import { css as f } from "../css/css.mjs";
const e = {
  transform(t) {
    const { justify: s, gap: n, ...o } = t;
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: s,
      gap: n,
      flexDirection: "row",
      ...o
    };
  },
  defaultValues: { gap: "10px" }
}, r = (t = {}) => {
  const s = a(e, t);
  return e.transform(s, c);
}, i = (t) => f(r(t));
i.raw = r;
export {
  r as getHstackStyle,
  i as hstack
};
//# sourceMappingURL=hstack.mjs.map
