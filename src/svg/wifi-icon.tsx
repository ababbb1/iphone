interface Props {
  className?: string;
}

export default function WifiIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 17" fill="none" className={className}>
      <path
        d="M11.9946 0C7.63154 0 3.26844 1.80711 0.13664 4.74905C-0.0400258 4.9104 -0.0453793 5.18469 0.120579 5.36218L1.54996 6.86273C1.71592 7.04021 1.9943 7.04559 2.17097 6.87886C3.41834 5.71715 4.84237 4.79208 6.4163 4.13592C8.18295 3.39371 10.062 3.02261 12 3.02261C13.938 3.02261 15.817 3.39909 17.5837 4.13592C19.1576 4.79745 20.5817 5.71715 21.829 6.87886C22.0057 7.04559 22.2841 7.04021 22.45 6.86273L23.8794 5.36218C24.0454 5.19007 24.04 4.91578 23.8634 4.74905C20.7209 1.80711 16.3577 0 11.9946 0Z"
        fill="currentColor"
      />
      <path
        d="M4.13372 9.56104L5.71041 11.0811C5.88131 11.2422 6.15144 11.2529 6.32786 11.0972C7.88801 9.74902 9.8892 9.00781 12.0006 9.00781C14.1121 9.00781 16.1133 9.74365 17.6734 11.0972C17.8498 11.2529 18.12 11.2422 18.2909 11.0811L19.8676 9.56104C20.0495 9.38379 20.044 9.09912 19.851 8.93262C17.7837 7.11182 15.0217 6 11.9951 6C8.96854 6 6.20657 7.11182 4.13923 8.93262C3.95731 9.09912 3.95179 9.38379 4.13372 9.56104V9.56104ZM12.0062 12.0693C10.7161 12.0693 9.5474 12.5957 8.73149 13.439C8.5661 13.6108 8.57161 13.874 8.74251 14.0405L11.6864 16.8711C11.8628 17.043 12.1495 17.043 12.3259 16.8711L15.2698 14.0405C15.4407 13.874 15.4462 13.6108 15.2808 13.439C14.4649 12.6011 13.2962 12.0693 12.0062 12.0693V12.0693Z"
        fill="currentColor"
      />
    </svg>
  );
}
