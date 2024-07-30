import { type RadioItemProps } from './RadioItem';
export type RadioGroupOption<T> = Omit<RadioItemProps<T>, 'onSelect' | 'selected'>;
export type RadioDirection = 'row' | 'column';
export interface RadioGroupProps<T> extends Omit<RadioItemProps<T>, 'value' | 'disabled' | 'selected'> {
    selectedValue?: T;
    options: Array<RadioGroupOption<T>>;
    direction?: RadioDirection;
    gap?: number;
}
export declare function RadioGroup<T extends string | number>({ options, selectedValue, onSelect, direction, gap, }: RadioGroupProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
