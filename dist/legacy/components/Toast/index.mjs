import { jsx as e, jsxs as r } from "@emotion/react/jsx-runtime";
import s, { Toaster as l } from "../../../node_modules/.pnpm/react-hot-toast@2.4.1_csstype@3.1.3_react-dom@18.2.0_react@18.2.0/node_modules/react-hot-toast/dist/index.mjs";
import t from "@emotion/styled";
import n from "../Icon/index.mjs";
import { B7 as d, B3 as a } from "../Text/index.mjs";
import { color as x } from "../styles.mjs";
const I = () => /* @__PURE__ */ e(l, {}), h = t.div`
  display: flex;
  width: 420px;
  padding: 12px;
  justify-content: space-between;
  background-color: ${x.white};
  border-radius: 9px;
  box-shadow: 0px 0px 1px 0px rgba(132, 132, 132, 0.31), 0px 2px 5px 0px rgba(70, 70, 70, 0.2);
`, f = t.div`
  display: flex;
  height: 100%;
  gap: 8px;
`, g = t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  line-height: 18px;
`, m = t.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
`, u = t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`, y = t.div`
  display: flex;
  height: 17px;
  line-height: 17px;
`, T = t.div`
  display: flex;
  height: 100%;
`;
function c(i, o) {
  s.custom(
    (p) => /* @__PURE__ */ r(h, { children: [
      /* @__PURE__ */ r(f, { children: [
        /* @__PURE__ */ e(g, { children: i }),
        /* @__PURE__ */ r(u, { children: [
          o.title && /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e(d, { children: o.title }) }),
          /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(a, { children: o.message }) })
        ] })
      ] }),
      /* @__PURE__ */ e(
        m,
        {
          onClick: () => {
            s.remove(p.id);
          },
          children: /* @__PURE__ */ e(n.CancelSmall, {})
        }
      )
    ] }),
    { position: "top-right", duration: o.durationMs || 3e3 }
  );
}
const M = {
  success: (i) => {
    c(/* @__PURE__ */ e(n.ToastSuccess, {}), i);
  },
  error: (i) => {
    c(/* @__PURE__ */ e(n.ToastError, {}), i);
  }
};
export {
  M as Toast,
  I as ToastPrepare
};
//# sourceMappingURL=index.mjs.map
