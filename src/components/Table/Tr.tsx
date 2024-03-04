import styled from '@emotion/styled';

import { color } from '../styles';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  cursorPointer?: boolean;
  onClick?: () => void;
}

export const Tr = ({ children, cursorPointer = false, onClick }: Props) => {
  return (
    <TableRow onClick={onClick} cursorPointer={cursorPointer}>
      {children}
    </TableRow>
  );
};

const TableRow = styled.tr<Props>`
  display: table-row;
  cursor: ${props => (props.cursorPointer ? 'pointer' : 'default')};
  border-width: 1px 0 1px 0;
  border-style: inherit;
  border-color: inherit;
  max-height: 66px !important;
  padding: 0;
  border-top: 1px solid ${color['grey-50']};
  border-bottom: 1px solid ${color['grey-50']};
  border-color: inherit;
`;
