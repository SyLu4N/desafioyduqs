interface ArrowNotificationProps {
  className?: string;
}

export function ArrowNotificaiton({ className = '' }: ArrowNotificationProps) {
  return (
    <svg
      width="28"
      height="13"
      viewBox="0 0 28 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14 0L0 13H28L14 0Z" fill="currentColor" />
    </svg>
  );
}
