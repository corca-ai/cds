import { jsx as i } from "@emotion/react/jsx-runtime";
import t from "@emotion/styled";
import { color as p } from "../styles.mjs";
const d = t.div`
  width: ${(r) => r.size}px;
  height: ${(r) => r.size}px;
  border-radius: 4px;
  background-color: ${p["grey-30"]};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset;
`, n = t.img`
  object-fit: cover;
  border-radius: 4px;
`;
function m({ url: r, alt: e = "image alt", size: o = 54 }) {
  return /* @__PURE__ */ i(d, { size: o, children: r && /* @__PURE__ */ i(n, { src: r, alt: e, width: o, height: o }) });
}
export {
  m as Thumbnail
};
//# sourceMappingURL=index.mjs.map
