import { jsxs as i, jsx as a } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const s = ({
  title: l = "ChatPlus",
  titleId: h = "CDS-ChatPlusIcon",
  size: r = 20,
  color: o = "#363738",
  ...t
}, e) => /* @__PURE__ */ i(
  "svg",
  {
    width: r,
    height: r,
    fill: "none",
    viewBox: "0 0 20 20",
    color: o,
    ref: e,
    "aria-labelledby": h,
    ...t,
    children: [
      l ? /* @__PURE__ */ a("title", { id: h, children: l }) : null,
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          d: "M4.5 8.75A3.25 3.25 0 0 1 7.75 5.5h3.75a.75.75 0 0 0 0-1.5H7.75A4.75 4.75 0 0 0 3 8.75v.75c0 2.1 1.362 3.88 3.25 4.508V16a.75.75 0 0 0 1.196.603l3.178-2.353h1.626A4.75 4.75 0 0 0 17 9.5a.75.75 0 0 0-1.5 0 3.25 3.25 0 0 1-3.25 3.25h-1.873a.75.75 0 0 0-.447.147l-2.18 1.614V13.43a.75.75 0 0 0-.61-.737A3.25 3.25 0 0 1 4.5 9.5z"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          d: "M13 6c0-.301.244-.545.546-.545h.909v-.91a.546.546 0 0 1 1.09 0v.91h.91a.545.545 0 1 1 0 1.09h-.91v.91a.546.546 0 0 1-1.09 0v-.91h-.91A.545.545 0 0 1 13 6"
        }
      )
    ]
  }
), f = n(s);
export {
  f as ChatPlus
};
//# sourceMappingURL=ChatPlus.mjs.map
