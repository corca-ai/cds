import { type IconProps } from './type';
import { color } from '../styles';

export function Upload({ color: c = color['grey-80'], size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5938 6.26C16.5938 6.67421 16.258 7.01 15.8438 7.01C15.4295 7.01 15.0938 6.67421 15.0938 6.26V5.75C15.0938 5.33579 14.758 5 14.3438 5L5.84375 5C5.42954 5 5.09375 5.33579 5.09375 5.75V6.26C5.09375 6.67421 4.75796 7.01 4.34375 7.01C3.92954 7.01 3.59375 6.67421 3.59375 6.26V5.75C3.59375 4.50736 4.60111 3.5 5.84375 3.5H14.3438C15.5864 3.5 16.5938 4.50736 16.5938 5.75V6.26Z"
        fill={c}
      />
      <path
        d="M10.8438 16.01C10.8438 16.4242 10.508 16.76 10.0938 16.76C9.67954 16.76 9.34375 16.4242 9.34375 16.01V9.32066L7.62408 11.0403C7.33119 11.3332 6.85631 11.3332 6.56342 11.0403C6.27053 10.7474 6.27053 10.2726 6.56342 9.97967L9.56342 6.97967C9.85631 6.68678 10.3312 6.68678 10.6241 6.97967L13.6241 9.97967C13.917 10.2726 13.917 10.7474 13.6241 11.0403C13.3312 11.3332 12.8563 11.3332 12.5634 11.0403L10.8438 9.32066L10.8438 16.01Z"
        fill={c}
      />
    </svg>
  );
}