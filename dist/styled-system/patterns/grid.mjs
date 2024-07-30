import { getPatternStyles as c, patternFns as g } from "../helpers.mjs";
import { css as f } from "../css/css.mjs";
const a = {
  transform(t, { map: n, isCssUnit: i }) {
    const { columnGap: l, rowGap: m, gap: u, columns: e, minChildWidth: o, ...p } = t, d = (r) => i(r) ? r : `token(sizes.${r}, ${r})`;
    return {
      display: "grid",
      gridTemplateColumns: e != null ? n(e, (r) => `repeat(${r}, minmax(0, 1fr))`) : o != null ? n(o, (r) => `repeat(auto-fit, minmax(${d(r)}, 1fr))`) : void 0,
      gap: u,
      columnGap: l,
      rowGap: m,
      ...p
    };
  },
  defaultValues(t) {
    return { gap: t.columnGap || t.rowGap ? void 0 : "10px" };
  }
}, s = (t = {}) => {
  const n = c(a, t);
  return a.transform(n, g);
}, G = (t) => f(s(t));
G.raw = s;
export {
  s as getGridStyle,
  G as grid
};
//# sourceMappingURL=grid.mjs.map
