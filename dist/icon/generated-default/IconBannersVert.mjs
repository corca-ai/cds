import { jsxs as h, jsx as r } from "@emotion/react/jsx-runtime";
import { forwardRef as t } from "react";
const d = ({
  title: e = "IconBannersVert",
  titleId: n = "CDS-IconBannersVertIcon",
  size: o = 20,
  color: a = "#363738",
  ...l
}, c) => /* @__PURE__ */ h(
  "svg",
  {
    width: o,
    height: o,
    fill: "none",
    viewBox: "0 0 20 20",
    color: a,
    ref: c,
    "aria-labelledby": n,
    ...l,
    children: [
      e ? /* @__PURE__ */ r("title", { id: n, children: e }) : null,
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M7.25 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM5 6.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 6.5"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M3.5 10.75A2.75 2.75 0 0 1 6.25 8h7.5a2.75 2.75 0 0 1 2.75 2.75v3a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75zM6.25 9.5c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), f = t(d);
export {
  f as IconBannersVert
};
//# sourceMappingURL=IconBannersVert.mjs.map