import { InputBaseProps } from '../Input/InputContainer';
import { ColorPickerProps } from '../ColorPicker';
export interface ColorPickerInputProps extends ColorPickerProps, Omit<InputBaseProps, 'children'> {
    color: string;
    onChangeColor: (color: string) => void;
}
export declare function ColorPickerInput({ color, onChangeColor, value, onChange, label, description, required, width, name, error, placeholder, defaultValue, disabled, ...props }: ColorPickerInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
