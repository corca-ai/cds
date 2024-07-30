import { jsxs as i, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as L } from "react";
const d = ({
  title: a = "CancleLarge",
  titleId: r = "CDS-CancleLargeIcon",
  size: l = 20,
  color: o = "#363738",
  ...n
}, c) => /* @__PURE__ */ i(
  "svg",
  {
    width: l,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    color: o,
    ref: c,
    "aria-labelledby": r,
    ...n,
    children: [
      a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          fill: "currentColor",
          d: "M17.44 19.56a1.5 1.5 0 0 0 2.12-2.12L14.122 12l5.44-5.44a1.5 1.5 0 0 0-2.122-2.12L12 9.878l-5.44-5.44a1.5 1.5 0 1 0-2.12 2.122L9.878 12l-5.44 5.44a1.5 1.5 0 0 0 2.122 2.12L12 14.122z"
        }
      )
    ]
  }
), g = L(d);
export {
  g as CancleLarge
};
//# sourceMappingURL=CancleLarge.mjs.map
