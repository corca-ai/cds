import { type ButtonHTMLAttributes, cloneElement, ReactElement } from 'react';

import styled from '@emotion/styled';

import { B2 } from '../Text';
import { color } from '../styles';

type ButtonVariant = 'filled' | 'outline' | 'text';
type ButtonSize = 'small' | 'large';

type ColorKey = keyof typeof color | null;
interface ColorStylesheet {
  bg: ColorKey;
  border: ColorKey;
}

const defaultStylesheet = (variant: ButtonVariant, disabled: boolean) => {
  const styles = {
    filled: {
      disabled: { bg: 'grey-30', border: null },
      enabled: { bg: 'main-black', border: null },
    },
    outline: {
      disabled: { bg: 'grey-30', border: null },
      enabled: { bg: 'white', border: 'grey-40' },
    },
    text: {
      disabled: { bg: null, border: null },
      enabled: { bg: null, border: null },
    },
  }[variant][disabled ? 'disabled' : 'enabled'] as ColorStylesheet;

  return `
    background-color: ${styles.bg ? color[styles.bg] : 'transparent'};
    border: 1px solid ${styles.border ? color[styles.border] : 'transparent'};
  `;
};

const activeStylesheet = (variant: ButtonVariant) => {
  const onHover = {
    filled: { bg: 'grey-60', border: null },
    outline: { bg: 'white', border: 'grey-50' },
    text: { bg: null, border: null },
  }[variant] as ColorStylesheet;

  const onPressed = {
    filled: { bg: 'grey-50', border: null },
    outline: { bg: 'white', border: 'grey-60' },
    text: { bg: 'grey-20', border: null },
  }[variant] as ColorStylesheet;

  return `&:hover {
    background-color: ${onHover.bg ? color[onHover.bg] : 'transparent'};
    border: 1px solid ${onHover.border ? color[onHover.border] : 'transparent'};
  }
  &:active {
    background-color: ${onPressed.bg ? color[onPressed.bg] : 'transparent'};
    border: 1px solid ${onPressed.border ? color[onPressed.border] : 'transparent'};
  }`;
};

const determineFontColor = (variant: ButtonVariant, disabled: boolean): keyof typeof color => {
  if (disabled) {
    return 'grey-50';
  }
  switch (variant) {
    case 'filled':
      return 'white';
    case 'outline':
      return 'grey-80';
    case 'text':
      return 'grey-80';
  }
};

const Base = styled.button<{
  variant: ButtonVariant;

  disabled: boolean;
  size: ButtonSize;
}>`
  padding: 7px 16px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  ${({ size }) => {
    if (size == 'large') {
      return `
        min-width: 100px;
        width: 100%;
        height: 40px;
      `;
    }
    return `
      height: 34px;
    `;
  }}
  ${({ variant, disabled }) => {
    return defaultStylesheet(variant, disabled) + (disabled ? '' : activeStylesheet(variant));
  }}

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${({ variant }) =>
    variant === 'text' ? '' : 'box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);'}
`;

const IconContainer = styled.div<{ size: number }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelContainer = styled.div`
  line-height: 17px;
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  icon?: ReactElement;
}

export function Button({
  variant,
  size,
  children,
  disabled = false,
  onClick,
  icon,
  ...props
}: Props) {
  const c = determineFontColor(variant, disabled);
  return (
    <Base variant={variant} size={size} disabled={disabled} onClick={onClick} {...props}>
      {icon != null && (
        <IconContainer size={variant === 'text' ? 18 : 20}>
          {cloneElement(icon, { color: color[c] })}
        </IconContainer>
      )}

      <LabelContainer>
        <B2 c={c}>{children}</B2>
      </LabelContainer>
    </Base>
  );
}
