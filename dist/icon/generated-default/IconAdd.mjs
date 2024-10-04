import { jsxs as h, jsx as n } from "@emotion/react/jsx-runtime";
import { forwardRef as e } from "react";
const i = ({
  title: o = "IconAdd",
  titleId: d = "CDS-IconAddIcon",
  size: r = 20,
  color: a = "#363738",
  ...l
}, c) => /* @__PURE__ */ h(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: c,
    "aria-labelledby": d,
    ...l,
    children: [
      o ? /* @__PURE__ */ n("title", { id: d, children: o }) : null,
      /* @__PURE__ */ n(
        "path",
        {
          fill: "currentColor",
          d: "M10.75 4.25a.75.75 0 0 0-1.5 0v5h-5a.75.75 0 0 0 0 1.5h5v5a.75.75 0 0 0 1.5 0v-5h5a.75.75 0 0 0 0-1.5h-5z"
        }
      )
    ]
  }
), s = e(i);
export {
  s as IconAdd
};
//# sourceMappingURL=IconAdd.mjs.map
