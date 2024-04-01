import { ElementType, ReactNode, type PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import { B2, B5 } from '../Text';
import { color } from '../styles';

export enum FixedCellType {
  KEBAB = 'KEBAB_MENU',
  RADIO = 'RADIO_ITEM',
  CHECKBOX = 'CHECKBOX',
  IMAGE = 'IMAGE',
}

export type TdSizeType = 'l' | 'm' | 's' | 'xs';

const TABLE_TD_HEIGHT: Record<TdSizeType, number> = {
  l: 66,
  m: 56,
  s: 50,
  xs: 40,
};

const TABLE_TEXT_TD_STYLE: Record<TdSizeType, { textComponent: ElementType }> = {
  l: {
    textComponent: B2,
  },
  m: {
    textComponent: B2,
  },
  s: {
    textComponent: B2,
  },
  xs: {
    textComponent: B5,
  },
};

const TableDefaultTd = styled.td<{ width?: number; height: number }>`
  display: table-cell;
  align-items: center;
  flex-shrink: 0;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => height}px;
  & > * {
    vertical-align: bottom;
  }
`;

export const TextTd = ({
  width,
  size,
  children,
  ellipsis,
}: PropsWithChildren<{
  width?: number;
  size: TdSizeType;
  ellipsis?: boolean;
}>) => {
  const tdStyle = TABLE_TEXT_TD_STYLE[size];
  return (
    <TableText ellipsis={ellipsis} width={width} height={TABLE_TD_HEIGHT[size]}>
      <tdStyle.textComponent>{children}</tdStyle.textComponent>
    </TableText>
  );
};

const TableText = styled(TableDefaultTd)<{
  ellipsis?: boolean;
}>`
  padding: 5px 7px 5px 14px;
  max-height: 66px;
  vertical-align: middle;
  border-spacing: 0;
  ${props =>
    props.ellipsis &&
    `max-width: ${props.width ? `${props.width}px` : 'fit-content'};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;`}
  line-height:normal;
`;

const TABLE_IMG_TD_SIZE: Record<TdSizeType, number> = {
  l: 8,
  m: 7,
  s: 6,
  xs: 5,
};

export const ImgTd = ({ size, src }: { size: TdSizeType; src: string }) => {
  const imgTdSize = TABLE_TD_HEIGHT[size];
  const imgTdPadding = TABLE_IMG_TD_SIZE[size];
  return (
    <TableDataImage size={imgTdSize} padding={imgTdPadding}>
      <TableImg src={src} />
    </TableDataImage>
  );
};

const TableDataImage = styled.td<{ size: number; padding: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  max-width: ${({ size }) => size}px;
  max-height: ${({ size }) => size}px;
  padding: ${({ padding }) => padding}px;
  vertical-align: middle;
  display: flex;
`;

const TableImg = styled.img`
  display: block;
  box-sizing: border-box;
  border: none;
  object-fit: cover;
  width: 100%;
  background-size: cover;
  background-color: ${color['grey-30']};
  border-radius: 4px;
`;

/**
 * @description
 * @property {ReactNode} children - use CDS Badge component as children
 */
export const BadgeTd = ({ size, children }: { size: TdSizeType; children: ReactNode }) => {
  return <TableBadge height={TABLE_TD_HEIGHT[size]}>{children}</TableBadge>;
};

const TableBadge = styled(TableDefaultTd)`
  padding: 5px 10px;
`;

type SwitchTdDirection = 'left' | 'center';

/**
 * @description
 * @property {ReactNode} children - use CDS Switch component as children
 */
export const SwitchTd = ({
  size,
  children,
  direction = 'left',
}: {
  size: TdSizeType;
  children: ReactNode;
  direction?: SwitchTdDirection;
}) => {
  return (
    <TableSwitch height={TABLE_TD_HEIGHT[size]} direction={direction}>
      {children}
    </TableSwitch>
  );
};

const TableSwitch = styled(TableDefaultTd)<{ direction: SwitchTdDirection }>`
  padding: 5px 14px;
  text-align: ${({ direction }) => direction};
`;

/**
 * @description
 * @property {ReactNode} children - use CDS Select component as children
 */
export const SelectTd = ({ size, children }: { size: TdSizeType; children: ReactNode }) => {
  return <TableSelect height={TABLE_TD_HEIGHT[size]}>{children}</TableSelect>;
};

const TableSelect = styled(TableDefaultTd)`
  padding: 5px 10px;
`;

/**
 * @description
 * @property {ReactNode} children - use CDS Checkbox component as children
 */
export const CheckboxTd = ({ size, children }: { size: TdSizeType; children: ReactNode }) => {
  return <TableCheckbox height={TABLE_TD_HEIGHT[size]}>{children}</TableCheckbox>;
};

const TableCheckbox = styled(TableDefaultTd)`
  padding: 5px 12px 5px 18px;
  width: 46px;
`;

/**
 * @description
 * @property {ReactNode} children - use CDS Radio component as children
 */
export const RadioTd = ({ size, children }: { size: TdSizeType; children: ReactNode }) => {
  return <TableRadio height={TABLE_TD_HEIGHT[size]}>{children}</TableRadio>;
};

const TableRadio = styled(TableDefaultTd)`
  padding: 5px 14px 5px 16px;
  width: 46px;
`;

const TABLE_KEBAB_TD_WIDTH: Record<TdSizeType, number> = {
  l: 48,
  m: 46,
  s: 44,
  xs: 44,
};

/**
 * @description
 * @property {ReactNode} children - use CDS Kebab component as children
 */
export const KebabTd = ({ size, children }: { size: TdSizeType; children: ReactNode }) => {
  return (
    <TableKebob valign="middle" height={TABLE_TD_HEIGHT[size]} width={TABLE_KEBAB_TD_WIDTH[size]}>
      {children}
    </TableKebob>
  );
};

const TableKebob = styled(TableDefaultTd)`
  text-align: center;
`;

const Td = {
  Text: TextTd,
  Img: ImgTd,
  Badge: BadgeTd,
  Switch: SwitchTd,
  Select: SelectTd,
  Checkbox: CheckboxTd,
  Radio: RadioTd,
  Kebob: KebabTd,
};

export default Td;
