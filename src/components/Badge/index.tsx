import styled from '@emotion/styled';

import Icon from '../Icon';
import { Text } from '../Text';
import { color, fontStyle } from '../styles';

export const badgeVariants = ['green', 'grey', 'yellow', 'red'] as const;
export type BadgeVariant = (typeof badgeVariants)[number];

export const variantColors: {
  [v in BadgeVariant]: { bg: string; font: string; dot: string };
} = {
  green: {
    bg: color['active-10'],
    font: color['active-30'],
    dot: color['active-20'],
  },
  grey: {
    bg: '#E9EAED',
    font: '#343F51',
    dot: '#6C778B',
  },
  yellow: {
    bg: '#FFF7CC',
    font: '#E87E00',
    dot: '#E87E00',
  },
  red: {
    bg: color['error-10'],
    font: color['error-30'],
    dot: color['error-30'],
  },
};

const Container = styled.div<{ bg: string }>`
  display: inline-flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  height: 22px;
  padding: 2px 8px;
  border-radius: 10px;
  background-color: ${({ bg }) => bg};
`;

export interface BadgeProps {
  dotted?: boolean;
  label: string;
  variant: BadgeVariant;
}

export function Badge({ dotted, label, variant }: BadgeProps) {
  const { bg, font, dot } = variantColors[variant];
  return (
    <Container bg={bg}>
      {dotted && <Icon.Dot color={dot} />}
      <Text style={{ ...fontStyle.b6, color: font }}>{label}</Text>
    </Container>
  );
}
