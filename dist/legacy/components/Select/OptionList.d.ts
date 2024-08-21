import { type ReactElement, type ReactNode } from 'react';
import { type IconProps } from '../Icon/type';
export interface BasicOptionItem<T = string | number> {
    label: string;
    value: T;
    icon?: (props: IconProps) => ReactElement;
    disabled?: boolean;
}
export interface SectionOptionItem<T = string | number> {
    sectionTitle: ReactNode;
    sectionItems: Array<BasicOptionItem<T>>;
}
interface BasicOptionList<T> {
    type: 'basic';
    items: Array<BasicOptionItem<T>>;
}
interface SectionOptionList<T> {
    type: 'section';
    items: Array<SectionOptionItem<T>>;
}
interface OptionListProps<T = string | number> {
    width?: number;
    onChange: (value: T) => void;
    option: BasicOptionList<T> | SectionOptionList<T>;
    value: T;
    maxDropdownItemsToShow?: number;
    focusedItemIdx?: number;
}
export declare function OptionList<T = string | number>({ onChange, option, value, width, maxDropdownItemsToShow, focusedItemIdx, }: OptionListProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
interface MultipleOptionListProps<T = string | number> extends Omit<OptionListProps<T>, 'value' | 'onChange'> {
    values: T[];
    searchInput?: ReactNode;
    onChange: (value: BasicOptionItem<T>) => void;
}
export declare function MultipleOptionList<T = string | number>({ searchInput, onChange, option, values, width, maxDropdownItemsToShow, focusedItemIdx, }: MultipleOptionListProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
