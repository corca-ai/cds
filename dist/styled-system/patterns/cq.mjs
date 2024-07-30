import { getPatternStyles as a, patternFns as c } from "../helpers.mjs";
import { css as i } from "../css/css.mjs";
const n = {
  transform(t) {
    const { name: e, type: s, ...o } = t;
    return {
      containerType: s,
      containerName: e,
      ...o
    };
  },
  defaultValues: { type: "inline-size" }
}, r = (t = {}) => {
  const e = a(n, t);
  return n.transform(e, c);
}, m = (t) => i(r(t));
m.raw = r;
export {
  m as cq,
  r as getCqStyle
};
//# sourceMappingURL=cq.mjs.map
