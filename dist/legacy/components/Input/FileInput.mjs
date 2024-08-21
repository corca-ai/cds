import { jsx as t, jsxs as y, Fragment as I } from "@emotion/react/jsx-runtime";
import { useId as F } from "react";
import l from "@emotion/styled";
import $ from "../Icon/index.mjs";
import { B3 as a } from "../Text/index.mjs";
import { InputContainer as b, baseInputStyles as S } from "./InputContainer.mjs";
const U = (e) => {
  switch (e) {
    case "audio":
    case "image":
    case "video":
      return `${e}/*`;
    case "csv":
      return "text/csv";
    case "txt":
      return "text/plain";
    case "pdf":
      return ".pdf";
    default:
      return "*/*";
  }
};
function z({
  label: e,
  placeholder: s,
  description: c,
  name: B,
  file: r,
  error: i,
  disabled: C,
  onUpload: u,
  defaultValue: P,
  required: p = !1,
  width: d,
  tooltip: f,
  onClick: m,
  height: g,
  uploadType: h = "default",
  ...x
}) {
  const n = F();
  return /* @__PURE__ */ t(
    b,
    {
      cursorPointer: !0,
      onClick: m,
      label: e,
      description: c,
      required: p,
      error: i,
      width: d,
      tooltip: f,
      ...x,
      leftSection: /* @__PURE__ */ t($.Upload, {}),
      children: /* @__PURE__ */ y(I, { children: [
        /* @__PURE__ */ t(
          j,
          {
            onChange: (o) => {
              o.target.files && u(o.target.files[0]);
            },
            type: "file",
            accept: U(h),
            id: `file-input-${n}`
          }
        ),
        /* @__PURE__ */ t(
          v,
          {
            isLeftSection: !0,
            error: i,
            height: g,
            cursorPointer: !0,
            htmlFor: `file-input-${n}`,
            children: r ? /* @__PURE__ */ t(a, { children: r.name }) : /* @__PURE__ */ t(a, { c: "grey-50", children: s })
          }
        )
      ] })
    }
  );
}
const j = l.input`
  display: none;
`, v = l.label`
  ${(e) => S(e)}
  display: flex;
  align-items: center;
`;
export {
  z as FileInput,
  v as UploadButton
};
//# sourceMappingURL=FileInput.mjs.map
