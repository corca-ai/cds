import { jsxs as r, jsx as a } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
const i = ({
  title: l = "IconThumbsUp",
  titleId: o = "CDS-IconThumbsUpIcon",
  size: h = 20,
  color: c = "#363738",
  ...e
}, n) => /* @__PURE__ */ r(
  "svg",
  {
    width: h,
    height: h,
    fill: "none",
    viewBox: "0 0 20 20",
    color: c,
    ref: n,
    "aria-labelledby": o,
    ...e,
    children: [
      l ? /* @__PURE__ */ a("title", { id: o, children: l }) : null,
      /* @__PURE__ */ a(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.539 15.07a9.25 9.25 0 0 1-4.074-.838l-.307-.141A3.8 3.8 0 0 0 7 13.771V8.55a2 2 0 0 0 .15-.099A6.5 6.5 0 0 0 9.625 4.5a1.41 1.41 0 0 1 1.378 1.557l-.133 1.26a1.75 1.75 0 0 0 1.74 1.933h1.595c.758 0 1.342.67 1.239 1.42l-.338 2.449a2.25 2.25 0 0 1-2.176 1.942zM5.5 8.75h-1v5h1zm2.34 6.845a10.75 10.75 0 0 0 4.735.975l.391-.01a3.75 3.75 0 0 0 3.626-3.236l.337-2.448a2.75 2.75 0 0 0-2.724-3.126h-1.594a.25.25 0 0 1-.249-.276l.133-1.26A2.91 2.91 0 0 0 9.6 3h-.364c-.5 0-.928.357-1.017.849l-.055.303A5 5 0 0 1 6.25 7.25h-2C3.56 7.25 3 7.81 3 8.5V14c0 .69.56 1.25 1.25 1.25h2.345c.324 0 .644.07.938.205z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), p = d(i);
export {
  p as IconThumbsUp
};
//# sourceMappingURL=IconThumbsUp.mjs.map
