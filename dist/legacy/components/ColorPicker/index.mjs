import { jsxs as t, jsx as r } from "@emotion/react/jsx-runtime";
import { useState as c, useRef as d, useCallback as s } from "react";
import { HexAlphaColorPicker as h } from "../../../node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.2.0_react@18.2.0/node_modules/react-colorful/dist/index.mjs";
import e from "@emotion/styled";
import { TextInput as u } from "../Input/TextInput.mjs";
import g from "../Input/hook.mjs";
import { B3 as f } from "../Text/index.mjs";
import { color as n } from "../styles.mjs";
const b = e.div`
  position: absolute;
  top: 12px;
  right: 0;
  display: flex;
  width: 232px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  position: absolute;
  background-color: ${n.white};
  border-radius: 8px;
  box-shadow:
    0px 0px 1px 0px rgba(132, 132, 132, 0.31),
    0px 2px 5px 0px rgba(70, 70, 70, 0.2);
  z-index: 1;

  .react-colorful {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .react-colorful__saturation {
    margin: 0;
    height: 212px;
    width: 212px;
    border-radius: 4px;
    border: none;
  }
  .react-colorful__pointer {
    width: 15px;
    height: 15px;
    border: 2px solid ${n.white};
  }
  .react-colorful__hue {
    margin-top: 12px;
  }
  .react-colorful__alpha {
    margin-top: 8px;
  }
  .react-colorful__hue,
  .react-colorful__alpha {
    height: 12px;
    width: 169px;
    border-radius: 15px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3) inset;
  }
`, m = e.div`
  display: flex;
  width: 212px;
  padding-left: 4px;
  align-items: center;
  gap: 10px;
`, w = e.div`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ color: o }) => o};
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1) inset;
`, k = e.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: ${({ color: o }) => o};
  top: 234px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset;
`, _ = e.div`
  position: relative;
`;
function O({ color: o, onChangeColor: p }) {
  const [x, a] = c(!1), l = d(null);
  return g(
    l,
    s(() => {
      a(!1);
    }, [])
  ), /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ r(
      w,
      {
        onClick: () => {
          a(!x);
        },
        color: o
      }
    ),
    x && /* @__PURE__ */ r(_, { ref: l, children: /* @__PURE__ */ t(b, { children: [
      /* @__PURE__ */ r(
        h,
        {
          color: o,
          onChange: (i) => {
            p(i);
          }
        }
      ),
      /* @__PURE__ */ r(k, { color: o }),
      /* @__PURE__ */ t(m, { children: [
        /* @__PURE__ */ r(f, { children: "Hex" }),
        /* @__PURE__ */ r(
          u,
          {
            value: o,
            onChange: (i) => {
              p(i.target.value);
            },
            height: 32
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  O as ColorPicker
};
//# sourceMappingURL=index.mjs.map
