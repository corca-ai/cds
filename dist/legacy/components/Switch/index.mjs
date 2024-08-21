import { jsxs as p, jsx as i } from "@emotion/react/jsx-runtime";
import o from "@emotion/styled";
import { color as e, typography as h } from "../styles.mjs";
function w({ checked: t, onChange: c, disabled: n = !1 }) {
  return /* @__PURE__ */ p(f, { "aria-disabled": n ? "true" : "false", children: [
    /* @__PURE__ */ i(
      x,
      {
        type: "checkbox",
        checked: t,
        onChange: () => {
          c(!t);
        },
        disabled: n
      }
    ),
    /* @__PURE__ */ i(g, { checked: t, disabled: n, children: /* @__PURE__ */ i(t ? m : y, { checked: t, disabled: n, children: t ? "ON" : "OFF" }) })
  ] });
}
const s = 38, d = 18, r = 12, a = 3, f = o.label`
  position: relative;
  width: ${s}px;
  height: ${d}px;
  user-select: none;
  display: inline-block;
`, g = o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: ${(t) => t.disabled ? "not-allowed" : "pointer"};
  background: ${(t) => t.disabled ? e["grey-50"] : t.checked ? e["main-black"] : e["grey-40"]};
  border-radius: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    z-index: 10;
    width: ${r}px;
    height: ${r}px;
    background: ${({ disabled: t }) => t ? e["grey-60"] : e.white};
    border-radius: 50%;
    transition: transform ease 0.2s;
    transform: ${(t) => `translateX(${t.checked ? s - r - a : a}px)`};
  }
`, x = o.input`
  opacity: 0;
  width: 0;
  height: 0;
`, l = o.span`
  position: absolute;
  font-size: 9px;
  font-style: normal;
  font-weight: ${h.weight.medium};
  font-family: 'Pretendard Variable', Pretendard;
  line-height: 1.2;
`, m = o(l)`
  left: 5px;
  color: ${({ disabled: t }) => t ? e["grey-60"] : e.white};
  opacity: ${({ checked: t }) => t ? 1 : 0};
`, y = o(l)`
  right: 3.5px;
  color: ${({ disabled: t }) => t ? e["grey-60"] : e["grey-50"]};
  opacity: ${({ checked: t }) => t ? 0 : 1};
`;
export {
  w as Switch
};
//# sourceMappingURL=index.mjs.map
