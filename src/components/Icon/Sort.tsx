import { type IconProps } from './type';
import { color } from '../styles';

export function Sort({ color: c = color['grey-30'], size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.09375 7.5L6.56739 5M6.56739 5L9.04103 7.5M6.56739 5V15"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0938 12.5L13.6201 15M13.6201 15L11.1465 12.5M13.6201 15L13.6201 5"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
