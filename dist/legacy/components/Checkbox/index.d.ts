import { ButtonHTMLAttributes } from 'react';
export interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    selected: boolean;
    onSelect: () => void;
    label?: string;
}
export declare function Checkbox({ selected, onSelect, disabled, label, type, ...props }: CheckboxProps): import("@emotion/react/jsx-runtime").JSX.Element;
