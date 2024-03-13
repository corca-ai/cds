import { forwardRef, useMemo, useState } from 'react';

import styled from '@emotion/styled';

import { BaseInput, type InputBaseProps, InputContainer } from './InputContainer';
import Icon from '../Icon';
import { color } from '../styles';

export type PasswordInputProps = Omit<InputBaseProps, 'children'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
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
      tooltip,
      ...props
    },
    ref,
  ) => {
    const inputStyle = useMemo(() => {
      return {
        color: disabled ? color['grey-50'] : color['grey-60'],
        size: 18,
      };
    }, [disabled]);

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <InputContainer
        label={label}
        description={description}
        required={required}
        error={error}
        width={width}
        tooltip={tooltip}
        rightSection={
          <PasswordInputIcon aria-hidden="true" onMouseDown={toggleShowPassword}>
            {showPassword ? <Icon.Eye {...inputStyle} /> : <Icon.EyeClosed {...inputStyle} />}
          </PasswordInputIcon>
        }
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
          type={showPassword ? 'text' : 'password'}
          {...props}
          ref={ref}
        />
      </InputContainer>
    );
  },
);

const PasswordInputIcon = styled.button`
  margin: auto;
  background: inherit;
  border: none;
  overflow: visible;
  height: 100%;
  cursor: pointer;
  display: flex;
`;
