import { type IconProps } from './type';
import { color } from '../styles';

export function CheckSmall({ color: c = color['grey-80'], size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1241 5.21967C12.417 5.51256 12.417 5.98744 12.1241 6.28033L7.62408 10.7803C7.33119 11.0732 6.85631 11.0732 6.56342 10.7803L4.31342 8.53033C4.02053 8.23744 4.02053 7.76256 4.31342 7.46967C4.60631 7.17678 5.08119 7.17678 5.37408 7.46967L7.09375 9.18934L11.0634 5.21967C11.3563 4.92678 11.8312 4.92678 12.1241 5.21967Z"
        fill={c}
      />
    </svg>
  );
}
