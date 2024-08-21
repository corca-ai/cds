import { jsx as d } from "@emotion/react/jsx-runtime";
import i from "@emotion/styled";
import { color as o } from "../styles.mjs";
const b = ({ children: r, readOnly: e = !1, onClick: t }) => /* @__PURE__ */ d(l, { onClick: t, readOnly: e, children: r }), l = i.tr`
  display: table-row;
  cursor: ${(r) => r.readOnly ? "default" : "pointer"};
  border-width: 1px 0 1px 0;
  border-style: inherit;
  border-color: inherit;
  max-height: 66px !important;
  padding: 0;
  border-top: 1px solid ${o["grey-30"]};
  border-bottom: 1px solid ${o["grey-30"]};
  border-color: inherit;

  ${(r) => r.readOnly || `
    &:hover {
      background-color: ${o["grey-20"]};
    }

    &:active {
      background-color: ${o["grey-30"]};
    }
  `}
`;
export {
  b as Tr
};
//# sourceMappingURL=Tr.mjs.map
