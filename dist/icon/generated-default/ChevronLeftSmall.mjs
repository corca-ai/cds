import { jsxs as d, jsx as r } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const t = ({
  title: l = "ChevronLeftSmall",
  titleId: e = "CDS-ChevronLeftSmallIcon",
  size: o = 20,
  color: a = "#363738",
  ...n
}, f) => /* @__PURE__ */ d(
  "svg",
  {
    width: o,
    height: o,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: f,
    "aria-labelledby": e,
    ...n,
    children: [
      l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11.78 5.47a.75.75 0 0 1 0 1.06L8.31 10l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), v = i(t);
export {
  v as ChevronLeftSmall
};
//# sourceMappingURL=ChevronLeftSmall.mjs.map
