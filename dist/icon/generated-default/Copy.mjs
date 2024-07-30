import { jsxs as d, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as s } from "react";
const l = ({
  title: o = "Copy",
  titleId: r = "CDS-CopyIcon",
  size: e = 20,
  color: i = "#363738",
  ...t
}, a) => /* @__PURE__ */ d(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: i,
    ref: a,
    "aria-labelledby": r,
    ...t,
    children: [
      o ? /* @__PURE__ */ n("title", { id: r, children: o }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.675 13.158A1.34 1.34 0 0 1 4 12V5.333C4 4.6 4.6 4 5.333 4H12c.5 0 .772.257 1 .667M6.667 8.445a1.78 1.78 0 0 1 1.778-1.778h5.777A1.78 1.78 0 0 1 16 8.445v5.777A1.78 1.78 0 0 1 14.222 16H8.445a1.78 1.78 0 0 1-1.778-1.778z"
        }
      )
    ]
  }
), h = s(l);
export {
  h as Copy
};
//# sourceMappingURL=Copy.mjs.map
