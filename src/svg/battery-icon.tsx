interface Props {
  className?: string;
}

export default function BatteryIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 29 29" className={className}>
      <path
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        d="M4.25 9h17a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-17a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
      />
      <path d="M4.75 10.5h13v8h-13a1 1 0 01-1-1v-6a1 1 0 011-1zM24.75 12.05v4.899a2.5 2.5 0 000-4.899z" />
      <path
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        d="M4.25 9h17a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-17a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
      />
      <path d="M4.75 10.5h13v8h-13a1 1 0 01-1-1v-6a1 1 0 011-1zM24.75 12.05v4.899a2.5 2.5 0 000-4.899z" />
    </svg>
  );
}
