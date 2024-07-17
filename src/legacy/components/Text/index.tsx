import { ReactNode, CSSProperties } from 'react';
import { type HTMLAttributes } from 'react';

import { color, fontStyle, typography } from '../styles';

export interface TypographyProps {
  children: ReactNode;
  size?: keyof typeof typography.size;
  fw?: keyof typeof typography.weight;
  c?: keyof typeof color;
  style?: CSSProperties;
  ellipsis?: boolean;
}

export interface StyleProps extends HTMLAttributes<HTMLSpanElement> {
  c?: keyof typeof color;
  ellipsis?: boolean;
}

/** * fontStyle 없는 view를 위한 컴포넌트 */
export function Text(props: TypographyProps) {
  return (
    <span
      style={{
        ...fontStyle.b3, // default
        ...(props.fw && { fontWeight: typography.weight[props.fw] }),
        ...(props.size && { fontSize: typography.size[props.size] }),
        color: color[props.c ?? 'grey-80'],
        ...props.style,
        ...(props.ellipsis && {
          width: '100%',
          display: 'inline-block',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          wordBreak: 'break-all',
        }),
      }}
    >
      {props.children}
    </span>
  );
}

export function H1({ children, c = 'grey-80' }: StyleProps) {
  return (
    <h1
      style={{
        ...fontStyle.h1,
        color: color[c],
      }}
    >
      {children}
    </h1>
  );
}

export function H2({ children, c = 'grey-80' }: StyleProps) {
  return (
    <h2
      style={{
        ...fontStyle.h2,
        color: color[c],
      }}
    >
      {children}
    </h2>
  );
}

export function B1({ children, c = 'grey-80', ellipsis }: StyleProps) {
  return (
    <Text style={{ ...fontStyle.b1, color: color[c] }} ellipsis={ellipsis}>
      {children}
    </Text>
  );
}

export function B2({ children, c = 'grey-80', ellipsis }: StyleProps) {
  return (
    <Text style={{ ...fontStyle.b2, color: color[c] }} ellipsis={ellipsis}>
      {children}
    </Text>
  );
}

export function B3({ children, c = 'grey-80', ellipsis }: StyleProps) {
  return (
    <Text style={{ ...fontStyle.b3, color: color[c] }} ellipsis={ellipsis}>
      {children}
    </Text>
  );
}

export function B4({ children, c = 'grey-80', ellipsis }: StyleProps) {
  return (
    <Text style={{ ...fontStyle.b4, color: color[c] }} ellipsis={ellipsis}>
      {children}
    </Text>
  );
}

export function B5({ children, c = 'grey-80', ellipsis }: StyleProps) {
  return (
    <Text style={{ ...fontStyle.b5, color: color[c] }} ellipsis={ellipsis}>
      {children}
    </Text>
  );
}

export function B6({ children, c = 'grey-80', ellipsis }: StyleProps) {
  return (
    <Text style={{ ...fontStyle.b6, color: color[c] }} ellipsis={ellipsis}>
      {children}
    </Text>
  );
}

export function B7({ children, c = 'grey-80', ellipsis }: StyleProps) {
  return (
    <Text style={{ ...fontStyle.b7, color: color[c] }} ellipsis={ellipsis}>
      {children}
    </Text>
  );
}
