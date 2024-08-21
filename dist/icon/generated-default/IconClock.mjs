import { jsxs as d, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as i } from "react";
const f = ({
  title: l = "IconClock",
  titleId: r = "CDS-IconClockIcon",
  size: c = 20,
  color: e = "#363738",
  ...n
}, a) => /* @__PURE__ */ d(
  "svg",
  {
    width: c,
    height: c,
    fill: "none",
    viewBox: "0 0 20 20",
    color: e,
    ref: a,
    "aria-labelledby": r,
    ...n,
    children: [
      l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M10.75 6a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2 2a.75.75 0 1 0 1.06-1.06l-1.78-1.78z"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), C = i(f);
export {
  C as IconClock
};
//# sourceMappingURL=IconClock.mjs.map
