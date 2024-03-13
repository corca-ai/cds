import { TableContainer } from './TableContainer';
import { Tbody } from './Tbody';
import Td from './Td';
import Th from './Th';
import { Thead } from './Thead';
import { Tr } from './Tr';

const Table = { Container: TableContainer, Thead, Th, Tbody, Tr, Td } as const;

export default Table;
