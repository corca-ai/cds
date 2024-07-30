import { jsxs as l, jsx as e } from "@emotion/react/jsx-runtime";
import a from "@emotion/styled";
import m from "../Icon/index.mjs";
import { B3 as x } from "../Text/index.mjs";
import { color as n } from "../styles.mjs";
const c = 16;
function k({
  selected: r,
  onSelect: o,
  disabled: t,
  label: i,
  type: s = "button",
  ...p
}) {
  return /* @__PURE__ */ l(
    g,
    {
      onClick: o,
      "aria-selected": r,
      disabled: t,
      type: s,
      ...p,
      children: [
        /* @__PURE__ */ e(
          d,
          {
            tabIndex: !i && !t ? 0 : -1,
            disabled: t,
            selected: r,
            children: /* @__PURE__ */ e(m.CheckSmall, { size: c, color: r ? n.white : "transparent" })
          }
        ),
        i && /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(x, { c: t ? "grey-50" : "grey-80", children: i }) })
      ]
    }
  );
}
const d = a.div`
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${({ disabled: r, selected: o }) => r ? n["grey-40"] : o ? n["main-black"] : n.white};
  box-shadow: ${({ disabled: r, selected: o }) => r || o ? "none" : `0 0 0 1px inset ${n["grey-50"]}`};
  border-radius: 4px;
  width: ${c}px;
  height: ${c}px;
`, h = a.div`
  display: flex;
  align-items: center;
`, g = a.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
export {
  k as Checkbox
};
//# sourceMappingURL=index.mjs.map
