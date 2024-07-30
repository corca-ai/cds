export interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}
export declare function Switch({ checked, onChange, disabled }: SwitchProps): import("@emotion/react/jsx-runtime").JSX.Element;
