import { forwardRef as m, createElement as c } from "react";
import { splitProps as n } from "../helpers.mjs";
import { getHstackStyle as f } from "../patterns/hstack.mjs";
import { styled as i } from "./factory.mjs";
const g = /* @__PURE__ */ m(function(t, r) {
  const [o, e] = n(t, ["justify", "gap"]), s = f(o), p = { ref: r, ...s, ...e };
  return c(i.div, p);
});
export {
  g as HStack
};
//# sourceMappingURL=hstack.mjs.map
