import { forwardRef as m, createElement as c } from "react";
import { splitProps as n } from "../helpers.mjs";
import { getSpacerStyle as i } from "../patterns/spacer.mjs";
import { styled as f } from "./factory.mjs";
const y = /* @__PURE__ */ m(function(r, t) {
  const [o, e] = n(r, ["size"]), p = i(o), s = { ref: t, ...p, ...e };
  return c(f.div, s);
});
export {
  y as Spacer
};
//# sourceMappingURL=spacer.mjs.map
