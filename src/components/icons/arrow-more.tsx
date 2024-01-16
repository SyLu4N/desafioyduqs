interface ArrowMoreProps {
  className?: string;
}

export function ArrowMore({ className = '' }: ArrowMoreProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="akar-icons:arrow-up">
        <path
          id="Vector"
          d="M1.52686 10.0001L18.4731 10.0001M18.4731 10.0001L11.0591 2.58613M18.4731 10.0001L11.0591 17.4141"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="currentColor"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
