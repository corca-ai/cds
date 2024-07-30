import { forwardRef as p, createElement as i } from "react";
import { splitProps as m } from "../helpers.mjs";
import { getContainerStyle as f } from "../patterns/container.mjs";
import { styled as a } from "./factory.mjs";
const C = /* @__PURE__ */ p(function(r, t) {
  const [o, e] = m(r, []), n = f(o), s = { ref: t, ...n, ...e };
  return i(a.div, s);
});
export {
  C as Container
};
//# sourceMappingURL=container.mjs.map
