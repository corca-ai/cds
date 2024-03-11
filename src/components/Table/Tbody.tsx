import styled from '@emotion/styled';

import { color } from '../styles';
import { ReactNode } from 'react';

export const Tbody = ({ children }: { children: ReactNode }) => {
  return <TableBody>{children}</TableBody>;
};

const TableBody = styled.tbody`
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: ${color['grey-30']};
`;
