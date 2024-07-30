import { forwardRef as m, createElement as n } from "react";
import { splitProps as a } from "../helpers.mjs";
import { getWrapStyle as i } from "../patterns/wrap.mjs";
import { styled as f } from "./factory.mjs";
const u = /* @__PURE__ */ m(function(r, o) {
  const [t, p] = a(r, ["gap", "rowGap", "columnGap", "align", "justify"]), e = i(t), s = { ref: o, ...e, ...p };
  return n(f.div, s);
});
export {
  u as Wrap
};
//# sourceMappingURL=wrap.mjs.map
