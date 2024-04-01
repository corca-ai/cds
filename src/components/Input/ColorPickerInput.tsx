import { InputContainer } from '../Input';
import { BaseInput, InputBaseProps } from '../Input/InputContainer';
import { ColorPicker, ColorPickerProps } from '../ColorPicker';

export interface ColorPickerInputProps extends ColorPickerProps, Omit<InputBaseProps, 'children'> {
  color: string;
  onChangeColor: (color: string) => void;
}

export function ColorPickerInput({
  color,
  onChangeColor,
  value,
  onChange,
  label,
  description,
  required,
  width,
  name,
  error,
  placeholder,
  defaultValue,
  disabled,
  ...props
}: ColorPickerInputProps) {
  return (
    <InputContainer
      cursorPointer
      label={label}
      description={description}
      required={required}
      width={width}
      rightSection={<ColorPicker color={color} onChangeColor={onChangeColor} />}
      {...props}
    >
      <BaseInput
        cursorPointer
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
      />
    </InputContainer>
  );
}
