import { CSSProperties, ReactElement, ReactNode, cloneElement } from 'react';

import styled from '@emotion/styled';

import { FixedCellType, type TdSizeType } from './Td';
import { Checkbox, type CheckboxProps } from '../Checkbox';
import { B4, B6, type Text } from '../Text';

type WidthRecord = Record<TdSizeType, string>;
export const FIXED_TH_WIDTH: Record<FixedCellType, WidthRecord> = {
  [FixedCellType.KEBAB]: {
    l: '48px',
    m: '46px',
    s: '44px',
    xs: '44px',
  },
  [FixedCellType.RADIO]: {
    l: '46px',
    m: '46px',
    s: '46px',
    xs: '46px',
  },
  [FixedCellType.CHECKBOX]: {
    l: '46px',
    m: '46px',
    s: '46px',
    xs: '46px',
  },
  [FixedCellType.IMAGE]: {
    l: '66px',
    m: '56px',
    s: '50px',
    xs: '40px',
  },
};

export type ThSizeType = 'l' | 'm' | 's';
export type TableThStyleType = {
  [key in ThSizeType]: {
    height: number;
    iconSize: number;
    textComponent: typeof Text;
  };
};

export const TABLE_TH_STYLE: TableThStyleType = {
  l: {
    height: 46,
    iconSize: 20,
    textComponent: B4,
  },
  m: {
    height: 40,
    iconSize: 18,
    textComponent: B4,
  },
  s: {
    height: 32,
    iconSize: 16,
    textComponent: B6,
  },
};

export interface DefaultThProps {
  text: string;
  icon?: ReactNode;
  width?: string;
  size: ThSizeType;
  borderLeft?: CSSProperties['borderLeft'];
  borderRight?: CSSProperties['borderRight'];
  background?: CSSProperties['background'];
}

export const DefaultTh = ({ text, icon, size, width = 'auto', ...props }: DefaultThProps) => {
  const thStyle = TABLE_TH_STYLE[size];
  return (
    <TableDefaultHeader width={width} height={thStyle.height} {...props}>
      <ThContents>
        <thStyle.textComponent>{text}</thStyle.textComponent>
        {icon &&
          cloneElement(icon as ReactElement, {
            size: thStyle.iconSize,
          })}
      </ThContents>
    </TableDefaultHeader>
  );
};

export interface CheckboxThProps {
  size: ThSizeType;
  checkboxType: CheckboxProps;
  borderLeft?: CSSProperties['borderLeft'];
  borderRight?: CSSProperties['borderRight'];
  background?: CSSProperties['background'];
}

export const CheckboxTh = ({ size, checkboxType, ...props }: CheckboxThProps) => {
  const thStyle = TABLE_TH_STYLE[size];
  return (
    <CheckboxTableHeader
      {...props}
      width={FIXED_TH_WIDTH[FixedCellType.CHECKBOX][size]}
      height={thStyle.height}
    >
      <ThContents>
        <Checkbox {...checkboxType} />
      </ThContents>
    </CheckboxTableHeader>
  );
};

const Th = {
  Default: DefaultTh,
  Checkbox: CheckboxTh,
} as const;

export default Th;

const ThContents = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const TableHeader = styled.th<{
  width: string;
  height: number;
  borderLeft?: CSSProperties['borderLeft'];
  borderRight?: CSSProperties['borderRight'];
  background?: CSSProperties['background'];
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height}px;
  vertical-align: middle;
  text-wrap: nowrap;
  border-left: ${({ borderLeft }) => borderLeft ?? 'none'};
  border-right: ${({ borderRight }) => borderRight ?? 'none'};
  background: ${({ background }) => background ?? 'inherit'};
`;

const TableDefaultHeader = styled(TableHeader)`
  padding: 5px 14px;
`;

const CheckboxTableHeader = styled(TableHeader)`
  padding: 5px 12px 5px 18px;
`;
