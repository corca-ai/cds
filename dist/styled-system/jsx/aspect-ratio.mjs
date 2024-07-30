import { forwardRef as i, createElement as m } from "react";
import { splitProps as c } from "../helpers.mjs";
import { getAspectRatioStyle as n } from "../patterns/aspect-ratio.mjs";
import { styled as a } from "./factory.mjs";
const y = /* @__PURE__ */ i(function(t, o) {
  const [r, e] = c(t, ["ratio"]), s = n(r), p = { ref: o, ...s, ...e };
  return m(a.div, p);
});
export {
  y as AspectRatio
};
//# sourceMappingURL=aspect-ratio.mjs.map
