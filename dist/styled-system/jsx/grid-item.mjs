import { forwardRef as n, createElement as s } from "react";
import { splitProps as i } from "../helpers.mjs";
import { getGridItemStyle as c } from "../patterns/grid-item.mjs";
import { styled as d } from "./factory.mjs";
const w = /* @__PURE__ */ n(function(r, t) {
  const [o, e] = i(r, ["colSpan", "rowSpan", "colStart", "rowStart", "colEnd", "rowEnd"]), p = c(o), m = { ref: t, ...p, ...e };
  return s(d.div, m);
});
export {
  w as GridItem
};
//# sourceMappingURL=grid-item.mjs.map
