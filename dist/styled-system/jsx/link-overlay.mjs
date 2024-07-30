import { forwardRef as p, createElement as m } from "react";
import { splitProps as i } from "../helpers.mjs";
import { getLinkOverlayStyle as l } from "../patterns/link-overlay.mjs";
import { styled as a } from "./factory.mjs";
const k = /* @__PURE__ */ p(function(r, t) {
  const [o, e] = i(r, []), s = l(o), n = { ref: t, ...s, ...e };
  return m(a.a, n);
});
export {
  k as LinkOverlay
};
//# sourceMappingURL=link-overlay.mjs.map
