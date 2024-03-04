import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { color } from '../styles';

interface TheadProps {
  children: ReactNode;
  height?: number;
}

export const Thead = ({ children }: TheadProps) => {
  return <TableHead>{children}</TableHead>;
};

const TableHead = styled.thead`
  border-top: 1px solid ${color['grey-50']};
  border-bottom: 1px solid ${color['grey-50']};
  word-break: keep-all;
`;
