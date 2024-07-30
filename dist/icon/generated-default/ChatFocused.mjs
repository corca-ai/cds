import { jsxs as c, jsx as a } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const i = ({
  title: o = "ChatFocused",
  titleId: h = "CDS-ChatFocusedIcon",
  size: l = 20,
  color: r = "#363738",
  ...e
}, t) => /* @__PURE__ */ c(
  "svg",
  {
    width: l,
    height: l,
    fill: "none",
    viewBox: "0 0 20 20",
    color: r,
    ref: t,
    "aria-labelledby": h,
    ...e,
    children: [
      o ? /* @__PURE__ */ a("title", { id: h, children: o }) : null,
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          d: "M14.25 2.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V3.25a.75.75 0 0 1 .75-.75M16.78 5.53l1-1a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06M4.5 8.75A3.25 3.25 0 0 1 7.75 5.5h4a.75.75 0 0 0 0-1.5h-4A4.75 4.75 0 0 0 3 8.75v.75c0 2.1 1.362 3.88 3.25 4.508V16a.75.75 0 0 0 1.196.603l3.178-2.353h1.626A4.75 4.75 0 0 0 17 9.5a.75.75 0 0 0-1.5 0 3.25 3.25 0 0 1-3.25 3.25h-1.873a.75.75 0 0 0-.447.147l-2.18 1.614V13.43a.75.75 0 0 0-.61-.737A3.25 3.25 0 0 1 4.5 9.5z"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          d: "M6.75 7.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM6 10.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M18.25 7.75a.75.75 0 0 0 0-1.5H17a.75.75 0 0 0 0 1.5z"
        }
      )
    ]
  }
), f = d(i);
export {
  f as ChatFocused
};
//# sourceMappingURL=ChatFocused.mjs.map
