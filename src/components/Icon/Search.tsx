import { type IconProps } from './type';
import { color } from '../styles';

export function Search({ color: c = color['grey-80'], size = 20 }: IconProps) {
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
        d="M12.4164 13.3833C11.4933 14.0841 10.3421 14.5 9.09375 14.5C6.05618 14.5 3.59375 12.0376 3.59375 9C3.59375 5.96243 6.05618 3.5 9.09375 3.5C12.1313 3.5 14.5938 5.96243 14.5938 9C14.5938 10.2484 14.1779 11.3996 13.4771 12.3226L16.3741 15.2197C16.667 15.5126 16.667 15.9874 16.3741 16.2803C16.0812 16.5732 15.6063 16.5732 15.3134 16.2803L12.4164 13.3833ZM13.0938 9C13.0938 11.2091 11.3029 13 9.09375 13C6.88461 13 5.09375 11.2091 5.09375 9C5.09375 6.79086 6.88461 5 9.09375 5C11.3029 5 13.0938 6.79086 13.0938 9Z"
        fill={c}
      />
    </svg>
  );
}
