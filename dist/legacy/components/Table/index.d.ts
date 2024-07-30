import { FixedCellType, TdSizeType, CommonTdProps } from './Td';
import { FIXED_TH_WIDTH, TABLE_TH_STYLE, ThSizeType, TableThStyleType, DefaultThProps, CheckboxThProps } from './Th';
import { TheadProps } from './Thead';
import { TrProps } from './Tr';
declare const Table: {
    readonly Container: ({ children }: {
        children: import("react").ReactNode;
    }) => import("@emotion/react/jsx-runtime").JSX.Element;
    readonly Thead: ({ children }: TheadProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    readonly Th: {
        readonly Default: ({ text, icon, size, width, ...props }: DefaultThProps) => import("@emotion/react/jsx-runtime").JSX.Element;
        readonly Checkbox: ({ size, checkboxType, ...props }: CheckboxThProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    };
    readonly Tbody: ({ children }: {
        children: import("react").ReactNode;
    }) => import("@emotion/react/jsx-runtime").JSX.Element;
    readonly Tr: ({ children, readOnly, onClick }: TrProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    readonly Td: {
        Text: ({ width, size, children, ellipsis, ...props }: import("react").PropsWithChildren<{
            width?: number;
            ellipsis?: boolean;
        } & CommonTdProps>) => import("@emotion/react/jsx-runtime").JSX.Element;
        Img: ({ size, src, ...props }: {
            src: string;
        } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
        Badge: ({ size, children, ...props }: {
            children: import("react").ReactNode;
        } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
        Switch: ({ size, children, direction, ...props }: {
            children: import("react").ReactNode;
            direction?: "center" | "left";
        } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
        Select: ({ size, children, ...props }: {
            children: import("react").ReactNode;
        } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
        Checkbox: ({ size, children, ...props }: {
            children: import("react").ReactNode;
        } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
        Radio: ({ size, children, ...props }: {
            children: import("react").ReactNode;
        } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
        Icon: ({ size, children, ...props }: {
            children: import("react").ReactNode;
        } & CommonTdProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    };
};
export { Table, FIXED_TH_WIDTH, TABLE_TH_STYLE };
export type { FixedCellType, TdSizeType, TheadProps, TrProps, ThSizeType, TableThStyleType, DefaultThProps, CheckboxThProps, CommonTdProps, };
