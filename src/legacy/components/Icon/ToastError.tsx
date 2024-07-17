import { type IconProps } from './type';

export function ToastError({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="18" rx="9" fill="#B10E1C" />
      <path d="M9 5.25V9.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="12.75" r="0.75" fill="white" />
    </svg>
  );
}
