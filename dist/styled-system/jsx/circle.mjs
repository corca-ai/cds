import { forwardRef as i, createElement as m } from "react";
import { splitProps as c } from "../helpers.mjs";
import { getCircleStyle as n } from "../patterns/circle.mjs";
import { styled as l } from "./factory.mjs";
const C = /* @__PURE__ */ i(function(r, t) {
  const [o, e] = c(r, ["size"]), s = n(o), p = { ref: t, ...s, ...e };
  return m(l.div, p);
});
export {
  C as Circle
};
//# sourceMappingURL=circle.mjs.map
