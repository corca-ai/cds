import { InputHTMLAttributes } from 'react';
import { TooltipProps } from '../Tooltip';
import { BasicOptionItem } from './OptionList';
type SelectInputTooltipProps = Omit<TooltipProps, 'children'>;
export interface SelectInputBaseProps<T extends string | number> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'value'> {
    optionItems: BasicOptionItem<T>[];
    onDeleteSingle: (value: T) => void;
    onDeleteAll: () => void;
    label?: string;
    description?: string;
    error?: string;
    width?: number;
    tooltip?: SelectInputTooltipProps;
    dropdownOpened?: boolean;
    showIcon?: boolean;
}
export declare function MultiSelectInput<T extends string | number>({ optionItems, label, description, required, error, width, tooltip, dropdownOpened, onDeleteSingle, onDeleteAll, onClick, showIcon, ...props }: SelectInputBaseProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
    showIcon?: boolean;
}
export declare function SearchInput({ showIcon, ...props }: SearchInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
export interface SelectedItemButtonProps {
    onDelete: () => void;
    children: React.ReactNode;
    maxWidth: number;
}
export interface PluralItemInfoSectionProps {
    itemsCount: number;
    onDeleteAll: () => void;
}
export interface MultiSelectInputChildContentsProps<T extends string | number> extends Pick<SelectInputBaseProps<T>, 'width' | 'onDeleteSingle' | 'optionItems' | 'onDeleteAll'> {
    itemMaxWidth: number;
}
export {};
