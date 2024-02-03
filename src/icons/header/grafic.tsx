interface GraficProps {
  className?: string;
}

export function Grafic({ className = '' }: GraficProps) {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon" clipPath="url(#clip0_124_447)">
        <path
          id="Vector"
          d="M15.3541 3.47501V4.75001H17.9077L10.5103 12.2953L7.69781 9.42659L3.66211 13.543L4.54602 14.4445L7.69781 11.2297L10.5103 14.0984L18.7916 5.65159V8.25626H20.0416V3.47501H15.3541Z"
          fill="currentColor"
        />
        <path
          id="Vector_2"
          d="M2.54199 1.24374H1.29199V16.8625H20.042V15.5875H2.54199V1.24374Z"
          fill="currentColor"
        />
      </g>

      <defs>
        <clipPath id="clip0_124_447">
          <rect
            width="20"
            height="17"
            fill="white"
            transform="translate(0.666992 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
