import { getPatternStyles as o, patternFns as c } from "../helpers.mjs";
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
      borderRadius: "9999px",
      ...n
    };
  }
}, s = (t = {}) => {
  const e = o(r, t);
  return r.transform(e, c);
}, l = (t) => i(s(t));
l.raw = s;
export {
  l as circle,
  s as getCircleStyle
};
//# sourceMappingURL=circle.mjs.map
