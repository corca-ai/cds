import { jsx as i } from "@emotion/react/jsx-runtime";
import o from "@emotion/styled";
import { B2 as c, B5 as g } from "../Text/index.mjs";
import { color as p } from "../styles.mjs";
var h = /* @__PURE__ */ ((t) => (t.KEBAB = "KEBAB_MENU", t.RADIO = "RADIO_ITEM", t.CHECKBOX = "CHECKBOX", t.IMAGE = "IMAGE", t))(h || {});
const d = {
  l: 66,
  m: 56,
  s: 50,
  xs: 40
}, s = {
  l: {
    textComponent: c
  },
  m: {
    textComponent: c
  },
  s: {
    textComponent: c
  },
  xs: {
    textComponent: g
  }
}, r = o.td`
  display: table-cell;
  align-items: center;
  flex-shrink: 0;
  width: ${({ width: t }) => t ? `${t}px` : "auto"};
  height: ${({ height: t }) => t}px;
  border-left: ${({ borderLeft: t }) => t ?? "none"};
  border-right: ${({ borderRight: t }) => t ?? "none"};
  background: ${({ background: t }) => t ?? "inherit"};
`, m = ({
  width: t,
  size: e,
  children: n,
  ellipsis: a,
  ...l
}) => {
  const x = s[e];
  return /* @__PURE__ */ i(T, { ellipsis: a, width: t, height: d[e], ...l, children: /* @__PURE__ */ i(x.textComponent, { children: n }) });
}, T = o(r)`
  padding: 5px 7px 5px 14px;
  max-height: 66px;
  vertical-align: middle;
  border-spacing: 0;
  ${(t) => t.ellipsis && `max-width: ${t.width ? `${t.width}px` : "fit-content"};
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
  `}
  line-height:normal;
`, b = {
  l: 8,
  m: 7,
  s: 6,
  xs: 5
}, $ = ({
  size: t,
  src: e,
  ...n
}) => {
  const a = d[t], l = b[t];
  return /* @__PURE__ */ i(u, { size: a, padding: l, ...n, children: /* @__PURE__ */ i(w, { src: e }) });
}, u = o.td`
  width: ${({ size: t }) => t}px;
  height: ${({ size: t }) => t}px;
  max-width: ${({ size: t }) => t}px;
  max-height: ${({ size: t }) => t}px;
  padding: ${({ padding: t }) => t}px;
  vertical-align: middle;
  display: flex;
  border-left: ${({ borderLeft: t }) => t ?? "none"};
  border-right: ${({ borderRight: t }) => t ?? "none"};
  background: ${({ background: t }) => t ?? "inherit"};
`, w = o.img`
  display: block;
  box-sizing: border-box;
  border: none;
  object-fit: cover;
  width: 100%;
  background-size: cover;
  background-color: ${p["grey-30"]};
  border-radius: 4px;
`, B = ({
  size: t,
  children: e,
  ...n
}) => /* @__PURE__ */ i(E, { height: d[t], ...n, children: e }), E = o(r)`
  padding: 5px 10px;
  vertical-align: middle;
`, I = ({
  size: t,
  children: e,
  direction: n = "left",
  ...a
}) => /* @__PURE__ */ i(f, { height: d[t], direction: n, ...a, children: e }), f = o(r)`
  padding: 5px 14px;
  text-align: ${({ direction: t }) => t};
  vertical-align: middle;
`, v = ({
  size: t,
  children: e,
  ...n
}) => /* @__PURE__ */ i(_, { height: d[t], ...n, children: e }), _ = o(r)`
  padding: 5px 10px;
  vertical-align: middle;
`, k = ({
  size: t,
  children: e,
  ...n
}) => /* @__PURE__ */ i(A, { height: d[t], ...n, children: e }), A = o(r)`
  padding: 5px 12px 5px 18px;
  width: 46px;
  vertical-align: middle;
`, S = ({
  size: t,
  children: e,
  ...n
}) => /* @__PURE__ */ i(C, { height: d[t], ...n, children: e }), C = o(r)`
  padding: 5px 14px 5px 16px;
  width: 46px;
  vertical-align: middle;
`, D = {
  l: 48,
  m: 46,
  s: 44,
  xs: 44
}, H = ({
  size: t,
  children: e,
  ...n
}) => /* @__PURE__ */ i(
  K,
  {
    valign: "middle",
    height: d[t],
    width: D[t],
    ...n,
    children: e
  }
), K = o(r)`
  text-align: center;
  vertical-align: middle;
`, L = {
  Text: m,
  Img: $,
  Badge: B,
  Switch: I,
  Select: v,
  Checkbox: k,
  Radio: S,
  Icon: H
}, y = L;
export {
  B as BadgeTd,
  k as CheckboxTd,
  h as FixedCellType,
  H as IconTd,
  $ as ImgTd,
  S as RadioTd,
  v as SelectTd,
  I as SwitchTd,
  m as TextTd,
  y as default
};
//# sourceMappingURL=Td.mjs.map
