import { jsxs as i, jsx as o } from "@emotion/react/jsx-runtime";
import { forwardRef as n } from "react";
const d = ({
  title: r = "Logout",
  titleId: l = "CDS-LogoutIcon",
  size: a = 20,
  color: t = "#363738",
  ...e
}, h) => /* @__PURE__ */ i(
  "svg",
  {
    width: a,
    height: a,
    fill: "none",
    viewBox: "0 0 20 20",
    color: t,
    ref: h,
    "aria-labelledby": l,
    ...e,
    children: [
      r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M9.75 3A2.25 2.25 0 0 0 7.5 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0A2.25 2.25 0 0 0 9.75 17h4A2.25 2.25 0 0 0 16 14.75v-9.5A2.25 2.25 0 0 0 13.75 3z"
        }
      ),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "currentColor",
          d: "M12.25 10.75a.75.75 0 0 0 0-1.5H6.56l.97-.97a.75.75 0 0 0-1.06-1.06L4.22 9.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97z"
        }
      )
    ]
  }
), u = n(d);
export {
  u as Logout
};
//# sourceMappingURL=Logout.mjs.map
