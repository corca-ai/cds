export interface RadioItemProps<T> {
    label?: string;
    id?: string;
    value: T;
    disabled?: boolean;
    selected: boolean;
    onSelect: (value: T) => void;
    tooltip?: string;
}
export declare function RadioItem<T extends string | number>({ label, id, value, disabled, selected, onSelect, tooltip, }: RadioItemProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
