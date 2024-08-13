import { jsx as d } from "@emotion/react/jsx-runtime";
import { useRef as l, useEffect as s } from "react";
import u from "@emotion/styled";
import { color as x } from "../styles.mjs";
const g = u.dialog`
  &::backdrop {
    background-color: ${x["grey-80"]};
    opacity: 0.5;
  }
  margin: auto;
  border-radius: ${(r) => r.borderRadius}px;
  border: none;
  padding: 0;
  ${({ drawer: r }) => r && `
  position: fixed;
  left: 100%;
  transform: translateX(-100%);
  height: 100vh;
  &:modal {
    max-height: 100vh;
  }`}

  box-shadow: 0px 0px 1px 0px rgba(132, 132, 132, 0.31),
    0px 2px 5px 0px rgba(70, 70, 70, 0.2);
`;
function y({
  opened: r,
  children: i,
  borderRadius: n,
  onClose: a,
  closeOnBackdropClick: c = !0,
  drawer: p = !1
}) {
  const o = l(null);
  s(() => {
    var t, e;
    r ? (t = o.current) == null || t.showModal() : (e = o.current) == null || e.close();
  }, [r]);
  function f(t) {
    c && t.target === o.current && a();
  }
  return /* @__PURE__ */ d(
    g,
    {
      ref: o,
      borderRadius: n,
      onClick: f,
      onClose: a,
      drawer: p,
      children: i
    }
  );
}
export {
  y as ModalContainer
};
//# sourceMappingURL=ModalContainer.mjs.map
