import { jsxs as n, jsx as a } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const i = ({
  title: o = "IconTrash",
  titleId: r = "CDS-IconTrashIcon",
  size: l = 20,
  color: c = "#363738",
  ...e
}, h) => /* @__PURE__ */ n(
  "svg",
  {
    width: l,
    height: l,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: h,
    "aria-labelledby": r,
    ...e,
    children: [
      o ? /* @__PURE__ */ a("title", { id: r, children: o }) : null,
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          d: "M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0z"
        }
      ),
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5H15v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C12.72 17 11.88 17 10.2 17h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 14.72 5 13.88 5 12.2V6.75h-.75a.75.75 0 0 1 0-1.5zm1.5 0a1.25 1.25 0 1 1 2.5 0zM6.5 6.75h7v5.45c0 .865-.001 1.423-.036 1.848-.034.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.656c-.074.037-.225.094-.633.127-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), t = d(i);
export {
  t as IconTrash
};
//# sourceMappingURL=IconTrash.mjs.map
