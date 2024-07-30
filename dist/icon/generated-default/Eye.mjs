import { jsxs as s, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as a } from "react";
const l = ({
  title: r = "Eye",
  titleId: e = "CDS-EyeIcon",
  size: t = 20,
  color: n = "#363738",
  ...i
}, d) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    color: n,
    ref: d,
    "aria-labelledby": e,
    ...i,
    children: [
      r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.333 10a1.667 1.667 0 1 0 3.334 0 1.667 1.667 0 0 0-3.334 0"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.5 10q-3 5-7.5 5t-7.5-5q3-5 7.5-5t7.5 5"
        }
      )
    ]
  }
), k = a(l);
export {
  k as Eye
};
//# sourceMappingURL=Eye.mjs.map
