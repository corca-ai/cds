import { type IconProps } from './type';
import { color } from '../styles';

export function CheckLarge({ color: c = color['grey-80'], size = 20 }: IconProps) {
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
        d="M15.8741 5.96967C16.167 6.26256 16.167 6.73744 15.8741 7.03033L9.37408 13.5303C9.08119 13.8232 8.60631 13.8232 8.31342 13.5303L5.06342 10.2803C4.77053 9.98744 4.77053 9.51256 5.06342 9.21967C5.35631 8.92678 5.83119 8.92678 6.12408 9.21967L8.84375 11.9393L14.8134 5.96967C15.1063 5.67678 15.5812 5.67678 15.8741 5.96967Z"
        fill={c}
      />
    </svg>
  );
}
