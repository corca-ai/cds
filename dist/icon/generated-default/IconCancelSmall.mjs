import { jsxs as i, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as m } from "react";
const d = ({
  title: l = "IconCancelSmall",
  titleId: a = "CDS-IconCancelSmallIcon",
  size: o = 20,
  color: r = "#363738",
  ...c
}, e) => /* @__PURE__ */ i(
  "svg",
  {
    width: o,
    height: o,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: e,
    "aria-labelledby": a,
    ...c,
    children: [
      l ? /* @__PURE__ */ n("title", { id: a, children: l }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          fill: "currentColor",
          d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06L11.06 10l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 8.94 7.28 6.22a.75.75 0 0 0-1.06 1.06L8.94 10l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 11.06z"
        }
      )
    ]
  }
), h = m(d);
export {
  h as IconCancelSmall
};
//# sourceMappingURL=IconCancelSmall.mjs.map
