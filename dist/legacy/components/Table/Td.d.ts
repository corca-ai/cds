import { CSSProperties, ReactNode, type PropsWithChildren } from 'react';
export declare enum FixedCellType {
    KEBAB = "KEBAB_MENU",
    RADIO = "RADIO_ITEM",
    CHECKBOX = "CHECKBOX",
    IMAGE = "IMAGE"
}
export type TdSizeType = 'l' | 'm' | 's' | 'xs';
export interface CommonTdProps {
    size: TdSizeType;
    borderLeft?: CSSProperties['borderLeft'];
    borderRight?: CSSProperties['borderRight'];
    background?: CSSProperties['background'];
}
/**
 * @description when using ellipsis width is must given
 */
export declare const TextTd: ({ width, size, children, ellipsis, ...props }: PropsWithChildren<{
    width?: number;
    ellipsis?: boolean;
} & CommonTdProps>) => import("@emotion/react/jsx-runtime").JSX.Element;
export declare const ImgTd: ({ size, src, ...props }: {
    src: string;
} & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
/**
 * @description
 * @property {ReactNode} children - use CDS Badge component as children
 */
export declare const BadgeTd: ({ size, children, ...props }: {
    children: ReactNode;
} & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
type SwitchTdDirection = 'left' | 'center';
/**
 * @description
 * @property {ReactNode} children - use CDS Switch component as children
 */
export declare const SwitchTd: ({ size, children, direction, ...props }: {
    children: ReactNode;
    direction?: SwitchTdDirection;
} & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
/**
 * @description
 * @property {ReactNode} children - use CDS Select component as children
 */
export declare const SelectTd: ({ size, children, ...props }: {
    children: ReactNode;
} & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
/**
 * @description
 * @property {ReactNode} children - use CDS Checkbox component as children
 */
export declare const CheckboxTd: ({ size, children, ...props }: {
    children: ReactNode;
} & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
/**
 * @description
 * @property {ReactNode} children - use CDS Radio component as children
 */
export declare const RadioTd: ({ size, children, ...props }: {
    children: ReactNode;
} & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
/**
 * @description
 * @property {ReactNode} children - use CDS Kebab component as children
 */
export declare const IconTd: ({ size, children, ...props }: {
    children: ReactNode;
} & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
declare const Td: {
    Text: ({ width, size, children, ellipsis, ...props }: PropsWithChildren<{
        width?: number;
        ellipsis?: boolean;
    } & CommonTdProps>) => import("@emotion/react/jsx-runtime").JSX.Element;
    Img: ({ size, src, ...props }: {
        src: string;
    } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    Badge: ({ size, children, ...props }: {
        children: ReactNode;
    } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    Switch: ({ size, children, direction, ...props }: {
        children: ReactNode;
        direction?: SwitchTdDirection;
    } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    Select: ({ size, children, ...props }: {
        children: ReactNode;
    } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    Checkbox: ({ size, children, ...props }: {
        children: ReactNode;
    } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    Radio: ({ size, children, ...props }: {
        children: ReactNode;
    } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    Icon: ({ size, children, ...props }: {
        children: ReactNode;
    } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
};
export default Td;
