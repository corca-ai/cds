import { jsxs as n, jsx as o } from "@emotion/react/jsx-runtime";
import i from "@emotion/styled";
import { ModalContainer as m } from "./ModalContainer.mjs";
import { BottomBar as a } from "../BottomBar/index.mjs";
import x from "../Icon/index.mjs";
import { H1 as f, B1 as h } from "../Text/index.mjs";
import { color as C } from "../styles.mjs";
const u = i.div`
  background-color: ${C.white};
  display: inline-flex;
  width: ${({ width: r }) => r ?? "669px"};
  padding: 0;
  flex-direction: column;
`, g = i.div`
  padding: 50px 40px 20px 40px;
`, y = i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
`, v = i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`, B = i.div`
  cursor: pointer;
`, b = i.div``;
function $({
  title: r,
  subtitle: t,
  opened: d,
  cancel: e,
  confirm: l,
  children: c,
  closeOnBackdropClick: s,
  width: p
}) {
  return /* @__PURE__ */ n(
    m,
    {
      opened: d,
      borderRadius: 12,
      onClose: e.onClick,
      closeOnBackdropClick: s,
      children: [
        /* @__PURE__ */ o(u, { width: p, children: /* @__PURE__ */ n(g, { children: [
          /* @__PURE__ */ n(y, { children: [
            /* @__PURE__ */ n(v, { children: [
              /* @__PURE__ */ o(f, { children: r }),
              /* @__PURE__ */ o(h, { children: t })
            ] }),
            /* @__PURE__ */ o(B, { onClick: e.onClick, children: /* @__PURE__ */ o(x.CancelLarge, { size: 24 }) })
          ] }),
          /* @__PURE__ */ o(b, { children: c })
        ] }) }),
        /* @__PURE__ */ o(a, { dismiss: e, confirm: l })
      ]
    }
  );
}
export {
  $ as Modal
};
//# sourceMappingURL=Modal.mjs.map
