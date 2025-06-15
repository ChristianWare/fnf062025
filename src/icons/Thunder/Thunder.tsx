// src/icons/Thunder/Thunder.tsx
import { SVGProps } from "react";

export default function Thunder(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 27.793 27.793'
      width='1em'
      height='1em'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlSpace='preserve'
      {...props} // lets callers override size, className, etc.
    >
      <polygon
        points='20.972 0 5.076 15.803 10.972 15.803 6.44 27.793 22.716 11.989 16.819 11.989'
        fill='currentColor'
        stroke='black'
        strokeWidth={0.5}
      />
    </svg>
  );
}
