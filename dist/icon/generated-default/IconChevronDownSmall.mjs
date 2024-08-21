import { jsxs as d, jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const h = ({
  title: o = "IconChevronDownSmall",
  titleId: l = "CDS-IconChevronDownSmallIcon",
  size: n = 20,
  color: r = "#363738",
  ...a
}, c) => /* @__PURE__ */ d(
  "svg",
  {
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: c,
    "aria-labelledby": l,
    ...a,
    children: [
      o ? /* @__PURE__ */ e("title", { id: l, children: o }) : null,
      /* @__PURE__ */ e(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5.137 7.24a.77.77 0 0 1 1.117 0l3.652 3.785L13.56 7.24a.77.77 0 0 1 1.116 0 .84.84 0 0 1 0 1.157l-4.21 4.363a.77.77 0 0 1-1.117 0l-4.21-4.363a.84.84 0 0 1 0-1.157",
          clipRule: "evenodd"
        }
      )
    ]
  }
), v = i(h);
export {
  v as IconChevronDownSmall
};
//# sourceMappingURL=IconChevronDownSmall.mjs.map
