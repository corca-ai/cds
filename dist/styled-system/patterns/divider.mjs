import { getPatternStyles as l, patternFns as a } from "../helpers.mjs";
import { css as h } from "../css/css.mjs";
const e = {
  transform(o, { map: r }) {
    const { orientation: i, thickness: s, color: d, ...c } = o;
    return {
      "--thickness": s,
      width: r(i, (t) => t === "vertical" ? void 0 : "100%"),
      height: r(i, (t) => t === "horizontal" ? void 0 : "100%"),
      borderBlockEndWidth: r(i, (t) => t === "horizontal" ? "var(--thickness)" : void 0),
      borderInlineEndWidth: r(i, (t) => t === "vertical" ? "var(--thickness)" : void 0),
      borderColor: d,
      ...c
    };
  },
  defaultValues: { orientation: "horizontal", thickness: "1px" }
}, n = (o = {}) => {
  const r = l(e, o);
  return e.transform(r, a);
}, v = (o) => h(n(o));
v.raw = n;
export {
  v as divider,
  n as getDividerStyle
};
//# sourceMappingURL=divider.mjs.map
