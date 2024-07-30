import { jsxs as l, jsx as r } from "@emotion/react/jsx-runtime";
import a from "@emotion/styled";
import g from "../Icon/index.mjs";
import { Text as f } from "../Text/index.mjs";
import { color as o, fontStyle as s } from "../styles.mjs";
const u = ["green", "grey", "yellow", "red"], p = {
  green: {
    bg: o["active-10"],
    font: o["active-30"],
    dot: o["active-20"]
  },
  grey: {
    bg: "#E9EAED",
    font: "#343F51",
    dot: "#6C778B"
  },
  yellow: {
    bg: "#FFF7CC",
    font: "#E87E00",
    dot: "#E87E00"
  },
  red: {
    bg: o["error-10"],
    font: o["error-30"],
    dot: o["error-30"]
  }
}, m = a.div`
  width: fit-content;
  display: inline-flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  height: 22px;
  padding: 2px 8px;
  border-radius: 10px;
  background-color: ${({ bg: t }) => t};
`;
function v({ dotted: t, label: e, variant: n }) {
  const { bg: i, font: c, dot: d } = p[n];
  return /* @__PURE__ */ l(m, { bg: i, children: [
    t && /* @__PURE__ */ r(g.Dot, { color: d }),
    /* @__PURE__ */ r(f, { style: { ...s.b6, color: c }, children: e })
  ] });
}
export {
  v as Badge,
  u as badgeVariants,
  p as variantColors
};
//# sourceMappingURL=index.mjs.map
