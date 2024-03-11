import styled from '@emotion/styled';

import { color } from '../styles';
import { ReactNode } from 'react';

export const TableContainer = ({ children }: { children: ReactNode }) => {
  return <Table>{children}</Table>;
};

const Table = styled.table`
  display: table;
  width: 100%;
  text-align: left;
  vertical-align: middle;
  border-collapse: collapse;
  box-sizing: border-box;
  border-spacing: 0;
  background-color: ${color.white};
`;
