import { forwardRef as i, createElement as n } from "react";
import { splitProps as c } from "../helpers.mjs";
import { getStackStyle as m } from "../patterns/stack.mjs";
import { styled as a } from "./factory.mjs";
const y = /* @__PURE__ */ i(function(t, r) {
  const [o, e] = c(t, ["align", "justify", "direction", "gap"]), s = m(o), p = { ref: r, ...s, ...e };
  return n(a.div, p);
});
export {
  y as Stack
};
//# sourceMappingURL=stack.mjs.map
