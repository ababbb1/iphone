interface Props {
  className?: string;
}

export default function LockIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 26 21" fill="none" className={className}>
      <rect width="26" height="21" rx="3" fill="currentColor" />
    </svg>
  );
}
