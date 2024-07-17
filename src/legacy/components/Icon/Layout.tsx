import { type IconProps } from './type';
import { color } from '../styles';

export function Layout({ color: c = color['grey-80'], size = 20 }: IconProps) {
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
        d="M3.09375 6.75C3.09375 4.67893 4.77268 3 6.84375 3H12.3438C14.4148 3 16.0938 4.67893 16.0938 6.75V12.25C16.0938 14.3211 14.4148 16 12.3438 16H6.84375C4.77268 16 3.09375 14.3211 3.09375 12.25V6.75ZM6.84375 4.5C5.60111 4.5 4.59375 5.50736 4.59375 6.75V7.25H14.5938V6.75C14.5938 5.50736 13.5864 4.5 12.3438 4.5H6.84375ZM10.5938 8.75H4.59375V12.25C4.59375 13.4926 5.60111 14.5 6.84375 14.5H10.5938V8.75ZM12.0938 14.5V8.75H14.5938V12.25C14.5938 13.4926 13.5864 14.5 12.3438 14.5H12.0938Z"
        fill={c}
      />
    </svg>
  );
}
