import { jsxs as e, jsx as C } from "@emotion/react/jsx-runtime";
import { color as r } from "../styles.mjs";
function n({ color: l = r["grey-80"], size: o = 20 }) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: o,
      height: o,
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ C(
          "path",
          {
            d: "M7.25 3.5C6.83579 3.5 6.5 3.83579 6.5 4.25C6.5 4.66421 6.83579 5 7.25 5H12.75C13.1642 5 13.5 4.66421 13.5 4.25C13.5 3.83579 13.1642 3.5 12.75 3.5H7.25Z",
            fill: l
          }
        ),
        /* @__PURE__ */ C(
          "path",
          {
            d: "M5 6.5C5 6.08579 5.33579 5.75 5.75 5.75H14.25C14.6642 5.75 15 6.08579 15 6.5C15 6.91421 14.6642 7.25 14.25 7.25H5.75C5.33579 7.25 5 6.91421 5 6.5Z",
            fill: l
          }
        ),
        /* @__PURE__ */ C(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.5 10.75C3.5 9.23122 4.73122 8 6.25 8H13.75C15.2688 8 16.5 9.23122 16.5 10.75V13.75C16.5 15.2688 15.2688 16.5 13.75 16.5H6.25C4.73122 16.5 3.5 15.2688 3.5 13.75V10.75ZM6.25 9.5C5.55964 9.5 5 10.0596 5 10.75V13.75C5 14.4404 5.55964 15 6.25 15H13.75C14.4404 15 15 14.4404 15 13.75V10.75C15 10.0596 14.4404 9.5 13.75 9.5H6.25Z",
            fill: l
          }
        )
      ]
    }
  );
}
export {
  n as BannersVert
};
//# sourceMappingURL=BannersVert.mjs.map
