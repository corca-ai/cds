import { forwardRef as p, createElement as n } from "react";
import { splitProps as m } from "../helpers.mjs";
import { getFlexStyle as l } from "../patterns/flex.mjs";
import { styled as f } from "./factory.mjs";
const x = /* @__PURE__ */ p(function(r, t) {
  const [o, e] = m(r, ["align", "justify", "direction", "wrap", "basis", "grow", "shrink"]), s = l(o), i = { ref: t, ...s, ...e };
  return n(f.div, i);
});
export {
  x as Flex
};
//# sourceMappingURL=flex.mjs.map
