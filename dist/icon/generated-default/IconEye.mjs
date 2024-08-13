import { jsxs as s, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as c } from "react";
const a = ({
  title: r = "IconEye",
  titleId: e = "CDS-IconEyeIcon",
  size: n = 20,
  color: t = "#363738",
  ...i
}, d) => /* @__PURE__ */ s(
  "svg",
  {
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 20 20",
    color: t,
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
), k = c(a);
export {
  k as IconEye
};
//# sourceMappingURL=IconEye.mjs.map
