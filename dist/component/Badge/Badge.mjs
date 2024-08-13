import { jsx as e } from "@emotion/react/jsx-runtime";
import { forwardRef as d } from "react";
import { cx as l } from "../../styled-system/css/cx.mjs";
import { sva as g } from "../../styled-system/css/sva.mjs";
const p = d(function(r, o) {
  const { className: a, label: s, variant: n, dotted: c, ...i } = r, t = b({ variant: n, dotted: c });
  return /* @__PURE__ */ e("span", { ref: o, ...i, className: l(t.root, a), children: /* @__PURE__ */ e("span", { className: t.text, children: s }) });
});
p.displayName = "Badge";
const b = g({
  slots: ["root", "text"],
  base: {
    root: {
      width: "fit-content",
      display: "inline-flex",
      gap: "6px",
      justifyContent: "center",
      alignItems: "center",
      height: "22px",
      padding: "2px 8px",
      borderRadius: "10px"
    },
    text: {
      textStyle: "b6"
    }
  },
  variants: {
    variant: {
      green: {
        root: { bg: "etc.active.10" },
        text: { color: "etc.active.30" }
      },
      grey: {
        root: { bg: "#E9EAED" },
        text: { color: "#343F51" }
      },
      yellow: {
        root: { bg: "#FFF7CC" },
        text: { color: "#E87E00" }
      },
      red: {
        root: { bg: "etc.error.10" },
        text: { color: "etc.error.30" }
      }
    },
    dotted: {
      true: {
        root: {
          _before: {
            content: '""',
            width: "6px",
            height: "6px",
            borderRadius: "50%"
          }
        }
      }
    }
  },
  defaultVariants: {
    variant: "grey"
  },
  compoundVariants: [
    {
      variant: "green",
      dotted: !0,
      css: {
        root: {
          _before: {
            bg: "etc.active.20"
          }
        }
      }
    },
    {
      variant: "grey",
      dotted: !0,
      css: {
        root: {
          _before: {
            bg: "#6C778B"
          }
        }
      }
    },
    {
      variant: "yellow",
      dotted: !0,
      css: {
        root: {
          _before: {
            bg: "#E87E00"
          }
        }
      }
    },
    {
      variant: "red",
      dotted: !0,
      css: {
        root: {
          _before: {
            bg: "etc.error.30"
          }
        }
      }
    }
  ]
});
export {
  p as Badge
};
//# sourceMappingURL=Badge.mjs.map
