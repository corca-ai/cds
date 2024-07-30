import { jsx as o, jsxs as m } from "@emotion/react/jsx-runtime";
import { cloneElement as a } from "react";
import p from "@emotion/styled";
import { FixedCellType as t } from "./Td.mjs";
import { Checkbox as g } from "../Checkbox/index.mjs";
import { B4 as r, B6 as C } from "../Text/index.mjs";
const T = {
  [t.KEBAB]: {
    l: "48px",
    m: "46px",
    s: "44px",
    xs: "44px"
  },
  [t.RADIO]: {
    l: "46px",
    m: "46px",
    s: "46px",
    xs: "46px"
  },
  [t.CHECKBOX]: {
    l: "46px",
    m: "46px",
    s: "46px",
    xs: "46px"
  },
  [t.IMAGE]: {
    l: "66px",
    m: "56px",
    s: "50px",
    xs: "40px"
  }
}, l = {
  l: {
    height: 46,
    iconSize: 20,
    textComponent: r
  },
  m: {
    height: 40,
    iconSize: 18,
    textComponent: r
  },
  s: {
    height: 32,
    iconSize: 16,
    textComponent: C
  }
}, f = ({ text: e, icon: n, size: x, width: i = "auto", ...d }) => {
  const h = l[x];
  return /* @__PURE__ */ o(u, { width: i, height: h.height, ...d, children: /* @__PURE__ */ m(s, { children: [
    /* @__PURE__ */ o(h.textComponent, { children: e }),
    n && a(n, {
      size: h.iconSize
    })
  ] }) });
}, b = ({ size: e, checkboxType: n, ...x }) => {
  const i = l[e];
  return /* @__PURE__ */ o(
    E,
    {
      ...x,
      width: T[t.CHECKBOX][e],
      height: i.height,
      children: /* @__PURE__ */ o(s, { children: /* @__PURE__ */ o(g, { ...n }) })
    }
  );
}, $ = {
  Default: f,
  Checkbox: b
}, s = p.div`
  display: flex;
  align-items: center;
  gap: 2px;
`, c = p.th`
  width: ${({ width: e }) => e};
  height: ${({ height: e }) => e}px;
  vertical-align: middle;
  text-wrap: nowrap;
  border-left: ${({ borderLeft: e }) => e ?? "none"};
  border-right: ${({ borderRight: e }) => e ?? "none"};
  background: ${({ background: e }) => e ?? "inherit"};
`, u = p(c)`
  padding: 5px 14px;
`, E = p(c)`
  padding: 5px 12px 5px 18px;
`;
export {
  b as CheckboxTh,
  f as DefaultTh,
  T as FIXED_TH_WIDTH,
  l as TABLE_TH_STYLE,
  $ as default
};
//# sourceMappingURL=Th.mjs.map
