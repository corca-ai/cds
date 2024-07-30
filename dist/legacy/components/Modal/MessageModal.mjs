import { jsx as e, jsxs as c } from "@emotion/react/jsx-runtime";
import o from "@emotion/styled";
import { ModalContainer as a } from "./ModalContainer.mjs";
import { H2 as s, B2 as f } from "../Text/index.mjs";
import { color as x } from "../styles.mjs";
const m = o.div`
  background-color: ${x.white};
  display: flex;
  width: 600px;
  padding: 24px;
  flex-direction: column;
  gap: 16px;
  white-space: pre-line;
`, h = o.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-end;
  white-space: pre-line;
`;
function M({
  title: r,
  contents: i,
  bottom: n,
  opened: l,
  onClose: t,
  borderRadius: d,
  closeOnBackdropClick: p = !1
}) {
  return /* @__PURE__ */ e(
    a,
    {
      opened: l,
      borderRadius: d,
      onClose: t,
      closeOnBackdropClick: p,
      children: /* @__PURE__ */ c(m, { children: [
        /* @__PURE__ */ e(s, { children: r }),
        i && /* @__PURE__ */ e(f, { children: i }),
        /* @__PURE__ */ e(h, { children: n })
      ] })
    }
  );
}
export {
  M as MessageModal
};
//# sourceMappingURL=MessageModal.mjs.map
