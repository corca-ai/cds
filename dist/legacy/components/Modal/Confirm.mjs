import { jsx as i, jsxs as s, Fragment as a } from "@emotion/react/jsx-runtime";
import { MessageModal as m } from "./MessageModal.mjs";
import { Button as r } from "../Button/Button.mjs";
function k({ title: t, contents: e, opened: n, cancel: o, confirm: l }) {
  return /* @__PURE__ */ i(
    m,
    {
      title: t,
      contents: e,
      bottom: /* @__PURE__ */ s(a, { children: [
        /* @__PURE__ */ i(r, { onClick: o.onClick, variant: "text", size: "small", children: o.label }),
        /* @__PURE__ */ i(r, { onClick: l.onClick, variant: "filled", size: "small", children: l.label })
      ] }),
      opened: n,
      borderRadius: 8,
      onClose: o.onClick
    }
  );
}
export {
  k as Confirm
};
//# sourceMappingURL=Confirm.mjs.map
