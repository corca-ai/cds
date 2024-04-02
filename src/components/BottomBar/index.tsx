import { type ButtonHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { Button } from '../Button';
import { color } from '../styles';

const Base = styled.div`
  width: 100%;
  background-color: ${color.white};
  display: flex;
  padding: 10px 20px;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${color['grey-30']};
`;

const ButtonContainer = styled.div`
  width: 100px;
`;

export interface ButtonAction extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export interface BottomBarProps {
  dismiss: ButtonAction;
  destroy?: ButtonAction;
  confirm: ButtonAction;
}

export function BottomBar({ dismiss, destroy, confirm }: BottomBarProps) {
  return (
    <Base>
      <ButtonContainer>
        <Button {...dismiss} variant="text" size="large">
          {dismiss.label}
        </Button>
      </ButtonContainer>
      {destroy != null && (
        <ButtonContainer>
          <Button {...destroy} variant="outline" size="large">
            {destroy.label}
          </Button>
        </ButtonContainer>
      )}
      <ButtonContainer>
        <Button {...confirm} variant="filled" size="large">
          {confirm.label}
        </Button>
      </ButtonContainer>
    </Base>
  );
}
