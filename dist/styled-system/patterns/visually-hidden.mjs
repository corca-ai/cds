import { getPatternStyles as e, patternFns as o } from "../helpers.mjs";
import { css as l } from "../css/css.mjs";
const r = {
  transform(t) {
    return {
      srOnly: !0,
      ...t
    };
  }
}, n = (t = {}) => {
  const s = e(r, t);
  return r.transform(s, o);
}, i = (t) => l(n(t));
i.raw = n;
export {
  n as getVisuallyHiddenStyle,
  i as visuallyHidden
};
//# sourceMappingURL=visually-hidden.mjs.map
