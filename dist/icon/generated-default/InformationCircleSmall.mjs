import { jsxs as f, jsx as l } from "@emotion/react/jsx-runtime";
import { forwardRef as m } from "react";
const t = ({
  title: o = "InformationCircleSmall",
  titleId: r = "CDS-InformationCircleSmallIcon",
  size: a = 20,
  color: e = "#363738",
  ...i
}, n) => /* @__PURE__ */ f(
  "svg",
  {
    width: a,
    height: a,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: n,
    "aria-labelledby": r,
    ...i,
    children: [
      o ? /* @__PURE__ */ l("title", { id: r, children: o }) : null,
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          d: "M9.906 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 1 1 1.5 0v3.5a.75.75 0 0 1-.75.75M8.906 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        }
      ),
      /* @__PURE__ */ l(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16.906 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), h = m(t);
export {
  h as InformationCircleSmall
};
//# sourceMappingURL=InformationCircleSmall.mjs.map
