import { type IconProps } from './type';
import { color } from '../styles';

export function ChevronRightSmall({ color: c = color['grey-80'], size = 20 }: IconProps) {
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
        d="M7.81342 14.5303C7.52053 14.2374 7.52053 13.7626 7.81342 13.4697L11.2831 10L7.81342 6.53033C7.52053 6.23744 7.52053 5.76256 7.81342 5.46967C8.10631 5.17678 8.58119 5.17678 8.87408 5.46967L12.8741 9.46967C13.167 9.76256 13.167 10.2374 12.8741 10.5303L8.87408 14.5303C8.58119 14.8232 8.10631 14.8232 7.81342 14.5303Z"
        fill={c}
      />
    </svg>
  );
}
