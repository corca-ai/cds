import { jsxs as o, jsx as i } from "@emotion/react/jsx-runtime";
import e from "@emotion/styled";
import t from "../Icon/index.mjs";
import { H1 as l } from "../Text/index.mjs";
import { Tooltip as c } from "../Tooltip/index.mjs";
const p = e.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`, m = e.i`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
function h({ title: n, description: r }) {
  return /* @__PURE__ */ o(p, { children: [
    /* @__PURE__ */ i(l, { children: n }),
    r && /* @__PURE__ */ i(c, { content: r, direction: "top-center", children: /* @__PURE__ */ i(m, { children: /* @__PURE__ */ i(t.InformationCircleLarge, {}) }) })
  ] });
}
export {
  h as Title
};
//# sourceMappingURL=Title.mjs.map
