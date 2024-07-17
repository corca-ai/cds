import { forwardRef } from 'react';

import { BaseInput, InputBaseProps, InputContainer } from './InputContainer';

export type TextInputProps = Omit<InputBaseProps, 'children'>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
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
      leftSection,
      rightSection,
      ...props
    },
    ref,
  ) => {
    return (
      <InputContainer
        label={label}
        description={description}
        required={required}
        error={error}
        width={width}
        leftSection={leftSection}
        rightSection={rightSection}
        {...props}
      >
        <BaseInput
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          disabled={disabled}
          error={error}
          ref={ref}
          {...props}
        />
      </InputContainer>
    );
  },
);
