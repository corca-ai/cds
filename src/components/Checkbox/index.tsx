import { ButtonHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B3 } from '../Text';
import { color } from '../styles';

export interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  onSelect: () => void;
  label?: string;
}

const CHECKBOX_SIZE = 16;

export function Checkbox({ selected, onSelect, disabled, label, ...props }: CheckboxProps) {
  return (
    <Container onClick={onSelect} aria-selected={selected} disabled={disabled} {...props}>
      <IconContainer
        tabIndex={!label && !disabled ? 0 : -1}
        disabled={disabled}
        selected={selected}
      >
        <Icon.CheckSmall size={CHECKBOX_SIZE} color={selected ? color.white : 'transparent'} />
      </IconContainer>
      {label && (
        <TextContainer>
          <B3 c={disabled ? 'grey-50' : 'grey-80'}>{label}</B3>
        </TextContainer>
      )}
    </Container>
  );
}

const IconContainer = styled.div<{ disabled?: boolean; selected: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${({ disabled, selected }) =>
    disabled ? color['grey-40'] : selected ? color['main-black'] : color.white};
  box-shadow: ${({ disabled, selected }) =>
    disabled || selected ? 'none' : `0 0 0 1px inset ${color['grey-50']}`};
  border-radius: 4px;
  width: ${CHECKBOX_SIZE}px;
  height: ${CHECKBOX_SIZE}px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
