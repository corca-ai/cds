import { forwardRef as n, createElement as l } from "react";
import { splitProps as m } from "../helpers.mjs";
import { getBleedStyle as i } from "../patterns/bleed.mjs";
import { styled as c } from "./factory.mjs";
const B = /* @__PURE__ */ n(function(e, r) {
  const [o, t] = m(e, ["inline", "block"]), s = i(o), p = { ref: r, ...s, ...t };
  return l(c.div, p);
});
export {
  B as Bleed
};
//# sourceMappingURL=bleed.mjs.map
