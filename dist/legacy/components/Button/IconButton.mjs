import { jsx as e } from "@emotion/react/jsx-runtime";
import n from "@emotion/styled";
import { color as o } from "../styles.mjs";
const i = n.button`
  background: inherit;
  border: none;
  border-radius: 8px;
  overflow: visible;
  width: 34px;
  height: 34px;
  padding: 8px;
  cursor: pointer;
  &:enabled:active {
    background-color: ${o["grey-20"]};
  }
  &:disabled {
    cursor: not-allowed;
    * {
      cursor: not-allowed;
      fill: ${o["grey-50"]};
    }
  }
`;
function p({ children: r, ...t }) {
  return /* @__PURE__ */ e(i, { ...t, children: r });
}
export {
  p as IconButton
};
//# sourceMappingURL=IconButton.mjs.map
