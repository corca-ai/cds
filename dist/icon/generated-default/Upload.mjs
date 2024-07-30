import { jsxs as n, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as h } from "react";
const p = ({
  title: a = "Upload",
  titleId: o = "CDS-UploadIcon",
  size: r = 20,
  color: d = "#363738",
  ...e
}, i) => /* @__PURE__ */ n(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: d,
    ref: i,
    "aria-labelledby": o,
    ...e,
    children: [
      a ? /* @__PURE__ */ l("title", { id: o, children: a }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M16.5 6.26a.75.75 0 0 1-1.5 0v-.51a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v.51a.75.75 0 0 1-1.5 0v-.51A2.25 2.25 0 0 1 5.75 3.5h8.5a2.25 2.25 0 0 1 2.25 2.25z"
        }
      ),
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M10.75 16.01a.75.75 0 0 1-1.5 0V9.32l-1.72 1.72a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72z"
        }
      )
    ]
  }
), c = h(p);
export {
  c as Upload
};
//# sourceMappingURL=Upload.mjs.map
