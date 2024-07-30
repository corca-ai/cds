import { jsxs as c, jsx as r } from "@emotion/react/jsx-runtime";
import { forwardRef as f } from "react";
const t = ({
  title: o = "InformationCircleLarge",
  titleId: e = "CDS-InformationCircleLargeIcon",
  size: l = 20,
  color: i = "#363738",
  ...n
}, a) => /* @__PURE__ */ c(
  "svg",
  {
    width: l,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    color: i,
    ref: a,
    "aria-labelledby": e,
    ...n,
    children: [
      o ? /* @__PURE__ */ r("title", { id: e, children: o }) : null,
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          d: "M12 17.714c-.592 0-1.071-.48-1.071-1.071v-5a1.071 1.071 0 1 1 2.143 0v5c0 .592-.48 1.071-1.072 1.071M10.571 7.714a1.429 1.429 0 1 1 2.858 0 1.429 1.429 0 0 1-2.858 0"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2.143 0a7.857 7.857 0 1 1-15.714 0 7.857 7.857 0 0 1 15.714 0",
          clipRule: "evenodd"
        }
      )
    ]
  }
), h = f(t);
export {
  h as InformationCircleLarge
};
//# sourceMappingURL=InformationCircleLarge.mjs.map
