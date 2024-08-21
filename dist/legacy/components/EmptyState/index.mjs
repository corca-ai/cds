import { jsxs as e, jsx as i } from "@emotion/react/jsx-runtime";
import n from "@emotion/styled";
import { Button as o } from "../Button/Button.mjs";
import { H2 as c, B2 as d } from "../Text/index.mjs";
import { color as p } from "../styles.mjs";
function u({ label: r, description: l, button: t }) {
  return /* @__PURE__ */ e(a, { children: [
    /* @__PURE__ */ i(m, {}),
    /* @__PURE__ */ e(h, { children: [
      /* @__PURE__ */ i(c, { children: r }),
      /* @__PURE__ */ i(d, { children: l })
    ] }),
    t != null && /* @__PURE__ */ i(f, { children: /* @__PURE__ */ i(o, { variant: "filled", size: "large", color: "main-black", onClick: t.onClick, children: t.text }) })
  ] });
}
const a = n.div`
  width: 100%;
  height: 100%;
  padding: 100px 100px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${p.white};
`, h = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`, f = n.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
function m() {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "184",
      height: "184",
      viewBox: "0 0 184 184",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ i("circle", { cx: "92", cy: "92", r: "92", fill: "#F3F3F3" }),
        /* @__PURE__ */ i("rect", { x: "39.5372", y: "54.7441", width: "104.926", height: "27.3719", fill: "#C8C8C8" }),
        /* @__PURE__ */ i(
          "rect",
          {
            x: "46.8254",
            y: "48.8193",
            width: "87.4351",
            height: "54.7786",
            transform: "rotate(-2.93015 46.8254 48.8193)",
            fill: "white"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M39.5372 135.338V60.0654H75.1251L78.9724 66.2545H144.463V135.338H39.5372Z",
            fill: "#EEEEEE",
            fillOpacity: "0.7"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M39.5372 135.141V65.3887H72.239L76.0863 71.8859H144.463V135.141C144.463 137.35 142.672 139.141 140.463 139.141H43.5372C41.3281 139.141 39.5372 137.35 39.5372 135.141Z",
            fill: "#DDDDDD"
          }
        )
      ]
    }
  );
}
export {
  u as EmptyState
};
//# sourceMappingURL=index.mjs.map
