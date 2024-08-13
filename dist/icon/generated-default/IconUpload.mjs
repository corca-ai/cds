import { jsxs as e, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const h = ({
  title: l = "IconUpload",
  titleId: a = "CDS-IconUploadIcon",
  size: r = 20,
  color: n = "#363738",
  ...d
}, c) => /* @__PURE__ */ e(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: n,
    ref: c,
    "aria-labelledby": a,
    ...d,
    children: [
      l ? /* @__PURE__ */ o("title", { id: a, children: l }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M16.5 6.26a.75.75 0 0 1-1.5 0v-.51a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v.51a.75.75 0 0 1-1.5 0v-.51A2.25 2.25 0 0 1 5.75 3.5h8.5a2.25 2.25 0 0 1 2.25 2.25z"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M10.75 16.01a.75.75 0 0 1-1.5 0V9.32l-1.72 1.72a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72z"
        }
      )
    ]
  }
), f = i(h);
export {
  f as IconUpload
};
//# sourceMappingURL=IconUpload.mjs.map
