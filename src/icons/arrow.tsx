interface ArrowProps {
  className?: string;
}

export function Arrow({ className = '' }: ArrowProps) {
  return (
    <svg
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Vector"
            d="M0.5 9.99994C0.5 9.6415 0.644057 9.2831 0.931564 9.00982L9.98337 0.410282C10.5592 -0.136761 11.4927 -0.136761 12.0683 0.410282C12.6439 0.957104 12.6439 1.84386 12.0683 2.39095L4.05878 9.99994L12.068 17.609C12.6436 18.156 12.6436 19.0427 12.068 19.5895C11.4925 20.1368 10.5589 20.1368 9.98309 19.5895L0.931284 10.99C0.64373 10.7166 0.5 10.3582 0.5 9.99994Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
}
