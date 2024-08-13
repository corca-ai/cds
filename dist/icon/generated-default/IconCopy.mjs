import { jsxs as a, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const s = ({
  title: o = "IconCopy",
  titleId: r = "CDS-IconCopyIcon",
  size: n = 20,
  color: c = "#363738",
  ...i
}, t) => /* @__PURE__ */ a(
  "svg",
  {
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: t,
    "aria-labelledby": r,
    ...i,
    children: [
      o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
      /* @__PURE__ */ e(
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
), h = d(s);
export {
  h as IconCopy
};
//# sourceMappingURL=IconCopy.mjs.map
