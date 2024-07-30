import { forwardRef as p, createElement as m } from "react";
import { splitProps as i } from "../helpers.mjs";
import { getCenterStyle as f } from "../patterns/center.mjs";
import { styled as c } from "./factory.mjs";
const C = /* @__PURE__ */ p(function(r, t) {
  const [e, o] = i(r, ["inline"]), n = f(e), s = { ref: t, ...n, ...o };
  return m(c.div, s);
});
export {
  C as Center
};
//# sourceMappingURL=center.mjs.map
