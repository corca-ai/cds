import { jsx as r } from "@emotion/react/jsx-runtime";
import { MessageModal as n } from "./MessageModal.mjs";
import { Button as e } from "../Button/Button.mjs";
function f({ title: i, contents: t, opened: l, close: o }) {
  return /* @__PURE__ */ r(
    n,
    {
      title: i,
      contents: t,
      bottom: /* @__PURE__ */ r(e, { onClick: o.onClick, variant: "filled", size: "small", children: o.label }),
      opened: l,
      borderRadius: 8,
      onClose: o.onClick
    }
  );
}
export {
  f as Alert
};
//# sourceMappingURL=Alert.mjs.map
