import { CSSProperties, ReactNode } from 'react';
import { FixedCellType, type TdSizeType } from './Td';
import { type CheckboxProps } from '../Checkbox';
import { type Text } from '../Text';
type WidthRecord = Record<TdSizeType, string>;
export declare const FIXED_TH_WIDTH: Record<FixedCellType, WidthRecord>;
export type ThSizeType = 'l' | 'm' | 's';
export type TableThStyleType = {
    [key in ThSizeType]: {
        height: number;
        iconSize: number;
        textComponent: typeof Text;
    };
};
export declare const TABLE_TH_STYLE: TableThStyleType;
export interface DefaultThProps {
    text: string;
    icon?: ReactNode;
    width?: string;
    size: ThSizeType;
    borderLeft?: CSSProperties['borderLeft'];
    borderRight?: CSSProperties['borderRight'];
    background?: CSSProperties['background'];
}
export declare const DefaultTh: ({ text, icon, size, width, ...props }: DefaultThProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export interface CheckboxThProps {
    size: ThSizeType;
    checkboxType: CheckboxProps;
    borderLeft?: CSSProperties['borderLeft'];
    borderRight?: CSSProperties['borderRight'];
    background?: CSSProperties['background'];
}
export declare const CheckboxTh: ({ size, checkboxType, ...props }: CheckboxThProps) => import("@emotion/react/jsx-runtime").JSX.Element;
declare const Th: {
    readonly Default: ({ text, icon, size, width, ...props }: DefaultThProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    readonly Checkbox: ({ size, checkboxType, ...props }: CheckboxThProps) => import("@emotion/react/jsx-runtime").JSX.Element;
};
export default Th;
