import { getPatternStyles as s, patternFns as e } from "../helpers.mjs";
import { css as m } from "../css/css.mjs";
const r = {
  transform(t) {
    return t;
  }
}, o = (t = {}) => {
  const n = s(r, t);
  return r.transform(n, e);
}, a = (t) => m(o(t));
a.raw = o;
export {
  a as box,
  o as getBoxStyle
};
//# sourceMappingURL=box.mjs.map
