import { getPatternStyles as o, patternFns as s } from "../helpers.mjs";
import { css as a } from "../css/css.mjs";
const e = {
  transform(t) {
    return {
      _before: {
        content: '""',
        position: "absolute",
        inset: "0",
        zIndex: "0",
        ...t._before
      },
      ...t
    };
  }
}, n = (t = {}) => {
  const r = o(e, t);
  return e.transform(r, s);
}, i = (t) => a(n(t));
i.raw = n;
export {
  n as getLinkOverlayStyle,
  i as linkOverlay
};
//# sourceMappingURL=link-overlay.mjs.map
