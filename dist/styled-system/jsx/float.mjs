import { forwardRef as p, createElement as m } from "react";
import { splitProps as n } from "../helpers.mjs";
import { getFloatStyle as l } from "../patterns/float.mjs";
import { styled as a } from "./factory.mjs";
const F = /* @__PURE__ */ p(function(t, o) {
  const [r, e] = n(t, ["offsetX", "offsetY", "offset", "placement"]), s = l(r), f = { ref: o, ...s, ...e };
  return m(a.div, f);
});
export {
  F as Float
};
//# sourceMappingURL=float.mjs.map
