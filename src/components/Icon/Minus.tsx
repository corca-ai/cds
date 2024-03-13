import { type IconProps } from './type';
import { color } from '../styles';

export function Minus({ color: c = color['grey-80'], size = 20 }: IconProps) {
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
        d="M6.09375 10C6.09375 9.58579 6.42954 9.25 6.84375 9.25H13.3438C13.758 9.25 14.0938 9.58579 14.0938 10C14.0938 10.4142 13.758 10.75 13.3438 10.75H6.84375C6.42954 10.75 6.09375 10.4142 6.09375 10Z"
        fill={c}
      />
    </svg>
  );
}
