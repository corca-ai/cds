import { keyframes } from '@emotion/react';
import { useId } from 'react';

import styled from '@emotion/styled';

import { color } from '../styles';

export type SpinnerSize = 's' | 'm' | 'l';

interface SpinnerProps {
  color?: string;
  size?: SpinnerSize;
  speed?: number;
}

const SpinnerSizeMap = { s: 20, m: 25, l: 30 };

export function Spinner({ color: c = color['main-black'], size = 'm', speed = 1 }: SpinnerProps) {
  const spinnerSize = SpinnerSizeMap[size];
  const gradientId = useId();

  return (
    <SpinnerSvg
      speed={speed}
      xmlns="http://www.w3.org/2000/svg"
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 20 20"
      fill="none"
    >
      <ellipse
        cx="9.99946"
        cy="10.0004"
        rx="7.31001"
        ry="7.31001"
        stroke={c}
        strokeOpacity="0.25"
        strokeWidth="2"
      />
      <path
        d="M9.94939 2.69062C11.8881 2.6772 13.7527 3.43447 15.133 4.79584C16.5134 6.1572 17.2964 8.01116 17.3098 9.94985"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="16.3108"
          y1="13.6897"
          x2="3.68922"
          y2="6.31124"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={c} />
          <stop offset="0.723223" stopColor={c} stopOpacity="0.01" />
          <stop offset="1" stopColor={c} stopOpacity="0" />
        </linearGradient>
      </defs>
    </SpinnerSvg>
  );
}

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerSvg = styled.svg<{ speed: number }>`
  animation: ${spinAnimation} ${({ speed }) => speed}s linear infinite;
`;
