interface Props {
  className?: string;
}

export default function BatteryIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 30 14" fill="none" className={className}>
      <path
        d="M23.75 0H3C1.35 0 0 1.35 0 3V11C0 12.65 1.35 14 3 14H23.75C25.4 14 26.75 12.65 26.75 11V3C26.75 1.35 25.4 0 23.75 0ZM25 11C25 11.6875 24.4375 12.25 23.75 12.25H3C2.3125 12.25 1.75 11.6875 1.75 11V3C1.75 2.3125 2.3125 1.75 3 1.75H23.75C24.4375 1.75 25 2.3125 25 3V11ZM28 3.7875V10.2125C29 10.2125 30 8.48125 30 7C30 5.51875 29 3.7875 28 3.7875V3.7875Z"
        fill="#999"
        style={{ opacity: ".6" }}
      />
      <path
        d="M23 3H3.75C3.3375 3 3 3.3375 3 3.75V10.25C3 10.6625 3.3375 11 3.75 11H23C23.4125 11 23.75 10.6625 23.75 10.25V3.75C23.75 3.3375 23.4125 3 23 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
