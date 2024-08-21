import { jsxs as r, jsx as e } from "@emotion/react/jsx-runtime";
import { useCallback as g, cloneElement as m, createElement as u } from "react";
import t from "@emotion/styled";
import { Text as p } from "../Text/index.mjs";
import { color as s, typography as w } from "../styles.mjs";
const y = t.nav`
  display: inline-flex;
  overflow-y: scroll;
  height: 100vh;
  padding: 25px 14px 18px 14px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  background: ${s.white};
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
`, v = t.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`, b = t.div`
  display: flex;
  width: 212px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`, k = t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`, $ = t.ol`
  display: flex;
  width: 212px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`, j = t.div`
  width: 100%;
  padding: 0 8px;
  height: 28px;
  display: flex;
  align-items: center;
`, N = t.li`
  display: flex;
  width: 212px;
  height: 36px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  cursor: pointer;
  ${({ selected: l, selectedColor: o }) => l ? `
          background: ${o};
          span {
            font-weight: ${w.weight.semibold} !important;
          }
        ` : `&:hover {background: ${s["grey-20"]};}`}
`, z = t.div`
  width: 100%;
`;
function E({
  logoImage: l,
  logoHref: o,
  bottom: x,
  navbarGroup: h,
  selectedColor: a,
  LinkElement: c
}) {
  const d = g(
    ({ href: n, children: i }) => c != null ? m(c, { href: n }, i) : u("a", { href: n }, i),
    []
  );
  return /* @__PURE__ */ r(y, { children: [
    /* @__PURE__ */ r(v, { children: [
      /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(d, { href: o, children: /* @__PURE__ */ e(
        "img",
        {
          alt: "logo-image",
          src: l.src,
          width: l.width,
          height: l.height
        }
      ) }) }),
      /* @__PURE__ */ e(k, { children: h.map((n) => /* @__PURE__ */ r($, { children: [
        /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(p, { size: "xxs", fw: "bold", c: "grey-80", children: n.title }) }),
        n.navItems.map((i) => {
          const f = i.icon;
          return /* @__PURE__ */ e(d, { href: i.href, children: /* @__PURE__ */ r(N, { ...a && { selectedColor: a }, selected: !!i.selected, children: [
            /* @__PURE__ */ e(f, { size: 20 }),
            /* @__PURE__ */ e(p, { size: "s", fw: "regular", children: i.label })
          ] }) }, i.label);
        })
      ] }, n.title)) })
    ] }),
    /* @__PURE__ */ e(z, { children: x })
  ] });
}
export {
  E as Navigation
};
//# sourceMappingURL=index.mjs.map
