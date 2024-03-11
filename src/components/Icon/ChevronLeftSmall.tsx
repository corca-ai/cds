import { type IconProps } from './type';
import { color } from '../styles';

export function ChevronLeftSmall({ color: c = color['grey-80'], size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8741 5.46967C12.167 5.76256 12.167 6.23744 11.8741 6.53033L8.40441 10L11.8741 13.4697C12.167 13.7626 12.167 14.2374 11.8741 14.5303C11.5812 14.8232 11.1063 14.8232 10.8134 14.5303L6.81342 10.5303C6.52053 10.2374 6.52053 9.76256 6.81342 9.46967L10.8134 5.46967C11.1063 5.17678 11.5812 5.17678 11.8741 5.46967Z"
        fill={c}
      />
    </svg>
  );
}
