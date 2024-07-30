import { forwardRef as n, createElement as p } from "react";
import { splitProps as l } from "../helpers.mjs";
import { getVisuallyHiddenStyle as d } from "../patterns/visually-hidden.mjs";
import { styled as m } from "./factory.mjs";
const P = /* @__PURE__ */ n(function(r, t) {
  const [o, e] = l(r, []), s = d(o), i = { ref: t, ...s, ...e };
  return p(m.div, i);
});
export {
  P as VisuallyHidden
};
//# sourceMappingURL=visually-hidden.mjs.map
