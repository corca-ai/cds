import { jsxs as a, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as c } from "react";
const t = ({
  title: l = "IconEdit",
  titleId: o = "CDS-IconEditIcon",
  size: d = 20,
  color: i = "#363738",
  ...n
}, r) => /* @__PURE__ */ a(
  "svg",
  {
    width: d,
    height: d,
    fill: "none",
    viewBox: "0 0 20 20",
    color: i,
    ref: r,
    "aria-labelledby": o,
    ...n,
    children: [
      l ? /* @__PURE__ */ e("title", { id: o, children: l }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922c.729 0 1.428-.29 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81m-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884V15h1.172c.331 0 .649-.132.883-.366l5.88-5.88zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), m = c(t);
export {
  m as IconEdit
};
//# sourceMappingURL=IconEdit.mjs.map
