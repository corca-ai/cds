import { type ReactNode } from 'react';
export interface FilterOptionType<T> {
    label: string;
    value: T;
    disabled?: boolean;
}
export interface FilterCategoryType<T> {
    label: string;
    options: Array<FilterOptionType<T>>;
}
export interface FilterCategoryProps<T> extends FilterCategoryType<T> {
    selected: T | T[];
    changeValue: (value: T) => void;
}
export interface FilterFrameProps {
    closeFilter: () => void;
    reset: () => void;
    resetLabel: string;
    children: ReactNode;
    width?: number;
}
export declare function FilterFrame({ closeFilter, reset, resetLabel, children, width, }: {
    closeFilter: () => void;
    reset: () => void;
    resetLabel: string;
    children: ReactNode;
    width?: number;
}): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function FilterCategory<T>({ label, selected, options, changeValue, }: FilterCategoryProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const CategoryLabel: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const CategoryItemWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & {
    wrap?: "wrap" | "no-wrap";
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
