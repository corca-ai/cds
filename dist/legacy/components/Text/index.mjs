import { jsx as n } from "@emotion/react/jsx-runtime";
import { fontStyle as o, typography as c, color as l } from "../styles.mjs";
function i(e) {
  return /* @__PURE__ */ n(
    "span",
    {
      style: {
        ...o.b3,
        // default
        ...e.fw && { fontWeight: c.weight[e.fw] },
        ...e.size && { fontSize: c.size[e.size] },
        color: l[e.c ?? "grey-80"],
        ...e.style,
        ...e.ellipsis && {
          width: "100%",
          display: "inline-block",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          wordBreak: "break-all"
        }
      },
      children: e.children
    }
  );
}
function f({ children: e, c: r = "grey-80" }) {
  return /* @__PURE__ */ n(
    "h1",
    {
      style: {
        ...o.h1,
        color: l[r]
      },
      children: e
    }
  );
}
function s({ children: e, c: r = "grey-80" }) {
  return /* @__PURE__ */ n(
    "h2",
    {
      style: {
        ...o.h2,
        color: l[r]
      },
      children: e
    }
  );
}
function g({ children: e, c: r = "grey-80", ellipsis: t }) {
  return /* @__PURE__ */ n(i, { style: { ...o.b1, color: l[r] }, ellipsis: t, children: e });
}
function h({ children: e, c: r = "grey-80", ellipsis: t }) {
  return /* @__PURE__ */ n(i, { style: { ...o.b2, color: l[r] }, ellipsis: t, children: e });
}
function b({ children: e, c: r = "grey-80", ellipsis: t }) {
  return /* @__PURE__ */ n(i, { style: { ...o.b3, color: l[r] }, ellipsis: t, children: e });
}
function w({ children: e, c: r = "grey-80", ellipsis: t }) {
  return /* @__PURE__ */ n(i, { style: { ...o.b4, color: l[r] }, ellipsis: t, children: e });
}
function a({ children: e, c: r = "grey-80", ellipsis: t }) {
  return /* @__PURE__ */ n(i, { style: { ...o.b5, color: l[r] }, ellipsis: t, children: e });
}
function B({ children: e, c: r = "grey-80", ellipsis: t }) {
  return /* @__PURE__ */ n(i, { style: { ...o.b6, color: l[r] }, ellipsis: t, children: e });
}
function d({ children: e, c: r = "grey-80", ellipsis: t }) {
  return /* @__PURE__ */ n(i, { style: { ...o.b7, color: l[r] }, ellipsis: t, children: e });
}
export {
  g as B1,
  h as B2,
  b as B3,
  w as B4,
  a as B5,
  B as B6,
  d as B7,
  f as H1,
  s as H2,
  i as Text
};
//# sourceMappingURL=index.mjs.map
