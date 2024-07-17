import { useMemo } from 'react';

import { BaseInput, type InputBaseProps, InputContainer } from './InputContainer';
import Icon from '../Icon';
import { color } from '../styles';

export type DateInputProps = Omit<InputBaseProps, 'children'>;

export function DateInput({
  label,
  placeholder,
  description,
  name,
  value,
  error,
  disabled,
  onChange,
  defaultValue,
  required = false,
  width,
  tooltip,
  onClick,
  ...props
}: DateInputProps) {
  const inputStyle = useMemo(() => {
    return {
      color: disabled ? color['grey-50'] : color['grey-60'],
      size: 20,
    };
  }, [disabled]);

  return (
    <InputContainer
      cursorPointer
      onClick={onClick}
      label={label}
      description={description}
      required={required}
      error={error}
      width={width}
      tooltip={tooltip}
      leftSection={<Icon.Calendar {...inputStyle} />}
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
        readOnly
      />
    </InputContainer>
  );
}
