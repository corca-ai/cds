import { type IconProps } from './type';
import { color } from '../styles';

export function CurrencyWon({ color: c = color['grey-80'], size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66667 5L7.36273 14.9998L10 6.67017L12.5714 15L15.3333 5M16 8.34033H4M16 11.25H4"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
