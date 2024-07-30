import { ReactNode } from 'react';
import { RecipeVariantProps } from '../../styled-system/css';
type BadgeVaraint = NonNullable<RecipeVariantProps<typeof badgeSlot>>['variant'];
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    label?: ReactNode;
    dotted?: boolean;
    /**
     * @default 'grey'
     */
    variant?: BadgeVaraint;
}
export declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
declare const badgeSlot: import("../..").SlotRecipeRuntimeFn<"text" | "root", {
    variant: {
        green: {
            root: {
                bg: "etc.active.10";
            };
            text: {
                color: "etc.active.30";
            };
        };
        grey: {
            root: {
                bg: "#E9EAED";
            };
            text: {
                color: "#343F51";
            };
        };
        yellow: {
            root: {
                bg: "#FFF7CC";
            };
            text: {
                color: "#E87E00";
            };
        };
        red: {
            root: {
                bg: "etc.error.10";
            };
            text: {
                color: "etc.error.30";
            };
        };
    };
    dotted: {
        true: {
            root: {
                _before: {
                    content: "\"\"";
                    width: "6px";
                    height: "6px";
                    borderRadius: "50%";
                };
            };
        };
    };
}>;
export {};
