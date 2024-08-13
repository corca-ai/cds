import { jsxs as c, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const i = ({
  title: l = "IconArrowLeftSmall",
  titleId: o = "CDS-IconArrowLeftSmallIcon",
  size: r = 20,
  color: a = "#363738",
  ...n
}, f) => /* @__PURE__ */ c(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: f,
    "aria-labelledby": o,
    ...n,
    children: [
      l ? /* @__PURE__ */ e("title", { id: o, children: l }) : null,
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
), w = d(i);
export {
  w as IconArrowLeftSmall
};
//# sourceMappingURL=IconArrowLeftSmall.mjs.map
