import { jsxs as a, jsx as i } from "@emotion/react/jsx-runtime";
import { forwardRef as s } from "react";
const l = ({
  title: r = "EditSquare",
  titleId: o = "CDS-EditSquareIcon",
  size: e = 20,
  color: t = "#363738",
  ...d
}, n) => /* @__PURE__ */ a(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: t,
    ref: n,
    "aria-labelledby": o,
    ...d,
    children: [
      r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
      /* @__PURE__ */ i(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.833 5.833H5A1.667 1.667 0 0 0 3.333 7.5V15A1.667 1.667 0 0 0 5 16.667h7.5A1.667 1.667 0 0 0 14.166 15v-.833m-.833-10 2.5 2.5m1.154-1.18a1.75 1.75 0 0 0-2.475-2.474L7.5 10v2.5H10z"
        }
      )
    ]
  }
), c = s(l);
export {
  c as EditSquare
};
//# sourceMappingURL=EditSquare.mjs.map
