import { jsxs as d, jsx as a } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const h = ({
  title: l = "IconCheckSmall",
  titleId: o = "CDS-IconCheckSmallIcon",
  size: e = 20,
  color: c = "#363738",
  ...n
}, r) => /* @__PURE__ */ d(
  "svg",
  {
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: r,
    "aria-labelledby": o,
    ...n,
    children: [
      l ? /* @__PURE__ */ a("title", { id: o, children: l }) : null,
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14.03 7.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06L9 11.19l3.97-3.97a.75.75 0 0 1 1.06 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), t = i(h);
export {
  t as IconCheckSmall
};
//# sourceMappingURL=IconCheckSmall.mjs.map
