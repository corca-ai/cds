import { jsxs as d, jsx as e } from "@emotion/react/jsx-runtime";
import a from "@emotion/styled";
import { Button as t } from "../Button/Button.mjs";
import { color as o } from "../styles.mjs";
const c = a.div`
  width: 100%;
  background-color: ${o.white};
  display: flex;
  padding: 10px 20px;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${o["grey-30"]};
`, i = a.div`
  width: 100px;
`;
function f({ dismiss: l, destroy: r, confirm: n }) {
  return /* @__PURE__ */ d(c, { children: [
    /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(t, { ...l, variant: "text", size: "large", children: l.label }) }),
    r != null && /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(t, { ...r, variant: "outline", size: "large", children: r.label }) }),
    /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(t, { ...n, variant: "filled", size: "large", children: n.label }) })
  ] });
}
export {
  f as BottomBar
};
//# sourceMappingURL=index.mjs.map
