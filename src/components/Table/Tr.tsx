import styled from '@emotion/styled';

import { color } from '../styles';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  readOnly?: boolean;
  onClick?: () => void;
}

export const Tr = ({ children, readOnly = false, onClick }: Props) => {
  return (
    <TableRow onClick={onClick} readOnly={readOnly}>
      {children}
    </TableRow>
  );
};

const TableRow = styled.tr<Props>`
  display: table-row;
  cursor: ${props => (props.readOnly ? 'pointer' : 'default')};
  border-width: 1px 0 1px 0;
  border-style: inherit;
  border-color: inherit;
  max-height: 66px !important;
  padding: 0;
  border-top: 1px solid ${color['grey-30']};
  border-bottom: 1px solid ${color['grey-30']};
  border-color: inherit;

  ${props =>
    props.readOnly &&
    `
    &:hover {
      background-color: ${color['grey-20']};
    }

    &:active {
      background-color: ${color['grey-30']};
    }
  `}
`;
