import { jsxs as P, jsx as n } from "@emotion/react/jsx-runtime";
import { useMemo as C } from "react";
import f from "@emotion/styled";
import b from "../Icon/index.mjs";
import { B2 as G } from "../Text/index.mjs";
import { color as r } from "../styles.mjs";
const m = f.button`
  padding: 0;
  width: 32px;
  height: 32px;
  border: 1px solid ${(e) => e.selected ? r["grey-50"] : r["grey-40"]};
  border-radius: ${(e) => e.borderRadius}px;
  background-color: ${(e) => e.selected ? r["grey-30"] : r.white};
  cursor: ${(e) => e.disabled ? "default" : "pointer"};
  display: flex;
  justify-content: center;
  align-items: center;
`, M = f.div`
  display: flex;
  gap: 6px;
`, R = (e, i) => Array.from({ length: i - e + 1 }, (t, d) => e + d), s = 5;
function A({ current: e, total: i, onSelect: t }) {
  const { start: d, end: g, visiblePages: p, showMore: h, canGoNext: c, canGoPrev: l } = C(() => {
    const o = (Math.ceil(e / s) - 1) * s + 1, a = Math.min(o + s - 1, i), x = R(o, a), y = i > s, u = e > s, v = a < i;
    return {
      start: o,
      end: a,
      visiblePages: x,
      showMore: y,
      canGoNext: v,
      canGoPrev: u
    };
  }, [e, i]);
  return /* @__PURE__ */ P(M, { children: [
    h && /* @__PURE__ */ n(
      m,
      {
        disabled: !l,
        borderRadius: 4,
        onClick: () => {
          l && t(d - 1);
        },
        children: /* @__PURE__ */ n(b.ChevronLeftSmall, { color: l ? r["grey-80"] : r["grey-40"] })
      }
    ),
    p.map((o) => /* @__PURE__ */ n(
      m,
      {
        disabled: o === e,
        selected: o === e,
        borderRadius: 3,
        onClick: () => {
          t(o);
        },
        children: /* @__PURE__ */ n(G, { children: o })
      },
      o
    )),
    h && /* @__PURE__ */ n(
      m,
      {
        disabled: !c,
        borderRadius: 4,
        onClick: () => {
          c && t(g + 1);
        },
        children: /* @__PURE__ */ n(b.ChevronRightSmall, { color: c ? r["grey-80"] : r["grey-40"] })
      }
    )
  ] });
}
export {
  A as Pagination
};
//# sourceMappingURL=index.mjs.map
