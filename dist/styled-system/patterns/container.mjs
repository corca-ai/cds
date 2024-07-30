import { getPatternStyles as e, patternFns as s } from "../helpers.mjs";
import { css as a } from "../css/css.mjs";
const r = {
  transform(t) {
    return {
      position: "relative",
      maxWidth: "8xl",
      mx: "auto",
      px: { base: "4", md: "6", lg: "8" },
      ...t
    };
  }
}, n = (t = {}) => {
  const o = e(r, t);
  return r.transform(o, s);
}, i = (t) => a(n(t));
i.raw = n;
export {
  i as container,
  n as getContainerStyle
};
//# sourceMappingURL=container.mjs.map
