import { TableContainer } from './TableContainer';
import { Tbody } from './Tbody';
import Td, { FixedCellType, TdSizeType } from './Td';
import Th, {
  FIXED_TH_WIDTH,
  TABLE_TH_STYLE,
  ThSizeType,
  TableThStyleType,
  DefaultThProps,
  CheckboxThProps,
} from './Th';
import { Thead, TheadProps } from './Thead';
import { Tr, TrProps } from './Tr';

const Table = { Container: TableContainer, Thead, Th, Tbody, Tr, Td } as const;

export default Table;

export { FIXED_TH_WIDTH, TABLE_TH_STYLE };
export type {
  FixedCellType,
  TdSizeType,
  TheadProps,
  TrProps,
  ThSizeType,
  TableThStyleType,
  DefaultThProps,
  CheckboxThProps,
};
