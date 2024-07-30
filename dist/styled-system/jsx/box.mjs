import { forwardRef as m, createElement as n } from "react";
import { splitProps as f } from "../helpers.mjs";
import { getBoxStyle as i } from "../patterns/box.mjs";
import { styled as c } from "./factory.mjs";
const y = /* @__PURE__ */ m(function(o, r) {
  const [t, e] = f(o, []), s = i(t), p = { ref: r, ...s, ...e };
  return n(c.div, p);
});
export {
  y as Box
};
//# sourceMappingURL=box.mjs.map
