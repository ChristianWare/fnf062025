// src/icons/Close/Close.tsx
import { SVGProps } from "react";

export default function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-x-icon' /* optional: keep or drop */
      xmlns='http://www.w3.org/2000/svg'
      {...props} /* lets callers add className, onClick, etc. */
    >
      <path d='M18 6 6 18' />
      <path d='M6 6 18 18' />
    </svg>
  );
}
