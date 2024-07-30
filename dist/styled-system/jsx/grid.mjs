import { forwardRef as i, createElement as m } from "react";
import { splitProps as n } from "../helpers.mjs";
import { getGridStyle as d } from "../patterns/grid.mjs";
import { styled as c } from "./factory.mjs";
const u = /* @__PURE__ */ i(function(r, o) {
  const [t, e] = n(r, ["gap", "columnGap", "rowGap", "columns", "minChildWidth"]), p = d(t), s = { ref: o, ...p, ...e };
  return m(c.div, s);
});
export {
  u as Grid
};
//# sourceMappingURL=grid.mjs.map
