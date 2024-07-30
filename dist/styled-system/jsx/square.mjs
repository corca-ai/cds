import { forwardRef as m, createElement as n } from "react";
import { splitProps as i } from "../helpers.mjs";
import { getSquareStyle as f } from "../patterns/square.mjs";
import { styled as a } from "./factory.mjs";
const S = /* @__PURE__ */ m(function(r, t) {
  const [o, e] = i(r, ["size"]), s = f(o), p = { ref: t, ...s, ...e };
  return n(a.div, p);
});
export {
  S as Square
};
//# sourceMappingURL=square.mjs.map
