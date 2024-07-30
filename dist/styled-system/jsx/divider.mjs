import { forwardRef as n, createElement as p } from "react";
import { splitProps as m } from "../helpers.mjs";
import { getDividerStyle as c } from "../patterns/divider.mjs";
import { styled as d } from "./factory.mjs";
const y = /* @__PURE__ */ n(function(r, o) {
  const [t, e] = m(r, ["orientation", "thickness", "color"]), i = c(t), s = { ref: o, ...i, ...e };
  return p(d.div, s);
});
export {
  y as Divider
};
//# sourceMappingURL=divider.mjs.map
