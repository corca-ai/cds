import { jsxs as i, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as t } from "react";
const c = ({
  title: o = "IconEyeClosed",
  titleId: e = "CDS-IconEyeClosedIcon",
  size: r = 20,
  color: d = "#363738",
  ...s
}, l) => /* @__PURE__ */ i(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: d,
    ref: l,
    "aria-labelledby": e,
    ...s,
    children: [
      o ? /* @__PURE__ */ n("title", { id: e, children: o }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          stroke: "#737678",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.813 10q-2.8 3-7 3t-7-3m0 4.5 1.944-2.85m12.055 2.832-1.938-2.832M7.48 16l.39-3m4.277 3-.39-3"
        }
      )
    ]
  }
), m = t(c);
export {
  m as IconEyeClosed
};
//# sourceMappingURL=IconEyeClosed.mjs.map
