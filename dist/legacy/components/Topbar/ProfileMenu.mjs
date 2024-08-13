import { jsxs as o, jsx as e } from "@emotion/react/jsx-runtime";
import { useState as u, useRef as g, useEffect as f } from "react";
import n from "@emotion/styled";
import m from "../Icon/index.mjs";
import { B4 as b, B1 as v, B3 as x, B2 as w, B5 as y } from "../Text/index.mjs";
import { color as p } from "../styles.mjs";
const k = n.div`
  position: relative;
  display: inline-block;
`, C = n.div`
  display: inline-flex;
  padding: 8px 14px 8px 13px;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  border-radius: 50px;
  background: ${p.white};
  box-shadow: ${({ clicked: r }) => r && `0 0 0 1.5px ${p["grey-30"]} inset,`} 0px 4px 10px
    0px rgba(0, 0, 0, 0.05);
`, $ = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, M = n.div`
  display: flex;
  align-items: center;
  gap: 6px;
`, B = n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 86px;
  span:last-child {
    line-height: 12px;
  }
`, I = n.div`
  width: 20px;
  height: 20px;
  margin: auto;
  flex-shrink: 0;
  cursor: pointer;
  transform: ${({ clicked: r }) => r ? "rotate(-180deg);" : "rotate(0);"};
`, W = n.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  background-image: url(${({ url: r }) => r});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #7a7a7a;
`, P = n.div`
  width: 100%;
  padding: 6px 10px 10px 10px;
  background: ${p.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`, j = n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 8px;
  * {
    line-height: normal;
  }
`, D = n.hr`
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: ${p["grey-30"]};
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 16px;
`, E = n.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`, L = n.button`
  background: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
`, O = n.li`
  display: flex;
  gap: 6px;
  padding: 6px 8px;
  align-items: center;
  border-radius: 8px;
  &:hover {
    background: ${p["grey-20"]};
  }
  &:active {
    background: ${p["grey-30"]};
  }
`, S = n.div`
  height: 32px;
  padding-top: 12px;
`, z = n.div`
  position: absolute;
  z-index: 1000;
  margin-top: 9px;
  right: 0;
  min-width: 100%;
`, R = n.div`
  height: 21px;
  display: flex;
  align-items: center;
`;
function A({ title: r, name: d, email: l, options: t }) {
  return /* @__PURE__ */ o(P, { children: [
    /* @__PURE__ */ o(j, { children: [
      /* @__PURE__ */ e(S, { children: /* @__PURE__ */ e(b, { children: r }) }),
      /* @__PURE__ */ e(v, { children: d }),
      /* @__PURE__ */ e(x, { children: l })
    ] }),
    /* @__PURE__ */ o(E, { children: [
      /* @__PURE__ */ e(D, {}),
      t == null ? void 0 : t.map((i) => {
        const c = i.icon;
        return /* @__PURE__ */ e(L, { onClick: i.onClick, children: /* @__PURE__ */ o(O, { children: [
          /* @__PURE__ */ e(c, {}),
          /* @__PURE__ */ e(x, { children: i.label })
        ] }) }, i.label);
      })
    ] })
  ] });
}
function N({
  avatar: r,
  name: d,
  description: l,
  onClick: t,
  clicked: i
}) {
  return /* @__PURE__ */ e(C, { clicked: i, children: /* @__PURE__ */ o($, { children: [
    /* @__PURE__ */ o(M, { children: [
      /* @__PURE__ */ e(W, { ...r && { url: r } }),
      /* @__PURE__ */ o(B, { children: [
        /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e(w, { children: d }) }),
        /* @__PURE__ */ e(y, { c: "grey-60", children: l })
      ] })
    ] }),
    /* @__PURE__ */ e(I, { clicked: i, onClick: t, children: /* @__PURE__ */ e(m.ChevronDownSmall, {}) })
  ] }) });
}
function K({ avatar: r, name: d, description: l, ...t }) {
  const [i, c] = u(!1), a = g(null);
  return f(() => {
    const s = (h) => {
      a.current != null && !a.current.contains(h.target) && c(!1);
    };
    return document.addEventListener("mousedown", s), () => {
      document.removeEventListener("mousedown", s);
    };
  }, [a]), /* @__PURE__ */ o(k, { ref: a, children: [
    /* @__PURE__ */ e(
      N,
      {
        avatar: r,
        name: d,
        ...l && { description: l },
        onClick: () => {
          c(!i);
        },
        clicked: i
      }
    ),
    /* @__PURE__ */ e(z, { children: i && /* @__PURE__ */ e(A, { name: d, ...t }) })
  ] });
}
export {
  K as ProfileMenu
};
//# sourceMappingURL=ProfileMenu.mjs.map
