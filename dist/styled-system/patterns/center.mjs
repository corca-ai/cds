import { getPatternStyles as o, patternFns as c } from "../helpers.mjs";
import { css as i } from "../css/css.mjs";
const n = {
  transform(t) {
    const { inline: e, ...s } = t;
    return {
      display: e ? "inline-flex" : "flex",
      alignItems: "center",
      justifyContent: "center",
      ...s
    };
  }
}, r = (t = {}) => {
  const e = o(n, t);
  return n.transform(e, c);
}, l = (t) => i(r(t));
l.raw = r;
export {
  l as center,
  r as getCenterStyle
};
//# sourceMappingURL=center.mjs.map
