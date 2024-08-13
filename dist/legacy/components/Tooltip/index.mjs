import { jsxs as O, jsx as p } from "@emotion/react/jsx-runtime";
import { css as n } from "@emotion/react";
import l from "@emotion/styled";
import { color as $, typography as d } from "../styles.mjs";
import { B5 as g } from "../Text/index.mjs";
function H({
  direction: t = "top-center",
  withArrow: r = !0,
  children: o,
  content: e
}) {
  const [a, c] = t.split("-");
  return /* @__PURE__ */ O(I, { children: [
    /* @__PURE__ */ p(W, { children: o }),
    /* @__PURE__ */ O(S, { className: "tooltip-box", children: [
      r && /* @__PURE__ */ p(C, { placement: a }),
      /* @__PURE__ */ p(w, { withArrow: r, placement: a, position: c, children: /* @__PURE__ */ p(g, { c: "white", children: e }) })
    ] })
  ] });
}
const I = l.div`
  position: relative;
  &:hover {
    .tooltip-box {
      visibility: visible;
      opacity: 1;
    }
  }
`, S = l.div`
  visibility: hidden;
  opacity: 0;
`, W = l.div`
  display: flex;
`, s = 10, i = Math.sqrt(s ** 2 + s ** 2), R = 2, N = (t) => {
  const e = (i - s) / 2 + R;
  switch (t) {
    case "bottom":
      return n`
        border-bottom-right-radius: ${2}px;
        bottom: calc(100% + ${e}px);
        left: calc(50% - ${s / 2}px);
      `;
    case "top":
      return n`
        border-top-left-radius: ${2}px;
        top: calc(100% + ${e}px);
        left: calc(50% - ${s / 2}px);
      `;
    case "left":
      return n`
        border-top-right-radius: ${2}px;
        right: calc(100% + ${e}px);
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      `;
    case "right":
      return n`
        border-bottom-left-radius: ${2}px;
        left: calc(100% + ${e}px);
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      `;
    default:
      return null;
  }
}, C = l.div`
  position: absolute;
  background: ${$["main-black"]};
  width: ${s}px;
  height: ${s}px;
  transform: rotate(45deg);
  z-index: 10;
  ${(t) => N(t.placement)}
`, B = ({ withArrow: t, placement: r, position: o }) => {
  const e = `calc(100% + ${i / 2 + R}px)`, a = n`
    left: 50%;
    transform: ${E({ placement: r, position: o, withArrow: t })};
  `, c = n`
    top: 50%;
    transform: ${E({ placement: r, position: o, withArrow: t })};
  `;
  switch (r) {
    case "top":
      return n`
        top: ${e};
        ${a}
      `;
    case "bottom":
      return n`
        bottom: ${e};
        ${a}
      `;
    case "left":
      return n`
        right: 100%;
        ${c}
      `;
    case "right":
      return n`
        left: 100%;
        ${c}
      `;
    default:
      return null;
  }
}, x = (t, r, o) => t ? `${o - r}px` : `${r - o}px`, A = (t, r) => {
  switch (t) {
    case "center":
      return "-50%";
    case "start":
      return `-${r}px`;
    case "end":
      return `calc(${r}px - 100%)`;
    default:
      return "0%";
  }
}, E = ({ placement: t, position: r, withArrow: o }) => {
  const c = i + 15, b = i + 9, h = s - R, _ = o ? 0 : h;
  function f() {
    const T = x(t === "bottom", 0, _);
    return `translate(${A(r, c)}, ${T})`;
  }
  function m() {
    const T = i / 2 + R, u = x(t === "left", T, _), D = A(r, b);
    return `translate(${u}, ${D})`;
  }
  switch (t) {
    case "top":
    case "bottom":
      return f();
    case "left":
    case "right":
      return m();
    default:
      return "";
  }
}, w = l.div`
  position: absolute;
  z-index: 10;
  width: max-content;
  height: max-content;
  max-width: 300px;
  cursor: help;
  background: ${$["main-black"]};
  font-size: ${d.size.xxs}px;
  font-weight: ${d.weight.regular};
  padding: 7px 10px;
  border-radius: 8px;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: normal;

  ${(t) => B(t)}
`;
export {
  H as Tooltip
};
//# sourceMappingURL=index.mjs.map
