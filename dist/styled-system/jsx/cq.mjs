import { forwardRef as m, createElement as n } from "react";
import { splitProps as f } from "../helpers.mjs";
import { getCqStyle as i } from "../patterns/cq.mjs";
import { styled as c } from "./factory.mjs";
const q = /* @__PURE__ */ m(function(r, t) {
  const [o, e] = f(r, ["name", "type"]), p = i(o), s = { ref: t, ...p, ...e };
  return n(c.div, s);
});
export {
  q as Cq
};
//# sourceMappingURL=cq.mjs.map
