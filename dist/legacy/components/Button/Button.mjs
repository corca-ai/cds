import { jsxs as c, jsx as l } from "@emotion/react/jsx-runtime";
import { cloneElement as u } from "react";
import d from "@emotion/styled";
import { B2 as a } from "../Text/index.mjs";
import { color as n } from "../styles.mjs";
const p = (e, r, t) => {
  const o = {
    filled: {
      disabled: { bg: "grey-30", border: null },
      enabled: { bg: "main-black", border: null }
    },
    outline: {
      disabled: { bg: "grey-30", border: null },
      enabled: { bg: "white", border: "grey-40" },
      focused: { bg: "grey-20", border: "grey-60" }
    },
    text: {
      disabled: { bg: null, border: null },
      enabled: { bg: null, border: null }
    }
  }[e][t ? "focused" : r ? "disabled" : "enabled"];
  return `
    background-color: ${o.bg ? n[o.bg] : "transparent"};
    border: 1px solid ${o.border ? n[o.border] : "transparent"};
  `;
}, x = (e) => {
  const r = {
    filled: { bg: "grey-60", border: null },
    outline: { bg: "white", border: "grey-50" },
    text: { bg: null, border: null }
  }[e], t = {
    filled: { bg: "grey-50", border: null },
    outline: { bg: "white", border: "grey-60" },
    text: { bg: "grey-20", border: null }
  }[e];
  return `&:hover {
    background-color: ${r.bg ? n[r.bg] : "transparent"};
    border: 1px solid ${r.border ? n[r.border] : "transparent"};
  }
  &:active {
    background-color: ${t.bg ? n[t.bg] : "transparent"};
    border: 1px solid ${t.border ? n[t.border] : "transparent"};
  }`;
}, h = (e, r) => {
  if (r)
    return "grey-50";
  switch (e) {
    case "filled":
      return "white";
    case "outline":
      return "grey-80";
    case "text":
      return "grey-80";
  }
}, y = d.button`
  padding: 7px 16px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  ${({ size: e }) => e == "large" ? `
        min-width: 100px;
        width: 100%;
        height: 40px;
      ` : `
      height: 34px;
    `}

  ${({ variant: e, disabled: r, focused: t }) => p(e, r, t) + (r ? "" : x(e))}

  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  ${({ variant: e }) => e === "text" ? "" : "box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);"}
`, f = d.div`
  height: ${({ size: e }) => e};
  width: ${({ size: e }) => e};
  display: flex;
  justify-content: center;
  align-items: center;
`, m = d.div`
  line-height: 17px;
`;
function C({
  variant: e,
  size: r,
  children: t,
  disabled: o = !1,
  onClick: s,
  icon: b,
  ...g
}) {
  const i = h(e, o);
  return /* @__PURE__ */ c(y, { variant: e, size: r, disabled: o, onClick: s, ...g, children: [
    b && /* @__PURE__ */ l(f, { size: e === "text" ? 18 : 20, children: u(b, { color: n[i] }) }),
    /* @__PURE__ */ l(m, { children: /* @__PURE__ */ l(a, { c: i, children: t }) })
  ] });
}
export {
  C as Button
};
//# sourceMappingURL=Button.mjs.map
