import { jsxs as d, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const h = ({
  title: o = "IconSearch",
  titleId: e = "CDS-IconSearchIcon",
  size: r = 20,
  color: c = "#363738",
  ...n
}, a) => /* @__PURE__ */ d(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: a,
    "aria-labelledby": e,
    ...n,
    children: [
      o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06zM13 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), s = i(h);
export {
  s as IconSearch
};
//# sourceMappingURL=IconSearch.mjs.map
