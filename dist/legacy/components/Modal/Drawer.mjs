import { jsx as r, jsxs as o } from "@emotion/react/jsx-runtime";
import e from "@emotion/styled";
import { ModalContainer as l } from "./ModalContainer.mjs";
import p from "../Icon/index.mjs";
import { H2 as a } from "../Text/index.mjs";
import { color as s } from "../styles.mjs";
const m = e.div`
  background-color: ${s.white};
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 40px 30px 30px 30px;
  height: 100vh;
  gap: 40px;
`, f = e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`, x = e.div`
  cursor: pointer;
`;
function y({ title: n, opened: t, onClose: i, children: c, closeOnBackdropClick: d }) {
  return /* @__PURE__ */ r(
    l,
    {
      opened: t,
      borderRadius: 0,
      onClose: i,
      drawer: !0,
      closeOnBackdropClick: d,
      children: /* @__PURE__ */ o(m, { children: [
        /* @__PURE__ */ o(f, { children: [
          /* @__PURE__ */ r(a, { children: n }),
          /* @__PURE__ */ r(x, { onClick: i, children: /* @__PURE__ */ r(p.CancelLarge, { size: 24 }) })
        ] }),
        c
      ] })
    }
  );
}
export {
  y as Drawer
};
//# sourceMappingURL=Drawer.mjs.map
