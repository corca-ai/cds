import { getPatternStyles as o, patternFns as a } from "../helpers.mjs";
import { css as i } from "../css/css.mjs";
const r = {
  transform(t) {
    const { size: e, ...n } = t;
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      width: e,
      height: e,
      ...n
    };
  }
}, s = (t = {}) => {
  const e = o(r, t);
  return r.transform(e, a);
}, c = (t) => i(s(t));
c.raw = s;
export {
  s as getSquareStyle,
  c as square
};
//# sourceMappingURL=square.mjs.map
