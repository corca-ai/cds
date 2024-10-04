import { type BasicOptionItem } from './OptionList';
import { type SelectInputBaseProps } from './SelectInput';
export interface SelectProps<T extends string | number> extends Omit<SelectInputBaseProps, 'value' | 'onSelect' | 'width'> {
    searchable?: boolean;
    onCreate?: (value: string | null) => void;
    selectedValue: T | null;
    onSelect: (value: T) => void;
    options: Array<BasicOptionItem<T>>;
    width?: number;
    inputWidth?: number;
}
export declare const CREATE_VALUE = "CREATE_NEW_VALUE";
export declare function Select<T extends string | number>({ searchable, onCreate, options, selectedValue, onSelect, width, inputWidth, ...input }: SelectProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
