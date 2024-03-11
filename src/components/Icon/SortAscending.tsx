import { type IconProps } from './type';
import { color } from '../styles';

export function SortAscending({ color: c = color['grey-80'], size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.09375 7.5L6.65739 5M6.65739 5L9.22102 7.5M6.65739 5V15"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0938 12.5L13.5301 15M13.5301 15L10.9665 12.5M13.5301 15L13.5301 5"
        stroke={color['grey-30']}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
