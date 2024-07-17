import { CSSProperties, ElementType, ReactNode, type PropsWithChildren } from 'react';

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

const TableDefaultTd = styled.td<{
  width?: number;
  height: number;
  borderLeft?: CSSProperties['borderLeft'];
  borderRight?: CSSProperties['borderRight'];
  background?: CSSProperties['background'];
}>`
  display: table-cell;
  align-items: center;
  flex-shrink: 0;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => height}px;
  border-left: ${({ borderLeft }) => borderLeft ?? 'none'};
  border-right: ${({ borderRight }) => borderRight ?? 'none'};
  background: ${({ background }) => background ?? 'inherit'};
`;

export interface CommonTdProps {
  size: TdSizeType;
  borderLeft?: CSSProperties['borderLeft'];
  borderRight?: CSSProperties['borderRight'];
  background?: CSSProperties['background'];
}

/**
 * @description when using ellipsis width is must given
 */
export const TextTd = ({
  width,
  size,
  children,
  ellipsis,
  ...props
}: PropsWithChildren<
  {
    width?: number;
    ellipsis?: boolean;
  } & CommonTdProps
>) => {
  const tdStyle = TABLE_TEXT_TD_STYLE[size];
  return (
    <TableText ellipsis={ellipsis} width={width} height={TABLE_TD_HEIGHT[size]} {...props}>
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
    white-space: nowrap;
  `}
  line-height:normal;
`;

const TABLE_IMG_TD_SIZE: Record<TdSizeType, number> = {
  l: 8,
  m: 7,
  s: 6,
  xs: 5,
};

export const ImgTd = ({
  size,
  src,
  ...props
}: {
  src: string;
} & CommonTdProps) => {
  const imgTdSize = TABLE_TD_HEIGHT[size];
  const imgTdPadding = TABLE_IMG_TD_SIZE[size];
  return (
    <TableDataImage size={imgTdSize} padding={imgTdPadding} {...props}>
      <TableImg src={src} />
    </TableDataImage>
  );
};

const TableDataImage = styled.td<{
  size: number;
  padding: number;
  borderLeft?: CSSProperties['borderLeft'];
  borderRight?: CSSProperties['borderRight'];
  background?: CSSProperties['background'];
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  max-width: ${({ size }) => size}px;
  max-height: ${({ size }) => size}px;
  padding: ${({ padding }) => padding}px;
  vertical-align: middle;
  display: flex;
  border-left: ${({ borderLeft }) => borderLeft ?? 'none'};
  border-right: ${({ borderRight }) => borderRight ?? 'none'};
  background: ${({ background }) => background ?? 'inherit'};
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
export const BadgeTd = ({
  size,
  children,
  ...props
}: {
  children: ReactNode;
} & CommonTdProps) => {
  return (
    <TableBadge height={TABLE_TD_HEIGHT[size]} {...props}>
      {children}
    </TableBadge>
  );
};

const TableBadge = styled(TableDefaultTd)`
  padding: 5px 10px;
  vertical-align: middle;
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
  ...props
}: {
  children: ReactNode;
  direction?: SwitchTdDirection;
} & CommonTdProps) => {
  return (
    <TableSwitch height={TABLE_TD_HEIGHT[size]} direction={direction} {...props}>
      {children}
    </TableSwitch>
  );
};

const TableSwitch = styled(TableDefaultTd)<{ direction: SwitchTdDirection }>`
  padding: 5px 14px;
  text-align: ${({ direction }) => direction};
  vertical-align: middle;
`;

/**
 * @description
 * @property {ReactNode} children - use CDS Select component as children
 */
export const SelectTd = ({
  size,
  children,
  ...props
}: {
  children: ReactNode;
} & CommonTdProps) => {
  return (
    <TableSelect height={TABLE_TD_HEIGHT[size]} {...props}>
      {children}
    </TableSelect>
  );
};

const TableSelect = styled(TableDefaultTd)`
  padding: 5px 10px;
  vertical-align: middle;
`;

/**
 * @description
 * @property {ReactNode} children - use CDS Checkbox component as children
 */
export const CheckboxTd = ({
  size,
  children,
  ...props
}: {
  children: ReactNode;
} & CommonTdProps) => {
  return (
    <TableCheckbox height={TABLE_TD_HEIGHT[size]} {...props}>
      {children}
    </TableCheckbox>
  );
};

const TableCheckbox = styled(TableDefaultTd)`
  padding: 5px 12px 5px 18px;
  width: 46px;
  vertical-align: middle;
`;

/**
 * @description
 * @property {ReactNode} children - use CDS Radio component as children
 */
export const RadioTd = ({
  size,
  children,
  ...props
}: {
  children: ReactNode;
} & CommonTdProps) => {
  return (
    <TableRadio height={TABLE_TD_HEIGHT[size]} {...props}>
      {children}
    </TableRadio>
  );
};

const TableRadio = styled(TableDefaultTd)`
  padding: 5px 14px 5px 16px;
  width: 46px;
  vertical-align: middle;
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
export const IconTd = ({
  size,
  children,
  ...props
}: {
  children: ReactNode;
} & CommonTdProps) => {
  return (
    <TableIcon
      valign="middle"
      height={TABLE_TD_HEIGHT[size]}
      width={TABLE_KEBAB_TD_WIDTH[size]}
      {...props}
    >
      {children}
    </TableIcon>
  );
};

const TableIcon = styled(TableDefaultTd)`
  text-align: center;
  vertical-align: middle;
`;

const Td = {
  Text: TextTd,
  Img: ImgTd,
  Badge: BadgeTd,
  Switch: SwitchTd,
  Select: SelectTd,
  Checkbox: CheckboxTd,
  Radio: RadioTd,
  Icon: IconTd,
};

export default Td;
