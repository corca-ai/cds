import { type ButtonHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { color } from '../styles';

const IconButtonWrapper = styled.button`
  background: inherit;
  border: none;
  border-radius: 8px;
  overflow: visible;
  width: 34px;
  height: 34px;
  padding: 8px;
  cursor: pointer;
  &:enabled:active {
    background-color: ${color['grey-20']};
  }
  &:disabled {
    cursor: not-allowed;
    * {
      cursor: not-allowed;
      fill: ${color['grey-50']};
    }
  }
`;

export function IconButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <IconButtonWrapper {...props}>{children}</IconButtonWrapper>;
}
