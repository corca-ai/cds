import { getPatternStyles as u, patternFns as S } from "../helpers.mjs";
import { css as p } from "../css/css.mjs";
const e = {
  transform(t, { map: r }) {
    const { colSpan: n, rowSpan: s, colStart: a, rowStart: l, colEnd: g, rowEnd: m, ...c } = t, d = (o) => o === "auto" ? o : `span ${o}`;
    return {
      gridColumn: n != null ? r(n, d) : void 0,
      gridRow: s != null ? r(s, d) : void 0,
      gridColumnStart: a,
      gridColumnEnd: g,
      gridRowStart: l,
      gridRowEnd: m,
      ...c
    };
  }
}, i = (t = {}) => {
  const r = u(e, t);
  return e.transform(r, S);
}, w = (t) => p(i(t));
w.raw = i;
export {
  i as getGridItemStyle,
  w as gridItem
};
//# sourceMappingURL=grid-item.mjs.map
