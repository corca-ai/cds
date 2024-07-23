import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

export interface IButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: IButtonProps) => {
  return (
    <button
      className={css({
        color: 'grey.20',
        textStyle: 'b1',
      })}
    >
      {children}
    </button>
  );
};
