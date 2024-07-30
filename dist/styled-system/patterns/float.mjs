import { getPatternStyles as d, patternFns as u } from "../helpers.mjs";
import { css as g } from "../css/css.mjs";
const i = {
  transform(o, { map: t }) {
    const { offset: b, offsetX: a, offsetY: l, placement: s, ...f } = o;
    return {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      insetBlockStart: t(s, (e) => {
        const [n] = e.split("-");
        return { top: l, middle: "50%", bottom: "auto" }[n];
      }),
      insetBlockEnd: t(s, (e) => {
        const [n] = e.split("-");
        return { top: "auto", middle: "50%", bottom: l }[n];
      }),
      insetInlineStart: t(s, (e) => {
        const [, n] = e.split("-");
        return { start: a, center: "50%", end: "auto" }[n];
      }),
      insetInlineEnd: t(s, (e) => {
        const [, n] = e.split("-");
        return { start: "auto", center: "50%", end: a }[n];
      }),
      translate: t(s, (e) => {
        const [n, r] = e.split("-"), p = { start: "-50%", center: "-50%", end: "50%" }, m = { top: "-50%", middle: "-50%", bottom: "50%" };
        return `${p[r]} ${m[n]}`;
      }),
      ...f
    };
  },
  defaultValues(o) {
    const t = o.offset || "0";
    return { offset: t, offsetX: t, offsetY: t, placement: "top-end" };
  }
}, c = (o = {}) => {
  const t = d(i, o);
  return i.transform(t, u);
}, y = (o) => g(c(o));
y.raw = c;
export {
  y as float,
  c as getFloatStyle
};
//# sourceMappingURL=float.mjs.map
