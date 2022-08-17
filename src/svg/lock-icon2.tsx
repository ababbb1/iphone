interface Props {
  className?: string;
}

export default function LockIcon2({ className }: Props) {
  return (
    <svg viewBox="0 0 20 18" fill="none" className={className}>
      <path
        d="M1.5 18V11L1.7579 8.93681C1.91711 7.66311 2.37069 6.44397 3.08271 5.37593L3.20442 5.19338C3.72961 4.40559 4.40559 3.72961 5.19338 3.20442L5.3359 3.1094C6.42098 2.38602 7.6959 2 9 2V2H10H11V2C12.3041 2 13.579 2.38602 14.6641 3.1094L14.8066 3.20442C15.5944 3.72961 16.2704 4.40559 16.7956 5.19338L16.9173 5.37593C17.6293 6.44397 18.0829 7.66311 18.2421 8.93681L18.5 11V18"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
