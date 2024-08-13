import { type BasicOptionItem } from './OptionList';
import { type SelectInputBaseProps } from './SelectInput';
import { SearchInputProps } from './MultiSelectInput';
interface MultiSelectSearchType extends SearchInputProps {
    searchable?: boolean;
}
export interface MultiSelectProps<T extends string | number> extends Omit<SelectInputBaseProps, 'value' | 'onSelect' | 'width' | 'searchable'> {
    search?: MultiSelectSearchType;
    selectedValues: T[];
    onCreate?: (value: string | null) => void;
    onSelect: (value: T) => void;
    onDeleteSingle: (value: T) => void;
    onDeleteAll: () => void;
    options: Array<BasicOptionItem<T>>;
    width?: number;
}
/** min-width is 310px */
export declare function MultiSelect<T extends string | number>({ search, options, selectedValues, onCreate, onSelect, onDeleteSingle, onDeleteAll, width, ...input }: MultiSelectProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
