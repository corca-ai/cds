import { jsxs as i, jsx as a } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const f = ({
  title: d = "Add",
  titleId: r = "CDS-AddIcon",
  size: o = 20,
  color: l = "#363738",
  ...h
}, e) => /* @__PURE__ */ i(
  "svg",
  {
    width: o,
    height: o,
    fill: "none",
    viewBox: "0 0 20 20",
    color: l,
    ref: e,
    "aria-labelledby": r,
    ...h,
    children: [
      d ? /* @__PURE__ */ a("title", { id: r, children: d }) : null,
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          d: "M10.75 4.25a.75.75 0 0 0-1.5 0v5h-5a.75.75 0 0 0 0 1.5h5v5a.75.75 0 0 0 1.5 0v-5h5a.75.75 0 0 0 0-1.5h-5z"
        }
      )
    ]
  }
), s = n(f);
export {
  s as Add
};
//# sourceMappingURL=Add.mjs.map
