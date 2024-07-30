import { jsxs as i, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const t = ({
  title: l = "ArrowLeftSmall",
  titleId: r = "CDS-ArrowLeftSmallIcon",
  size: o = 20,
  color: a = "#363738",
  ...f
}, d) => /* @__PURE__ */ i(
  "svg",
  {
    width: o,
    height: o,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: d,
    "aria-labelledby": r,
    ...f,
    children: [
      l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16.75 10a.75.75 0 0 1-.75.75H6.31l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L6.31 9.25H16a.75.75 0 0 1 .75.75",
          clipRule: "evenodd"
        }
      )
    ]
  }
), c = n(t);
export {
  c as ArrowLeftSmall
};
//# sourceMappingURL=ArrowLeftSmall.mjs.map
