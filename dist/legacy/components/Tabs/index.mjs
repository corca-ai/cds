import { jsx as t } from "@emotion/react/jsx-runtime";
import e from "@emotion/styled";
import { B3 as b } from "../Text/index.mjs";
import { color as r } from "../styles.mjs";
const f = e.div`
  display: inline-block;
  overflow-x: auto;
`, u = e.div`
  width: fit-content;
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid ${r["grey-50"]};
`, l = e.div`
  display: flex;
  border-radius: 4px 4px 0px 0px;
  padding: 11px 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
`, y = e(l)`
  border-bottom: 2px solid ${r["main-black"]};
  margin-bottom: -2px;
`, g = e(l)`
  &:hover {
    background-color: ${r["grey-10"]};
  }
  cursor: pointer;
`;
function C({ items: i, onChange: c, selectedTab: d, tabWidth: s = 74, tabFullWidth: a }) {
  return /* @__PURE__ */ t(f, { style: { width: "100%" }, children: /* @__PURE__ */ t(u, { style: { minWidth: "100%" }, children: i.map((o, p) => {
    const n = o.value === d, m = n ? y : g, x = n ? "main-black" : "grey-60";
    return /* @__PURE__ */ t(
      m,
      {
        onClick: () => {
          c(o.value);
        },
        "aria-selected": n ? "true" : "false",
        style: {
          width: a ? `${100 / i.length}%` : s
        },
        children: /* @__PURE__ */ t(b, { ellipsis: !0, c: x, children: o.label })
      },
      p
    );
  }) }) });
}
export {
  C as Tabs
};
//# sourceMappingURL=index.mjs.map
